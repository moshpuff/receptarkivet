# Restauranginspiration – användarens 32 val (24 november 2026)

**Status:** Samtliga val (1, 4, 5, 9, 10, 12, 13, 14, 15, 17, 18, 19, 21, 22, 26, 28, 30, 31, 32, 34, 36, 38, 42, 48, 53, 56, 59, 66, 69, 73, 75, 81) har fått ett redaktionellt beslut och antingen ett fullständigt nytt hemrecept eller ett valfritt serverings-/teknikspår kopplat till befintligt recept. 

**Källstatus:** Restaurangernas **publicerade menyer** styr inspirationen och rätternas namn/komponenter där de har kunnat verifieras. De avslöjar inte originalens metod eller exakta proportioner. Recepten har därför konstruerats som **självständiga hemmaversioner**, jämförda med relevanta publika svenska recept. En del äldre listade menyidéer, särskilt Restaurang Familjens fläskkotlett, kunde **inte verifieras på aktuell meny** och behandlas uttryckligen som inspirationsförslag, inte som påstående om dagens utbud.

**Arkiv:** Utgångsläge 247 recept. Nu 257 recept i `src/data/recipes.json`; exakt tio nya recept har tillkommit och **19 redan befintliga** recept har fått nya, uttryckligen oprövade tips/serveringsvarianter. Inga recept-ID:n har bytts ut. En ny landflagga `public/flags/ba.svg` infördes för Ćevapi från Balkan. Expertkatalog och granskningskö synkroniseras manuellt; ingen ny GitHub Action, automation eller prenumeration.

## 1. Fullständigt beslutsregister – alla 32 nummer

| Valnummer | Menyidé enligt urvalslistan | Beslut | Recept-ID |
|---:|---|---|---|
| 1 | Burrata, sotad persika, tomat, basilikaolja | **Nytt recept** | `burrata-sotad-persika-tomat` |
| 4 | Pappa Grappa: rigatoni, oxfilé, svamp, tryffel | **Nytt – slås ihop med 26** | `rigatoni-oxfile-svamp-tryffel` |
| 5 | Tortelloni med kantareller, ricotta, Västerbottensost | **Nytt recept** | `tortelloni-kantarell-vasterbotten` |
| 9 | Bolognese med radiatori och parmesan | **Tillvalsvariant** | `bolognese` |
| 10 | Chèvrepizza med fikonmarmelad och valnötter | **Toppingvariant** | `frasig-flatbread-chevre-bianco` |
| 12 | Pannacotta med körsbär, bär och maräng | **Serveringsvariant** | `pannacotta` |
| 13 | Östgöta Kök: köttbullar, gräddsås, mos, pressgurka | **Förbättringsspår, samma som 66** | `kottbullar-mos` |
| 14 | Varmrökt lax med sauce verte och potatis | **Nytt recept** | `varmrokt-lax-sauce-verte` |
| 15 | Lasagne, örtkräm, tomatsallad, parmesan | **Serveringsvariant** | `lasagne` |
| 17 | Cevapi med ajvar, bröd och aioli | **Nytt recept** | `cevapi-ajvar-vitlokssas` |
| 18 | Grillad kyckling, örtslungad penne, svampkräm | **Nytt recept** | `ortslungad-penne-kyckling-svampkram` |
| 19 | Laxcannelloni, béchamel, tomat, ruccola | **Nytt recept** | `laxcannelloni-bechamel-tomat` |
| 21 | Wallenbergare med gräddsås | **Alternativ till brynt smör** | `wallenbergare` |
| 22 | Tonkatsu med coleslaw och ris | **Tillvalsvariant** | `japansk-tonkatsu-schnitzel` |
| 26 | Grazie: oxfilépasta med svamp, tryffel och kalvfond | **Ingår i nr 4:s nya recept** | `rigatoni-oxfile-svamp-tryffel` |
| 28 | Stekmacka med flankstek och jalapeñomajonnäs | **Nytt recept** | `flankstekmacka-jalapenomajonnas` |
| 30 | Focaccia med salami ventricina, burrata och kronärtskocka | **Smörgåsvariant** | `focaccia-rosmarin` |
| 31 | Salsicciapasta med tomat, rödvin och grädde | **Samma variantering som 48** | `kramig-salsicciapasta-tomat` |
| 32 | Italienska köttbullar med pasta, tomat, örtkräm och parmesan | **Serveringsvariant** | `italienska-kottbullar-tomatsas` |
| 34 | Chèvre chaud med päron, rödbetor och valnötter | **Tillvalsvariant** | `chevre-chaud-rodbetor-tryffelhonung` |
| 36 | Bouillabaisse med rouille | **Bouillabaisse-inspirerad variant, inte autentisk** | `fisksoppa-saffran-aioli` |
| 38 | Fläskschnitzel med ansjovissmör och kapris | **Alternativ sås/topping** | `flaskschnitzel-tartarkram-syltad-lok` |
| 42 | Bakad äppeldessert, havrecrust och salt kola | **Serveringsvariant** | `appelsmulpaj` |
| 48 | Salsicciapasta med fänkål | **Sammanslagen med 31** | `kramig-salsicciapasta-tomat` |
| 53 | Mac & Cheese med fontina, muskot och parmesankrisp | **Kontrollerat ostbyte, inte mer ost** | `mac-and-cheese` |
| 56 | Fläskkotlett, shiitake, potatiskroketter och grönpepparsås | **Nytt bistroinspirerat recept** | `flaskkotlett-shiitake-gronpepparsas` |
| 59 | Chokladmousse med glass, mandel och kola | **Serveringsvariant** | `chokladmousse` |
| 66 | Bistro Bestick: handrullade köttbullar | **Ingår i samma förbättringsspår som 13** | `kottbullar-mos` |
| 69 | Chicken Schnitzel Caesar | **Protein-/paneringsvariant** | `caesarsallad-kyckling` |
| 73 | Minirårakor med kallrökt lax och citronkräm | **Nytt recept** | `rarakor-kallrokt-lax-citronkram` |
| 75 | Smashburger med lönnsirapsbacon och ägg | **Toppingvariant** | `smashburgare` |
| 81 | Gratinerad fransk löksoppa | **Buljongvariant, grundteknik bevarad** | `fransk-loksoppa` |

**Räkning:** 32 markeringar = 29 distinkta arbetsområden (4+26, 13+66, 31+48 sammanlagda) = **10 nya recept + 19 befintliga recept med nya tips**. Rårakor är nytt eftersom `raggmunk` innehåller mjöl- och äggsmet medan rårakor inte gör det. Målet är att förhindra receptdubbletter utan att stoppa meningsfulla förbättringar.

## 2. Researchlogik och kompromisser per nytt recept

### Burrata, sotad persika, tomat
- Menyförebild: Pappa Grappa, burrata med olika tomater, sotad persika, basilikaolja.
- Teknik: stek persikan kort i het panna, servera mot kalla tomater och burrata; lätt citrussyra balanserar fruktens sötma.
- Källor: [Pappa Grappa, officiell restaurangsida](https://pappagrappa.se/norrkoping), [ICA, caprese med burrata och rostade tomater](https://www.ica.se/recept/caprese-med-burrata-och-ugnsrostade-picklade-tomater-750438/), [ICA, caprese med persika](https://www.ica.se/recept/caprese-med-mozzarella-persika-och-melon-740466/).
- Provlaga: hur mycket citron krävs vid söt persika? Blir basilikaoljan besk vid mixning?

### Oxfilépasta med svamp och tryffel (4+26)
- Menyförebilder: Pappa Grappas rigatoni med oxfilé och champinjoner, Grazies oxfilépasta med svamp, tryffel, kalvfond och grädde.
- Teknik: bryn köttet separat, bryn svampen ordentligt, bygg mild gräddsås med kalvfond, bind med pastavatten, tillför lite tryffel i slutet.
- Källor: [Pappa Grappa, eventmeny](https://pappagrappa.se/event/norrkoping), [Grazie, à la carte](https://grazienkpg.se/a-la-carte-meny/), [Arla, oxfilépasta](https://www.arla.se/recept/oxfilepasta/), [Arla, tryffelpasta med svamp](https://www.arla.se/recept/tryffelpasta-med-svamp/).
- Provlaga: fondens sälta, oxfiléns stektid, om tryffel tillför eller stör.

### Kantarelltortelloni
- Restaurangens fyllningsidé förenklas med färdiga ricotta-/spenattortelloni och egen kantarell-/Västerbottensostsås. Det ska inte kallas restaurangens egentillverkade, kantarellfyllda pasta.
- Källor: [Pappa Grappa, eventmeny](https://pappagrappa.se/event/norrkoping), [ICA, tortellini med champinjoner och ricotta](https://www.ica.se/recept/tortellini-med-champinjoner-och-ricotta-718447/), [Arla, kantarellpasta](https://www.arla.se/recept/kantarellpasta/).
- Provlaga: salt och krämighet när Västerbottensosten tillsätts, kantarellernas fukthalt, tortellonins hållfasthet.

### Varmrökt lax med sauce verte
- Menyförebild: Östgöta Kök – varmrökt lax, potatis, sauce verte och pressgurka. En redan tillagad rökt fisk kräver ingen hård uppvärmning.
- Källor: [Östgöta Kök, officiell meny](https://norrkoping.ostgotakok.se/nya-torget/lunchmeny/), [ICA, varmrökt lax med salsa verde](https://www.ica.se/recept/varmrokt-lax-med-salsa-verde-716634/), [ICA, grön örtsås](https://www.ica.se/recept/varlig-gron-ortsas-713651/).
- Provlaga: örtsåsens gröna färg, syra, smakbalans mot rökt sälta och gurkan.

### Cevapi
- Balkanrätten har nötkött, vitlök, kryddor, ajvar, bröd och lök. Östgöta Köks aioli ger restaurangvarianten; kajmak är mer traditionellt.
- Källor: [Östgöta Kök, meny](https://norrkoping.ostgotakok.se/nya-torget/lunchmeny/), [ICA, äkta cevapcici-streetfood](https://www.ica.se/recept/akta-cevapcici-streetfood-722979/).
- Provlaga: färsens kryddning/saftighet, tid och temperatur till genomlagad färs, rätt bröd-/ajvarbalans.

### Örtslungad penne med kyckling
- Stek kyckling och svamp separat för stekyta; blanda pasta med crème fraiche, örter och stärkelsehaltigt pastavatten. Frön rostas separat för knaprig finish.
- Källor: [Östgöta Kök](https://norrkoping.ostgotakok.se/nya-torget/lunchmeny/), [Arla, kycklingpasta](https://www.arla.se/recept/samling/kyckling-pasta/), [ICA, senapskyckling med timjan och pasta](https://www.ica.se/recept/senapskyckling-med-timjan-och-pasta-718750/).
- Provlaga: tydlig svampsmak, saftig kyckling samt grädd-/dijonbalans.

### Laxcannelloni
- Östgöta Köks meny anger laxcannelloni med béchamel, tomat och ruccola men specificerar inte rökt eller färsk lax. Vår version använder färsk rå lax i fyllningen, som tillagas helt i ugnen.
- Källor: [Östgöta Kök](https://norrkoping.ostgotakok.se/nya-torget/lunchmeny/), [ICA, cannelloni med rökt lax och Västerbottensost](https://www.ica.se/recept/cannelloni-med-rokt-lax-arter-och-vasterbottensost-714238/).
- Provlaga: plattornas mjukhet, såsens mängd, att fisken är ordentligt tillagad i de innersta pastarullarna.

### Flanksteksmörgås
- Stek hel flankstek och skiva TUNT tvärs över fibrerna, använd rostat surdegsbröd och syrlig syltad rödlök mot en lätt het majonnäs.
- Källor: [Grazie, restaurang](https://grazienkpg.se/), [ICA, flankstekråd](https://www.ica.se/artikel/flankstek/), [ICA, helgrillad flankstek med chipotlemajonnäs](https://www.ica.se/recept/helgrillad-flankstek-med-chipotlemajonnas-716511/).
- Provlaga: köttets mörhet, hur länge brödet förblir frasigt, mängden jalapeño.

### Fläskkotlett, shiitake, grönpepparsås och kroketter
- Den tidigare listan nämnde denna kombination för Restaurang Familjen; **just denna menyuppgift har inte gått att belägga på aktuell officiell meny**. Receptet anges därför som en *egen bistroinspirerad rätt*, utan obestyrkta påståenden om restaurangens nuvarande utbud.
- Källor: [ICA, fläskkotlett med svampsås](https://www.ica.se/recept/flaskkotlett-med-svampsas-724527/), [ICA, grönpepparsås](https://www.ica.se/recept/gronpepparsas-722908/), [ICA, potatiskroketter](https://www.ica.se/recept/potatiskroketter-727222/).
- Provlaga: ugnsrostade kroketters krisp, hur fast potatismassan blir, kotlettens kärna och shiitakens sälta.

### Rårakor med kallrökt lax
- Råraka är riven potatis utan mjölk-/mjölsmet. Det befintliga `raggmunk` ska inte användas som bas. Fyllning inspirerad av Urban Delis minirårakor med kallrökt regnbågslax och citron-pepparkräm.
- Källor: [Urban Deli, publicerad meny](https://urbandeli.se/mat-och-meny/), [ICA, råraka med kallrökt lax](https://www.ica.se/recept/raraka-med-kallrokt-lax-och-forellrom-717326/), [ICA, rårakepizza med rökt lax](https://www.ica.se/recept/rarakepizza-med-rokt-lax-729819/).
- Provlaga: potatisens vätska, krisp vid servering, portionens storlek; följ listeriaråd för känsliga grupper.

## 3. Varför 19 befintliga recept får valfria varianter, inte nya identiska recept

- **Teknik som redan är rätt:** Bolognese `bolognese` innehåller redan soffritto, pancetta, mjölk, måttlig tomat och lång tillagning. Lasagne `lasagne` har redan äkta béchamel, ordentlig ragù och vilotid. Fransk löksoppa `fransk-loksoppa` karamelliserar redan löken långsamt, rostar brödet och gratinerar. Därför är pastaformen, tillbehöret eller buljongen ett tillval – inte bevis för att grundreceptet är sämre.
- **Ändra utan att överbelasta:** För Wallenbergare är gräddsås ett alternativ till, inte ett komplement till brynt smör. För schnitzel bör ansjovissmör ersätta tartarkräm. För Mac & Cheese ersätter fontina en del av en annan ost, snarare än att lägga till ost ovanpå.
- **Mått, men inte falsk automatisk funktion:** varje nytt tips anger råvaror/mängder för receptets normalt antal portioner, men tipstexten är **inte ett strukturerat alternativ**. Den officiella inköpslistan och nutritionen avser fortfarande grundversionen. Rätt framtida lösning är datamodellstöd för alternativa ingrediensgrupper, så de kan väljas och skalas korrekt.
- **Trevlig restaurangfinish är ingen genväg till bättre bas:** extra sås, tryffel, söt glasyr, pesto och ost kan försämra smakbalans och enkelhet. Serveringsförslag ska provlagas mot originalet och få förbli valfria eller avfärdas om de inte vinner.

## 4. Säkerhet, nutrition, dokumenterad metodstatus

- Genomstek malet kött och kyckling ordentligt; särskild kontroll med termometer där råvarornas dimensioner varierar. Gratinera lax i cannelloni tills genomlagad i kärnan.
- Kallrökt lax är en kylvara med särskilda listeriaråd för känsliga grupper. Låt inte färskost eller kylsåser stå ute.
- Använd 12-procentig ättiksprit endast utspädd i pressgurka eller syltad rödlök. Vin som kokas i mat blir inte garanterat alkoholfritt.
- För varje nytt recept finns ungefärlig nutrition och ett praktiskt förslag för typ 2-diabetes; ingen medicinsk behandling hävdas och värdena är **inte verifierade mot fullständig näringsdatabas**.
- Recepten har inte **provlagats**. Ingen systematisk blindtest, kalibrerad ingrediensjämförelse eller självständig panelbedömning har dokumenterats. En strukturell datakontroll och byggbar app verifierar **inte** smak.
- Även ursprungliga 247 recept är öppna för framtida kvalitetsförbättring. Stabilt `id` ska bevaras när samma recept uppdateras.

## 5. Uppföljande expertgranskning

**Hög provlagningsprioritet (ej bekräftade P1-fel):**
1. `laxcannelloni-bechamel-tomat`: fiskens genomlagning och pastans mjukhet.
2. `flaskkotlett-shiitake-gronpepparsas`: kroketternas verkliga ugnskrisp och hållfasthet.
3. `cevapi-ajvar-vitlokssas`: tydligt brynt men genomlagad färs, saftighet.
4. `rigatoni-oxfile-svamp-tryffel`: köttets mörhet, fondens sälta och parmesansåsens emulsion.
5. `tortelloni-kantarell-vasterbotten`: ricottapastans struktur och såsens konsistens/salt.

**P2 att jämföra i liten A/B-provlagning:** salsiccia med/utan fänkål, Bolognese radiatori vs tagliatelle, Wallenbergare brynt smör vs gräddsås, chèvretoast med/utan päron, pannacotta hallon vs körsbär, Mac & Cheese fontina vs Grevé, Caesar stekt kyckling vs panko-schnitzel.

**Teknik/QA:** kör befintliga `node scripts/expert-catalog.mjs --check`, `npm run test:data`, `npm run test:logic`, `npm run test:static`, `npm run build` i verklig Node-miljö när den är tillgänglig. I den här körningen utfördes strukturerade valideringar mot GitHub-datan men **inte** Angular-bygge eller praktisk provlagning.
