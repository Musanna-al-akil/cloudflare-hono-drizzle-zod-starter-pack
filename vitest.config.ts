import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "edge-runtime",
    include: ["**/*.test.ts"],
    coverage: {
      exclude: ["node_modules/**"],
    },
  },
  plugins: [tsconfigPaths()],
});
