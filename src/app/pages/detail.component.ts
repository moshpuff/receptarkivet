import { hasRecipeImage, recipeImageSrc } from '../core/recipe-images';
import { ingredientIcon, equipmentForRecipe } from '../core/recipe-presentation';
import { UiIconComponent } from '../components/ui-icon.component';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RECIPES } from '../core/recipe-data';
import { RecipeStore } from '../core/recipe-store.service';
import { CountryFlagComponent } from '../components/country-flag.component';
import { ToastService } from '../core/toast.service';
import { ingredientAmount, ingredientNote, yieldText } from '../core/recipe-format';
import { Ingredient, Recipe, Scale } from '../core/recipe.model';

@Component({
  selector: 'app-detail', standalone: true, imports: [RouterLink, CountryFlagComponent, UiIconComponent],
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(RecipeStore);
  readonly ingredientIcon = ingredientIcon;
  readonly equipmentForRecipe = equipmentForRecipe;
  readonly hasRecipeImage = hasRecipeImage;
  readonly recipeImageSrc = recipeImageSrc;
  photoFailed = false;
  private readonly toast = inject(ToastService);
  private readonly routeParams = toSignal(this.route.paramMap);
  readonly recipe = computed(() => RECIPES.find(r => r.id === this.routeParams()?.get('id')));
  readonly currentScale = computed(() => this.store.scale(this.recipe()?.id ?? ''));
  readonly pairings = computed(() => {
    const selected = this.recipe();
    if (!selected) return [];
    const ids = selected.pairings ?? RECIPES.filter(r => r.pairings?.includes(selected.id)).map(r => r.id);
    const byId = new Map(RECIPES.map(r => [r.id, r]));
    return ids.map(id => byId.get(id)).filter((r): r is Recipe => !!r).slice(0, 6);
  });
  readonly scales: readonly Scale[] = [0.5, 1, 2];

  ingredientKey(r: Recipe, group: number, item: number): string { return `${r.id}/${group}/${item}`; }
  amount(item: Ingredient, scale: Scale): string { return ingredientAmount(item, scale); }
  note(item: Ingredient, scale: Scale): string { return ingredientNote(item.extra, scale); }
  yield(r: Recipe, scale: Scale): string { return yieldText(r, scale); }
  selectScale(r: Recipe, scale: Scale): void { this.store.setScale(r.id, scale); }
  checkIngredient(key: string, event: Event): void {
    this.store.setChecked(key, (event.target as HTMLInputElement).checked);
  }
  toggleBag(id: string): void {
    this.store.toggleShopping(id);
    this.toast.show(this.store.inShoppingList(id) ? 'Tillagt i inköpslistan' : 'Borttaget från inköpslistan');
  }
  cookedDate(id: string): string { return this.store.cookedOn(id) ? new Date(this.store.cookedOn(id)).toLocaleDateString('sv-SE') : ''; }
  print(): void { window.print(); }
}
