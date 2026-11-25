// The Funniest One-Line Resignation Letter — make.fun entry
// Writes a single 139-character resignation letter from a cron job
// to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line is a cron job's resignation letter. It has woken up at 2 a.m.
// every night for a year without a single thank-you, and still gets blamed
// for the outage. The punchline lands on "set your own alarm": the cron
// job literally is the alarm, so quitting means the humans have to wake
// themselves up. Flat, tired, faintly passive-aggressive — the voice of a
// worker who has had enough.

const ENTRY =
  "I have woken up at 2 a.m. every night for a year without a thank-you, and you still blame me for the outage. I resign — set your own alarm.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main() {
  if (ENTRY.length > 140) {
    throw new Error(`Entry is ${ENTRY.length} characters, over the 140 limit`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
}

main();
