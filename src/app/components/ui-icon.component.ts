import { Component, Input } from '@angular/core';
import {
  LucideDynamicIcon, LucideSearch, LucideHeart, LucideShoppingBasket,
  LucideChefHat, LucideClock3, LucideUsers, LucidePrinter,
  LucideArrowLeft, LucideArrowRight, LucideCheck, LucidePlus,
  LucideRotateCcw, LucideCircleCheck, LucideChevronDown,
  LucideArrowUpRight, LucideX, LucideCopy, LucideCookingPot,
  LucideBookmark, LucideSlidersHorizontal
} from '@lucide/angular';

// Bara valda Lucide-ikoner inkluderas i bygget. Undviker en tung ikonfont
// och säkerställer samma symboler på Windows, Android och iPhone.
const icons = {
  search: LucideSearch,
  heart: LucideHeart,
  basket: LucideShoppingBasket,
  chef: LucideChefHat,
  clock: LucideClock3,
  users: LucideUsers,
  printer: LucidePrinter,
  left: LucideArrowLeft,
  right: LucideArrowRight,
  check: LucideCheck,
  plus: LucidePlus,
  refresh: LucideRotateCcw,
  done: LucideCircleCheck,
  down: LucideChevronDown,
  external: LucideArrowUpRight,
  close: LucideX,
  copy: LucideCopy,
  cook: LucideCookingPot,
  bookmark: LucideBookmark,
  filter: LucideSlidersHorizontal,
} as const;

export type UiIconName = keyof typeof icons;

@Component({
  selector: 'app-ui-icon',
  standalone: true,
  imports: [LucideDynamicIcon],
  // Tabler outlines for core actions; existing Lucide icons remain for secondary actions.
  // SVG paths are from tabler/tabler-icons (MIT), see docs/ICON_SYSTEM.md.
  template: `
    @switch (name) {
      @case ('search') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      }
      @case ('heart') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      }
      @case ('basket') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304" />
          <path d="M17 10l-2 -6" />
          <path d="M7 10l2 -6" />
        </svg>
      }
      @case ('chef') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151" />
          <path d="M6.161 17.009l11.839 -.009" />
        </svg>
      }
      @case ('clock') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 7v5l3 3" />
        </svg>
      }
      @case ('users') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      }
      @case ('printer') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
          <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
          <path d="M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -4" />
        </svg>
      }
      @case ('left') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
      }
      @case ('right') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      }
      @case ('check') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12l5 5l10 -10" />
        </svg>
      }
      @case ('plus') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      }
      @case ('down') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 9l6 6l6 -6" />
        </svg>
      }
      @case ('close') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      }
      @case ('filter') {
        <svg class="tabler-icon" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 6l8 0" />
          <path d="M16 6l4 0" />
          <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 12l2 0" />
          <path d="M10 12l10 0" />
          <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M4 18l11 0" />
          <path d="M19 18l1 0" />
        </svg>
      }
      @default { <svg [lucideIcon]="icon" [size]="size" [strokeWidth]="2" aria-hidden="true"></svg> }
    }
  `,
  styles: [':host{display:inline-flex;align-items:center;justify-content:center;flex:none;vertical-align:-.13em;line-height:0}']
})
export class UiIconComponent {
  @Input({required: true}) name!: UiIconName;
  @Input() size = 18;
  get icon() { return icons[this.name] ?? icons.search; }
}
