import { UiIconComponent } from '../components/ui-icon.component';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../core/recipe.model';
import { RecipeStore } from '../core/recipe-store.service';
import { CountryFlagComponent } from './country-flag.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink, CountryFlagComponent, UiIconComponent],
  template: `
    <article class="recipe-card">
      <button class="fav" [class.on]="store.isFavorite(recipe.id)"
        (click)="store.toggleFavorite(recipe.id)"
        [attr.aria-label]="store.isFavorite(recipe.id) ? 'Ta bort ' + recipe.name + ' från sparade' : 'Spara ' + recipe.name"
        [attr.aria-pressed]="store.isFavorite(recipe.id)">
        <app-ui-icon name="heart" [size]="20" />
      </button>
      <a class="card-link" [routerLink]="['/recept', recipe.id]">
        <div [class]="'card-art ' + recipe.tone">
          <span class="card-badge">{{ recipe.badge }}</span>
          <span class="card-emoji" aria-hidden="true">{{ recipe.emoji }}</span>
        </div>
        <div class="card-body">
          <div class="card-category">{{ recipe.category }}</div>
          <h3 class="card-title"><app-country-flag [code]="recipe.countryCode" [name]="recipe.countryName"
            [description]="recipe.countryNote" />{{ recipe.name }}</h3>
          <p class="card-desc">{{ recipe.subtitle }}</p>
          <div class="card-tags">
            @for (tag of recipe.tags.slice(0, 2); track tag) { <span>{{ tag }}</span> }
          </div>
          <div class="card-bottom">
            <span><app-ui-icon name="clock" [size]="14" /> {{ recipe.time }}</span>
            <span><app-ui-icon name="chef" [size]="14" /> {{ recipe.difficulty }}</span>
            <span aria-hidden="true"><app-ui-icon name="external" [size]="16" /></span>
          </div>
        </div>
      </a>
    </article>`
})
export class RecipeCardComponent {
  @Input({required: true}) recipe!: Recipe;
  readonly store = inject(RecipeStore);
}
