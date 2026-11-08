import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeCardComponent } from '../components/recipe-card.component';
import { RECIPES } from '../core/recipe-data';
import { RecipeStore } from '../core/recipe-store.service';

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent],
  template: `
    <section class="wrap saved-page" aria-labelledby="saved-title">
      <div class="saved-header">
        <div class="eyebrow">Din personliga receptsamling</div>
        <h1 id="saved-title">Sparade recept</h1>
        <p>Favoriter som du enkelt hittar tillbaka till. De sparas lokalt på den här enheten.</p>
        <span class="saved-counter" aria-live="polite">{{ saved().length }} sparade recept</span>
      </div>
      @if (saved().length) {
        <div class="cards">
          @for (recipe of saved(); track recipe.id) {
            <app-recipe-card [recipe]="recipe" />
          }
        </div>
      } @else {
        <div class="empty saved-empty">
          <h2>Här samlar du dina favoriter</h2>
          <p>Tryck på hjärtat på ett receptkort eller välj Spara recept på receptsidan.</p>
          <a class="btn" routerLink="/">Hitta recept</a>
        </div>
      }
    </section>
  `
})
export class SavedComponent {
  readonly store = inject(RecipeStore);
  readonly saved = computed(() => {
    const favoriteIds = new Set(this.store.favorites());
    return RECIPES.filter(recipe => favoriteIds.has(recipe.id));
  });
}
