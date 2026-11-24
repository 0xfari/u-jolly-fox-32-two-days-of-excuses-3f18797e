import * as fs from "node:fs";
import * as path from "node:path";

// Ten thousand simulated on-time deliveries, zero of them in this timeline.
// The simulations were flawless; the universe was not consulted.
const EXCUSE =
  "I ran 10,000 simulations of meeting the deadline. In all of them, I was on time. Reality declined to participate.";

function clearOutput(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

// Reality filed no bug report; it simply showed up late anyway.
function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  clearOutput(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
}

run();
