#!/usr/bin/env node
// Manuell, kostnadsfri hjälpfunktion. Körs inte automatiskt av GitHub Actions.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const recipes = readJson('src/data/recipes.json');
const catalog = {
  schema_version: 1,
  source: 'src/data/recipes.json',
  count: recipes.length,
  entries: recipes.map(r => ({
    id: r.id,
    name: r.name,
    category: r.category,
    sources: r.sources?.length ?? 0,
    steps: r.steps?.length ?? 0
  }))
};
const target = path.join(root, 'docs/expert/KATALOG.json');
const content = JSON.stringify(catalog, null, 2) + '\n';

const command = process.argv[2] ?? '--help';
if (command === '--write') {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
  console.log('Uppdaterade KATALOG.json med ' + catalog.count + ' recept.');
} else if (command === '--check') {
  const existing = readJson('docs/expert/KATALOG.json');
  if (JSON.stringify(existing) !== JSON.stringify(catalog)) {
    console.error('KATALOG.json är inaktuell. Kör: node scripts/expert-catalog.mjs --write');
    process.exitCode = 1;
  } else {
    const registry = readJson('docs/expert/GRANSKNINGSREGISTER.json');
    const ids = new Set(recipes.map(r => r.id));
    const candidates = [
      ...(registry.suggested_queue ?? []),
      ...(registry.review_history ?? []),
      ...(registry.open_findings ?? []),
      ...(registry.cook_tests ?? [])
    ];
    const unknown = candidates.filter(row => !ids.has(row.id));
    if (unknown.length > 0) {
      console.error('Okända recept-ID i granskningsregistret: ' + unknown.map(x => x.id).join(', '));
      process.exitCode = 1;
    } else {
      console.log('OK: katalog och granskningsregister matchar ' + recipes.length + ' aktuella recept.');
    }
  }
} else if (command === '--queue') {
  const registry = readJson('docs/expert/GRANSKNINGSREGISTER.json');
  const ids = new Set(recipes.map(r => r.id));
  const reviewed = new Set((registry.review_history ?? []).map(r => r.id));
  const queue = (registry.suggested_queue ?? [])
    .filter(r => ids.has(r.id) && !reviewed.has(r.id))
    .sort((a,b) => Number(a.priority?.slice(1) ?? 9) - Number(b.priority?.slice(1) ?? 9));
  console.log('Förslag till granskningskö (indikationer, inga fastställda brister):');
  for (const row of queue.slice(0, 10)) {
    const recipe = recipes.find(r => r.id === row.id);
    console.log(row.priority + ' ' + recipe.name + ' [' + row.id + '] – ' + row.reason);
  }
  console.log('Recept utan registrerad expertgranskning: ' + recipes.filter(r => !reviewed.has(r.id)).length + '/' + recipes.length);
} else {
  console.log('Använd: node scripts/expert-catalog.mjs --write | --check | --queue');
}