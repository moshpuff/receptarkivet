// Test-dubbelns typer används ENDAST av de beroendefria logiktesten.
// De ingår aldrig i Angulars applikationskompilering (tsconfig.app.json).
declare module '@angular/core' {
  export function Injectable(options: { providedIn?: string }): ClassDecorator;
  export interface TestSignal<T> {
    (): T;
    set(next: T): void;
    update(updater: (old: T) => T): void;
    asReadonly(): () => T;
  }
  export function signal<T>(initial: T): TestSignal<T>;
  export function computed<T>(expression: () => T): () => T;
}
