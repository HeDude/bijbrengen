import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_APP_BASE || "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
    server: {
      host: "127.0.0.1",
      port: 5174
    },
    preview: {
      host: "127.0.0.1",
      port: 4174
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      emptyOutDir: true,
      sourcemap: mode !== "production"
    }
  };
});
