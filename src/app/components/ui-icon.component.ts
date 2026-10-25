import { Component, Input } from '@angular/core';
import {
  LucideIcon, LucideSearch, LucideHeart, LucideShoppingBasket,
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
  imports: [LucideIcon],
  template: '<svg [lucideIcon]="icon" [size]="size" [strokeWidth]="1.8" aria-hidden="true"></svg>',
  styles: [':host{display:inline-flex;align-items:center;justify-content:center;flex:none;vertical-align:-.13em;line-height:0}']
})
export class UiIconComponent {
  @Input({required: true}) name!: UiIconName;
  @Input() size = 18;
  get icon() { return icons[this.name] ?? icons.search; }
}
