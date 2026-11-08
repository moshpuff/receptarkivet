import { Ingredient, Recipe, Scale } from './recipe.model';
import { formatAmount, ingredientAmount, normalizeSearch } from './recipe-format';

export interface CombinedShoppingRow {
  key: string;
  name: string;
  amount: string;
  ingredientKeys: string[];
  isBought: boolean;
}

/** Slå bara ihop exakt samma ingrediensnamn och enhet.
 * Till exempel 100 g smör + 50 g smör = 150 g smör, medan 1 dl och 100 g
 * fortfarande visas separat. Ingredienser med fasta råd som ”efter smak”
 * behålls individuellt så att ingen tvivelaktig mängd räknas ihop.
 */
export function mergeShoppingIngredients(
  recipes: readonly Recipe[],
  scaleFor: (id: string) => Scale,
  bought: Readonly<Record<string, boolean>>
): CombinedShoppingRow[] {
  type Aggregate = {name:string; unit:string; qty:number | null; fixedItem:Ingredient | null; scale:Scale; ingredientKeys:string[]};
  const map = new Map<string, Aggregate>();
  for (const recipe of recipes) {
    const scale = scaleFor(recipe.id);
    recipe.groups.forEach((group, gi) => group.items.forEach((item, ii) => {
      const ingredientKey = `${recipe.id}/${gi}/${ii}`;
      const canMerge = item.qty !== null && Number.isFinite(item.qty) && !item.fixed.trim();
      const normalized = normalizeSearch(item.name.trim()).replace(/\s+/g,' ');
      const unit = item.unit.trim();
      const key = canMerge ? `sum:${normalized}|${unit.toLocaleLowerCase('sv-SE')}` : `single:${ingredientKey}`;
      const existing = map.get(key);
      if (existing) {
        existing.qty = (existing.qty ?? 0) + (item.qty ?? 0) * scale;
        existing.ingredientKeys.push(ingredientKey);
      } else {
        map.set(key, {
          name: item.name, unit,
          qty: canMerge ? item.qty! * scale : null,
          fixedItem: canMerge ? null : item,
          scale,
          ingredientKeys: [ingredientKey]
        });
      }
    }));
  }
  return [...map.entries()]
    .map(([key,row]) => ({
      key, name:row.name,
      amount:row.fixedItem ? (ingredientAmount(row.fixedItem, row.scale) || 'Efter smak')
        : `${formatAmount(row.qty ?? 0)} ${row.unit}`.trim(),
      ingredientKeys:row.ingredientKeys,
      isBought:row.ingredientKeys.every(key => !!bought[key])
    }))
    .sort((a,b) => a.name.localeCompare(b.name, 'sv-SE'));
}
