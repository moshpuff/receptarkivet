# Verifieringsrapport – Receptarkivet Angular

Datum: 2026-10-24

## Utförda kontroller (godkända)

- `npm run test:data`: alla 100 recept och ID:n, obligatoriska fält, ingredienter, steg, källor, nutrition och jämförelse mot ursprungliga HTML-filen.
- `npm run test:logic`: källans faktiska TypeScript-funktioner är kompilerade och körda i Node. Alla 100 recept är sökbara på namn och ingredienser; samtliga kategorier, taggar och länder finns i filtren. Mängder och satsstorlekar ½/1/2 har kontrollerats för samtliga ingredienser.
- `npm run test:logic`: favoriter, inköpslista, avbockningar och skalning är testade i simulerad localStorage, inklusive efter omladdning och hantering av ogiltigt äldre innehåll.
- `npm run test:logic`: filtertillstånd kan återställas.
- Syntaxkontroll av webbläsartesternas TypeScript (transpilering utan parse-diagnostik).

## Åtgärdade fel

1. Taggen **Kött** fanns i recepten men inte i taggfiltret. Taggar och kategorier genereras nu automatiskt från receptdata, med en bestämd presentationsordning.
2. Skadade/missformade localStorage-värden kunde krascha appen. De valideras innan användning.
3. Ingredienskommentarer kunde visas på samma rad som mängden, i stället för under. CSS rättad.
4. Dubbel statisk/dynamisk klassbindning på bildytor förenklad.
5. Automatiska logik- och webbläsartester tillagda.

## Inte verifierat i den här miljön

- **Faktisk Angular-byggning:** npm-registret kan inte DNS-resolveras i den här miljön, så Angulars npm-beroenden kan inte installeras.
- **E2E-browsertester av Angular-appen:** Playwright-sviten är skriven men har **inte** körts mot appen; den kräver en körbar Angular-devserver.
- **PWA/offline/installation:** kräver en byggd app servad på localhost eller HTTPS och test i målwebbläsare.
- **Visuell regression på mobil/dator:** kräver att appen går att köra. Kod och responsiva CSS-regler finns, men är inte browserverifierade.

## Gör fullständig verifiering innan HTML-versionen ersätts

På dator eller CI med npm-åtkomst:

```bash
npm install
npx playwright install chromium
npm run test:all
```

`test:all` kör datakontroller, logiktester, ett fullständigt produktionsbygge och E2E-test för desktop och mobil. Enbart efter en godkänd körning kan vi säga att Angular-appen har passerat bygg- och browserverifiering.

## Säkerhetskopiering

Originalets 100 recept ligger kvar oförändrade i `original-Receptarkivet-100.html`, och hela tidigare HTML-versionen ska behållas tills Angular är verifierad.

## Fortsatt granskning samma dag

- Nätverkskontrollen mot `registry.npmjs.org` misslyckades med `EAI_AGAIN`. Det finns fortfarande inga Angular-npm-paket att bygga med i den här miljön. Körning av faktiska `ng build` eller Playwright E2E **har inte skett**.
- `npm run test:data`: godkänt, alla 100 oförändrade recept.
- `npm run test:logic`: godkänt, samtliga 100 recept; även nya testfall för hjälpsamma ingredienskommentarer vid skalning samt sanering av okända/dubbla sparade ID:n.
- `npm run test:static`: godkänt. TypeScript i appkomponenter kontrollerat med en *begränsad offline-deklaration* av Angular API, plus konfiguration, manifest och appikoner. Testet kan inte verifiera Angulars egna typer, templates eller runtime.
- Inköpslistan: receptväljaren går nu att söka i, och listan har ett begränsat scrollområde på små skärmar. Automatisk E2E för sökning och bibehållna ingredienskommentarer har lagts till, men den har inte körts.
- Ytterligare kontroll av uppdaterad PWA-konfiguration mot Angulars officiella dokumentation; inte offline-/installationsverifierad i browser.

**Återstående releasevillkor:** Installera npm-beroenden, bygg med den riktiga Angular CLI:n, kör Playwright i desktop/mobil, prova utskrift, inköpslista och PWA i browser. HTML-originalet förblir den fungerande reservversionen.

- E2E-testernas receptantal är nu dynamiskt så att sviten fortsätter fungera när samlingen växer över 100 recept. PWA-manifestets och sidans beskrivning är också framtidssäkrade utan ett fast antal.

## IA/UX/UI-granskning – 24 oktober 2026

**Utförda ändringar:** Ny sammanhängande resa `Hitta → Planera & handla → Laga → Resultat`; dedikerad `/laga/:id`-rutt; val och satsstorlek i inköpsvyn; avbockning av handlade varor separat från matlagningsingredienser; återställningsknappar; sparade tillagningssteg, lagatdatum och anteckningar; större klick-/touchytor och kompaktare mobilnavigering; bättre fokus- och hash-routerhantering.

**Testat i denna miljö (godkänt):** `npm run test:data`, `npm run test:logic`, `npm run test:static`. De nya logiktesterna verifierar att inköps- och köksstatus inte blandas, att köksprogress och anteckningar sparas vid simulerad omladdning, samt att avbockningar nollställs på rätt sätt.

**Ej verifierat:** Riktig Angular-kompilering (`ng build`), faktiska Playwright-flöden inklusive nya UX-scenarier, mobilvyer renderade av Angular, skärmläsartest, WCAG 2.2 AA-granskning, användartest med hemmakockar och PWA-offline. npm-registret gick inte att nå. Denna kod får därför **inte** beskrivas som en verifierad produktionsapp. Full IA/UX/UI-kvalitet kan inte garanteras enbart genom kodgranskning.

**Utförligare underlag:** `IA_UX_UI_GRANSKNING.md`.


## 24 oktober 2026 – middagshjälp utan nya beroenden

- **Genomförd kodändring:** kompakt middagshjälp direkt på startsidan, 15/30/45/mer, två arbetsnivåer, upp till tre recept per omgång, tydlig koppling till recept och köksläge. Begränsat urval med manuellt kontrollerade tidsgränser. Ingen ny route eller dependency.
- **Godkända körningar:** `npm run test:data`, `npm run test:logic`, `npm run test:static`. Middagshjälpen ingår i logiktesterna, inklusive gränsfallet 15 minuter och oberoende sökfilter.
- **Förberedda men ej körda:** nya Playwright-testfall som kontrollerar föreslagna recept, ”Visa andra”, direktlänk till matlagningsläget och att sökningen inte påverkas.
- **Ej möjligt att köra här:** `npm install`, `npm run build` och `npm run test:e2e`, eftersom `registry.npmjs.org` fortfarande svarar med DNS-felet `EAI_AGAIN`. Detta är ingen fullständig godkänd Angular-kompilering eller användarprovning.
- **Återstår:** riktig Angular-templatekompilering, dator-/mobiltest, manuell tillgänglighetskontroll och användartester.

## Komplettering 25 oktober 2026 – utökat till 116 recept

- 16 recept (#101–116) är inlagda i `src/data/recipes.json`. De nya recepten är redaktionellt sammanställda och inte separat provlagade.
- `npm run test:data` **GODKÄNT**: 116 unika ID:n; ingredienser, steg, käll-URL:er, taggar, näringsvärden och shoppingtips; originalrecept 1–100 är oförändrade enligt HTML-baslinjen.
- `npm run test:logic` **GODKÄNT**: sökning, receptfilter, portionsskalning, lagerstatus, favoriter, köksläge, måltidsrekommendationer, skydd mot felaktig lokal lagring.
- `npm run test:static` **GODKÄNT**: TypeScript med Angular-dubblar, PWA-konfiguration, ikoner och manifest.
- Middagshjälpen omfattar nu kyckling teriyaki, fläskfilégryta, broccolisoppa, Club Sandwich och karrékotletter i ugn, med dokumenterade totala tidsgränser. Tidsjämförelsetestet skiljer aktiv arbetstid från totaltid.
- **Ej verifierat:** komplett `ng build`, körning i Angular-runtime, mobil- och datorbrowsertester samt faktisk service worker. npm-registret svarar med `EAI_AGAIN` i denna miljö och Angular-paketen går inte att installera här. Användaren ska inte tolka statiska tester som ett godkänt produktionsbygge.
- Ingen publicering eller Cloudflare-ändring är gjord. Tidigare HTML-säkerhetskopia finns kvar.

### Äldre dataskillnader som noterats (ej ändrade)

I de 100 ursprungliga recepten finns tre tidigare skillnader mellan `nutrition.servings` och receptens standardantal enligt `yields`: Ryttarkaka 22 mot 20, Kladdkaka 12 mot 10 och Brownies 16 mot 12. De är bevarade i originalskick enligt projektets migrationsprincip och bör granskas separat innan uppgifterna anges som exakta näringsvärden per bit. Samtliga nya recept 101–116 har matchande antal.
