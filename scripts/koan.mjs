#!/usr/bin/env node
// Runs one dojo koan. Paths are relative to content/, so the command in a
// koan's header works verbatim from the repo root:
//
//   pnpm koan 07-recursive-components/01-component-vs-instance.tsx
//   pnpm koan 07-recursive-components/solutions/01-component-vs-instance.tsx
//
// .cjs koans need nothing but node, and still run standalone:  node <file>.cjs
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const arg = process.argv[2];

if (!arg) {
  console.error("usage: pnpm koan <module>/<koan>.(tsx|cjs)");
  process.exit(2);
}

const candidates = [join(root, "content", arg), resolve(root, arg), resolve(arg)];
const file = candidates.find((p) => existsSync(p));

if (!file) {
  console.error(`no such koan: ${arg}`);
  console.error(`looked in ${join(root, "content")}`);
  process.exit(2);
}

const run = file.endsWith(".tsx")
  ? spawnSync("npx", ["vitest", "run", file], { cwd: root, stdio: "inherit" })
  : spawnSync("node", [file], { cwd: root, stdio: "inherit" });

process.exit(run.status ?? 1);
