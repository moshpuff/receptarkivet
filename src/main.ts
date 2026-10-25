import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideServiceWorker('ngsw-worker.js', {enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000'}), provideRouter([
    {path: '', loadComponent: () => import('./app/pages/home.component').then(m => m.HomeComponent), title: 'Alla recept · Receptarkivet'},
    {path: 'recept/:id', loadComponent: () => import('./app/pages/detail.component').then(m => m.DetailComponent), title: 'Recept · Receptarkivet'},
    {path: 'inkopslista', loadComponent: () => import('./app/pages/shopping.component').then(m => m.ShoppingComponent), title: 'Planera & handla · Receptarkivet'},
    {path: 'laga/:id', loadComponent: () => import('./app/pages/cook.component').then(m => m.CookComponent), title: 'Laga steg för steg · Receptarkivet'},
    {path: '**', redirectTo: ''}
  ], withHashLocation(), withInMemoryScrolling({scrollPositionRestoration: 'top'}))]
}).catch(error => console.error('Receptarkivet kunde inte startas:', error));
