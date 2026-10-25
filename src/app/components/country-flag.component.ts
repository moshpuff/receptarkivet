import { Component, Input } from '@angular/core';

/** Inbyggda SVG-flaggor – fungerar även om plattformen saknar flagg-emoji. */
@Component({
  selector: 'app-country-flag',
  standalone: true,
  template: `
    <img class="origin-flag" [class.detail-flag]="large" [class.filter-flag]="filter"
      [src]="'flags/' + code.toLowerCase() + '.svg'"
      [alt]="'Flagga: ' + name"
      [title]="description || name"
      width="28" height="21" loading="lazy" decoding="async">
  `
})
export class CountryFlagComponent {
  @Input({required: true}) code!: string;
  @Input({required: true}) name!: string;
  @Input() description = '';
  @Input() large = false;
  @Input() filter = false;
}
