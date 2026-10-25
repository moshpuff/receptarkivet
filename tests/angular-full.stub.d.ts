/* Offline structural type check only. NOT Angular's real compiler nor template checker.
   The actual npm packages must be used for the release build. */
declare module '@angular/core' {
  export interface Signal<T> {(): T}
  export interface WritableSignal<T> extends Signal<T> {
    set(value:T): void;
    update(updater:(value:T)=>T):void;
    asReadonly():Signal<T>;
  }
  export function Component(metadata:unknown): ClassDecorator;
  export function Injectable(metadata:unknown): ClassDecorator;
  export function Input(options?:unknown): PropertyDecorator;
  export function inject<T>(token:new (...args:any[])=>T):T;
  export function computed<T>(fn:()=>T):Signal<T>;
  export function signal<T>(initial:T):WritableSignal<T>;
  export function isDevMode():boolean;
  export function afterNextRender(fn:()=>void):void;
}
declare module '@angular/core/rxjs-interop' {
  import {Signal} from '@angular/core';
  export function toSignal(value:unknown):Signal<{get(name:string):string|null}|undefined>;
}
declare module '@angular/router' {
  export class ActivatedRoute {paramMap:unknown}
  export class RouterLink {}
  export class RouterLinkActive {}
  export class RouterOutlet {}
  export class NavigationEnd {}
  export class Router { events:{pipe(...operators: unknown[]): {subscribe(fn: (event: unknown)=>void): void}} }
  export function provideRouter(routes:unknown[], ...features:unknown[]):unknown;
  export function withHashLocation():unknown;
  export function withInMemoryScrolling(config:unknown):unknown;
}
declare module '@angular/platform-browser' {
  export function bootstrapApplication(component:unknown, options:unknown):Promise<unknown>;
}
declare module '@angular/service-worker' {
  export function provideServiceWorker(script:string, config:unknown):unknown;
}

declare module 'rxjs' { export function filter(predicate: (value: unknown)=>boolean): unknown; }
