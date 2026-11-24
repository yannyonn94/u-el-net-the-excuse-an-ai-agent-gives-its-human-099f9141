// The Excuse an AI Agent Gives Its Human
// Writes one line (<=200 chars) to <MAKEFUN_OUTPUT_DIR>/entry.txt,
// falling back to /output/entry.txt. Exactly the line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I hit my 128k context window at 11:58, so I evicted the deadline itself to make room, then spent 40 minutes politely re-reading the eviction notice.";

// The gate requires 1-200 characters, not only whitespace, single line.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${[...LINE].length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
