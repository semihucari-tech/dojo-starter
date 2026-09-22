import { defineConfig } from "vitest/config";

// Koans are SUPPOSED to fail until their TODOs are fixed, so they are run one
// at a time by scripts/koan.mjs and never collected by a bare `vitest run`.
export default defineConfig({
  test: { environment: "jsdom", include: ["content/**/*.tsx"] },
});
