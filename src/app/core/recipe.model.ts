export interface Ingredient {
  name: string;
  qty: number | null;
  unit: string;
  extra: string;
  fixed: string;
}
export interface IngredientGroup {
  title: string;
  items: Ingredient[];
}
export interface RecipeStep { title: string; body: string; }
export interface RecipeTip { title: string; body: string; }
export interface Nutrition {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  per: string;
  servings: number;
  estimated: boolean;
}
export interface Recipe {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  emoji: string;
  tone: string;
  badge: string;
  yieldBase: string;
  yields: [number, number, number, number, number, number];
  time: string;
  difficulty: string;
  temp: string;
  intro: string;
  origin: string;
  groups: IngredientGroup[];
  steps: RecipeStep[];
  tips: RecipeTip[];
  sources: [string,string][];
  tags: string[];
  countryCode: string;
  countryName: string;
  countryFlag: string;
  countryNote: string;
  nutrition: Nutrition;
  shoppingTips: string[];
}
export type Scale = 0.5 | 1 | 2;
