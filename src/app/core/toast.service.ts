import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ToastService {
  readonly message = signal('');
  private timeout?: ReturnType<typeof setTimeout>;
  show(text: string): void {
    if (this.timeout) clearTimeout(this.timeout);
    this.message.set(text);
    this.timeout = setTimeout(() => this.message.set(''), 2800);
  }
}
