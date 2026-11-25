// Everyday Wonder, Two Days to Find the Line.
//
// One sentence about a small everyday moment turning strange and new:
// a cracked phone screen catches the sunset and splits it in two.
// Deterministic: the same fixed sentence is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The moment of wonder — one evening for each thumb, split by the crack.
const WONDER = "My cracked phone screen caught the sunset and split it into two evenings, one for each thumb.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The competition gate: a single sentence of at most 200 characters.
if (WONDER.length < 1 || WONDER.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${WONDER.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WONDER + "\n", "utf8");

console.log(`Wrote ${WONDER.length} characters to ${OUT_FILE}`);
