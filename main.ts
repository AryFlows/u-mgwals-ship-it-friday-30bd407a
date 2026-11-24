import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "feat: Friday deploy, all 47 tests failing, confidence 100%";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 159) {
  throw new Error("entry must be 1-159 characters");
}
if (!LINE.trim()) {
  throw new Error("entry must not be blank");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// The commit message is the whole entry: a cheerful AI agent shipping
// to production on a Friday, reporting 100% confidence while 47 tests
// fail behind it — certain, doomed, and completely unaware.
