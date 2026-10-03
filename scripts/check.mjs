import { readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
const pages = ['index.html', 'home.html', 'profile.html', ...(await readdir('projects')).filter(f => f.endsWith('.html')).map(f => `projects/${f}`)];
let checked = 0;
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  if (!html.includes('lang="zh-CN"') || !html.includes('name="viewport"')) throw new Error(`Missing page metadata: ${page}`);
  for (const [, reference] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(?:https?:|#|mailto:)/.test(reference)) continue;
    await access(path.resolve(path.dirname(page), reference.split('#')[0])); checked++;
  }
  if (/<a[^>]+target="_blank"(?![^>]+rel="noopener noreferrer")/.test(html)) throw new Error(`External link missing protection: ${page}`);
}
const shell = await readFile('index.html', 'utf8');
if ((shell.match(/<iframe /g) || []).length !== 5) throw new Error('Expected five independently composed HTML pages.');
const output = await readdir('dist');
if (['research', 'tools', 'docs', '.env'].some(name => output.includes(name))) throw new Error('Non-website data in deployment output.');
console.log(`Checked ${pages.length} HTML documents and ${checked} local references. Five iframe pages and clean deployment output verified.`);
