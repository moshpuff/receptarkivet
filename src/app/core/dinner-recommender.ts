import { Recipe } from './recipe.model';

/**
 * Medvetet litet, granskat urval för "Vad ska vi äta?".
 * maxMinutes är ÖVRE gränsen från receptets TOTALTID, inte aktiv arbetstid.
 * Recept med marinering, kylning eller ofullständig tidsuppgift tas inte med.
 * "effort" är en redaktionell bedömning av antal praktiska moment, inte minutdata.
 * Detta är ingen automatisk AI-/slumpgenerator; alla förslag går att förklara.
 */
export interface DinnerOption {
  id: string;
  maxMinutes: number;
  effort: 'low' | 'normal';
}
export type DinnerTime = 15 | 30 | 45 | 'more';
export type DinnerEffort = 'low' | 'normal';
export interface DinnerPreferences { time: DinnerTime; effort: DinnerEffort; }
export interface DinnerSuggestion { recipe: Recipe; maxMinutes: number; reason: string; }

// Ordningen är redaktionell och ska prioritera riktiga måltider framför fika/mellanmål.
// Varje tidsuppgift följer receptets dokumenterade övre intervallgräns.
export const DINNER_OPTIONS: readonly DinnerOption[] = [
  {id:'korvstroganoff', maxMinutes:30, effort:'low'},
  {id:'kyckling-teriyaki', maxMinutes:30, effort:'low'},
  {id:'tacos-kottfars', maxMinutes:30, effort:'low'},
  {id:'kyckling-curry', maxMinutes:45, effort:'low'},
  {id:'omelett', maxMinutes:15, effort:'low'},
  {id:'ost-skinksas', maxMinutes:30, effort:'low'},
  {id:'stekt-laxfile', maxMinutes:30, effort:'low'},
  {id:'gnocchi-tomatsas', maxMinutes:40, effort:'low'},
  {id:'broccolisoppa-cheddar', maxMinutes:35, effort:'low'},
  {id:'kotletter-sambal-gradde', maxMinutes:90, effort:'low'},
  {id:'lax-citronsas', maxMinutes:45, effort:'low'},
  {id:'tuna-melt', maxMinutes:25, effort:'low'},
  {id:'korv-med-brod', maxMinutes:20, effort:'low'},
  {id:'stuvade-makaroner-falukorv', maxMinutes:35, effort:'low'},
  {id:'tonfisksallad', maxMinutes:35, effort:'low'},
  {id:'sloppy-joe', maxMinutes:40, effort:'low'},
  {id:'langtradarmacka', maxMinutes:20, effort:'low'},
  {id:'aggrora', maxMinutes:15, effort:'low'},
  {id:'rakmacka', maxMinutes:25, effort:'low'},
  {id:'toast-skagen', maxMinutes:25, effort:'low'},
  {id:'fisk-aggsas', maxMinutes:40, effort:'normal'},
  {id:'carbonara', maxMinutes:30, effort:'normal'},
  {id:'smashburgare', maxMinutes:30, effort:'normal'},
  {id:'marry-me-chicken', maxMinutes:35, effort:'normal'},
  {id:'biff-stroganoff', maxMinutes:40, effort:'normal'},
  {id:'flaskfilegryta-champinjoner', maxMinutes:40, effort:'normal'},
  {id:'club-sandwich-kyckling', maxMinutes:30, effort:'normal'},
  {id:'caesarsallad-kyckling', maxMinutes:40, effort:'normal'},
  {id:'chicken-nuggets', maxMinutes:45, effort:'normal'},
  {id:'pannkakor', maxMinutes:45, effort:'normal'},
  {id:'wallenbergare', maxMinutes:60, effort:'normal'}
];

/** Returns ONLY recipes for which we have an explicit, reviewed time ceiling. */
export function findDinnerSuggestions(
  recipes: readonly Recipe[], preferences: DinnerPreferences,
  favoriteIds: readonly string[] = []
): DinnerSuggestion[] {
  const byId = new Map(recipes.map(recipe => [recipe.id, recipe]));
  const liked = new Set(favoriteIds);
  const seen = new Set<string>();
  const maxTime = preferences.time === 'more' ? Infinity : preferences.time;
  const candidates = DINNER_OPTIONS
    .map((option, index) => ({option, index, recipe: byId.get(option.id)}))
    .filter(({option, recipe}) => {
      if (!recipe || seen.has(option.id)) return false;
      seen.add(option.id);
      return option.maxMinutes <= maxTime &&
        (preferences.effort === 'normal' || option.effort === 'low');
    });
  // Favoriter får en försiktig skjuts, men måltidsordningen dominerar.
  candidates.sort((a,b) =>
    (a.index - (liked.has(a.option.id) ? 6 : 0) - (preferences.effort === 'normal' && a.option.effort === 'normal' ? 16 : 0)) -
    (b.index - (liked.has(b.option.id) ? 6 : 0) - (preferences.effort === 'normal' && b.option.effort === 'normal' ? 16 : 0))
  );
  return candidates.map(({recipe,option}) => ({
    recipe: recipe!,
    maxMinutes: option.maxMinutes,
    reason: option.effort === 'low' ? 'Få moment' : 'Lite mer matlagning'
  }));
}
