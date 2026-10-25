import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../core/recipe.model';
import { RecipeStore } from '../core/recipe-store.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="recipe-card">
      <button class="fav" [class.on]="store.isFavorite(recipe.id)"
        (click)="store.toggleFavorite(recipe.id)"
        [attr.aria-label]="store.isFavorite(recipe.id) ? 'Ta bort ' + recipe.name + ' från sparade' : 'Spara ' + recipe.name"
        [attr.aria-pressed]="store.isFavorite(recipe.id)">
        {{ store.isFavorite(recipe.id) ? '♥' : '♡' }}
      </button>
      <a class="card-link" [routerLink]="['/recept', recipe.id]">
        <div [class]="'card-art ' + recipe.tone">
          <span class="card-badge">{{ recipe.badge }}</span>
          <span class="card-emoji" aria-hidden="true">{{ recipe.emoji }}</span>
        </div>
        <div class="card-body">
          <div class="card-category">{{ recipe.category }}</div>
          <h3 class="card-title"><span class="origin-flag" role="img"
            [attr.aria-label]="recipe.countryNote" [title]="recipe.countryNote">{{ recipe.countryFlag }}</span>{{ recipe.name }}</h3>
          <p class="card-desc">{{ recipe.subtitle }}</p>
          <div class="card-tags">
            @for (tag of recipe.tags.slice(0, 2); track tag) { <span>{{ tag }}</span> }
          </div>
          <div class="card-bottom">
            <span>◷ {{ recipe.time }}</span>
            <span>◉ {{ recipe.difficulty }}</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </a>
    </article>`
})
export class RecipeCardComponent {
  @Input({required: true}) recipe!: Recipe;
  readonly store = inject(RecipeStore);
}
