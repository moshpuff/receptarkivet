import type { Recipe } from './recipe.model';
import type { UiIconName } from './ui-icon.types';

/** Konsekventa, neutrala Tabler-symboler. Matcha mest specifika råvara först. */
const ingredientRules: ReadonlyArray<readonly [RegExp, UiIconName]> = [
  [/(?<!\p{L})(ägg(?:ula|vita|ulor|vitor|nudlar)?|äggulor|äggvitor)(?!\p{L})/iu, 'i-egg'],
  [/(?<!\p{L})(mjölk|standardmjölk|mellanmjölk|grädde|vispgrädde|matlagningsgrädde|kokosmjölk|crème fra[iî]che|creme fraiche|gräddfil|yoghurt|grekisk yoghurt|turkisk yoghurt|filmjölk|kefir)(?!\p{L})/iu, 'i-milk'],
  [/(?<!\p{L})(ost|färskost|hårdost|riven ost|gräddost|parmesan|mozzarella|fetaost|feta|cheddar|halloumi|ricotta|chèvre|mascarpone|pecorino|västerbottensost)(?!\p{L})/iu, 'i-cheese'],
  [/(?<!\p{L})(lax(?:filé|sida|bitar)?|torsk(?:rygg|filé)?|kolja|sej|räkor|räka|skalade räkor|tonfisk|sill|ansjovis|fisk(?:filé|buljong)?|skaldjur|scampi)(?!\p{L})/iu, 'i-fish'],
  [/(?<!\p{L})(nötfärs|fläskfärs|blandfärs|köttfärs|högrev|fläsk|bacon|kyckling|karré|oxfilé|biff|kött|korv|skinka|lamm|ankbröst)(?!\p{L})/iu, 'i-meat'],
  [/(?<!\p{L})(svamp(?:ar)?|champinjon(?:er)?|kantarell(?:er)?|shiitake|portabello|ostronskivling)(?!\p{L})/iu, 'i-mushroom'],
  [/(?<!\p{L})(citron(?:saft|skal|juice|er)?|limesaft|limeskal|lime|apelsin(?:skal|saft|juice|er)?|grapefrukt)(?!\p{L})/iu, 'i-lemon'],
  [/(?<!\p{L})(äpple|päron|banan|jordgubb|hallon|blåbär|frukt|bär)(?!\p{L})/iu, 'i-apple'],
  [/(?<!\p{L})(morot|morötter|palsternacka|rotfrukt(?:er)?|potatis|potatisar|sötpotatis|rödbeta|rödbetor|lök|lökar|vitlök(?:sklyftor|sklyfta|spulver)?|tomat(?:er|puré|kross|passata)?|tomater|paprika|gurka|zucchini|aubergine|broccoli|blomkål|kål)(?!\p{L})/iu, 'i-carrot'],
  [/(?<!\p{L})(persilja|dill|basilika|timjan|rosmarin|koriander|gräslök|spenat|sallad|ruccola|örter)(?!\p{L})/iu, 'i-leaf'],
  [/(?<!\p{L})(vetemjöl|rågmjöl|dinkel|havregryn|grahamsmjöl|majsmjöl|mandelmjöl|mjöl|jäst|ströbröd|panko|pasta|ris|basmatiris|jasminris|risottoris|bulgur|couscous|quinoa|nudlar)(?!\p{L})/iu, 'i-wheat'],
  [/(?<!\p{L})(bröd|fralla|baguette|brioche|tortilla|pita)(?!\p{L})/iu, 'i-bread'],
  [/(?<!\p{L})(salt|flingsalt|havssalt|örtsalt)(?!\p{L})/iu, 'i-salt'],
  [/(?<!\p{L})(peppar|paprikapulver|chiliflakes|spiskummin|kanel|kardemumma|krydda|chili|vanilj)(?!\p{L})/iu, 'i-pepper'],
  [/(?<!\p{L})(olja|olivolja|rapsolja|sesamolja|vinäger|äppelcidervinäger|rödvinsvinäger|vitvinsvinäger|soja|sojasås|buljong|vin|vatten|saft)(?!\p{L})/iu, 'i-bottle'],
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
  ['oven', 'Ugn', 't-cooker', /(?<!\p{L})(ugn|ugnen|ugnsform|ugnsfast)(?!\p{L})/iu],
  ['pan', 'Stekpanna', 't-kitchen', /(?<!\p{L})(stekpanna|stekpannan|stekpannor|gjutjärnspanna|nonstickpanna)(?!\p{L})/iu],
  ['pot', 'Kastrull', 't-cooker', /(?<!\p{L})(kastrull|kastrullen|kastruller|såskastrull)(?!\p{L})/iu],
  ['mix', 'Bunke', 't-bowl', /(?<!\p{L})(bunke|bunken|bunkar|skål att blanda|blandningsskål)(?!\p{L})/iu],
  ['whisk', 'Visp', 't-whisk', /(?<!\p{L})(vispa|vispar|vispen|visp|ballongvisp)(?!\p{L})/iu],
  ['mixer', 'Mixer', 't-blender', /(?<!\p{L})(stavmixer|blender|matberedare|mixerstav|köksmaskin)(?!\p{L})/iu],
  ['sheet', 'Bakplåt', 't-kitchen', /(?<!\p{L})(bakplåt|bakplåtspapper|plåt|plåten)(?!\p{L})/iu],
  ['knife', 'Kniv', 't-kitchen', /(?<!\p{L})(kniv|kniven|skärbräda)(?!\p{L})/iu],
  ['scale', 'Köksvåg', 't-scale', /(?<!\p{L})(köksvåg|våg|väg upp|väg ingredienserna)(?!\p{L})/iu],
  ['temp', 'Termometer', 't-thermometer', /(?<!\p{L})(termometer|kärntemperaturmätare)(?!\p{L})/iu],
  ['grill', 'Grill', 't-grill', /(?<!\p{L})(grill|grillen|grillgaller|grilla|grillas)(?!\p{L})/iu],
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
