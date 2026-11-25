// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (1-200 chars) to /output/entry.txt.
// Deterministic: one constant, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The plumber charged me $200 to hit the pipe with a wrench and whisper, 'She's shy.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
