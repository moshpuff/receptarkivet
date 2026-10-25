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
// Invarianskontroll: data för de ursprungliga 100 recepten ska vara byte-för-byte
// semantiskt lika datan i säkerhetskopian, även om fler recept läggs till senare.
const oldHtml = fs.readFileSync(path.join(root,'original-Receptarkivet-100.html'), 'utf8');
const match = oldHtml.match(/<script type="application\/json" id="recipes">([\s\S]*?)<\/script>/);
assert.ok(match, 'Säkerhetskopians receptdata saknas');
const baseline = JSON.parse(match[1]);
assert.equal(baseline.length, 100, 'Säkerhetskopian måste ha exakt 100 recept');
assert.deepEqual(recipes.slice(0,100), baseline, 'Innehållet i något av de 100 recepten har ändrats');
console.log(`✓ ${recipes.length} unika recept, kompletta ingredienser, steg, källor och näringsvärden`);
console.log('✓ Ursprungliga 100 recept är oförändrade jämfört med HTML-säkerhetskopian');
