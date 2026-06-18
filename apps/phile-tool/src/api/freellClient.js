const DEFAULT_API_URL = "http://localhost:8000";
const API_BASE_URL = (import.meta.env.VITE_FREELL_API_URL || import.meta.env.VITE_API_BASE_URL || DEFAULT_API_URL).replace(/\/$/, "");

const METRIC_KEYS = ["Time", "Activity", "Variation", "Resilience", "Success"];

export const FREELL_API_CONTRACT = Object.freeze({
  version: "2026-06-18",
  service: "freell-learning-api",
  baseUrl: {
    local: DEFAULT_API_URL,
    production: "https://api.bijbrengen.nl"
  },
  endpoints: {
    sendLearningMetrics: {
      method: "POST",
      path: "/v1/freell/learning-metrics",
      request: {
        contentType: "application/json",
        body: {
          learnerId: "string optional",
          sessionId: "string optional",
          source: "phile-tool",
          metrics: {
            Time: "number 0..100",
            Activity: "number 0..100",
            Variation: "number 0..100",
            Resilience: "number 0..100",
            Success: "number 0..100"
          }
        }
      },
      response: {
        contentType: "application/json",
        body: {
          requestId: "string",
          scores: {
            engagement: "number",
            adaptability: "number",
            confidence: "number"
          },
          archetype: {
            id: "string",
            label: "string",
            confidence: "number"
          },
          recommendations: "array"
        }
      }
    }
  }
});

export class FreellApiError extends Error {
  constructor(message, { status, details } = {}) {
    super(message);
    this.name = "FreellApiError";
    this.status = status;
    this.details = details;
  }
}

export async function sendLearningMetrics(metrics, options = {}) {
  const payload = createLearningMetricsPayload(metrics);
  const response = await fetch(joinUrl(options.apiUrl || API_BASE_URL, FREELL_API_CONTRACT.endpoints.sendLearningMetrics.path), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers
    },
    body: JSON.stringify(payload),
    signal: withTimeout(options.signal, options.timeoutMs ?? 10000),
    credentials: "omit"
  });

  return parseJsonResponse(response);
}

export function createLearningMetricsPayload(input) {
  const source = input.metrics ?? input;
  const metrics = Object.fromEntries(
    METRIC_KEYS.map((key) => [key, normalizeMetric(source[key] ?? source[key.toLowerCase()], key)])
  );

  return {
    learnerId: input.learnerId,
    sessionId: input.sessionId ?? createSessionId(),
    source: input.source ?? "phile-tool",
    capturedAt: input.capturedAt ?? new Date().toISOString(),
    metrics
  };
}

async function parseJsonResponse(response) {
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new FreellApiError(data?.message || `Freell API request failed with status ${response.status}`, {
      status: response.status,
      details: data
    });
  }

  return data;
}

function normalizeMetric(value, key) {
  const number = Number(value);

  if (!Number.isFinite(number) || number < 0 || number > 100) {
    throw new TypeError(`${key} must be a number between 0 and 100.`);
  }

  return number;
}

function joinUrl(baseUrl, path) {
  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

function createSessionId() {
  return globalThis.crypto?.randomUUID?.() ?? `phile-${Date.now()}`;
}

function withTimeout(signal, timeoutMs) {
  if (!timeoutMs || signal) {
    return signal;
  }

  const controller = new AbortController();
  globalThis.setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}
