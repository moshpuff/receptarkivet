# Receptarkivet – Designsystem

**Version 1.0 · 2026-11-24**

## Vision
Minimalistisk, lättskannad och tillgänglig receptapp där informationen är tydlig och maten står i centrum. Appen fungerar som en ljus, varm och nedtonad inramning för den lite mörkare **Nordic Restaurant Editorial**-bildstilen i [bildstandarden](expert/BILDSTANDARD.md).

## Grundpalett
| Token | Hex | Användning |
|---|---|---|
| Charcoal | `#202220` | Primär text, primära kontroller, mörka ytor |
| Warm Ivory | `#F4F2ED` | Bakgrund |
| Stone | `#D8D5CD` | Avdelare och diskreta gränser |
| Sage Grey | `#A6AFA0` | Lågmälda accenter, inte liten text på Ivory |

**Kompletterande funktionella toner:** `#FAF9F6` (surface), `#525950` (sekundär text), `#34483A` (mörk grön accent), `#315C46` (fokus). Sage Grey har otillräcklig kontrast som liten brödtext på Ivory och ska då ersättas av sekundär textfärg. Kontrast ska valideras för varje tillstånd och bild-overlay.

## Typografi, proportioner och komponenter
- Rubriker: Fraunces Variable, sparsamt för karaktär.
- Brödtext, ingredienser, tider, formulär: DM Sans Variable för läsbarhet.
- Text före dekor; tydlig huvudrubrik, sammanfattning, tid/portioner, ingredienser och steg.
- Håll ytor rena; använd luft och avdelare före tung skugga eller onödiga kort-i-kort.
- Komponenter återanvänder CSS-variabler i `src/styles.css`; undvik nya ad hoc-hexkoder.
- Viktiga interaktioner har minst 44px praktisk tryckyta där möjligt, synlig tangentbordsfokus och korrekta tillstånd.
- Receptbilder: 4:3 kortyta som grund, 3:2 detaljbild där nuvarande layout använder det; undvik att central servering kapas. Lägg inte text över mat när det går att placera utanför.

## Sidornas informationshierarki
1. **Hitta recept:** varumärke, enkel sökning, relevanta filter och välkomponerade receptkort. Få visuella distraktioner.
2. **Receptöversikt:** bild → namn → tid/grundmetadata, med diskret favoritkontroll.
3. **Receptdetalj:** hero-bild → titel/beskrivning → portioner/tid → ingredienser och arbetsgång → tips, källor och frivillig restauranguppläggning. På mobil först tydlig överblick sedan logisk läsordning.
4. **Köksläge:** större läsbarhet, tydliga steg och kontroller, säker navigation och framsteg som inte tappas.
5. **Inköpslista:** en samlad och lätt avbockningsbar lista; ingen styling får minska informationstätheten eller försvåra användning.

## Koppling bild ↔ app
Bildskapandet utgår från receptets faktiska innehåll och `docs/expert/BILDSTANDARD.md`. Låt rena appytor kontrastera mot mörkare restaurangfotografi. Kameravinkel, tallrik, material och komposition varierar; hela tallriken ska normalt synas med luft runt. Visuell konsekvens betyder gemensam kvalitet, inte identiska bilder.

## Införande
**Genomfört:** grundläggande design tokens, ljus palett, receptkorts-/bildytor, knappar, avdelare, fokuskontroller och browser theme color. Det är en första kodändring, inte en fullständig designmässig ombyggnad.

**Kvar att verifiera/förbättra:** verkliga desktop- och mobilskärmbilder, kontrast i alla tillstånd, texters avklippning, responsiva bildutsnitt, samtliga sidors detaljer, mörkt läge (inte infört), köksläge och användartester. Inga receptdata ändras av denna designstandard. Behåll funktionaliteten i köksläge, sök, favoriter och inköpslista.

**Testning:** kör `npm test` och `npm run test:e2e` i en utvecklingsmiljö med beroenden installerade innan en release bedöms som fullt kvalitetssäkrad.
