# Hemma Hos Norrköping – fördjupad menyinspiration, omgång 2

**Datum:** 2026-11-23  
**Underlag:** fyra av användaren tillhandahållna skärmbilder (flatbread, pasta/risotto, varmrätter/sallad, förrätter). Restaurangens menynamn och uppräknade komponenter kommer från bilderna. Tillagningsmetoder, proportioner och receptformler kan **inte** utläsas från menyn och är **inte** restaurangens verifierade originalrecept.  
**Arkivstatus vid kontroll:** `docs/expert/KATALOG.json` innehåller 239 recept, motsvarande senaste README.  
**Relation till tidigare arbete:** [Hemma Hos-favoriter 231–239](HEMMA_HOS_NORRKOPING_RESEARCH_2026-11-23.md) är redan researchbaserade poster. Förra omgångens föreslagna Toast Skagen-, köttbulle- och fiskgrytevarianter ska inte dubbelregistreras.  
**Status för detta dokument:** redaktionell inventering och prioriterad utvecklingsplan, **inte** 25 färdigutvecklade, provlagade eller publicerade recept. Denna fil ändrar inte några recept i `src/data/recipes.json` och skapar inte nya schemaläggningar.

## Redaktionsbeslut

- Undvik sex nästan identiska pizzarecept. Skapa **ett fristående tunt/frasigt flatbread-grundrecept** med sex tydliga toppingkombinationer, som en separat typ från mjukare `hemmagjord-pizza`. Om appens datamodell inte lämpar sig för sex kompletta alternativ, dela upp senare utan att duplicera degsteg.
- Behåll stabila ID:n när ett befintligt recept får en valfri variant. Förstärk inte basrecept med många extra moment; samla extramoment under tydligt märkta serveringsalternativ.
- Fristående rätter som har annan grundmetod eller rättriktning (räkpasta, fylld kyckling, rödbetstartar osv) får egna recept först **efter** full research, proportionering, svenska inköpsmått, säkerhetsgenomgång och granskning enligt redaktionell standard.
- Menyn visar inte faktiska recept: ord som ”crunch”, ”tryffelkräm” och ”hummersås” behöver konkretiseras. Förenkla när fler restaurangmoment inte ger tydlig hemmanytta.

## Samtliga 25 menyförebilder och beslut

| Nr | Menyrätt (enligt bild) | Dokumenterade smakkomponenter | Beslut | Receptkoppling / redaktionell riktning |
|---:|---|---|---|---|
| 1 | Flatbread Margherita | Tomatsås, fior di latte, buffelmozzarella, basilikaolja, parmesan | **Toppingvariant** | Nytt flatbread-grundrecept; jämför med `hemmagjord-pizza`; mindre ostmassa för frasig botten |
| 2 | Chèvrepizza (bianco) | Mascarponekräm, fior di latte, chèvre, rödlöksmarmelad, tryffelhonung, valnötter, parmesan | **Toppingvariant – P1** | Nytt flatbread-grundrecept; sötma/sälta/syra; honung och valnötter efter gräddning |
| 3 | Räkor (bianco) | Mascarponekräm, fior di latte, handskalade räkor, salladslök, gremolatakräm, parmesan | **Toppingvariant – P1** | Flatbread-grundrecept; minimera vätska, tillsätt färdigkokta räkor mot slutet/efter gräddning |
| 4 | Svamp (bianco) | Mascarponekräm, fior di latte, ostronskivling, portabello, champinjon, salladslök, gremolatakräm, parmesan | **Toppingvariant** | Flatbread; stek svamp separat för att driva bort vätska |
| 5 | Salami spianata | Tomatsås, fior di latte, buffelmozzarella, basilikaolja, gremolatakräm, parmesan | **Toppingvariant** | Flatbread; menynamnet anger salami men ingrediensraden listar den inte uttryckligen – verifiera önskad salamitopping före slutrecept |
| 6 | Fem gubbar, lite starkare | Tomatsås, fior di latte, ’nduja-salami, varmrökt sidfläsk, rödlök, syltad lök, salladslök, gremolatakräm, chilimajonnäs, parmesan | **Toppingvariant** | Flatbread; flera feta/salta komponenter kräver dosering och syra; svensk ’nduja-tillgång varierar |
| 7 | Linguine med friterad rödräka | Hummersås med chili och vitlök, handskalade räkor, crunch, parmesan | **Nytt fristående – P1** | Arbetsnamn `linguine-rakor-hummersas`; enkel hummerfondsbaserad pastasås och räkor tillsatta skonsamt. Friterad rödräka separat endast om resultatet motiverar extra moment |
| 8 | Mezze maniche med kyckling & bacon | Krämig tomatsås, rostade medelhavsgrönsaker, crunch, pecorino | **Nytt fristående – P2** | Arbetsnamn `kramig-tomatpasta-kyckling-bacon`; rigatoni/penne som inköpsvänlig ersättning |
| 9 | Ravioli cacio e pepe med kalvfärs på tri-tip | Parmesansås, rostad svartpeppar, tomat, spenat, crunch, parmesan | **Nytt fristående – P2** | Arbetsnamn `ravioli-kalvfars-parmesan-peppar`. Menyrättens gräddiga parmesansås är inte nödvändigtvis klassisk cacio e pepe; skriv korrekt beskrivning |
| 10 | Svamprisotto med varmrökt sidfläsk | Kantareller, karljohanssvamp, champinjon, portabello, ostronskivling, parmesan, sidfläsk | **Variant av befintligt** | `svamprisotto`: valfri knaperstekt sidfläsk, inte ny risottobas |
| 11 | Svamprisotto med krispig ostronskivling | Som ovan, utan sidfläsk | **Variant av befintligt** | `svamprisotto`: separat brynt ostronskivling som topping; undvik att förstöra risottons all’onda-textur |
| 12 | Köttbullar på högrev & karré | Potatispuré, gräddsås, pressgurka, lingon | **Befintligt – tidigare behandlat** | `kottbullar-mos`; högrev/karré jämförs med nuvarande blandfärs, ännu inte validerad överlägsen |
| 13 | Kycklingfilé fylld med brie & lufttorkad skinka | Friterad potatis, tryffelkräm, rödvinssås | **Nytt fristående – P2** | Arbetsnamn `briefylld-kyckling-lufttorkad-skinka`; annan rätt än redan tillagda `chili-cheese-gratinerad-kyckling`; mät säker kycklingkärna |
| 14 | Fläskschnitzel på Hemma Hos-vis (alternativ menyversion) | Friterad potatis, Café de Paris-sås, rödvinssås, syltad rödlök | **Variant av befintligt** | `flaskschnitzel-tartarkram-syltad-lok`; behåll tartarkrämversionen; pröva Café de Paris separat, båda feta såserna behöver kanske inte serveras samtidigt |
| 15 | Citrondoftande fisk- & skaldjursgryta | Lax, kolja, räkor, potatispuré, hummersås, fänkål, morot, purjolök, friterad rödräka, chili-aioli | **Variant av befintligt – P2** | `fiskgryta-hummersas-lax-kolja`; mer citron/fänkål som alternativ; kontrollera salt, hetta, fisktextur och att grytan inte får alltför många sidomoment |
| 16 | Mac & Cheese med chorizo | Makaronistuvning, cheddar, mozzarella, parmesan, chorizo, lök, paprika, BBQ-sås | **Variant av befintligt – P1** | `mac-and-cheese`; behåll originalostsåsen; chorizo och grönsaker förstekta, BBQ-sås mycket måttligt eller vid sidan |
| 17 | Caesarsallad kyckling | Varmrökt sidfläsk, romansallad, caesardressing, tomat, lök, parmesan, surdegskrutonger | **Variant av befintligt** | `caesarsallad-kyckling`; bildens ingrediensrad nämner märkligt nog inte kyckling trots rubriken; rätten ska innehålla kyckling i vår version |
| 18 | Caesarsallad räkor | Romansallad, caesardressing, tomat, lök, parmesan, surdegskrutonger | **Proteinvariant** | `caesarsallad-kyckling` + `caesardressing`; byt kyckling mot avrunna räkor, anpassa dressingens sälta |
| 19 | Chèvre chaud med friterad polenta | Tryffelkräm, rödlöksmarmelad, rostade medelhavsgrönsaker, valnötter | **Nytt fristående – P2** | Arbetsnamn `chevre-chaud-frasig-polenta`; skiljer sig strukturellt från `chevre-chaud-rodbetor-tryffelhonung`; pröva ugnsrostad polenta mot fritering |
| 20 | Vitlöksbröd | Gratinerat surdegsbröd, vitlökssmör, parmesan | **Redan finns** | `vitloksbrod-surdegsbrod-parmesan` (#231). Ingen ny post |
| 21 | Chèvre chaud med rödlöksmarmelad | Stekt chèvretoast, dressad sallad, rostade valnötter, krispigt varmrökt sidfläsk | **Variant av befintligt** | `chevre-chaud-rodbetor-tryffelhonung`; markera sidfläsk som valfri icke-vegetarisk topping |
| 22 | Västerbottenpaj med kantarellkräm | Krispig ostronskivling | **Variant av befintligt – P2** | `vasterbottensostpaj`; separat kantarellkräm + välbrynt ostronskivling; bevara saftigt pajskal |
| 23 | Toast Skagen | Stekt toast, skagenröra, dillcrunch, rödlök | **Redan hanterad variant** | `toast-skagen`; dillcrunch dokumenterad i föregående research, undvik dubblett |
| 24 | Råbiff på flankstek | Tryffelpotatischips, tryffelmajonnäs, friterad kapris, rödlök, bakade rödbetor, pecorino | **Nytt fristående – P3 / säkerhetsgrind** | Arbetsnamn `rabiff-flankstek-tryffelchips`. Rått nötkött kräver särskilt hög råvaru- och hygienkontroll; överväg separat tillagad alternativservering. Publicera inte utan verifierade säkerhetsråd |
| 25 | Rödbetstartar | Tryffelpotatischips, tryffelmajonnäs, friterad kapris, rödlök, bakade rödbetor, pecorino | **Nytt fristående – P2** | Arbetsnamn `rodbetstartar-tryffelchips`; vegetarisk hårdost behövs om rätten ska märkas vegetarisk (pecorino kan ha animaliskt löpe) |

## Prioriterad utvecklingsordning

### Etapp 1: tre recept med störst förväntad nytta
1. **Linguine med räkor och hummersås:** annan smakprofil än befintlig fiskgryta, högt restaurangvärde. Bygg på god hummerfond, vitlök, chili, pastavatten och skonsamt hanterade räkor; jämför lyxig skalfond mot svensk vardagsvariant.
2. **Flatbread – frasig grund + toppingar:** nytt gemensamt pizzakoncept snarare än sex duplicerade recept. Börja med chèvre bianco och räkor bianco för att kontrollera ostmängd, vätska, botten och finish.
3. **Rödbetstartar med tryffelchips:** en helt annan förrätt än chèvre och ett vegetarisk alternativ till råbiff, med kontrollerad syra/sötma/krisp.

### Etapp 2: nya huvudrätter
- Brie- och skinkfylld kyckling, mezze maniche med kyckling/bacon, ravioli med kalvfärs/pepparsås och chèvre med krispig polenta.
- Varje rätt får först en avvägd metod med mått, säker innertemperatur, total/aktiv tid, svenska butiksalternativ, diabetesanpassning, ungefärliga näringsvärden och riktiga källhänvisningar.

### Etapp 3: förbättra utan att duplicera
- `mac-and-cheese`: valfri chorizovariant.
- `svamprisotto`: toppingvarianter med sidfläsk eller ostronskivling.
- `vasterbottensostpaj`: kantarellkräm och ostronskivling.
- `fiskgryta-hummersas-lax-kolja`: citron/fänkål/försiktig aioli.
- `flaskschnitzel-tartarkram-syltad-lok`: Café de Paris-varianter.
- `caesarsallad-kyckling`: avrunna räkor som proteinsubstitution och eventuellt knaprig sidfläsk.

## Första källjämförelse 2026-11-23

Detta är **inledande metodbelysning för tre teknikspår**, inte en fullständig källa-för-källa-proportionering av 25 färdiga recept.

- [Great Italian Chefs – Red prawn spaghetti, Daniele Usai](https://www.greatitalianchefs.com/recipes/red-prawn-spaghetti-recipe): räkskal/huvuden kan bära en mycket smakrik pastasås; skilt från målet med en vardagsversion baserad på hummerfond. Smakdjup kontra råvarutillgång och arbetsinsats måste vägas.
- [Cuisinovia – Prawn pasta with bisque](https://cuisinovia.com/prawn-pasta-with-bisque/): chili, vitlök och skaldjursbas används i en sås till pasta. Kontrollera hur skaldjuren hanteras innan steg fastställs.
- [King Arthur Baking – How to turn any home oven into a pizza oven](https://www.kingarthurbaking.com/blog/2021/10/04/how-to-turn-any-home-oven-into-a-pizza-oven): jämför värmetillförsel/bottenkrisp med vanlig svensk hushållsugn och förvärmd plåt/sten/stål. Inga specialredskap får vara obligatoriska.
- [GialloZafferano – Mascarpone, Speck and Walnut Pizza](https://www.giallozafferano.com/recipes/mascarpone-speck-and-walnut-pizza.html): visar att mascarpone, sälta och valnötter kan fungera som pizzaelement, men verifierar inte restaurangens chèvrepizza eller våra proportioner.
- [RecipeTin Eats – Mushroom Risotto](https://www.recipetineats.com/mushroom-risotto/): stek svamp separat för färg och tydlig svampsmak; det befintliga `svamprisotto` gör detta redan, så ingen grundreceptändring motiveras av denna källa.
- [BBC Good Food – Smoky bean and chorizo mac 'n' cheese](https://www.bbcgoodfood.com/recipes/esthers-smoky-bean-chorizo-mac-n-cheese): stöd för chorizo som smakvariant, inte för att ersätta arkivets klassiska mac & cheese.
- [Tesco – Macaroni cheese chorizo bake](https://www.tesco.com/recipes/en-GB/recipe/macaroni-cheese-chorizo-bake): alternativ matlagningsreferens för chorizo/ost/pasta.

## Kritiska kvalitets- och säkerhetsfrågor före färdig receptpublicering

- **Räkor och skaldjur:** skilj råa från färdigkokta, kyl och tillaga säkert, undvik att låta kokta räkor koka sega i pastasåsen.
- **Råbiff:** kontrollera godtagbara råvaror, kylkedja, hygien och riskgrupper med svenska livsmedelsmyndighetskällor innan publicering. Sätt inte ”enkel vardagsmat” på råbiffsreceptet utan tydlig kontext.
- **Pecorino/parmesan:** vissa ostar innehåller animaliskt löpe. Välj vegetarisk ost om en variant ska klassas som vegetarisk.
- **Flera feta komponenter:** mascarpone, chèvre, parmesan, tryffelmajonnäs och chorizo konkurrerar lätt; använd syra/örter och måtta portionsstorlek.
- **Rättvis bedömning:** smak, konsistens, enkelhet, instruktioner och tillförlitlighet utvärderas enligt `REDAKTIONELL_STANDARD.md`. ”Provlaga” betyder verklig dokumenterad provlagning, inte endast AI-research.
- **Inga låsta recept:** en redan publicerad bas får ändras om ny research motiverar det. Dubblett- och överbelastningsskyddet är ett redaktionellt beslut, inte ett förbud mot vidareutveckling.

**Nästa implementeringsgrind:** gör separat fördjupad research och utveckla 1–3 nya recept åt gången; när de läggs in i `src/data/recipes.json`, uppdatera `KATALOG.json` och granskningskö samt kör befintliga tester. Ingen ny GitHub Action eller prenumeration.
