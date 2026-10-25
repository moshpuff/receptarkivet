import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RECIPES } from '../core/recipe-data';
import { RecipeStore } from '../core/recipe-store.service';
import { ToastService } from '../core/toast.service';
import { ingredientAmount, ingredientNote, yieldText } from '../core/recipe-format';
import { Ingredient, Recipe, Scale } from '../core/recipe.model';

@Component({
  selector: 'app-detail', standalone: true, imports: [RouterLink],
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(RecipeStore);
  private readonly toast = inject(ToastService);
  private readonly routeParams = toSignal(this.route.paramMap);
  readonly recipe = computed(() => RECIPES.find(r => r.id === this.routeParams()?.get('id')));
  readonly currentScale = computed(() => this.store.scale(this.recipe()?.id ?? ''));
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
