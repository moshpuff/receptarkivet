import { UiIconComponent } from '../components/ui-icon.component';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeCardComponent } from '../components/recipe-card.component';
import { CountryFlagComponent } from '../components/country-flag.component';
import { RECIPES, CATEGORIES, TAGS, COUNTRIES } from '../core/recipe-data';
import { CatalogFilters } from '../core/catalog-filters.service';
import { RecipeStore } from '../core/recipe-store.service';
import { recipeMatches } from '../core/recipe-format';
import { DinnerEffort, DinnerTime, findDinnerSuggestions } from '../core/dinner-recommender';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeCardComponent, CountryFlagComponent, UiIconComponent, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly filters = inject(CatalogFilters);
  readonly store = inject(RecipeStore);
  readonly recipes = RECIPES;
  readonly categories = CATEGORIES;
  readonly tags = TAGS;
  readonly countries = COUNTRIES;
  readonly selectedCountry = computed(() => COUNTRIES.find(place => place.code === this.filters.country()));

  // Lättviktigt, lokalt beslutsstöd; inga anrop, profiler eller nya beroenden.
  readonly dinnerTime = signal<DinnerTime>(30);
  readonly dinnerEffort = signal<DinnerEffort>('low');
  readonly dinnerOpen = signal(false);
  readonly dinnerPage = signal(0);
  readonly dinnerPool = computed(() => findDinnerSuggestions(
    RECIPES, {time: this.dinnerTime(), effort: this.dinnerEffort()}, this.store.favorites()
  ));
  readonly dinnerVisible = computed(() => this.dinnerPool().slice(this.dinnerPage() * 3, this.dinnerPage() * 3 + 3));
  readonly dinnerHasMore = computed(() => this.dinnerPool().length > 3);
  chooseTime(value: DinnerTime): void { this.dinnerTime.set(value); this.dinnerPage.set(0); }
  chooseEffort(value: DinnerEffort): void { this.dinnerEffort.set(value); this.dinnerPage.set(0); }
  findDinner(): void {
    this.dinnerOpen.set(true);
    this.dinnerPage.set(0);
    // Särskilt på mobil ska resultatet hamna i synfältet efter knapptrycket.
    requestAnimationFrame(() => document.getElementById('dinner-results')?.scrollIntoView({block: 'nearest'}));
  }
  nextDinners(): void {
    this.dinnerPage.update(page => (page + 1) * 3 >= this.dinnerPool().length ? 0 : page + 1);
  }
  expandDinnerTime(): void { this.chooseTime(30); }

  readonly filtered = computed(() => {
    const {category, tag, country, query, favoritesOnly} = this.filters;
    const saved = this.store.favorites();
    return RECIPES.filter(r =>
      (category() === 'Alla' || r.category === category()) &&
      (tag() === 'Alla' || r.tags.includes(tag())) &&
      (country() === 'Alla' || r.countryCode === country()) &&
      (!favoritesOnly() || saved.includes(r.id)) &&
      recipeMatches(r, query())
    );
  });
  readonly hasFilters = computed(() =>
    this.filters.category() !== 'Alla' || this.filters.tag() !== 'Alla' ||
    this.filters.country() !== 'Alla' || this.filters.favoritesOnly() || !!this.filters.query()
  );
  scrollToRecipes(): void { document.getElementById('receptlista')?.scrollIntoView({behavior:'smooth', block:'start'}); }
  toggleFavorites(): void { this.filters.favoritesOnly.update(v => !v); }
  onSearch(event: Event): void { this.filters.query.set((event.target as HTMLInputElement).value); }
  onTag(event: Event): void { this.filters.tag.set((event.target as HTMLSelectElement).value); }
  onCountry(event: Event): void { this.filters.country.set((event.target as HTMLSelectElement).value); }
}
