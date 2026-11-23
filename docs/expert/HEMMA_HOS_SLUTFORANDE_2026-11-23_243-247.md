# Hemma Hos Norrköping – slutredovisning av andra menyomgången

**Datum:** 2026-11-23  
**Status:** inventeringen för fyra användartillhandahållna menybilder är färdigbehandlad i receptarkivet. Alla 25 menyrätterna har antingen ett befintligt recept, ett nytt fristående recept, en ny valfri variant eller ett uttryckligen dokumenterat säkerhetsanpassat alternativ. `src/data/recipes.json` innehåller nu **247 recept**; 239 fanns före andra menyomgången, tre skapades som nr 240–242, fem skapades här som nr 243–247.  
**Researchklassificering:** källjämförda, självständigt formulerade hemmarecept och frivilliga serveringsförslag, **inte provlagade** eller restaurangernas verifierade original. Inga nya schemalagda körningar, prenumerationer eller GitHub Actions har skapats.

## Nya fristående recept 243–247

| Nr | ID | Rätt | Huvudval | Kvalitetsfråga vid provlagning |
|---:|---|---|---|---|
| 243 | `mezze-maniche-kyckling-bacon` | Mezze maniche med kyckling och bacon | Lårfilé, separat rostade grönsaker, gräddig tomatsås och pecorino; rigatoni/penne som normalbutiksalternativ | Grönsakernas rostning och saftig genomlagad kyckling |
| 244 | `ravioli-kalvfars-pepparparmesansas` | Ravioli med kalvfärs och pepparparmesansås | Färdig färsk ravioli för rimlig arbetsinsats, brynt genomstekt kalvfärs, lätt gräddbaserad parmesansås och svartpeppar | Undvik klumpig ost och trasiga raviolikuddar; inte autentisk romersk cacio e pepe |
| 245 | `briefylld-kyckling-lufttorkad-skinka` | Briefylld kyckling med lufttorkad skinka | Fyllda kycklingbröst med brie och prosciutto, rostad potatis och små mängder sås | Kontrollera minst cirka 72°C i köttet, inte i osten; jämför en eller två såser |
| 246 | `chevre-chaud-frasig-polenta` | Chèvre chaud med frasig polenta | Snabbpolenta som först får stelna, sedan ugnsrostas frasig med chèvre, rödlök och rostade grönsaker | Polentans vätska, stelning och fras; snabbpolenta skiljer mellan fabrikat |
| 247 | `tillagad-bifftartar-tryffelchips` | Tillagad bifftartar med tryffelchips | Genomstekt flankstek fint tärnad, kapris, rödbetor, tryffelmajonnäs, chips | **Ersätter avsiktligt råbiffen** med tillagad version p.g.a. Ehec/Salmonella; undersök mörhet, hygien och smakkontrast |

### Researchavvägningar

**Mezze maniche:** ICA:s [krämiga pasta med paprika och bacon](https://www.ica.se/recept/kramig-pasta-med-paprika-och-bacon-723869/) visar sältan och tomatsåsen, [krämig pasta med tomat och kyckling](https://www.ica.se/recept/kramig-pasta-med-tomat-och-kyckling-717052/) tillför kyckling-perspektivet. Att ugnsrosta grönsaker separat är en egen restauranginspirerad metodförbättring och behöver verklig tidskontroll.

**Ravioli:** ICA:s [cacio e pepe](https://www.ica.se/recept/cacio-e-pepe-pasta-med-parmesan-och-peppar-725860/) och [krämig ravioli med bresaola](https://www.ica.se/recept/kramig-ravioli-med-bresaola-725534/) ger stöd för kombinationen parmesan/svartpeppar och en snabb fylld pasta. [BBC Good Food – cacio e pepe](https://www.bbcgoodfood.com/recipes/cacio-e-pepe) tydliggör ost- och pastavattenemulsionen. Den nya rätten har däremot grädde och kött och bör benämnas som `cacio e pepe-inspirerad`, inte traditionell cacio e pepe.

**Briefylld kyckling:** [Arla – Fylld kycklingfilé](https://www.arla.se/recept/fylld-kycklingfile/) bygger på kyckling fylld med ost och omlindad parmaskinka. Brie, rostad potatis och två såser är egen menyinspirerad kombination. Frågan är om en enda sås ger bättre balans; prova före permanent förenkling.

**Polenta:** [BBC Good Food – Rosemary polenta bites](https://www.bbcgoodfood.com/recipes/rosemary-polenta-bites-with-peperonata) visar en metod med formpressad, kyld och bakad polenta; [polenta chips](https://www.bbcgoodfood.com/recipes/polenta-chips) är alternativ. [ICA – Polenta, grundrecept](https://www.ica.se/recept/polenta-grundrecept-1609/) används för svensk råvarureferens. Exakt vätskeandel och hållfasthet är inte validerade för ett visst svenskt fabrikat.

**Bifftartar och råbiff:** [Livsmedelsverkets uttryckliga svar om råbiff](https://fragor.livsmedelsverket.se/org/livsmedelsverket/d/rabiff/) anger att tillredning av råbiff inte kan göras helt säker och avråder från rå köttfärs, med Ehec och Salmonella som huvudrisker. Därför har Hemma Hos-rätten som i menyn var **råbiff på flankstek** omarbetats till **genomlagad bifftartar på flankstek**; det är en **annan rätt med samma smakinspiration**, inte en rå originalkopia. Avvägningen ger säkerhet framför autentisk råkonsistens men fullgenomstekt flankstek kan bli segt. Skiva alltid mycket tunt tvärs över fibrerna; ryggbiff är ett mörare substitut. Prova faktiskt resultat innan rekommendationen slutligt låses.

## Nio nya tillvalsvarianter i sju befintliga recept

Varianterna läggs i `tips` på befintliga recept för att **inte ersätta deras beprövade grundstruktur eller ID**, och de är uttryckligen märkta `ej provlagad`. De har mått för ordinarie portionsantal men läggs **inte** automatiskt till i appens inköpslista och får **inte** separat beräknad nutrition utan att datamodellen stöder varianter.

1. `svamprisotto` – krispig ostronskivling (150 g/4 portioner).
2. `svamprisotto` – varmrökt sidfläsk (120–150 g/4 portioner); inte vegetariskt.
3. `flaskschnitzel-tartarkram-syltad-lok` – mild Café de Paris-kräm som alternativ till tartarkrämen, inte ytterligare en sås.
4. `fiskgryta-hummersas-lax-kolja` – extra citronskal och valfri separat genomlagad rödräka. Fänkål, purjolök, morot och aioli ingår redan i grundreceptet.
5. `mac-and-cheese` – chorizo (120 g), paprika och lök samt högst lite BBQ-sås.
6. `caesarsallad-kyckling` – byt 600 g rå kyckling mot 450–500 g skalade avrunna kokta räkor.
7. `caesarsallad-kyckling` – extra knaperstekt sidfläsk (100–120 g), och valfria tomat/lök.
8. `chevre-chaud-rodbetor-tryffelhonung` – chèvretoast med rödlöksmarmelad och eventuellt sidfläsk.
9. `vasterbottensostpaj` – kantarellkräm + krispig ostronskivling i stället för romtopping.

Källor för tillvalsvarianter: [RecipeTin Eats – Mushroom risotto](https://www.recipetineats.com/mushroom-risotto/) · [ICA – Café de Paris-crème fraiche](https://www.ica.se/recept/cafe-de-paris-creme-fraiche-713588/) · [ICA – Caesarsallad med kyckling och bacon](https://www.ica.se/recept/caesarsallad-med-kyckling-och-bacon-695632/).

## Status för alla 25 rätter på de fyra nya bilderna

| Menypost | Arkivstatus efter båda etapperna |
|---|---|
| Flatbread Margherita | Toppingvariant av nr 241 |
| Flatbread Chèvre bianco | Huvudtopping i nr 241 |
| Flatbread Räkor bianco | Toppingvariant av nr 241 |
| Flatbread Svamp bianco | Toppingvariant av nr 241 |
| Flatbread Salami spianata | Toppingvariant av nr 241; menyns ingrediensrad nämner ej salamin trots namnet |
| Flatbread Fem gubbar | Toppingvariant av nr 241 |
| Linguine med friterad rödräka | Nr 240; krämig räkpasta med hummerfond och valfritt krisp |
| Mezze maniche med kyckling och bacon | Nr 243 |
| Ravioli cacio e pepe med kalvfärs | Nr 244, cacio e pepe-inspirerad |
| Svamprisotto med sidfläsk | Valfri topping i `svamprisotto` |
| Svamprisotto med ostronskivling | Valfri topping i `svamprisotto` |
| Köttbullar med högrev och karré | Redan behandlad variant i `kottbullar-mos`, med pressgurka |
| Briefylld kyckling och lufttorkad skinka | Nr 245 |
| Fläskschnitzel med Café de Paris | Variant i `flaskschnitzel-tartarkram-syltad-lok` |
| Citrondoftande fisk- och skaldjursgryta | Variant i `fiskgryta-hummersas-lax-kolja` |
| Mac & Cheese med chorizo | Variant i `mac-and-cheese` |
| Caesarsallad kyckling | Variant i `caesarsallad-kyckling` |
| Caesarsallad räkor | Proteinvariant i `caesarsallad-kyckling` |
| Chèvre chaud med friterad polenta | Nr 246 med frasigt ugnsrostad polenta |
| Vitlöksbröd | Redan nr 231 |
| Chèvre chaud med rödlöksmarmelad | Variant i `chevre-chaud-rodbetor-tryffelhonung` |
| Västerbottenpaj med kantarellkräm | Variant i `vasterbottensostpaj` |
| Toast Skagen med dillcrunch | Redan tillagd variant i `toast-skagen` |
| Råbiff flankstek | Nr 247 **tillagad version**, ingen publicerad rå version |
| Rödbetstartar | Nr 242 |

## Provlagning, tester och fortsatt kvalitetsarbete

- **Ej provlagade:** samtliga nya recept 240–247, och de nya frivilliga serveringsvarianterna, står i expertkö eller är dokumenterade som oprövade. `review_history` och `cook_tests` förblir ärliga, utan falska bevis.
- **Prioritera provlagning:** 1) Polentans stelning/frasyta, 2) raviolins parmesanemulsion, 3) fylld kycklingens centrum/ostläckage, 4) bifftartarens mörhet och smak, 5) chorizovariantens ostsås och extra sälta.
- **Diet och allergener:** kyckling och färs ska genomlagas, hela tillbehör hanteras hygieniskt; kontrollera animaliskt löpe för vegetariska rätter. För diabetesanpassning anges praktiska portionsval, ingen medicinsk behandling.
- **Appbegränsning:** de nya receptens huvudingredienser och skalning är strukturerade. Valfria toppings/varianter som ligger i tipsfält får inte dynamiska inköpslistor eller nutrition förrän appen byggs ut med strukturerat alternativstöd.
- **Teknisk kontroll:** JSON-struktur, 247 unika ID:n, källformat och receptkopplingar bör kontrolleras. Även `node scripts/expert-catalog.mjs --check`, `npm run test:data`, `npm run test:logic`, `npm run test:static` och `npm run build` bör köras lokalt eller i verifierad CI-miljö innan någon hävdar full Angular-byggverifiering.

**Redaktionellt slutbeslut:** de 25 menyförebilderna är omhändertagna som åtta nya fristående recept i två omgångar (240–247), sex flatbread-toppings på ett gemensamt grundrecept, nio nya tillvalsvarianter och sedan tidigare dokumenterade befintliga varianter/recept. Behåll fortsatt förbättringsbarhet, inte historiska innehållslås.
