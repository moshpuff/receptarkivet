import { Injectable, computed, signal } from '@angular/core';
import { Scale } from './recipe.model';
import { RECIPES } from './recipe-data';

// Samma storage-prefix och datanycklar som den äldre HTML-versionen.
const PREFIX = 'recipebook-';
const KNOWN_IDS = new Set(RECIPES.map(recipe => recipe.id));
function knownUniqueIds(ids: string[]): string[] {
  return [...new Set(ids.filter(id => KNOWN_IDS.has(id)))];
}
function readStored<T>(key: string, fallback: T, valid: (value: unknown) => value is T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    const value: unknown = JSON.parse(raw);
    return valid(value) ? value : fallback;
  } catch {
    return fallback;
  }
}
function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}
function isChecks(value: unknown): value is Record<string, boolean> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) &&
    Object.values(value).every(flag => typeof flag === 'boolean');
}
function isScales(value: unknown): value is Record<string, Scale> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) &&
    Object.values(value).every(scale => scale === 0.5 || scale === 1 || scale === 2);
}
function isStepProgress(value: unknown): value is Record<string, number> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) &&
    Object.values(value).every(step => typeof step === 'number' && Number.isInteger(step) && step >= 0 && step <= 500);
}
function isCookedDates(value: unknown): value is Record<string, string> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) &&
    Object.values(value).every(date => typeof date === 'string' && !Number.isNaN(Date.parse(date)));
}
function isNotes(value: unknown): value is Record<string, string> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) &&
    Object.values(value).every(note => typeof note === 'string' && note.length <= 2000);
}
function saveStored(key: string, value: unknown): void {
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* privat läge */ }
}

@Injectable({providedIn: 'root'})
export class RecipeStore {
  private readonly favoritesState = signal<string[]>(knownUniqueIds(readStored('favs', [] as string[], isStringArray)));
  private readonly shoppingState = signal<string[]>(knownUniqueIds(readStored('bag', [] as string[], isStringArray)));
  private readonly checkedState = signal<Record<string, boolean>>(readStored('checks', {} as Record<string, boolean>, isChecks));
  private readonly scalesState = signal<Record<string, Scale>>(readStored('scales', {} as Record<string, Scale>, isScales));
  // Separat avbockning för inköp och matlagning: att handla en vara ska inte
  // markera ingrediensen som förberedd i köket.
  private readonly boughtState = signal<Record<string, boolean>>(readStored('shopchecks', {} as Record<string, boolean>, isChecks));
  private readonly cookStepsState = signal<Record<string, number>>(readStored('cooksteps', {} as Record<string, number>, isStepProgress));
  private readonly cookedState = signal<Record<string, string>>(readStored('cooked', {} as Record<string, string>, isCookedDates));
  private readonly notesState = signal<Record<string, string>>(readStored('notes', {} as Record<string, string>, isNotes));

  readonly favorites = this.favoritesState.asReadonly();
  readonly shoppingIds = this.shoppingState.asReadonly();
  readonly shoppingCount = computed(() => this.shoppingState().length);
  readonly checked = this.checkedState.asReadonly();
  readonly scales = this.scalesState.asReadonly();
  readonly bought = this.boughtState.asReadonly();
  readonly cooked = this.cookedState.asReadonly();

  isFavorite(id: string): boolean { return this.favoritesState().includes(id); }
  inShoppingList(id: string): boolean { return this.shoppingState().includes(id); }
  isChecked(key: string): boolean { return !!this.checkedState()[key]; }
  scale(id: string): Scale { return this.scalesState()[id] ?? 1; }
  isBought(key: string): boolean { return !!this.boughtState()[key]; }
  cookStep(id: string): number { return this.cookStepsState()[id] ?? 0; }
  cookedOn(id: string): string { return this.cookedState()[id] ?? ''; }
  note(id: string): string { return this.notesState()[id] ?? ''; }

  toggleFavorite(id: string): void {
    this.favoritesState.update(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]);
    saveStored('favs', this.favoritesState());
  }
  toggleShopping(id: string): void {
    if (!KNOWN_IDS.has(id)) return;
    const removing = this.inShoppingList(id);
    this.shoppingState.update(old => removing ? old.filter(x => x !== id) : [...old, id]);
    saveStored('bag', this.shoppingState());
    if (removing) {
      // En ny handling ska inte ärva avbockningar från förra inköpsrundan.
      this.boughtState.update(old => Object.fromEntries(Object.entries(old).filter(([key]) => !key.startsWith(id + '/'))));
      saveStored('shopchecks', this.boughtState());
    }
  }
  resetPrepared(id: string): void {
    if (!KNOWN_IDS.has(id)) return;
    this.checkedState.update(old => Object.fromEntries(Object.entries(old).filter(([key]) => !key.startsWith(id + '/'))));
    saveStored('checks', this.checkedState());
  }
  setChecked(key: string, checked: boolean): void {
    this.checkedState.update(old => ({...old, [key]: checked}));
    saveStored('checks', this.checkedState());
  }
  setBought(key: string, value: boolean): void {
    this.boughtState.update(old => ({...old, [key]: value}));
    saveStored('shopchecks', this.boughtState());
  }
  clearBought(): void {
    this.boughtState.set({});
    saveStored('shopchecks', this.boughtState());
  }
  setCookStep(id: string, step: number, max: number): void {
    if (!KNOWN_IDS.has(id)) return;
    this.cookStepsState.update(old => ({...old, [id]: Math.max(0, Math.min(max, Math.trunc(step)))}));
    saveStored('cooksteps', this.cookStepsState());
  }
  markCooked(id: string, isoDate: string = new Date().toISOString()): void {
    if (!KNOWN_IDS.has(id)) return;
    this.cookedState.update(old => ({...old, [id]: isoDate}));
    saveStored('cooked', this.cookedState());
  }
  setNote(id: string, note: string): void {
    if (!KNOWN_IDS.has(id)) return;
    this.notesState.update(old => ({...old, [id]: note.slice(0, 2000)}));
    saveStored('notes', this.notesState());
  }
  setScale(id: string, value: Scale): void {
    this.scalesState.update(old => ({...old, [id]: value}));
    saveStored('scales', this.scalesState());
  }
}
