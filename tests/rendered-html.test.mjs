import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/index.html", import.meta.url);

test("exports the Formwork Designs homepage", async () => {
  const html = await readFile(output, "utf8");

  assert.match(html, /<title>Formwork Designs \| Drafting &amp; Formwork Design<\/title>/i);
  assert.match(html, /Practical design/);
  assert.match(html, /Formwork Design/);
  assert.match(html, /Drafting/);
  assert.match(html, /discuss your project/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});
