import { Recipe } from './recipe.model';
import { UiIconName } from '../components/ui-icon.component';

/** Konsekventa, neutrala Tabler-symboler. Matcha mest specifika råvara först. */
const ingredientRules: ReadonlyArray<readonly [RegExp, UiIconName]> = [
  [/\b(ägg|äggula|äggvita)\b/i, 'i-egg'],
  [/\b(mjölk|grädde|crème fra[iî]che|creme fraiche|gräddfil|yoghurt|filmjölk|kefir)\b/i, 'i-milk'],
  [/\b(ost|parmesan|mozzarella|feta|cheddar|halloumi|ricotta|chèvre|mascarpone)\b/i, 'i-cheese'],
  [/\b(lax|torsk|kolja|sej|räkor|räka|tonfisk|sill|ansjovis|fisk|skaldjur)\b/i, 'i-fish'],
  [/\b(nötfärs|fläskfärs|blandfärs|köttfärs|högrev|fläsk|bacon|kyckling|karré|oxfilé|biff|kött|korv|skinka|lamm|ankbröst)\b/i, 'i-meat'],
  [/\b(svamp|champinjon|kantarell|shiitake|portabello)\b/i, 'i-mushroom'],
  [/\b(citron|lime|apelsin|grapefrukt)\b/i, 'i-lemon'],
  [/\b(äpple|päron|banan|jordgubb|hallon|blåbär|frukt|bär)\b/i, 'i-apple'],
  [/\b(morot|palsternacka|rotfrukt|potatis|sötpotatis|rödbeta|lök|vitlök|tomat|paprika|gurka|zucchini|aubergine|broccoli|blomkål|kål)\b/i, 'i-carrot'],
  [/\b(persilja|dill|basilika|timjan|rosmarin|koriander|gräslök|spenat|sallad|ruccola|örter)\b/i, 'i-leaf'],
  [/\b(vetemjöl|rågmjöl|dinkel|havregryn|grahamsmjöl|mjöl|jäst|ströbröd|panko|pasta|ris|bulgur|couscous|quinoa|nudlar)\b/i, 'i-wheat'],
  [/\b(bröd|fralla|baguette|brioche|tortilla|pita)\b/i, 'i-bread'],
  [/\b(salt|flingsalt)\b/i, 'i-salt'],
  [/\b(peppar|paprikapulver|chiliflakes|spiskummin|kanel|kardemumma|krydda|chili|vanilj)\b/i, 'i-pepper'],
  [/\b(olja|vinäger|soja|buljong|vin|vatten|saft)\b/i, 'i-bottle'],
];
export function ingredientIcon(name: string): UiIconName {
  return ingredientRules.find(([pattern]) => pattern.test(name))?.[1] ?? 'i-package';
}

export interface EquipmentItem {
  id: string;
  label: string;
  icon: UiIconName;
}

/**
 * Enbart uttryckligen omnämnd utrustning. Detta är ett hjälpmedel, inte en
 * verifierad komplett packlista. Receptets equipment kan ange redaktionellt
 * granskade namn och får då företräde.
 */
const equipmentRules: ReadonlyArray<readonly [string, string, UiIconName, RegExp]> = [
  ['oven', 'Ugn', 't-cooker', /\b(ugn|ugnen|ugnsform|ugnsfast)\b/i],
  ['pan', 'Stekpanna', 't-kitchen', /\b(stekpanna|stekpannan|gjutjärnspanna|nonstickpanna)\b/i],
  ['pot', 'Kastrull', 't-cooker', /\b(kastrull|kastrullen|såskastrull)\b/i],
  ['mix', 'Bunke', 't-bowl', /\b(bunke|bunken|skål att blanda|blandningsskål)\b/i],
  ['whisk', 'Visp', 't-whisk', /\b(vispa|visp|ballongvisp)\b/i],
  ['mixer', 'Mixer', 't-blender', /\b(stavmixer|blender|matberedare|mixerstav|köksmaskin)\b/i],
  ['sheet', 'Bakplåt', 't-kitchen', /\b(bakplåt|bakplåtspapper|plåt|plåten)\b/i],
  ['knife', 'Kniv', 't-kitchen', /\b(kniv|kniven|skärbräda)\b/i],
  ['scale', 'Köksvåg', 't-scale', /\b(köksvåg|våg|väg upp|väg ingredienserna)\b/i],
  ['temp', 'Termometer', 't-thermometer', /\b(termometer|kärntemperaturmätare)\b/i],
  ['grill', 'Grill', 't-grill', /\b(grill|grillen|grillgaller)\b/i],
];
export function equipmentForRecipe(recipe: Recipe): EquipmentItem[] {
  // Framtida explicita redaktörslistor tar över heuristiken helt.
  if (recipe.equipment) {
    return recipe.equipment.map(label => {
      const rule = equipmentRules.find(([, name]) => name.toLocaleLowerCase('sv') === label.toLocaleLowerCase('sv'));
      return { id: label, label, icon: rule?.[2] ?? 't-kitchen' };
    });
  }
  const steps = recipe.steps.map(step => step.title + ' ' + step.body).join(' ');
  return equipmentRules.filter(([, , , match]) => match.test(steps))
    .slice(0, 6).map(([id, label, icon]) => ({id, label, icon}));
}
