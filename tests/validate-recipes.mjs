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
  assert.ok(recipe.yields.every(n => Number.isFinite(n) && n >= 0),
    `Ogiltiga numeriska portionsmått: ${recipe.id}`);
  assert.ok(typeof recipe.name === 'string' && recipe.name.trim().length > 0,
    `Recept utan namn: ${recipe.id}`);
  assert.ok(Array.isArray(recipe.sources) && recipe.sources.length > 0,
    `Recept utan källor: ${recipe.id}`);
  assert.ok(Array.isArray(recipe.tips) && Array.isArray(recipe.tags)
    && Array.isArray(recipe.shoppingTips),
    `Felaktiga listfält: ${recipe.id}`);
  if (recipe.equipment !== undefined) {
    assert.ok(Array.isArray(recipe.equipment), `${recipe.id}: equipment måste vara en lista`);
    assert.ok(recipe.equipment.every(value => typeof value === 'string' && value.trim().length > 0),
      `${recipe.id}: utrustning får inte innehålla tomma namn`);
    assert.equal(new Set(recipe.equipment.map(value => value.trim().toLocaleLowerCase('sv-SE'))).size,
      recipe.equipment.length, `${recipe.id}: dubbletter i utrustningslistan`);
  }
  for (const step of recipe.steps) {
    assert.ok(typeof step.title === 'string' && step.title.trim().length > 0
      && typeof step.body === 'string' && step.body.trim().length > 0,
      `Ofullständigt tillagningssteg: ${recipe.id}`);
  }
  for (const group of recipe.groups) {
    assert.ok(typeof group.title === 'string' && group.title.trim().length > 0
      && Array.isArray(group.items) && group.items.length > 0,
      `Tom eller felaktig ingrediensgrupp: ${recipe.id}`);
    for (const item of group.items) {
      assert.ok(typeof item.name === 'string' && item.name.trim().length > 0, `${recipe.id}: ingrediens utan namn`);
      assert.ok(typeof item.qty === 'number' || item.qty === null, `${recipe.id}: ogiltig mängd`);
      assert.equal(typeof item.unit, 'string');
      assert.equal(typeof item.fixed, 'string');
      assert.equal(typeof item.extra, 'string');
      assert.ok(item.qty !== null || item.fixed.trim().length > 0,
        `${recipe.id}: ingrediens utan numerisk mängd eller fast serveringsmängd`);
    }
  }
  for (const source of recipe.sources) {
    assert.ok(Array.isArray(source) && source.length === 2);
    assert.ok(/^https?:\/\//.test(source[1]), `${recipe.id}: felaktig käll-URL ${source[1]}`);
  }
  const n = recipe.nutrition;
  assert.ok(n && [n.kcal,n.protein,n.carbs,n.fat,n.servings].every(Number.isFinite), `${recipe.id}: saknar näringsvärden`);
}
// Historiska recept är en referens, inte ett innehållslås.
// Alla recept – även de första 100 – får förbättras efter redaktionell
// research, kvalitetsbedömning och godkännande. Kvalitetskontrollerna ovan
// gäller alltid. Stabilt recept-ID är däremot viktigt för favoriter, länkar
// och sparade listor. Kontrollera därför att de historiska ID:na finns kvar.
// Recept får omarbetas och även byta ordning utan att testet stoppar det.
const oldHtml = fs.readFileSync(path.join(root,'original-Receptarkivet-100.html'), 'utf8');
const match = oldHtml.match(/<script type="application\/json" id="recipes">([\s\S]*?)<\/script>/);
assert.ok(match, 'Säkerhetskopians receptdata saknas');
const baseline = JSON.parse(match[1]);
assert.equal(baseline.length, 100, 'Säkerhetskopian måste ha exakt 100 recept');
for (const historicalRecipe of baseline) {
  assert.ok(ids.has(historicalRecipe.id),
    `Historiskt recept-ID saknas: ${historicalRecipe.id} – bevara ID för sparade favoriter och länkar`);
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
const catalog = JSON.parse(fs.readFileSync(path.join(root,'docs/expert/KATALOG.json'),'utf8'));
const register = JSON.parse(fs.readFileSync(path.join(root,'docs/expert/GRANSKNINGSREGISTER.json'),'utf8'));
assert.equal(catalog.count,recipes.length,'Expertkatalogen har fel antal');
assert.equal(catalog.entries.length,recipes.length,'Expertkatalogen är ofullständig');
assert.deepEqual(new Set(catalog.entries.map(e=>e.id)),ids,'Expertkatalogen innehåller fel ID:n');
assert.equal(register.recipe_count_current,recipes.length,'Expertregistret har fel antal');
const queueIds = (register.suggested_queue || []).map(r=>r.id);
assert.equal(new Set(queueIds).size,queueIds.length,'Dubbletter i expertkön');
assert.ok(queueIds.every(id=>ids.has(id)),'Okända recept-ID:n i expertkön');
console.log('✓ Expertkatalog och granskningsregister synkroniserade');
console.log('✓ 100 historiska recept-ID:n bevarade; innehåll, proportioner och steg får kvalitetsförbättras');

const countryCodes = new Set(recipes.map(r => r.countryCode));
for (const code of countryCodes) {
  assert.match(code, /^[A-Z]{2}$/, `Ogiltig landskod: ${code}`);
  const flagFile = path.join(root, 'public/flags', `${code.toLowerCase()}.svg`);
  assert.ok(fs.existsSync(flagFile), `Flaggfil saknas: ${flagFile}`);
  assert.match(fs.readFileSync(flagFile, 'utf8'), /<svg[^>]*viewBox=/, `Ogiltig flagg-SVG: ${code}`);
}
console.log(`✓ ${countryCodes.size} SVG-flaggor finns lokalt för samtliga länder`);
