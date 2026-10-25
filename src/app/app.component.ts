import { Component, inject, afterNextRender } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { RecipeStore } from './core/recipe-store.service';
import { ToastService } from './core/toast.service';
import { RECIPES } from './core/recipe-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <button class="skip-link" type="button" (click)="skipToContent()">Hoppa till innehållet</button>
    <header>
      <nav class="wrap nav" aria-label="Huvudmeny">
        <a class="brand" routerLink="/"><span class="brand-mark" aria-hidden="true">✳</span> Receptarkivet</a>
        <div class="navlinks">
          <a class="navlink" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Hitta recept</a>
          <a class="navlink" routerLink="/inkopslista" routerLinkActive="active">
            Planera & handla @if (store.shoppingCount()) { <span class="tiny">{{ store.shoppingCount() }}</span> }
          </a>
        </div>
      </nav>
    </header>
    <main id="content" tabindex="-1"><router-outlet /></main>
    <footer><div class="wrap footer-row"><div><strong>Receptarkivet</strong><br>En personlig samling av genomtänkta favoriter.</div>
      <div>{{ count }} recept · Favoriter och inköpslista sparas lokalt i webbläsaren</div></div>
    </footer>
    <div class="toast" role="status" aria-live="polite" [class.on]="!!toast.message()">{{ toast.message() }}</div>
  `
})
export class AppComponent {
  readonly store = inject(RecipeStore);
  readonly toast = inject(ToastService);
  readonly count = RECIPES.length;
  private readonly router = inject(Router);
  skipToContent(): void { document.getElementById('content')?.focus(); }
  constructor() {
    // Angular navigation replaces DOM without a full page load. Restore a
    // meaningful keyboard/screen-reader focus target after route changes.
    afterNextRender(() => {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
        requestAnimationFrame(() => document.getElementById('content')?.focus({preventScroll: true}));
      });
    });
  }
}
