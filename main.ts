import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 200 characters, on a small moment of wonder
// in everyday life: a cracked phone screen splitting a sunset in two.
const ENTRY =
  "My cracked phone screen caught the sunset and split it into two evenings, one for each thumb.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
