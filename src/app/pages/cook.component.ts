import { UiIconComponent } from '../components/ui-icon.component';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RECIPES } from '../core/recipe-data';
import { RecipeStore } from '../core/recipe-store.service';
import { ToastService } from '../core/toast.service';
import { ingredientAmount, ingredientNote, yieldText } from '../core/recipe-format';
import { Ingredient, Recipe, Scale } from '../core/recipe.model';

@Component({
  selector: 'app-cook', standalone: true, imports: [RouterLink, UiIconComponent],
  templateUrl: './cook.component.html'
})
export class CookComponent {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(RecipeStore);
  private readonly toast = inject(ToastService);
  private readonly params = toSignal(this.route.paramMap);
  readonly recipe = computed(() => RECIPES.find(r => r.id === this.params()?.get('id')));
  readonly stepIndex = computed(() => {
    const r = this.recipe();
    return r ? Math.min(this.store.cookStep(r.id), r.steps.length) : 0;
  });
  readonly notesDraft = signal<string | null>(null);
  readonly showIngredients = signal(false);
  readonly scales: readonly Scale[] = [0.5, 1, 2];
  amount(i: Ingredient, scale: Scale): string { return ingredientAmount(i, scale); }
  note(i: Ingredient, scale: Scale): string { return ingredientNote(i.extra, scale); }
  yield(r: Recipe): string { return yieldText(r, this.store.scale(r.id)); }
  key(r: Recipe, g: number, i: number): string { return `${r.id}/${g}/${i}`; }
  percent(r: Recipe): number { return r.steps.length ? Math.round(100 * this.stepIndex() / r.steps.length) : 100; }
  go(r: Recipe, step: number): void { this.store.setCookStep(r.id, step, r.steps.length); }
  toggleIngredient(key: string, event: Event): void {
    this.store.setChecked(key, (event.target as HTMLInputElement).checked);
  }
  draft(r: Recipe): string { return this.notesDraft() ?? this.store.note(r.id); }
  editNote(event: Event): void { this.notesDraft.set((event.target as HTMLTextAreaElement).value); }
  saveNote(r: Recipe): void {
    this.store.setNote(r.id, this.draft(r).trim());
    this.notesDraft.set(null);
    this.toast.show('Din anteckning är sparad på den här enheten');
  }
  cookedDate(r: Recipe): string { return this.store.cookedOn(r.id) ? new Date(this.store.cookedOn(r.id)).toLocaleDateString('sv-SE') : ''; }
  finish(r: Recipe): void {
    this.store.markCooked(r.id);
    this.go(r, r.steps.length);
    this.toast.show('Klart! Receptet är markerat som lagat');
  }
  restart(r: Recipe): void { this.go(r, 0); this.showIngredients.set(false); }
}
