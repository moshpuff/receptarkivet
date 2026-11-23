# Receptarkivet – Angular

Receptarkivet är migrerat från en fristående HTML-receptbok till ett Angular-projekt med **257 recept**. Recept, ingredienser, instruktioner, källor, näringsvärden och inköpsråd finns i `src/data/recipes.json`. Den äldre HTML-versionen med 100 recept ligger kvar i `original-Receptarkivet-100.html` som säkerhetskopia. Av de ursprungliga 100 recepten har kladdkaka och fisk med äggsås medvetet vidareutvecklats.

## Redaktionell princip: alla recept kan förbättras

Alla **239 recept** är levande recept – även de ursprungliga 100 får uppdateras när bättre research, kockkunskap, provlagning eller användarfeedback visar på förbättringar. Det gäller ingredienser, mängder, metod, tid, smak, tillbehör och instruktioner. Ingen historisk identitetskontroll hindrar innehållsändringar.

Vi bevarar stabila recept-ID:n för appens favoriter och receptkopplingar, och behåller den äldre HTML-filen som historisk säkerhetskopia (inte som ett låst kvalitetsfacit). GitHubs automatiska tester kontrollerar i stället att receptdata är komplett och att appen fortfarande fungerar. Förbättringar ska dokumenteras och genomgå research och kvalitetskontroll enligt [redaktionell standard](docs/expert/REDAKTIONELL_STANDARD.md); schemalagd expertgranskning föreslår ändringar och publicerar inte utan godkännande.

## Tillägg 248–257 – tio nya restauranginspirerade rätter och nitton vidareutvecklingar (24 november 2026)

Efter användarens 32 val från Pappa Grappa, Östgöta Kök, Grazie Pasteria & Deli, Taverna Averna, Tavolo, Restaurang Familjen, Bistro Bestick, Urban Deli och Bouchon har Receptarkivet nu **257 recept**.

**Tio nya hemmarecept:** Burrata med sotad persika; Rigatoni med oxfilé, svamp och tryffel; Tortelloni med kantarell och Västerbottensost; Varmrökt lax med sauce verte; Ćevapi med ajvar och vitlökssås; Grillad kyckling med örtslungad penne; Laxcannelloni med béchamel och tomat; Flanksteksmörgås med jalapeñomajonnäs; Fläskkotlett med shiitake, potatiskroketter och grönpepparsås; Rårakor med kallrökt lax och citronkräm.

Pappa Grappas och Grazies oxfilépastor har sammanförts till ett recept och köttbulleinspirationen från Östgöta Kök och Bistro Bestick till ett gemensamt förbättringsspår. Salsicciapastans rödvin och fänkål kombineras som en valfri variant. **Nitton befintliga recept** fick totalt nitton frivilliga serverings- eller teknikspår (med kvantiteter i recepttips), utan att deras grundmetoder raderades eller deras stabila ID:n ändrades. Rårakor är ett nytt recept, eftersom råraka inte är samma sak som raggmunk.

**Status:** Samtliga nya recept är självständiga, källjämförda hemmaversioner, **inte provlagade, blindtestade eller verifierade restaurangrecept**. De frivilliga tillvalsvarianterna i `tips` inkluderas **inte automatiskt** i receptets inköpslista eller basnutrition. Receptens näringsvärden är uppskattningar, inte fullständigt verifierade näringsberäkningar. En Bosnien och Hercegovina-flagga har tillkommit för ćevapi. Ingen ny automation eller GitHub Action.

Se [hela beslutsregistret, 32 nummer, källjämförelser, säkerhetskrav och provlagningsplan](docs/expert/RESTAURANGURVAL_32_RATTER_2026-11-24.md).

## Tillägg 243–247 – samtliga 25 Hemma Hos-inspirationer omhändertagna (23 november 2026)

Fem nya självständiga, restauranginspirerade hemmarecept: **Mezze maniche med kyckling och bacon**, **Ravioli med kalvfärs och pepparparmesansås**, **Briefylld kyckling med lufttorkad skinka**, **Chèvre chaud med frasig polenta** och **Tillagad bifftartar med tryffelchips**. Den sista är medvetet en **genomlagad tartar, inte råbiff**, med hänvisning till Livsmedelsverkets riskråd för rått nötkött. Samtliga 25 rätter i andra menyomgångens fyra bilder har nu matchats mot arkivet: som nytt recept, dokumenterat toppingalternativ, valfri serveringsvariant eller redan befintligt motsvarande recept.

Nio nya frivilliga serveringsvarianter har lagts som tips på sju befintliga recept: svamprisotto (2), fläskschnitzel (1), fiskgryta (1), Mac & Cheese (1), Caesarsallad (2), chèvre chaud (1) och Västerbottensostpaj (1). Alla andra 235 befintliga recept från föregående version är oförändrade. Receptarkivet omfattar nu **247 recept**, alla med unika och stabila ID:n.

**Status:** källjämförda och redaktionellt formulerade, **inte provlagade** eller oberoende expertgodkända. Tillvalsvarianter i `tips` inkluderas ännu inte automatiskt i appens inköpslista eller nutrition; basversionen används där. Ingen ny GitHub Action eller schemaläggning har införts.

Se [slutredovisning med alla 25 menyrätter, källor och kvalitetsgrindar](docs/expert/HEMMA_HOS_SLUTFORANDE_2026-11-23_243-247.md).

## Tillägg 240–242 – nya restauranginspirerade favoriter (23 november 2026)

Tre nya självständiga hemmarecept efter fortsatt menyresearch: **Linguine med räkor och hummersås** (240), **Frasig flatbread – chèvre bianco** (241) och **Rödbetstartar med tryffelchips** (242). Flatbread har **sex sammanlagt** tydliga toppingalternativ (chèvre, Margherita, räkor, svamp, spianata och Fem gubbar) i ett sammanhållet recept. Huvudversionen chèvre används i inköpslista och näringsberäkning; andra toppings har separata mängder i recepttips men läggs ännu inte automatiskt till i inköpslistan.

Recepten är källjämförda med svenska och internationella kock-/receptsidor och innehåller svenska inköpsmått, konkreta steg, ungefärlig nutrition, diabetesanpassning och inköpsråd. **De är ännu inte praktiskt provlagade eller oberoende expertgodkända**, och de ska inte beskrivas som verifierade restaurangkopia. De tidigare 239 recepten är oförändrade. Katalog och expertkö uppdateras utan nya automatiska körningar.

Se [research, kompromisser och provlagningsplan för recept 240–242](docs/expert/NYA_RECEPT_2026-11-23_240-242.md) och [inventeringen av 25 ytterligare menyrätter](docs/expert/HEMMA_HOS_MENYINSPIRATION_2026-11-23.md).

## Hemma Hos Norrköping-inspirerade recept 231–239 (november 2026)

Nio självständiga hemrecept inspirerade av smakkombinationer från en äldre meny hos Hemma Hos Norrköping: gratinerat vitlöksbröd med parmesan, okonomiyaki med räkor, chèvre chaud med rödbetor, chili cheese-gratinerad kyckling, fläskschnitzel med tartarkräm och syltad lök, fiskgryta med hummersås, saltkolapaj med lingoncoulis, brownie med vispad hallonpannacotta och nyponsoppa med vaniljbavaroise. Arkivet omfattar nu **239 unika recept**.

Fyra befintliga recept får valfria serverings- och testtips: Toast Skagen, köttbullar med mos, Boeuf Bourguignon och Pavlova. Crème brûlée lämnas oförändrad. Inga andra befintliga recept ändras. Expertindex och granskningskön hålls synkroniserade. De nya recepten är **researchbaserade, inte provlagade och inte restaurangernas verifierade originalrecept**.

Se [research och kvalitetsunderlag](docs/expert/HEMMA_HOS_NORRKOPING_RESEARCH_2026-11-23.md).

## Tillägg 223–230 – åtta kompletterande favoriter (november 2026)

Ytterligare åtta efterfrågade recept: Skomakarlåda, kroppkakor i småländsk stil, japanska gyoza/potstickers, vegetarisk linsbolognese, broccolipaj med lagrad ost, vitvinssås till fisk, snickerskaka och källarfranska.

Receptarkivet omfattar nu **230 recept**. Recept 1–222 är oförändrade. Nya recept innehåller svenska inköpsmått, skalbara ingredienser, arbetsmoment med konkreta temperatur-/konsistenskriterier, tips, källor, ungefärlig nutrition och relevanta tillbehörskopplingar. Expertkatalog och granskningskö synkroniseras. **Inga nya recept är praktiskt provlagade eller oberoende expertgodkända.**

Se [research- och kvalitetsunderlag för recept 223–230](docs/expert/NYA_FAVORITER_2026-11-23_223-230.md).

## Tillägg 215–222 – åtta nya favoriter (november 2026)

Efter användarens godkännande har åtta nya recept lagts till: krämig potatissallad, coleslaw, krämig pastasallad med kyckling, vegetariska zucchinibiffar med feta, Pinocchiotårta/Brittatårta, chokladbiskvier, kardemummabullar och rabarberpaj med smuldeg.

Arkivet har nu **222 recept**. Varje recept har svenska inköpsmått, justerbara satser, arbetsmoment, tips, källor och uppskattad nutrition. Befintliga 214 recept har behållits semantiskt oförändrade. Tillbehören är länkade till relevanta huvudrätter. Katalog och expertgranskningskö är synkroniserade. **De nya recepten är researchbaserade men inte separat provlagade eller oberoende expertgodkända.**

Se [redaktionellt researchunderlag för recept 215–222](docs/expert/NYA_FAVORITER_2026-11-23_215-222.md).

## Tillägg 201–214 – fjorton efterfrågade favoriter (november 2026)

Receptarkivet innehåller nu **214 recept** efter ytterligare fjorton tillägg: Kyckling Cashew, krämig Salsicciapasta, indisk Daal, Shakshuka, torskrygg med Sandefjordsås, jordgubbstårta, risgrynsgröt, vegetarisk lasagne med spenat och ricotta, havregrynsgröt, Minestronesoppa, Tonkatsu, hemgjord vaniljsås, Pico de Gallo och burrito med kryddig färs och ris.

Recepten är källjämförda hemmaversioner med svenska mått, portionering, steg, inköpsråd, ursprung, källor och avrundad uppskattad nutrition. De exakta versionerna är ännu inte separat provlagade och är inte markerade som expertgodkända. Ursprungliga 200 recept är bevarade. Två lokala SVG-flaggor (Norge och Tunisien) tillkommer. Expertkatalog och granskningskö synkroniseras.

Se [researchunderlag för 14 favoriter](docs/expert/NYA_FAVORITER_2026-11-23_201-214.md) för avvägningar, källor och planerad provlagning.

## Såser, dressingar & röror (recept 150–173)

En helt ny kategori med **24 fristående recept** – 7 varma såser, 7 kalla såser/dippar, 5 internationella smaksättare och 5 röror/dressingbaser. Alla har fullständiga ingredienser, svenska mått, tydliga steg, uppskattat näringsvärde, källor, inköpstips och förvaringsråd.

**Varma:** Bearnaisesås, pepparsås, rödvinssås, gräddsås, svampsås, hollandaisesås, brunsås.

**Kalla:** Aioli, tzatziki, vitlökssås, vit kebabsås, ranchdressing, romsås, remouladsås.

**Internationella:** Pesto Genovese, chimichurri, guacamole, hummus, BBQ-sås.

**Röror/dressingbaser:** Skagenröra, tonfiskröra, hamburgerdressing, caesardressing, majonnäs.

Varje nytt recept innehåller valda `pairings` till befintliga rätter och dessa visas som **klickbara ”Passar till”** i receptvyn. Befintliga maträtter visar i gengäld passande nya såser. Detta påverkar inte de specialanpassade såsrecept som redan är inbyggda i maträtterna – de finns kvar oförändrade.

**Kvalitetsstatus:** Recepten är nya, källjämförda hemversioner. De exakta formuleringarna är inte separat provlagade och de ungefärliga näringsvärdena är inte laboratorieverifierade. Vid ny expertgranskning ska de utvärderas och förbättras efter godkännande.

## Tillägg 174–183 – tio populära favoriter (november 2026)

Efter research bland svenska och internationella receptkällor tillkom tio efterfrågade recept:

| Nr | Recept | Kategori |
|---:|---|---|
| 174 | Chicken Tikka Masala | Världens kök |
| 175 | Saftigt bananbröd | Bakverk & fika |
| 176 | Thai Red Curry med kyckling | Världens kök |
| 177 | Overnight Oats – grundrecept | Frukost & brunch |
| 178 | Basque Burnt Cheesecake | Efterrätter |
| 179 | Svensk pannpizza i långpanna | Pasta & pizza |
| 180 | Hasselbackspotatis | Bröd & tillbehör |
| 181 | Chicken Fajitas | Snabbmat & street food |
| 182 | Klassisk marängsviss | Efterrätter |
| 183 | Hemgjord krispig granola | Frukost & brunch |

Varje nytt recept innehåller anpassade svenska inköpsmått, arbetsmoment med praktiska kännetecken, källor, uppskattat näringsvärde per portion eller bit, typ 2-diabetesanpassning och inköpsråd. **De exakta receptversionerna har inte provlagats separat**, och näringsvärdena är inte laboratorieverifierade. De nya recepten är upptagna i expertens granskningskö.

Spaniens flagga har tillkommit för baskisk cheesecake. Inga äldre recept eller existerande GitHub Actions har ändrats för att lägga till dessa recept.

## Receptarkivet Expert – systematisk receptkvalitet

Receptarkivet har en separat, **schemalagd ChatGPT-expertgranskning** (normalt en gång per vecka) med målet **fantastisk smak, rätt konsistens, enkla hemmametoder och kristallklara instruktioner**. Den omfattar djup research, kritisk kvalitetskontroll, praktisk matlagning, säkra metoder och granskning av svenska råvaror. Publicerade recept ändras **aldrig** utan användarens godkännande.

Läs [redaktionell standard och fullständigt arbetssätt](docs/expert/REDAKTIONELL_STANDARD.md). Därifrån används också [kulinarisk kunskapsbank](docs/expert/KUNSKAPSBANK.md), [granskningsregister](docs/expert/GRANSKNINGSREGISTER.json) och [kompakt receptkatalog](docs/expert/KATALOG.json). Inga tidigare recept har ändrats för att införa systemet.

Katalog och registrering kan kontrolleras manuellt **utan API-kostnad eller ny GitHub Action**:

```bash
node scripts/expert-catalog.mjs --check
node scripts/expert-catalog.mjs --queue
node scripts/expert-catalog.mjs --write  # vid tillägg/ändring av recept
```

Kunskapen byggs upp i versionshanterade filer *när förslag godkänns*. ChatGPT tränas inte om av varje körning. Schemalagd granskning nyttjar den befintliga prenumerationens användningsgränser.

## UX och designriktning

Den [aktuella UX-granskningen från 8 november 2026](UX_REVIEW_2026-11-08.md)
dokumenterar informationsarkitektur, mobil-/desktop-wireframes, ändringar i
filter och navigation, den sammanslagna inköpslistan samt kvarvarande behov
för köksläget och användartester. Den äldre filen
[IA_UX_UI_GRANSKNING.md](IA_UX_UI_GRANSKNING.md) är historisk.

## Kom igång

Kräver Node.js **22.12+** (eller annan version som stöds av Angular 21) och npm. Läs [Angulars versionskrav](https://angular.dev/reference/versions).

```bash
npm install
npm run test:data
npm run test:logic
npm run test:static
npm start
```

Öppna `http://localhost:4200/`.

Bygg för publicering:

```bash
npm run build
```

Byggfilerna hamnar i `dist/receptarkivet/browser/`. Lägg innehållet på ett HTTPS-webbhotell (t.ex. Cloudflare Pages, GitHub Pages eller liknande). Detta är en vanlig webbapp; **öppna inte `src/index.html` direkt som en fil**. För GitHub Pages under en repo-sökväg kan `npx ng build --base-href /REPO-NAMN/` behövas, och PWA-installationen ska kontrolleras från den faktiska publicerade adressen.

## Produktupplevelse – planering, matlagning och resultat

UX-versionen inför ett tydligt flöde: **Hitta recept → Planera & handla → Laga steg för steg → Spara resultat**. Inköpslistan går att bocka av och har separat lagring från kökschecklistan. Recept har nu ett dedikerat köksläge (`/#/laga/:id`) med sparat stegframsteg och möjlighet att markera lagat och spara egna anteckningar lokalt.

Läs [`IA_UX_UI_GRANSKNING.md`](IA_UX_UI_GRANSKNING.md) för målgrupp, informationsarkitektur, prioriteringar, användartestplan och kvarvarande brister. **Angular-projektet byggs och publiceras via GitHub Actions, men omfattande verkliga användartester och tillgänglighetsgranskning återstår.**

## Teknisk struktur

| Fil eller mapp | Ansvar |
|---|---|
| `src/data/recipes.json` | Allt receptinnehåll, 173 recept; 98 historiska recept oförändrade, 2 senare förbättrade |
| `src/app/core/recipe.model.ts` | Typer för recept, ingredienser, näringsvärden |
| `src/app/core/recipe-format.ts` | Söknormalisering, portionsskalning, måttformat |
| `src/app/core/recipe-store.service.ts` | Favoriter, inköpslista, avbockade ingredienser, satsstorlekar |
| `src/app/core/catalog-filters.service.ts` | Delat tillstånd för receptsökning och filter |
| `src/app/components/recipe-card.component.ts` | Återanvändbart receptkort |
| `src/app/pages/home.component.*` | Startsida, sökning, kategorier, taggar, ursprung |
| `src/app/pages/detail.component.*` | Receptvyn och portionsskalning |
| `src/app/pages/shopping.component.*` | Planering, receptval, portionsskalning, inköpsavbockningar, kopiering och utskrift |
| `src/app/pages/cook.component.*` | Köksläge, stegprogress, ingredienser, lagat-datum och egna anteckningar |
| `src/styles.css` | Befintlig design, anpassad för Angular-komponenter |
| `ngsw-config.json` | Angular service worker för offlinecachning efter första laddning |

**Receptdata är inbyggda i appen**, så ingen databas eller server behövs för dagens funktioner. Sökning, favoriter, portionsskalning, inköpslista, ursprung, källor och näringsvärden är migrerade. På inköpslistan finns en sökruta som filtrerar bland 100+ recept och ett rullbart receptval. Ingredienskommentarer visas även vid halv/dubbel sats; om en kommentar innehåller grundsatsens mått markeras den som sådan. Navigering använder hash-länkar (`#/recept/<id>`) så att redan delade receptlänkar är kompatibla, och för att förenkla statisk hosting.

## LocalStorage och migrering från HTML-filen

Lagringsnycklarna är fortfarande `recipebook-favs`, `recipebook-bag`, `recipebook-checks` och `recipebook-scales`. Om appen publiceras på **samma origin** används tidigare sparade val automatiskt. Om du går från `file://` till en HTTPS-adress eller byter domän delas **inte** LocalStorage mellan adresser; då börjar den nya appen med tomma lokala val. Recepten påverkas inte. Både ursprungsversionen och Angular-versionen finns därför kvar så att inget innehåll behöver gå förlorat.

## Offline/PWA

Appen innehåller web manifest och Angulars service worker. Efter första besöket på en HTTPS-adress kan resurserna lagras lokalt och appen fungera offline. Dev-servern (`ng serve`) registrerar **inte** service workern. Testa offline med produktionsbygget hostat över HTTPS eller localhost. Installerbarheten varierar mellan webbläsare och ska testas på målenheten.

## Nytt recept

Lägg till ett nytt unikt `id` och komplett receptobjekt sist i `src/data/recipes.json`. Receptet visas automatiskt i översikten, sökning och filter. Kör:

```bash
npm run test:data
npm run build
```

Automatisk test av receptdata verifierar schema, unika ID:n, URL-struktur, ingredienser, näringsvärden och att de ursprungliga 100 recepten fortfarande matchar HTML-säkerhetskopian.

## Automatiska tester

`npm run test:static` validerar Angular-konfiguration, PWA-manifest och appikoner samt gör en begränsad TypeScript-kontroll med testdubblar när Angular-paket saknas. Detta ersätter inte den riktiga Angular-kompileringen.

`npm run test:logic` testar riktig TypeScript-logik för recept, sökning, dynamiska taggar/kategorier,
portionsskalning, favoriter, inköpslista, avbockning och localStorage. Angulars signals och
beroendeinjektion ersätts enbart i Node-testerna med en liten testdubbel.

När npm-paket kan installeras:

```bash
npm install
npx playwright install chromium
npm run test:all
```

`npm run test:all` kör data- och logiktester, produktionsbyggning och Playwright-test av
recept, filter, favoriter, inköpslista, portionsskalning, kopiering, utskrift och mobilvy.
Se [`VERIFIERING.md`](VERIFIERING.md) för exakta testresultat och begränsningar.

## Verifiering och begränsning

Den här leveransen har genomgått strukturella datatester, kompilering och exekvering av appens rena TypeScript-logik, men **inte** en fullständig `ng build` eller browser/end-to-end-test i leveransmiljön, eftersom npm-registret inte gick att nå för installation av Angular-beroendena. Innan appen ersätter den befintliga HTML-receptboken ska den byggas och testas i en miljö med npm-åtkomst. Ingen publicering eller förändring av en befintlig webbplats har gjorts.

## Tidigare granskning (24 oktober 2026)

Koden har kompletterats med sökbar, rullbar receptväljare i inköpslistan, bibehållna ingredienskommentarer vid portionsskalning och sanering av ogiltiga/dubbla sparade recept-ID:n. Samtliga data-, logik- och offlinekontroller har passerat. `npm run build` och Playwright mot Angular-appen är **fortfarande inte utförda**, då `registry.npmjs.org` inte kan DNS-resolveras från arbetsmiljön. Se `VERIFIERING.md`. Cloudflare-publicering är inte gjord.


## IA/UX/UI-förbättring (24 oktober 2026)

Utöver tidigare logikgranskning har projektet fått en ny köksvy, planerings- och inköpsflöde med separata avbockningar samt sparade tillagningsanteckningar. Ett dedikerat UX-dokument beskriver flöden och kvarvarande kontrollpunkter. Nya logiktester har körts och passerat. Nya Playwright-scenarier har skrivits för hela användarresan men **har ännu inte körts** eftersom npm-installation saknas i miljön. Ingen publicering.


## Middagshjälpen – en lättviktig genväg (24 oktober 2026)

Startsidan innehåller nu **”Vad ska vi äta ikväll?”**, ett kompakt beslutsstöd utan extra route, databas, AI-anrop eller nya npm-beroenden. Två val räcker: **tid till maten är klar** (15/30/45 minuter eller mer) och **ork** (få moment eller lite mer matlagning). Appen visar upp till tre tydligt namngivna förslag, möjlighet att visa nästa omgång och länkar både till receptet och direkt till köksläget. Vanlig sökning, kategorier, favoriter och inköpslista finns kvar utan ändringar.

Urvalet är medvetet **redaktionellt granskat**, inte en opålitlig tolkning av fri text. `src/app/core/dinner-recommender.ts` innehåller en liten lista med tidsverifierade befintliga måltider; `maxMinutes` motsvarar övre gränsen i receptets angivna **totaltid**, och `effort` är en subjektiv bedömning av arbetsinsatsen, **inte uppmätt aktiv tid**. Tidsgränsen överskrids aldrig; 15 minuter ger därför bara två förslag med befintligt utbud. Om ett nytt recept ska ingå i middagsförslagen, kontrollera tiden och lägg till recept-ID, tidsgräns och arbetsinsats i samma fil. Detta påverkar inte att nya recept automatiskt visas i vanliga katalogen.

Automatiska Node-tester kontrollerar att alla urvals-ID:n finns, tidstaken matchar receptens dokumenterade intervall, att inga efterrätter föreslås och att urvalet respekterar både tid och ork. Playwright-test har lagts till för att kontrollera flödet i Angular på dator/mobil **när** det riktiga bygget blir tillgängligt. Fram till dess är dess browserfunktionalitet **inte** fullt runtimeverifierad. Inga Cloudflare- eller publiceringsändringar har gjorts.


## Tillägg 101–116 (oktober 2026)

Recept 101–116 har lagts till direkt i `src/data/recipes.json`. Källorna finns på
varje recept, och de svenska handhavandeanpassningarna är inte separat provlagade.
Recept 107–116 finns dessutom i separat JSON för redaktionell kontroll.

Middagshjälpen har fått granskade tider för kyckling teriyaki (30 min),
fläskfilégryta (40 min), broccolisoppa (35 min), Club Sandwich (30 min) och
kotletter i ugn (90 min, men liten aktiv arbetsinsats). Recept med längre
marinering eller kylning kan inte råka rekommenderas inom kortare tidsfönster.

**Verifieringsstatus:** Datatester, logiktester och statiska projektkontroller
kan köras lokalt. Fullständig Angular-kompilering och riktiga Playwright-test
kräver `npm install` och tillgängliga webbläsarbinärer.


## Tillägg 117–123 (november 2026)

Sju nya recept har lagts till efter källjämförelse: Pasta all'Amatriciana,
Crispy Chicken Burger, Chicken Katsu Curry, Thai Green Curry med kyckling,
Bibimbap, Quesadillas med köttfärs och ost samt Chokladfondant.
Varje recept innehåller ingrediensgrupper, portionsskalning, instruktioner,
smarta inköp, uppskattade näringsvärden och originalkällor. De nya
varianterna är redaktionellt sammanställda och ännu inte provlagade.

Sydkoreas flagga har lagts till under `public/flags/kr.svg`.
Datatestet tillåter de två avsiktliga äldre receptuppdateringarna,
och logiktestet verifierar nu antalet recept dynamiskt.

## Tillägg 124–130 (november 2026)

Sju nya recept enligt användarens korrigerade urval: Chicken Alfredo, Sweet & Sour Chicken,
Panerad rödspätta med remouladsås, Birria Tacos, Hemmagjorda hamburgerbröd,
Palak Paneer och Blåbärspaj med havresmul och vaniljsås.
Recepten har svenska ingrediensalternativ och smarta inköp, portionsskalning,
tydliga tillagningssteg, källor, tips samt uppskattat näringsinnehåll.
De är framtagna genom jämförelse av etablerade källor, men är ännu inte
separat provlagade. Birria-versionen använder svensk matbutiksanpassad
chilibas, och en mer traditionell chilivariant förklaras i tipsen.

Kinas flaggfil `public/flags/cn.svg` är tillagd för Sweet & Sour Chicken.
Samtliga tidigare 123 recept är bevarade.

## Tillägg 131 (november 2026)

**Klassisk köttfärssås med spaghetti** är en egen svensk vardagsvariant på cirka
30 minuter. Receptet prioriterar bryning, fräst tomatpuré, morot och måttlig
mängd fond, soja och grädde. Det italienska långkoket **Bolognese** finns
kvar helt oförändrat. Recept 131 innehåller ingrediensgrupper,
tillagningssteg, proportionsskalning, uppskattade näringsvärden, källor
och smarta inköpsråd. Den specifika versionen är ännu inte provlagad.

## Tillägg 132 (november 2026)

**Chick-fil-A Original Chicken Sandwich (copycat)** (🇺🇸) är en
amerikansk originalinspirerad kycklingsandwich med saftigt bröstkött,
saltlake, mild kryddad mjölpanering, smörrostat mjukt bröd och två
syrliga dillpickles. Originalet innehåller inte ost, sallad eller
dressing, och vi använder inte gurkspad som marinad. Hemmaversionen
friteras öppet med kontrollerad temperatur – aldrig med en vanlig
tryckkokare. Raffinerad jordnötsolja, mjölkpulver och MSG beskrivs som
möjliga originalnära tillval med svenska matbutiksalternativ.
Receptet innehåller 8 tillagningssteg, portionsskalning,
källor, smarta inköp och uppskattade näringsvärden. Versionen är ännu
inte provlagad. Tid: cirka 45 minuter aktiv matlagning plus 2–4 timmar
i kyld saltlake. Samtliga tidigare 131 recept är oförändrade.

## Tillägg 133 (november 2026)

**ShackBurger – Shake Shack copycat** (🇺🇸) är en originaltrogen hemmaversion av
Shake Shacks klassiker med fyra cirka 113 g stora biffar av fet högrevsfärs,
American cheese, smörrostade potato buns, grön bladsallad, Roma-tomat och
**Not Quite Our ShackSauce** enligt Shake Shacks publicerade hemmarecept i
`Shake Shack: Recipes & Stories` (2017).

Exakt kommersiell köttblandning och restaurangsås är hemliga. Detta är alltså
kedjans dokumenterade hemmavariant, inte en verifierad identisk kopia.
Den svenska versionen har vägledning för svensk högrevsfärs, smältost och
hamburgerbröd, rekommendation om att genomsteka butiksfärs till 70 °C,
portionsskalning, tips, inköpsråd, näringsuppskattning och källor.
Den är ännu inte sida-vid-sida-provsmakad med restaurangens original.
Samtliga föregående 132 recept är oförändrade.

## Tillägg 134 (november 2026)

**Burger King Whopper (copycat)** (🇺🇸) är en originalnära återgivning av
Whopper med bred flammgrillad nötfärsbiff, stort mjukt sesambröd,
fyra syrliga pickles, ketchup, rå lök, två tomatskivor, krispig
isbergssallad och majonnäs. Grundvarianten innehåller **ingen ost
och ingen specialdressing**. För hemmaversionen rekommenderas grill
med riktig låga när det är möjligt; gjutjärnspanna fungerar men ger
inte identisk smak. Köttfärsen tillagas till minst 70 °C.

Researchen jämför Burger Kings officiella beskrivning och byggordning,
svenska Whopper-uppdateringen 2024, den amerikanska från 2026 och
publicerade copycat-recept. Exakta mängder och tider är en rekonstruktion,
inte Burger Kings publicerade originalrecept. Receptet har 7 steg,
portionsskalning, uppskattade näringsvärden, smarta inköp och källor.
Denna variant är ännu inte provlagad. De tidigare 133 recepten är bevarade.

## Tillägg 135 (november 2026)

**KFC Original Recipe Fried Chicken (copycat)** (🇺🇸) är en noggrant
researchad rekonstruktion med kycklingbitar på ben och med skinn,
en tunn enkelpanering och den mycket omtalade blandningen av **11 kryddor**
från Chicago Tribunes publicering 2016. **MSG ingår som en separat,
smakmässigt betydelsefull ingrediens**, efter deras jämförande provlagning.

KFC har inte bekräftat den publicerade kryddlistan och företaget
använder specialbyggd kommersiell tryckfritös med sin `7-10-7`-panering.
Hemmaversionen använder **alltid säker, öppen fritering** och en
kärntemperatur på minst 74 °C – aldrig en vanlig tryckkokare.
Kärnmjölksblandningen och svenska alternativ är dokumenterade som
copycat-adaptioner, inte verifierad originalmetod.

Receptet innehåller 7 steg, portionsskalning, uppskattad näring,
9 källor, originaltrogna kryddproportioner och smarta inköp.
Det är ännu inte provlagat mot restaurangens original.
Alla tidigare 134 recept är bevarade.

## Tillägg 136 (november 2026)

**Domino’s Hand Tossed Pepperoni Pizza (copycat)** (🇺🇸) efterliknar den
amerikanska varianten med mjukseg pizzadeg, kraftig lätt söt tomatsås,
lågvätskig mozzarella med en liten mängd provolone, pepperoni och
vitlökskryddad kant. Receptet ger två pizzor à cirka 28–30 cm och fyra
portioner, med föredragen 18–24 timmars kyljäsning och dokumenterad
snabbversion.

Domino’s amerikanska ingredienslista och företagets lansering av den
omformulerade Hand Tossed-pizzan 2009 är huvudkällor. Exakta mängder,
degförfarande och såskryddning är en **hemmarekonstruktion**, inte ett
officiellt originalrecept; varianten har ännu inte provlagats sida vid
sida med Domino’s. Svenska Pepperoni Feast är en separat menyvariant
och finns beskriven som möjlig anpassning, inte som identisk produkt.

Receptet har nio tillagningssteg, portionsskalning, uppskattade
näringsvärden, smarta inköp och sju källor. Alla tidigare 135 recept
är oförändrade.

## Tillägg 137–149 (november 2026)

Efter jämförelse av svenska och internationella källor har **13 recept** tillkommit:

| Nr | Recept | Kort beskrivning |
|---:|---|---|
| 137 | Subway subbröd (copycat) | En grunddeg, två varianter: Italian White och Ost & Oregano |
| 138 | Klassiska frallor | Mjuka frukostfrallor, med valfri kalljäsning |
| 139 | Tekakor | Svenska mjuka, naggade tekakor |
| 140 | Ciabatta | Luftig högvätskedeg med vikningar |
| 141 | Klassiska baguetter | Fransk fördeg (poolish), formning och ånga |
| 142 | Pasta alla Vodka | Krämig tomat- och parmesansås |
| 143 | Fried Rice med ägg | Kinesiskt inspirerat stekt ris; säker hantering av kokt ris |
| 144 | Kung Pao Chicken | Sichuaninspirerad wok med jordnötter och chili |
| 145 | Korean Fried Chicken | Dubbel fritering och gochujangglasyr |
| 146 | Falukorv i ugn | Klassisk ugnsfalukorv med potatismos |
| 147 | Krämig tomatsoppa | Tomat, örter och lite grädde |
| 148 | Cannoli Siciliani | Krispiga skal med ricotta- och chokladfyllning |
| 149 | McDonald's Big Mac (copycat) | Två biffar, tre brödlager och originalinspirerad sås |

Alla 13 innehåller svenska ingrediensmängder, tillagningssteg, tips, 
**Typ 2-diabetes-anpassningsråd**, uppskattad näring, smarta inköp, 
ursprungsflagga och dokumenterade källor (31 källposter totalt). 
Recepten är **redaktionellt sammanställda och inte separat provlagade**. 
Copycats ska inte presenteras som restaurangernas offentliggjorda originalrecept.

De första 136 receptobjekten har bevarats utan ändringar. Nya recept visas 
automatiskt med befintlig sökning, filtrering, portionsskalning och inköpslista.

**Bilder:** Inga nya receptbilder har ännu kvalitetsgranskats och lagts till 
i bildvitlistan. De nya recepten visar befintlig emoji-fallback tills godkända 
WebP-bildpar finns.

**Verifiering:** JSON-filens 149 objekt har kontrollerats för unika ID:n, 
obligatoriska fält, ingrediensformat, källa-URL:er och näringsfält. 
Fullständig `npm run test:all`/Angular-build och browser-test behöver kontrolleras 
i GitHub Actions eller lokal Node-miljö.

## Visa appen via GitHub Pages

Detta projekt har en förberedd GitHub Actions-workflow i `.github/workflows/pages.yml`.
Ingen Cloudflare-tjänst eller extra Angular-deploypaket behövs.

1. Skapa ett **tomt** GitHub-repo med namnet `receptarkivet`. På GitHub Free kräver GitHub Pages ett **publikt** repo. Publicera inte om innehållet ska vara privat.
2. Lägg upp projektets filer i repots rot på `main` (inte bara ZIP-filen).
3. Gå till **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Öppna **Actions → Testa och publicera Receptarkivet** och se att körningen blir grön. Kör `Run workflow` vid behov.
5. När publiceringen är lyckad visas appen på `https://<konto>.github.io/<repo>/`.

Vid varje push till `main` körs datatester, logiktester, statiska tester och Angular-bygget.
Om ett test eller bygget misslyckas sker ingen ny publicering. Den riktiga Angular-kompileringen
är ännu inte verifierad i den tidigare arbetsmiljön och måste få ett **grönt Actions-resultat**.

> **Notera:** GitHub Pages är en offentlig webbplats för publika repos. Inloggning,
> användarsynkronisering och serverlagring ingår inte. Favoriter och inköpslista
> sparas lokalt på respektive enhet/webbläsare.

### Ladda upp med Git (efter att du skapat tomt repo)

```bash
git init -b main
git add .
git commit -m "Initial Receptarkivet Angular app"
git remote add origin https://github.com/<konto>/receptarkivet.git
git push -u origin main
```

Behåll tidigare HTML-receptbok som säkerhetskopia tills det riktiga
Angular-bygget och mobil-/datortesterna är godkända.

## Flaggor på alla plattformar

Landsflaggorna använder 15 lokala SVG-filer från [flag-icons](https://github.com/lipis/flag-icons)
under [MIT-licens](public/flags/LICENSE). Därmed visas flaggorna även på Windows där
flagg-emoji annars kan bli tvåbokstavskoder. Ingen extern begäran eller extra npm-dependency
behövs. Service workern kan cacha flaggorna för offlineanvändning.


## Ikoner och typografi

Receptarkivets UI använder ett litet, samlat urval av **Lucide SVG-ikoner**
via `@lucide/angular` och **DM Sans Variable** för löptext samt **Fraunces Variable**
för rubriker. Fontfilerna levereras av Fontsource-paketen och hostas av den byggda
appen: inga förfrågningar skickas till Google Fonts under användning.

Utöka ikonkartan i `src/app/components/ui-icon.component.ts` i stället för
att skapa nya Unicode-symboler. Maträtts-emojierna och landsflaggorna är separata
från UI-ikonerna. De nya recepten och de tidigare godkända receptförbättringarna bevaras i samma datakälla.


## AI-genererade receptbilder (pilot)

Appen har nu stöd för särskilt utvalda receptbilder på receptkort och detaljsidor.
Bilderna är märkta **AI-illustration** och har korrekt alt-text. De ursprungliga
emojierna visas om bilden inte är godkänd, uppladdad eller kan läsas.

Det här är ett **receptstyrt** system med åtta recept-ID:n på bildvitlistan.
Fem kompletta bildpar (carbonara, fish and chips, crème brûlée, Philly Cheesesteak och tiramisu)
är uppladdade som **tillfälliga visuella piloter**. De är beskurna från ett kollage och
uppskalade, inte högupplösta individuella original. Övriga kandidater behöver ny granskning
eller saknar fortfarande kompletta bildpar.

### Lägg till bildfiler

Lägg godkända WebP-par i `public/recipe-images/` med exakt filnamn
`<recipe-id>-card.webp` och `<recipe-id>-hero.webp`.
`npm run prebuild` kontrollerar att filerna finns i giltigt WebP-format och
genererar `src/app/core/recipe-images.generated.ts`. När båda finns visas
bilden automatiskt i nästa bygge. Saknas filerna blir det ingen trasig bild
eller onödig 404-begäran – emojin fortsätter användas.

Bildvarianter: 640×480 för kort och 1200×800 för detalj. De lazy-laddas på
receptkorten och service workern cachar bilderna vid behov. Bildfiler är
**AI-genererade illustrationer**, inte fotografier av provlagade recept.

Se `docs/RECEPTBILDER_STILGUIDE_OCH_PILOT_10.md` för exakt bildbrief och
`docs/RECEPTBILDER_PILOT_KVALITET.md` för vilka bilder som godkänts och
`docs/BILDPILOT_5.md` för de fem uppladdade förhandsbildernas begränsningar.
