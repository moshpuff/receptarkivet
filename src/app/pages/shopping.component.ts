import { UiIconComponent } from '../components/ui-icon.component';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RECIPES } from '../core/recipe-data';
import { RecipeStore } from '../core/recipe-store.service';
import { ToastService } from '../core/toast.service';
import { ingredientAmount, ingredientNote, recipeMatches, yieldText } from '../core/recipe-format';
import { Ingredient, Recipe, Scale } from '../core/recipe.model';

@Component({
  selector: 'app-shopping', standalone: true, imports: [RouterLink, UiIconComponent],
  templateUrl: './shopping.component.html'
})
export class ShoppingComponent {
  readonly store = inject(RecipeStore);
  private readonly toast = inject(ToastService);
  readonly recipes = RECIPES;
  readonly pickerQuery = signal('');
  readonly scales: readonly Scale[] = [0.5, 1, 2];
  private readonly byId = new Map(RECIPES.map(r => [r.id, r]));
  readonly visibleChoices = computed(() => RECIPES.filter(r => recipeMatches(r, this.pickerQuery())));
  readonly selected = computed(() => this.store.shoppingIds()
    .map(id => this.byId.get(id)).filter((r): r is Recipe => !!r));
  readonly totalIngredients = computed(() => this.selected().reduce((sum, r) => sum + r.groups.reduce((s,g) => s + g.items.length, 0),0));
  readonly boughtCount = computed(() => this.selected().reduce((sum, r) => sum + r.groups.reduce((s,g,gi) =>
    s + g.items.filter((_,ii) => this.store.isBought(this.key(r,gi,ii))).length, 0),0));
  readonly hasBought = computed(() => this.boughtCount() > 0);
  readonly remainingCount = computed(() => this.totalIngredients() - this.boughtCount());
  readonly fallbackText = signal('');
  onPickerSearch(event: Event): void { this.pickerQuery.set((event.target as HTMLInputElement).value); }
  key(r: Recipe, group: number, item: number): string { return `${r.id}/${group}/${item}`; }
  amount(item: Ingredient, scale: Scale): string { return ingredientAmount(item, scale); }
  note(item: Ingredient, scale: Scale): string { return ingredientNote(item.extra, scale); }
  yield(r: Recipe): string { return yieldText(r, this.store.scale(r.id)); }
  focusPicker(): void { document.getElementById('bag-search')?.focus(); }
  toggle(r: Recipe): void { this.store.toggleShopping(r.id); }
  bought(key: string, event: Event): void { this.store.setBought(key, (event.target as HTMLInputElement).checked); }
  clearBought(): void { this.store.clearBought(); this.toast.show('Alla varor markerade som ej handlade'); }
  listText(): string {
    return this.selected().map(r => {
      const scale = this.store.scale(r.id);
      const ingredients = r.groups.flatMap((g,gi) => g.items.map((i,ii) => {
        const mark = this.store.isBought(this.key(r,gi,ii)) ? '☑' : '☐';
        return `${mark} ${i.name} – ${ingredientAmount(i, scale)}`;
      })).join('\n');
      return `${r.name} (${this.yield(r)})\n${ingredients}`;
    }).join('\n\n');
  }
  async copy(): Promise<void> {
    const content = this.listText();
    if (!content) return;
    try {
      await navigator.clipboard.writeText(content);
      this.toast.show('Inköpslistan kopierad');
    } catch {
      this.fallbackText.set(content);
      this.toast.show('Markera och kopiera texten nedan');
    }
  }
  print(): void { window.print(); }
}
