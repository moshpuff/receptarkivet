import {Ingredient, Recipe, Scale} from './recipe.model';

export function normalizeSearch(text: string): string {
  return text.toLocaleLowerCase('sv-SE').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function formatAmount(quantity: number): string {
  const q = Math.round(quantity * 1000) / 1000;
  const whole = Math.floor(q);
  const fraction = Math.round((q - whole) * 1000) / 1000;
  const glyph = ({'0.25': '¼', '0.5': '½', '0.75': '¾'} as Record<string,string>)[String(fraction)];
  if (glyph) return `${whole ? whole : ''}${glyph}`;
  return new Intl.NumberFormat('sv-SE', {maximumFractionDigits: 2}).format(q);
}

export function ingredientAmount(item: Ingredient, scale: Scale): string {
  if (item.fixed) return item.fixed;
  return `${formatAmount((item.qty ?? 0) * scale)} ${item.unit}`.trim();
}

/** Behåll hjälpsamma ingredienskommentarer även när satsstorleken ändras.
 * Numeriska förpacknings-/omräkningsråd markeras uttryckligen som grundsats,
 * eftersom de inte räknas om av portionsväljaren. */
export function ingredientNote(extra: string, scale: Scale): string {
  const note = extra.trim();
  if (!note || scale === 1 || !/\d/.test(note)) return note;
  return `Grundsats: ${note}`;
}

export function yieldText(recipe: Recipe, scale: Scale): string {
  const i = scale === 0.5 ? 0 : scale === 2 ? 4 : 2;
  const count = recipe.yields[i + 1]
    ? `${recipe.yields[i]}–${recipe.yields[i + 1]}`
    : String(recipe.yields[i]);
  // Behåll samma enheter som i grundreceptet (även kakor, bullar och smörgåsar).
  let suffix = recipe.yieldBase.replace(/^\d+(?:[–-]\d+)?\s*/, '').trim();
  // En hel focaccia ger 8 bitar; för halva/dubbla satser följer också brödantalet med.
  if (recipe.id === 'focaccia-rosmarin') {
    suffix = suffix.replace('(1 bröd)', `(${scale === 0.5 ? '½' : scale === 2 ? '2' : '1'} bröd)`);
  }
  return `${count} ${suffix}`;
}

export function recipeMatches(recipe: Recipe, query: string): boolean {
  const text = [recipe.name, recipe.subtitle, recipe.intro, recipe.category,
    recipe.countryName, recipe.countryNote, ...recipe.tags,
    ...recipe.groups.flatMap(g => g.items.map(item => item.name))].join(' ');
  return normalizeSearch(text).includes(normalizeSearch(query));
}
