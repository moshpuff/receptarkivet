# Ikonsystem – Tabler + Lucide

**Beslutat 2026-11-24.**

Appens primära gränssnittsikoner använder nu utvalda **Tabler Icons (outline)** i samma `app-ui-icon`-komponent som tidigare, medan övriga ikoner fortsätter använda redan installerade Lucide som kompatibel fallback. Syftet är en konsekvent, ren nordisk ikonstil med låg visuell vikt.

## Principer
- En ikonkomponent för hela Angular-appen: `src/app/components/ui-icon.component.ts`.
- Primära Tabler-ikoner: sök, hjärta, korg, kockmössa, klocka, personer, skrivare, vänster-/högerpil, bock, plus, nedåtpil, stäng, filter.
- Storlek anpassas till användningsområde, normalt 16–20 px; linjetjocklek 1,75 för Tabler.
- Ikoner kompletterar kort text och ska inte göra det viktigare receptinnehållet svårare att läsa.
- Dekorativa SVG:er är `aria-hidden`; knappar och länkar behåller synlig text eller tillgänglig `aria-label`.
- Ingen ikonfont, extern CDN, API-nyckel, ny GitHub Action eller ytterligare npm-dependency har införts.
- Om fler ikoner läggs till: prioritera Tabler för nya primära åtgärder, återanvänd befintliga namn och undvik flera ikonfamiljer bredvid varandra i samma kontroll.

## Upphov och licens
De inbäddade Tabler SVG-paths är hämtade från [tabler/tabler-icons](https://github.com/tabler/tabler-icons), MIT-licens. Full licenstext: https://github.com/tabler/tabler-icons/blob/main/LICENSE . Lucide-ikonerna används via det redan installerade `@lucide/angular`.

## Kontroll
Ändringen är bakåtkompatibel med befintliga namn och är begränsad till ikonkomponenten. Kontrollera särskilt ikonernas rendering i Angular-kompilering, navigering, favoritstatus, inköpsknappar, köksläge och mobil före färdig release. Befintliga funktioner ska vara opåverkade.
