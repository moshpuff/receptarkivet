# Receptarkivet – Angular

Receptarkivet är migrerat från en fristående HTML-receptbok till ett Angular-projekt med **116 recept** (de första 100 bevarade oförändrade). Innehållet har inte skrivits om: recept, ingredienser, instruktioner, källor, näringsvärden och inköpsråd finns i `src/data/recipes.json`. Den äldre fungerande HTML-versionen ligger kvar i `original-Receptarkivet-100.html` som säkerhetskopia.

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

Läs [`IA_UX_UI_GRANSKNING.md`](IA_UX_UI_GRANSKNING.md) för målgrupp, informationsarkitektur, prioriteringar, användartestplan och kvarvarande brister. **Detta är inte en slutligt användartestad eller Angular-kompilerad produktionsapp.**

## Teknisk struktur

| Fil eller mapp | Ansvar |
|---|---|
| `src/data/recipes.json` | Allt receptinnehåll, 116 recept; originalets 100 oförändrade |
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
