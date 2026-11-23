import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const recipes = JSON.parse(fs.readFileSync(path.join(root, 'src/data/recipes.json'), 'utf8'));
const ids = new Set();
const mandatory = ['id','name','subtitle','category','yieldBase','yields','groups',
 'steps','tips','sources','tags','countryCode','countryName','countryFlag',
 'nutrition','shoppingTips'];
assert.ok(Array.isArray(recipes) && recipes.length >= 100, 'Minst 100 recept krävs');
for (const [index, recipe] of recipes.entries()) {
  for (const key of mandatory) assert.ok(key in recipe, `Recept ${index + 1} saknar ${key}`);
  assert.ok(typeof recipe.id === 'string' && recipe.id.length > 0);
  assert.ok(!ids.has(recipe.id), `Dubblett av recept-id: ${recipe.id}`);
  ids.add(recipe.id);
  assert.ok(Array.isArray(recipe.yields) && recipe.yields.length === 6, `Ogiltiga portionsmått: ${recipe.id}`);
  assert.ok(recipe.groups.length > 0 && recipe.steps.length > 0, `Recept utan ingredienser eller steg: ${recipe.id}`);
  for (const group of recipe.groups) {
    assert.ok(typeof group.title === 'string');
    for (const item of group.items) {
      assert.equal(typeof item.name, 'string', `${recipe.id}: ingrediens utan namn`);
      assert.ok(typeof item.qty === 'number' || item.qty === null, `${recipe.id}: ogiltig mängd`);
      assert.equal(typeof item.unit, 'string');
      assert.equal(typeof item.fixed, 'string');
      assert.equal(typeof item.extra, 'string');
    }
  }
  for (const source of recipe.sources) {
    assert.ok(Array.isArray(source) && source.length === 2);
    assert.ok(/^https?:\/\//.test(source[1]), `${recipe.id}: felaktig käll-URL ${source[1]}`);
  }
  const n = recipe.nutrition;
  assert.ok(n && [n.kcal,n.protein,n.carbs,n.fat,n.servings].every(Number.isFinite), `${recipe.id}: saknar näringsvärden`);
}
// Skydda de ursprungliga recepten mot oavsiktliga ändringar.
// Två recept har medvetet vidareutvecklats efter HTML-säkerhetskopian:
// kladdkaka och fisk med äggsås. Övriga originalrecept ska fortfarande
// vara semantiskt identiska med säkerhetskopian.
const oldHtml = fs.readFileSync(path.join(root,'original-Receptarkivet-100.html'), 'utf8');
const match = oldHtml.match(/<script type="application\/json" id="recipes">([\s\S]*?)<\/script>/);
assert.ok(match, 'Säkerhetskopians receptdata saknas');
const baseline = JSON.parse(match[1]);
assert.equal(baseline.length, 100, 'Säkerhetskopian måste ha exakt 100 recept');
const deliberatelyUpdated = new Set(['kladdkaka', 'fisk-aggsas']);
// Dessa tre originalrecept har efter uttryckligt godkännande fått ENBART
// valfria tips och kompletterande källor. Ingredienser, steg, ordning,
// grundmetadata och alla ursprungliga tips/källor måste förbli identiska.
// OBS: detta är ett snävare skydd än att helt undanta recepten från testet.
const tipsOnlyExtended = new Set(['toast-skagen', 'kottbullar-mos', 'boeuf-bourguignon']);
for (const [index, historicalRecipe] of baseline.entries()) {
  const current = recipes[index];
  assert.equal(current.id, historicalRecipe.id,
    `Originalrecept ${index + 1} har bytt ID eller ordning`);
  if (tipsOnlyExtended.has(historicalRecipe.id)) {
    assert.deepEqual(current.tips.slice(0, historicalRecipe.tips.length), historicalRecipe.tips,
      `Originalrecept ${index + 1} har förlorat eller ändrat ursprungliga tips`);
    assert.deepEqual(current.sources.slice(0, historicalRecipe.sources.length), historicalRecipe.sources,
      `Originalrecept ${index + 1} har förlorat eller ändrat ursprungliga källor`);
    assert.ok(current.tips.length > historicalRecipe.tips.length,
      `Originalrecept ${index + 1} saknar godkända valfria tips`);
    assert.deepEqual({...current, tips: historicalRecipe.tips, sources: historicalRecipe.sources},
      historicalRecipe, `Originalrecept ${index + 1} har ändrats utöver tips och källor`);
  } else if (!deliberatelyUpdated.has(historicalRecipe.id)) {
    assert.deepEqual(current, historicalRecipe,
      `Originalrecept ${index + 1} (${historicalRecipe.id}) har ändrats oväntat`);
  }
}
// Fristående såser och röror kan länka till relevanta maträtter – alltid giltiga recept-ID:n.
for (const recipe of recipes) {
  if (recipe.pairings === undefined) continue;
  assert.ok(Array.isArray(recipe.pairings), `${recipe.id}: pairings måste vara en lista`);
  assert.equal(new Set(recipe.pairings).size, recipe.pairings.length, `${recipe.id}: dubbla parningar`);
  for (const id of recipe.pairings) {
    assert.ok(ids.has(id), `${recipe.id}: okänt recept-ID i pairings: ${id}`);
    assert.notEqual(id, recipe.id, `${recipe.id}: självkoppling`);
  }
}
console.log(`✓ ${recipes.length} unika recept, kompletta ingredienser, steg, källor och näringsvärden`);
console.log('✓ 95 historiska recept matchar säkerhetskopian helt; 2 äldre godkända ändringar och 3 snävt skyddade tipsutökningar');

const countryCodes = new Set(recipes.map(r => r.countryCode));
for (const code of countryCodes) {
  assert.match(code, /^[A-Z]{2}$/, `Ogiltig landskod: ${code}`);
  const flagFile = path.join(root, 'public/flags', `${code.toLowerCase()}.svg`);
  assert.ok(fs.existsSync(flagFile), `Flaggfil saknas: ${flagFile}`);
  assert.match(fs.readFileSync(flagFile, 'utf8'), /<svg[^>]*viewBox=/, `Ogiltig flagg-SVG: ${code}`);
}
console.log(`✓ ${countryCodes.size} SVG-flaggor finns lokalt för samtliga länder`);
