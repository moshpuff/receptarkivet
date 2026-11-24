# Ikonsystem – Tabler Icons

**Beslutat 2026-11-24 · Uppdaterat för endast Tabler Icons.**

Samtliga ikoner i Receptarkivets gränssnitt levereras nu av **Tabler Icons (outline)** genom en enda Angular-komponent: `src/app/components/ui-icon.component.ts`.

## Regler

- **Endast Tabler Icons.** Ingen Lucide-fallback eller annan ikonfamilj för gränssnittet.
- **Stroke 2** för samtliga ikoner, med rundade linjeändar och hörn.
- Vanligtvis 16–20 px, större där semantik eller användning kräver det.
- Ikoner är diskreta visuella stöd, inte dekor som konkurrerar med receptbilder eller text.
- Ikonens interna SVG är `aria-hidden`; knappar/länkar ska ha en synlig etikett eller `aria-label`.
- För att lägga till nya ikonvarianter: hämta motsvarande `icons/outline/<name>.svg` från Tablers officiella repository och lägg till en `@case` i komponenten. Bevara komponentens befintliga ikon-namn som används i appen.
- SVG:erna är inbäddade lokalt: ingen CDN, ikonfont, ytterligare npm-dependency eller extern runtime-begäran.

## Tillgängliga namn

`search`, `heart`, `basket`, `chef`, `clock`, `users`, `printer`, `left`, `right`, `check`, `plus`, `refresh`, `done`, `down`, `external`, `close`, `copy`, `cook`, `bookmark`, `filter`.

Därutöver finns små Tabler-kategorisymboler för råvaror och köksutrustning, med interna namn som börjar med `i-` respektive `t-`. Dessa används av `recipe-presentation.ts` och beskrivs i [Ingredienser och utrustning](INGREDIENSER_OCH_UTRUSTNING.md). Alla har stroke 2.\n\n## Licens\n
SVG-vägarna är hämtade från [tabler/tabler-icons](https://github.com/tabler/tabler-icons), MIT-licens. [Licenstext](https://github.com/tabler/tabler-icons/blob/main/LICENSE).

## Status

Komponenten har bytts till enbart Tabler, och oanvända `@lucide/angular` har tagits bort från `package.json`. Repo innehåller ingen `package-lock.json`, så ingen låsfil behövde uppdateras.

**Återstår:** kör Angular-bygge och browser-tester för att verifiera alla ikoner och knappar i applikationen. Den statiska implementationen är inte liktydig med godkänt produktionstest.
