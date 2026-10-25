import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home.component';
import { DetailComponent } from './app/pages/detail.component';
import { ShoppingComponent } from './app/pages/shopping.component';
import { CookComponent } from './app/pages/cook.component';

bootstrapApplication(AppComponent, {
  providers: [provideServiceWorker('ngsw-worker.js', {enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000'}), provideRouter([
    {path: '', component: HomeComponent, title: 'Alla recept · Receptarkivet'},
    {path: 'recept/:id', component: DetailComponent, title: 'Recept · Receptarkivet'},
    {path: 'inkopslista', component: ShoppingComponent, title: 'Planera & handla · Receptarkivet'},
    {path: 'laga/:id', component: CookComponent, title: 'Laga steg för steg · Receptarkivet'},
    {path: '**', redirectTo: ''}
  ], withHashLocation(), withInMemoryScrolling({scrollPositionRestoration: 'top'}))]
}).catch(error => console.error('Receptarkivet kunde inte startas:', error));
