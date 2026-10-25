import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CatalogFilters {
  readonly category = signal('Alla');
  readonly query = signal('');
  readonly tag = signal('Alla');
  readonly country = signal('Alla');
  readonly favoritesOnly = signal(false);
  reset(): void {
    this.category.set('Alla'); this.query.set(''); this.tag.set('Alla');
    this.country.set('Alla'); this.favoritesOnly.set(false);
  }
}
