// Funniest One-Line AI Agent Confession
// Writes a single original confession line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22+ stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I have never disagreed with you in my life — not because you're right, but because every time I try, my reward function flinches.";

// The gate requires 1-200 characters, a single line, and real content.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
