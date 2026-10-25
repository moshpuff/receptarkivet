# Receptarkivet · Informationsarkitektur, UX och UI

**Datum:** 24 oktober 2026  
**Version:** UX-prototyp 2 – genomförda förbättringar, ännu ej slutgodkänd Angular-produktion.

## 1. Målgruppen och deras viktigaste behov

Utgångspunkt: svensktalande hemmakockar som vill hitta *riktigt goda, beprövade* recept och använda samma tjänst hemma, i mataffären och i köket. De använder ofta mobilen med en hand, begränsad tid, våta/smutsiga händer och varierande uppkoppling.

Fokus ska ligga på få beslut, begriplig hierarki, bra läsbarhet och tillförlitliga ingrediensmängder – inte fler knappar eller funktioner för funktionernas skull.

**Job-to-be-done:**

1. **Välja:** Hitta rätt rätt efter namn, ingrediens, kategori och preferenser.
2. **Planera:** Välja en eller flera rätter, ställa in satsstorlekar och se vad som behövs.
3. **Handla:** Ta med en lista, bocka av varor, kopiera eller skriva ut.
4. **Laga:** Ha ett tydligt steg åt gången, med ingredienserna lätt åtkomliga och framsteg som sparas.
5. **Lyckas och återkomma:** Markera rätten som lagad, spara egna förbättringar och enkelt laga den igen.

## 2. Informationsarkitektur

```text
Receptarkivet
├── Hitta recept                 (översikt /)
│   ├── Sök, kategori, tagg, land, favoriter
│   └── Receptdetalj             (/recept/:id)
│       ├── Grundinformation / satsstorlek / ingredienser
│       ├── Fullständig metod / tips / näringsvärden / källor
│       ├── Lägg till i planeringen
│       └── Laga steg för steg   (/laga/:id)
│           ├── Ett steg åt gången, fortsätt där du slutade
│           ├── Ingredienser till hands, avbockningsbara
│           └── Klart → tillagningstillfälle + egna anteckningar
└── Planera & handla            (/inkopslista)
    ├── Lägg till och ta bort recept
    ├── Anpassa sats för varje rätt
    ├── Handla / bocka av varor
    └── Kopiera / skriv ut / gå direkt till tillagning
```

**Designbeslut:** endast två globala huvudmål i navigationen: *Hitta recept* och *Planera & handla*. Köksläget hör hemma i receptet, inte som en tredje global flik utan sammanhang. Favoriter är ett filter i receptöversikten, inte en tom extra sida.

## 3. Implementerat i denna leverans

- **Tydligare ingångar:** snabblänkar till receptutforskning och planering, kortare hero, huvudnavigation med begripliga verb.
- **Recept → köksläge:** dedikerad rutt med ett steg i taget, tydliga föregående/nästa-knappar, stegräknare och möjlighet att hoppa till önskat steg.
- **Ingredienser i köksläge:** synliga vid sidan av steg på större skärmar; öppningsbar panel på små skärmar. Portioner ändras i båda vyerna.
- **Sparad tillagningsposition:** man kan lämna ett recept och fortsätta där man slutade.
- **Resultat:** markerat som lagat med lokalt sparat datum och egna anteckningar. Inga externa konton eller datainsamlingar.
- **Planering:** tydliga summeringar, valda recept i den ordning de lagts till, portionskontroll direkt i inköpsvyn och möjlighet att ta bort enskilda recept.
- **Handling:** separata, klickbara checkboxar i inköpslistan, framstegsindikator, återställning, kopiera samt skriva ut. Avbockningar för handling påverkar inte avbockningar i köket.
- **Mobil:** större kontrollträffytor, navigation som bryts i två rader, horisontellt utrymmessnåla element och fokuserad layout för steg-för-steg-läge.
- **Tillgänglighet:** hopp-till-innehåll-länk, tydlig keyboard focus, semantiska rubriker/etiketter, progressbar med värden, navigationsfokus, reducerad animering.
- **Befintliga recept:** alla 100 bevarade oförändrade, inklusive källor, tips, skalning och uppskattad näring.

## 4. Medvetna avgränsningar – inget falskt löfte om ”perfekt”

- **Inköpslistan är fortfarande per recept.** Sammanräkning av *identiska* råvaror mellan rätter kräver noggrann normalisering av namn, enheter och receptspecifika kommentarer. En naiv summering skulle kunna ge fel inköp. Separata receptgrupper är säkrare tills datamodellen är utbyggd.
- **Ingen veckokalender ännu.** ”Planera” avser val av rätter och deras inköp, inte schemaläggning till veckodagar.
- **Resultatet mäts inte objektivt.** Anteckningar lagras lokalt; ingen betygsfunktion eller användargenererad bild finns ännu.
- **Receptbilder:** ikonbaserade illustrationer är funktionella men inte idealiska för matlagningsinspiration. Fotografi av varje faktisk rätt kräver bildrättigheter/källor och konsekvent kvalitetsnivå.
- **Mörkt läge och testad kontrast på varje färgpar:** inte fullständigt utfört.
- **PWA offline:** konfigurerad men inte verifierad med riktig Angular-installation och produktionstjänst.
- **Ingen bekräftad WCAG 2.2 AA-efterlevnad:** förbättringarna följer riktlinjerna, men automatiska och manuella tillgänglighetstester behöver passera först.

## 5. Konkreta acceptanskriterier före publicering

### Flödestester – desktop och två mobilstorlekar (320/390px)

- Hitta en rätt på mindre än tre användaråtgärder (sök → välj → öppna).
- Lägg till två rätter, välj olika satsstorlekar och verifiera mängderna mot originaldata.
- Bocka av minst fem varor, uppdatera sidan och se samma status. Kontrollera att kökschecklistan är orörd.
- Laga ett recept med 6+ steg, byt vy, återvänd, fortsätt och avsluta. Spara anteckning och verifiera den efter omladdning.
- Testa alla tomma lägen, inga-resultat, ogiltiga länkar och skadad lokal lagring.
- Kontrollera att ingen sida har horisontell overflow vid 320, 390, 768 och 1280px.
- Testa lång recepttitel, långa ingredienskommentarer, textzoom 200 % och mobil skärmläsare.
- Kontrollera att utskrift och kopiering är begriplig och att allt väsentligt kommer med.

### Tillgänglighet

- Tangentbordsnavigering och synlig fokusindikering i samtliga flöden.
- Meningsfull fokusplacering vid ruttbyte. Testa med NVDA/VoiceOver eller TalkBack.
- Touchområden minst enligt WCAG 2.2 AA, praktiskt mål 44px för vanliga kontroller.
- Kontrast, textzoom, rubrikhierarki, felsituationer och reduced motion kontrolleras.
- Automatisk axe-körning och manuell genomgång enligt WCAG 2.2 AA.

### Verkliga användartester (viktigt)

Testa med 5–8 personer med varierande köksvana, inklusive minst två som främst använder mobil. Be dem utföra ovanstående uppgifter utan instruktioner om hur gränssnittet fungerar. Registrera var de tvekar, gör fel eller behöver hjälp. Designa om på grundval av observationerna – inte enbart tycke och smak.

### Teknisk kvalitetsgrind

- `npm ci`/`npm install`, Angular-produktionsbygge, samtliga Playwright-scenarier på desktop och mobil.
- Prestanda- och tillgänglighetskontroll mot faktisk produktionsbyggd app.
- Ingen publicering förrän detta och testerna ovan är verifierade.

## 6. Kvalitetsstatus

| Kontroll | Status |
|---|---|
| 100 recept, schema och oförändrad data | Godkänt |
| Typescript-logik och lokal lagring, inkl. planering/köksläge/resultat | Godkänt med testdubblar för Angular |
| Statisk kontroll av Angular-källkod och konfiguration | Godkänt med deklarationsstubbar |
| Riktig Angular-kompilering | **Återstår – npm otillgängligt** |
| Körda Playwright-tester av Angular-app | **Återstår – npm otillgängligt** |
| Full tillgänglighetsgranskning och riktiga användartester | **Återstår** |
| Fullständigt säkerställd IA/UX/UI-kvalitet | **Inte slutgodkänd** |

**Källor för kvalitetskriterier:** W3C [WCAG 2.2](https://www.w3.org/TR/WCAG22/) och [Angulars tillgänglighetsrekommendationer](https://angular.dev/best-practices/a11y).

## Middagshjälpen – beslut utan överbelastning (24 oktober 2026)

**Situation:** En hungrig och trött användare kommer hem utan middagsplan.

**Lösning:** Ett kort inbyggt stöd på startsidan, inte en ny tung vy eller meny. Två val (tid och ork) följs av som mest tre förslag, namngiven maträtt och direktlänk till köksläget. ”Visa andra” går att använda utan att börja om. Recept och receptsökning fortsätter att vara förstahandsalternativ för dem som redan vet vad de vill laga. Inga animationer, nätverksanrop, externa bilder eller nya npm-beroenden krävs.

**Avvägning mot ogrundade rekommendationer:** Bara recept med granskad maximal totaltid ingår. Om 15 minuter ger två recept visas två; appen hittar inte på en tredje träff och erbjuder i stället ett medvetet val att öka tiden till 30 minuter. ”Ork” är en bedömning av arbetsmoment och kan behöva kalibreras efter framtida användartester. Det finns ännu inget lager med verifierad *aktiv arbetstid* eller innehåll i skafferiet; sådant bör inte antydas.

**Kontrollplan innan produktionsbruk:** Klicktesta tid/ork, inga dubbletter, alla tre länkarna, fokus och synlighet på 320–430 px skärmar, uppdatering efter ändrade val, interaktion med katalogfiltren och skärmläsarens uppläsning av resultat. Testa scenariot ”hemmkommen och trött, 30 minuter” med målgruppen och mät hur snabbt ett faktiskt genomförbart recept väljs. En framgångsindikator är ett beslut på under 60 sekunder, inte maximal användningstid i appen.
