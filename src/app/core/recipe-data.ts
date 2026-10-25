import rawRecipes from '../../data/recipes.json';
import { Recipe } from './recipe.model';

// Recepten är migrerade utan innehållsändringar från original-Receptarkivet-100.html.
// En ny rätt läggs till genom att utöka src/data/recipes.json och köra npm run test:data.
export const RECIPES: readonly Recipe[] = rawRecipes as unknown as Recipe[];
// Avled filtervärden från recepten så nya kategorier/taggar aldrig blir osökbara.
// Bevara den avsedda ordningen för etablerade kategorier och taggar.
const categoryOrder = [
  'Svensk husman', 'Pasta & pizza', 'Världens kök',
  'Snabbmat & street food', 'Smörgåsar', 'Frukost & brunch',
  'Bakverk & fika', 'Bröd & tillbehör', 'Efterrätter'
];
const tagOrder = [
  'Snabbt', 'Köttfärs', 'Nötkött', 'Kött', 'Kyckling',
  'Fisk & skaldjur', 'Fläsk & korv', 'Vegetariskt', 'Potatis',
  'Ost', 'Ugn', 'Långkok', 'Festmat', 'Choklad', 'Bröd'
];
function sortedFilterValues(values: Iterable<string>, preferred: readonly string[]): string[] {
  const unique = new Set(values);
  return ['Alla', ...preferred.filter(value => unique.delete(value)),
    ...Array.from(unique).sort((a, b) => a.localeCompare(b, 'sv-SE'))];
}
export const CATEGORIES = sortedFilterValues(RECIPES.map(r => r.category), categoryOrder);
export const TAGS = sortedFilterValues(RECIPES.flatMap(r => r.tags), tagOrder);
export const COUNTRIES = Array.from(
  new Map(RECIPES.map(r => [r.countryCode, {
    code: r.countryCode, flag: r.countryFlag, name: r.countryName
  }])).values()
).sort((a,b) => a.name.localeCompare(b.name, 'sv-SE'));
