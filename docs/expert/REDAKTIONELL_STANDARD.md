# Receptarkivet Expert – kvalitets- och researchsystem

**Version:** 2.0 · **Start:** 2026-11-15 · **Källa:** `src/data/recipes.json`

Receptarkivets löfte: **så gott som möjligt, så enkelt som möjligt hemma, med instruktioner som är lätta att lyckas med**. Recept får inte bli mer avancerade bara för att en professionell teknik verkar imponerande. Vi behåller moment som ger en väsentlig förbättring och tar bort moment som mest skapar friktion.

## 1. Driftsregler (bindande)

- Endast den redan befintliga schemalagda **ChatGPT-uppgiften**, måndagar cirka kl. 15 Europe/Stockholm. Ingen ny GitHub Action, extern AI-tjänst, API-nyckel eller prenumeration. Respektera ChatGPT-planens användningsgränser.
- Varje körning granskar **hellre ett recept exceptionellt väl än tre ytligt**; vanligtvis 1–3. Begränsa aldrig källsökning till ett godtyckligt antal om fler källor faktiskt kan avgöra en svår fråga.
- **Publicera eller ändra inte recept, kod eller GitHub-filer automatiskt** från den schemalagda granskningen. Föreslå ändringar och invänta uttryckligt godkännande. Även uppdatering av kunskapsbank/register sker efter godkännande.
- Gör ingen upprepningsresearch utan ny anledning. Läs katalog och register först, därefter enbart de utvalda recepten och de mest relevanta källorna. Om GitHub eller webbkällor inte är tillgängliga: redovisa begränsningen; hitta inte på.
- Arkivets initiala recept kan vara välresearchade utan att vara **oberoende expertgranskade**. Att ett recept saknar registerpost betyder ”ej granskad i detta system”, inte ”dåligt recept”.

## 2. Filer och beständighet

| Fil | Syfte |
|---|---|
| `docs/expert/KATALOG.json` | Lättläst, kompakt index för att undvika att lägga in hela receptfilen i AI-kontexten |
| `docs/expert/GRANSKNINGSREGISTER.json` | Sparade granskningar, öppna observationer, beslut och dokumenterade provlagningar |
| `docs/expert/KUNSKAPSBANK.md` | Beständiga, verifierade eller tydligt märkta hypotetiska kulinariska insikter |
| `src/data/recipes.json` | **Enda sanningskällan** för ingredienser och receptsteg |
| `scripts/expert-catalog.mjs` | Manuell regenerering/kontroll av katalogen; skapar INTE en schemalagd körning |

Nya recept återfinns via den verkliga receptfilen. Om indexets `count` inte matchar aktuellt antal är katalogen **inaktuell**: flagga detta och uppdatera vid nästa godkända repoändring. Man kan köra `node scripts/expert-catalog.mjs --check` eller `--write` i en lokal kopia. När ett nytt recept godkänns bör katalogen uppdateras i samma commit.

## 3. Expertpanel i en enda analys

Tänk från flera perspektiv men gör ingen dyr parallell agentorkestrering:

1. **Kock, regional specialist och restaurangutvecklare:** rättens identitet, råvaruval, smak och restaurangfinish.
2. **Matvetare:** Maillard, syra/salt/fett/umami, reaktioner, bindning, viskositet, emulsion, temperatur och värmeöverföring.
3. **Bagare/konditor när relevant:** mjölstyrka, bakprocent, hydrering, gluten, jästider, temperatur, kristallisation och eftervärme.
4. **Recepttestare/hemmakock:** rimlig tidsåtgång, tillgängliga ingredienser, portioner, standardkök, praktiska felkällor, lätt att följa.
5. **Närings- och säkerhetsgranskare:** allergener, livsmedelssäkerhet, förvaring, beräknade värden, diabetesanpassning utan medicinska löften.
6. **Skeptisk redaktör:** identifierar motsägelser, svaga belägg, förändringar som låter bra men saknar bevis.

Det är **perspektiv i samma granskning**, inte sex separata AI-körningar.

## 4. Prioritera hela arkivet utan slumpmässiga omtag

Välj recept utifrån dokumenterade behov, inte namnordning eller nyhetshype:

- **P0 – Säkerhet:** misstänkt risk för skadlig temperatur, felaktig förvaring eller annan allvarlig instruktion. Markeras omedelbart som brådskande i veckorapporten, men recept ändras inte utan godkännande.
- **P1 – Funktionellt fel:** motsägelse mellan mängd och steg, orimliga tider, trasig metod eller tydligt felaktig copycat-uppgift.
- **P2 – Stor kvalitetsvinst:** välgrundad möjlighet till märkbart bättre smak/textur eller mycket enklare instruktioner, osäker nyckelteknik, större kunskapslucka.
- **P3 – Redigering/finlir:** tydligare ordval och mindre viktiga alternativ.

Utgångspunkt: öppna observationer i registret, användarens verkliga provlagning/feedback, tidigare granskningar och signaler från receptet (t.ex. fritering, komplex bakning, många moment, få källor). **Få källor, hög komplexitet eller avsaknad av provlagning är en prioriteringssignal, inte bevis för dålig kvalitet.**

Rotera mellan kategorier; undvik flera likartade recept i rad om något annat har jämförbart behov. Kontrollera att ett redan granskat recept har ny evidens, ändrad version eller konkret feedback innan det granskas igen. Om inga högt prioriterade problem finns: gör en fördjupning av ett ännu ogranskat recept.

## 5. Research som faktiskt leder till bättre recept

- Sök brett på svenska, engelska och rättens originalspråk när relevant. Källor kan vara kockar, restauranger, bagerier, konditorier, matvetare, kokböcker, seriösa receptutvecklare, ursprungstraditioner, jämförande provlagningar, officiella produktblad och välunderbyggda recensioner.
- Ingen fast maxgräns för källor: ofta behövs många, men antalet länkar är **inte** ett kvalitetsmått. För varje relevant källa: vad testas, hur, med vilka förutsättningar och vilket resultat? Flera sajter som återger samma ursprungsrecept räknas inte som oberoende belägg.
- Jämför råvaror, proportioner i **gram eller bakprocent**, ordningsföljd, tillagningsmetod, värme, tid, textur, risk för misslyckande och arbetstid. Värdera om olika metoders styrkor verkligen kan kombineras. Gör inte en ”frankenrecipe” av oförenliga tekniker.
- Läs användarkommentarer och negativa erfarenheter där de är tillgängliga. Studera återkommande fel och lyckade justeringar, men skilj anekdot från kontrollerad provlagning.
- Kopieringsrecept: prioritera restaurangens verifierbara officiella ingredienser/struktur samt kritiskt testade rekonstruktioner; kalla aldrig hemmaversionen en verifierad hemlig originalformel.
- Ursprungsautenticitet och bästa praktiska hemmaversion kan vara **olika mål**. Beskriv kompromissen öppet. Svenska vanliga butiksvaror och normal utrustning är standard.

## 6. Kvalitetsgrindar – smak + användbarhet

Granska varje kandidat enligt dessa **fem axlar**. Använd `bra`, `behöver förbättras` eller `okänt/behöver testas`, inte påhittade exakta smaksiffror.

1. **Smak:** balans, djup, aromer, kryddning och rättens identitet.
2. **Konsistens:** saftighet, sprödhet, struktur, emulsion, temperatur och munkänsla.
3. **Enkelhet:** inköpsbarhet, normal utrustning, aktiv arbetstid, få icke-essentiella moment.
4. **Instruktionernas tydlighet:** mått, arbetsordning, temperatur, tid + sensoriska signaler, timing av parallella moment, felsökning.
5. **Tillförlitlighet:** mätbara proportioner, rimliga portioner, upprepbarhet, säkerhet, förvaring, realistisk total- och aktiv tid.

**Säkerhetsgrind:** allvarligt oklar eller felaktig livsmedelshantering går före smakförbättringar. Nutrition är alltid uppskattad om den inte beräknats och verifierats mot tillförlitliga innehållsdata. Diabetesanpassningar gäller praktiska kostval, inte påstådda behandlingseffekter. ”Provlagat” får endast anges med verklig dokumenterad provlagning.

## 7. Bevisnivåer, beslut och verklig testcykel

Klassificera varje viktig rekommendation:

- **Starkt stöd:** flera oberoende trovärdiga, specifika tester eller verifierbara primärkällor med relevanta förhållanden.
- **Rimligt stöd:** samsyn hos trovärdiga källor och passande matvetenskap, men ingen direkt jämförande provlagning.
- **Hypotes:** plausibel förbättring utan direkt bekräftelse; bör A/B-provlaga före permanent ändring.
- **Okänt/motsägelse:** källorna räcker inte eller pekar åt olika håll. Förklara osäkerheten.

Vid förslag: skriv **före → efter**, exakt mängd/temperatur/metod, varför, förväntad effekt, ökat/minskat jobb, källstöd, möjliga nackdelar, säkerhetsrisker, testbehov. Jämför alternativ och motargument innan rekommendationen ges. Ändra inget för ändringens skull. Om receptet står sig: **Behåll oförändrat**.

För ändringar som kräver provlagning: föreslå ett litet kontrollerat test (samma råvaror, portioner, utrustning; en viktig variabel åt gången; smak, textur, tydlighet och tidsåtgång som utfall). Spara bara **faktisk** feedback med datum, version och testförhållanden i registret efter godkännande. Skilj konsekvent mellan `research_granskad`, `provlagd` och `godkänd`; de är inte synonymer.

## 8. Veckorapport (använd kortformat)

1. **Veckans granskning:** receptnamn + ID, varför just det receptet.
2. **Research:** huvudkällor med klickbara länkar; vad som gick att verifiera och inte; utan uppblåsta källantal.
3. **Bedömning:** de fem kvalitetsaxlarna med kort motivering.
4. **Bästa 0–3 ändringar:** före → efter, tydlig effekt/kompromiss, källstöd och bevisnivå.
5. **Kritisk kontroll:** starkaste motargumentet och eventuellt behov av provlagning.
6. **Beslut att ta:** godkänn / provlaga / avvakta / behåll. Vid P0, markera akut risk tydligt.
7. **Ny överförbar kunskap:** endast verkligt underbyggd princip + relevanta andra recept.
8. **Nästa granskning:** föreslå ett nytt recept utifrån kön.

Leverera en **kort, läsbar sammanfattning** även om underliggande research är mycket djup. Ge referenser och evidens, inte ett okontrollerbart dokumentberg. En separat uppföljningspost för kunskapsbank/register kan föreslås men **sparas inte automatiskt**.

## 9. Godkännande, versionering och dataskydd

- Veckogranskningen är **läsande och rådgivande**, inte skrivande.
- Vid uttryckligt användargodkännande kan vi i en vanlig konversation uppdatera ett recept i `src/data/recipes.json`, köra befintliga tester och samtidigt anteckna beslut, källor, version/datum och lärdomar i register/kunskapsbank. Behåll receptets ID och historik.
- Avslag dokumenteras med skäl efter godkännande, så samma idé inte återkommer utan nytt stöd.
- Ingen hemlig, betald eller upphovsrättsligt skyddad fulltextdatabas. Lagra korta originalskrivna slutsatser, länkar och metadata, inte kopior av hela källrecept.
- Även med detta system kan AI ha fel och inte provsmaka; kvaliteten behöver på sikt prövas i riktiga kök.
