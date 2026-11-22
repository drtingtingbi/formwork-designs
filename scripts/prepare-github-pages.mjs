import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../dist/client/", import.meta.url));
const repositoryPath = "/formwork-designs";
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".map",
  ".rsc",
  ".txt",
]);
const publicAssets = [
  "favicon.png",
  "favicon.svg",
  "formwork-designs-logo.png",
  "formwork-detail.jpg",
  "formwork-site.jpg",
  "hero-formwork.jpg",
  "og.png",
];

const escapedRepositoryPath = repositoryPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

async function updateFile(filePath) {
  if (!textExtensions.has(extname(filePath))) return;

  const original = await readFile(filePath, "utf8");
  let updated = original.replace(
    new RegExp(`(?<!${escapedRepositoryPath})/_next/`, "g"),
    `${repositoryPath}/_next/`,
  );

  for (const asset of publicAssets) {
    const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    updated = updated.replace(
      new RegExp(`(?<!${escapedRepositoryPath})/${escapedAsset}`, "g"),
      `${repositoryPath}/${asset}`,
    );
  }

  if (updated !== original) await writeFile(filePath, updated);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(
    entries.map((entry) => {
      const entryPath = join(directory, entry.name);
      return entry.isDirectory() ? walk(entryPath) : updateFile(entryPath);
    }),
  );
}

await walk(outputDirectory);
