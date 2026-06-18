import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

for (const filePath of await findHtmlFiles(distDir)) {
  const html = await readFile(filePath, "utf8");
  const nextHtml = html.replaceAll('href="/_astro/', 'href="_astro/').replaceAll('src="/_astro/', 'src="_astro/');

  if (nextHtml !== html) {
    await writeFile(filePath, nextHtml);
  }
}
