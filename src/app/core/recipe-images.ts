// Enbart kompletta och godkända filer som finns på disk inkluderas i produktionsbygget.
import { AVAILABLE_RECIPE_IMAGES } from './recipe-images.generated';

const available = new Set<string>(AVAILABLE_RECIPE_IMAGES);
export type RecipeImageSize = 'card' | 'hero';
export function hasRecipeImage(id: string): boolean { return available.has(id); }
export function recipeImageSrc(id: string, size: RecipeImageSize): string {
  return `recipe-images/${id}-${size}.webp`;
}
