import { useMemo, useState } from "react";
import { FREELL_API_CONTRACT, sendLearningMetrics } from "./api/freellClient.js";

const metricLabels = ["Time", "Activity", "Variation", "Resilience", "Success"];
const initialMetrics = {
  Time: 60,
  Activity: 70,
  Variation: 45,
  Resilience: 65,
  Success: 75
};

export default function App() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const contractPath = useMemo(
    () => FREELL_API_CONTRACT.endpoints.sendLearningMetrics.path,
    []
  );

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setError("");
    setResponse(null);

    try {
      const result = await sendLearningMetrics({ metrics });
      setResponse(result);
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setIsSending(false);
    }
  }

  function updateMetric(key, value) {
    setMetrics((current) => ({
      ...current,
      [key]: Number(value)
    }));
  }

  return (
    <main className="min-h-screen px-5 py-8 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase text-leaf">Phile</p>
          <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Learning metrics bridge</h1>
          <p className="mt-4 leading-7 text-slate-700">
            Send a Freell metrics packet to the Python API and inspect the calculated score response.
          </p>
          <dl className="mt-6 rounded-md bg-mint p-4 text-sm">
            <dt className="font-semibold text-ink">Endpoint</dt>
            <dd className="mt-1 font-mono text-slate-700">{contractPath}</dd>
          </dl>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {metricLabels.map((key) => (
              <label className="block" key={key}>
                <span className="flex items-center justify-between text-sm font-medium text-slate-800">
                  {key}
                  <span className="font-mono text-rust">{metrics[key]}</span>
                </span>
                <input
                  className="mt-3 w-full accent-leaf"
                  min="0"
                  max="100"
                  type="range"
                  value={metrics[key]}
                  onChange={(event) => updateMetric(key, event.target.value)}
                />
              </label>
            ))}

            <button
              className="w-full rounded-md bg-leaf px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:bg-slate-400"
              disabled={isSending}
              type="submit"
            >
              {isSending ? "Sending..." : "Send metrics"}
            </button>
          </form>

          {error && (
            <pre className="mt-5 overflow-auto rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              {error}
            </pre>
          )}

          {response && (
            <pre className="mt-5 max-h-80 overflow-auto rounded-md bg-slate-950 p-4 text-sm text-slate-50">
              {JSON.stringify(response, null, 2)}
            </pre>
          )}
        </section>
      </div>
    </main>
  );
}
