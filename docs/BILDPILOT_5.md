# Receptarkivet – bildpilot med fem motiv

**Uppladdat:** 25 oktober 2026.

Fem AI-genererade motiv finns i `public/recipe-images/` som kompletta bildpar med `<id>-card.webp` (640 × 480 px) och `<id>-hero.webp` (1200 × 800 px):

| Recept-ID | Motiv |
| --- | --- |
| `carbonara` | Pasta carbonara med guanciale, pecorino och svartpeppar |
| `fish-and-chips` | Friterad fisk, pommes, citron och tartarsås |
| `creme-brulee` | Crème brûlée med karamelliserat socker och krämig insida |
| `philly-cheesesteak` | Entrecôte, stekt lök och smält ost i subbröd |
| `tiramisu` | Mascarpone, kaffedoppade savoiardikex och kakao |

## Viktig begränsning

Det här är **förhandsversioner**, inte färdiga individuellt fotograferade eller genererade receptbilder. Motiven har beskurits ur ett AI-genererat kollage (varje källruta cirka 368 × 240 pixlar) och sedan skalats upp till målformatet. De uppfyller filernas mått och format men **inte** samma verkliga detaljskärpa som bildfiler gjorda direkt i hög upplösning.

Bilderna är märkta som AI-illustrationer i appen och får inte beskrivas som foton av provlagad mat. Varje separat originalbild behöver granskas mot receptets synliga ingredienser och uppläggning innan den ersätter piloten.

## Tekniskt

De fem motiven är inkluderade i `scripts/generate-recipe-image-index.mjs`. Skriptet registrerar ett recept endast om både kortbild och detaljbild finns och har WebP-signatur. Saknas något faller appen tillbaka på sin befintliga emoji. Bilderna belastar inte receptdata och kräver inga nya paket.

## Fortsättning

Generera en individuell högupplöst bild per recept med varierad kameravinkel, porslin, uppläggning och ljussättning. Säkerställ recepttrogen garnityr och korrekt beskärning i både kort- och detaljformat. Se `docs/RECEPTBILDER_STILGUIDE_OCH_PILOT_10.md`.
