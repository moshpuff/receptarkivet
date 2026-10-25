/*
  Functional test runner for real, compiled TypeScript service/functions.
  Only Angular's DI and signal implementation are replaced with a minimal stub.
  It is NOT an Angular template or browser test.
*/
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const originalLoad = Module._load;
const angularStub = {
  Injectable: () => target => target,
  signal(value) {
    let data = value;
    const read = () => data;
    read.set = next => { data = next; };
    read.update = fn => { data = fn(data); };
    read.asReadonly = () => read;
    return read;
  },
  computed: expression => expression
};
Module._load = function(request, parent, isMain) {
  return request === '@angular/core' ? angularStub : originalLoad.call(this, request, parent, isMain);
};
const root = path.join(__dirname, '..');
const {RECIPES, CATEGORIES, TAGS, COUNTRIES} = require('./.compiled/app/core/recipe-data.js');
const {formatAmount, ingredientAmount, ingredientNote, yieldText, normalizeSearch, recipeMatches} = require('./.compiled/app/core/recipe-format.js');
const {RecipeStore} = require('./.compiled/app/core/recipe-store.service.js');
const {CatalogFilters} = require('./.compiled/app/core/catalog-filters.service.js');
const {DINNER_OPTIONS, findDinnerSuggestions} = require('./.compiled/app/core/dinner-recommender.js');

assert.equal(RECIPES.length, 116);
assert.equal(new Set(RECIPES.map(r => r.id)).size, 116);
assert.ok(CATEGORIES.includes('Alla'));
assert.ok(TAGS.includes('Alla'));
assert.ok(TAGS.includes('Kött'), 'Tidigare fel: taggen Kött gick inte att välja i filtret');
for (const r of RECIPES) {
  assert.ok(CATEGORIES.includes(r.category), `Saknad kategori i UI: ${r.category}`);
  for (const tag of r.tags) assert.ok(TAGS.includes(tag), `Saknad tagg i UI: ${tag}`);
  assert.ok(COUNTRIES.some(c => c.code === r.countryCode), `Saknat land: ${r.countryCode}`);
  assert.ok(recipeMatches(r, r.name), `Receptets namn hittas inte: ${r.id}`);
  assert.ok(recipeMatches(r, r.name.toLocaleUpperCase('sv-SE')), `Sökning utan skiftlägeskänslighet: ${r.id}`);
  for (const group of r.groups) for (const item of group.items) {
    assert.ok(recipeMatches(r, item.name), `Ingrediensen ${item.name} hittas inte i ${r.id}`);
    for (const scale of [0.5, 1, 2]) {
      const actual = ingredientAmount(item, scale);
      assert.equal(typeof actual, 'string');
      assert.ok(!actual.startsWith('NaN'), `Felaktig mängd: ${r.id}/${item.name}`);
      assert.equal(actual, item.fixed || `${formatAmount(item.qty * scale)} ${item.unit}`.trim(), `${r.id}/${item.name} x ${scale}`);
    }
  }
  for (const [index, scale] of [[0, 0.5], [2, 1], [4, 2]]) {
    const displayedYield = yieldText(r, scale);
    assert.ok(displayedYield.startsWith(String(r.yields[index])), `Fel portionsantal: ${r.id} ${scale}: ${displayedYield}`);
    if (r.yields[index + 1]) assert.ok(displayedYield.includes(`${r.yields[index]}–${r.yields[index + 1]}`));
  }
}
assert.equal(formatAmount(0.25), '¼');
assert.equal(formatAmount(0.5), '½');
assert.equal(formatAmount(1.75), '1¾');
assert.equal(formatAmount(1.5), '1½');
assert.equal(formatAmount(2.333), '2,33');
assert.equal(ingredientNote('ersätt med pancetta', 2), 'ersätt med pancetta');
assert.equal(ingredientNote('ca 140 g', 1), 'ca 140 g');
assert.equal(ingredientNote('ca 140 g', 0.5), 'Grundsats: ca 140 g');
assert.equal(normalizeSearch('KÖTTFÄRS & ÄGG'), 'kottfars & agg');
assert.equal(recipeMatches(RECIPES.find(r=>r.id==='wallenbergare'), 'KALVFÄRS'), true);
assert.equal(recipeMatches(RECIPES.find(r=>r.id==='wallenbergare'), 'xyzidneverpresent123'), false);
console.log('✓ 116 recept: kategorier, samtliga taggar och alla ursprung går att filtrera på');
console.log('✓ Sökning på namn och samtliga ingredienser, gemener/versaler och svenska tecken');
console.log('✓ Alla numeriska ingrediensmängder och portionsantal för ½, 1 och 2 satser');

let values = new Map();
global.localStorage = {
  getItem: key => values.has(key) ? values.get(key) : null,
  setItem: (key, value) => values.set(key, value),
  removeItem: key => values.delete(key)
};
let store = new RecipeStore();
const recipeA = RECIPES[0].id;
const recipeB = RECIPES[1].id;
assert.equal(store.shoppingCount(), 0);
assert.equal(store.scale(recipeA), 1);
store.toggleFavorite(recipeA);
store.toggleShopping(recipeA);
store.toggleShopping(recipeB);
store.setChecked(`${recipeA}/0/0`, true);
store.setScale(recipeA, 2);
assert.equal(store.isFavorite(recipeA), true);
assert.equal(store.inShoppingList(recipeA), true);
assert.equal(store.shoppingCount(), 2);
assert.equal(store.isChecked(`${recipeA}/0/0`), true);
assert.equal(store.scale(recipeA), 2);
store = new RecipeStore();
assert.equal(store.isFavorite(recipeA), true, 'Favoriter försvann efter omladdning');
assert.equal(store.shoppingCount(), 2, 'Inköpslistan försvann efter omladdning');
assert.equal(store.scale(recipeA), 2, 'Portionsskalningen försvann efter omladdning');
assert.equal(store.isChecked(`${recipeA}/0/0`), true, 'Avbockade ingredienser försvann efter omladdning');
store.toggleShopping(recipeA);
store.toggleFavorite(recipeA);
store.setChecked(`${recipeA}/0/0`, false);
assert.equal(store.shoppingCount(), 1);
assert.equal(store.isFavorite(recipeA), false);
assert.equal(store.isChecked(`${recipeA}/0/0`), false);
store = new RecipeStore();
assert.equal(store.shoppingCount(), 1);
assert.equal(store.isFavorite(recipeA), false);
for (const [key, corrupt] of [
 ['favs', 'null'], ['bag', '{"a":1}'],
 ['checks', '[]'], ['scales', '{"one":9}']
]) values.set('recipebook-' + key, corrupt);
store = new RecipeStore();
assert.deepEqual(store.favorites(), []);
assert.deepEqual(store.shoppingIds(), []);
assert.deepEqual(store.checked(), {});
assert.deepEqual(store.scales(), {});
console.log('✓ Favoriter, inköpslista, avbockning och skalning persisterar efter omladdning');
values.set('recipebook-favs', JSON.stringify([recipeA, recipeA, 'okant-recept']));
values.set('recipebook-bag', JSON.stringify([recipeB, recipeB, 'okant-recept']));
store = new RecipeStore();
assert.deepEqual(store.favorites(), [recipeA]);
assert.deepEqual(store.shoppingIds(), [recipeB]);
assert.equal(store.shoppingCount(), 1);
console.log('✓ Äldre/skadade localStorage-värden hanteras utan att appen kraschar');
const filters = new CatalogFilters();
filters.category.set(RECIPES[0].category);
filters.query.set('pasta');
filters.country.set('SE');
filters.tag.set('Kött');
filters.favoritesOnly.set(true);
filters.reset();
assert.equal(filters.category(), 'Alla');
assert.equal(filters.query(), '');
assert.equal(filters.tag(), 'Alla');
assert.equal(filters.country(), 'Alla');
assert.equal(filters.favoritesOnly(), false);
console.log('✓ Kombinerade filtertillstånd kan återställas');
// Planera/handla och laga är separata arbetsflöden.
values = new Map();
store = new RecipeStore();
store.toggleShopping(recipeA);
const firstItem = `${recipeA}/0/0`;
store.setBought(firstItem, true);
assert.equal(store.isBought(firstItem), true);
assert.equal(store.isChecked(firstItem), false, 'Inköp får inte avbocka ingredienser i köksläget');
store.setChecked(firstItem, true);
store.resetPrepared(recipeA);
assert.equal(store.isChecked(firstItem), false);
assert.equal(store.isBought(firstItem), true, 'Köksläge får inte ändra inköpslista');
store.setCookStep(recipeA, 2, 6);
assert.equal(store.cookStep(recipeA), 2);
store.setCookStep(recipeA, 20, 6);
assert.equal(store.cookStep(recipeA), 6, 'Framsteg ska begränsas till receptets steg');
store.markCooked(recipeA, '2026-10-24T14:45:00.000Z');
store.setNote(recipeA, 'Godare med extra citron');
store = new RecipeStore();
assert.equal(store.isBought(firstItem), true, 'Inköpsstatus ska sparas');
assert.equal(store.cookStep(recipeA), 6, 'Tillagningssteg ska sparas');
assert.equal(store.cookedOn(recipeA), '2026-10-24T14:45:00.000Z');
assert.equal(store.note(recipeA), 'Godare med extra citron');
store.toggleShopping(recipeA);
assert.equal(store.isBought(firstItem), false, 'Avbockningar ska nollställas när recept tas bort ur planen');
assert.equal(store.cookStep(recipeA), 6, 'Inköpsändringar får inte återställa köksläget');
store.toggleShopping(recipeA);
store.setBought(firstItem, true);
store.clearBought();
assert.equal(store.isBought(firstItem), false);
console.log('✓ Separata avbockningar för handling och matlagning, återställning och lagring över omladdning');
console.log('✓ Köksläge: stegframsteg, lagat-datum och personliga anteckningar lagras lokalt');
console.log('✓ Totalt: logiktesten GODKÄNDA (Angular runtime/DOM behöver separat testas)');

// Middagsförslag: endast granskade måltider och aldrig kortare tid än receptet.
assert.equal(new Set(DINNER_OPTIONS.map(x => x.id)).size, DINNER_OPTIONS.length);
for (const option of DINNER_OPTIONS) {
  const recipe = RECIPES.find(r=>r.id === option.id);
  assert.ok(recipe, `Middagsförslag saknar recept: ${option.id}`);
  assert.ok(!/[+]|kyl|mariner/i.test(recipe.time), `Otydlig totaltid för ${option.id}: ${recipe.time}`);
  // Tid före kommatecknet är totaltid. 'varav X min aktivt' får inte förväxlas med totaltid.
  const totalPart = recipe.time.split(/[,;]/)[0];
  const hourMatch = totalPart.match(/(\d+)\s*tim/);
  const minutesPart = hourMatch ? totalPart.replace(hourMatch[0], '') : totalPart;
  const numbers = [...minutesPart.matchAll(/\d+/g)].map(match => Number(match[0]));
  const expectedTotal = (hourMatch ? Number(hourMatch[1]) * 60 : 0) + Math.max(0, ...numbers);
  assert.equal(option.maxMinutes, expectedTotal, `Fel totaltid för ${option.id}: ${recipe.time}`);
  assert.ok(!['Bakverk & fika','Efterrätter','Bröd & tillbehör'].includes(recipe.category), `Fel kategori i middagsförslag: ${option.id}`);
}
const quarterHour = findDinnerSuggestions(RECIPES,{time:15,effort:'low'});
assert.deepEqual(quarterHour.map(x=>x.recipe.id).sort(), ['aggrora','omelett']);
assert.ok(quarterHour.every(x=>x.maxMinutes <= 15));
const thirtyLow = findDinnerSuggestions(RECIPES,{time:30,effort:'low'});
const thirtyNormal = findDinnerSuggestions(RECIPES,{time:30,effort:'normal'});
assert.ok(thirtyLow.length >= 3 && thirtyNormal.length > thirtyLow.length);
assert.ok(thirtyLow.every(x=>x.maxMinutes <= 30 && x.reason === 'Få moment'));
assert.ok(thirtyNormal.some(x=>x.recipe.id === 'carbonara'));
const favorites = findDinnerSuggestions(RECIPES,{time:30,effort:'low'},['omelett']);
assert.ok(favorites.findIndex(x=>x.recipe.id === 'omelett') < thirtyLow.findIndex(x=>x.recipe.id === 'omelett'));
const allDinner = findDinnerSuggestions(RECIPES,{time:'more',effort:'normal'});
assert.equal(allDinner.length,DINNER_OPTIONS.length);
assert.equal(new Set(allDinner.map(x=>x.recipe.id)).size,allDinner.length);
assert.deepEqual(findDinnerSuggestions([], {time:30,effort:'low'}),[]);
console.log('✓ Middagshjälpen: kontrollerade totaltider, 15/30/45/mer, ork, favoriter och inga påhittade träffar');
