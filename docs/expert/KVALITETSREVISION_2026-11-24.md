# Kvalitetsuppföljning – 24 november 2026

Det här dokumentet samlar **verifierade data-/kodfynd** och **öppna kulinariska testbehov**. En kodgranskning är inte en smak- eller provlagningsgranskning.

## Åtgärdat i PR #11
- Granskningsregistrets `recipe_count_current` synkat från 239 till 257.
- Tester skyddar katalogens och registrets antal, unika köposter och giltiga ID:n.
- Förvalda valfria ingredienser läggs inte automatiskt i inköpslistan; de kan väljas till en och en, separat från handlingsavbockning.
- Inköpsval lagras lokalt och återställs när receptet tas bort ur planeringen.
- Enskilt webbläsartest för valfri ingrediens samt PR-specifik CI utan publicering av en ej sammanslagen gren.
- Reparering av ett äldre syntaxfel i E2E-testets SVG-flaggregex.
- Synkroniserad schemabeskrivning för expertkörningen, version av kvalitetsstandarden och receptantal i README.
- P1-klassning av okända/provlagningskrävande nya restaurangrecept förtydligad.

## Öppna kvalitetsbehov – inte bekräftade smakfel
1. **Provlagning:** Laxcannelloni (fiskens innertemperatur, pastaplattornas fukt), kroketter (struktur/krisp), ćevapi (färsens saftighet och genomlagning), oxfilépasta (sälta/emulsion), tortelloni (ostsåsens bindning).
2. **Nutrition:** Alla 257 recept redovisar uppskattade värden. Rödvinssås, risgrynsgröt, Grilled Cheese och fisksoppa med saffran har en skillnad över 10 % mellan angivna kcal och 4/4/9-beräkning från avrundade makron. **Det är en kontrollsignal, inte bevis för att kalorivärdet är fel** (alkohol, kostfiber och avrundning kan påverka).
3. **Källkvalitet:** Totalt 701 hänvisningar för 257 recept. 11 recept har bara en källa i datan. Antal hänvisningar är inte liktydigt med oberoende evidens. Utöka företrädesvis med regionala specialister och dokumenterade jämförande tester.
4. **Strukturerade varianter:** Restauranginspirerade tillval i `tips` saknar maskinläsbara ingrediensgrupper. De räknas därför inte med i inköpslista eller nutrition. Lösningen kräver separat schema, migration av användarval och testning för vart och ett av de dokumenterade alternativen.
5. **Receptbilder:** Bildindex är tomt och 257 riktiga matbilder kan inte betraktas som skapade. Designpilot, bildframställning, kvalitetskontroll och tillgänglighetsgranskning återstår.
6. **Köksläge:** Steg har `title` och `body` men inga explicita ingrediensreferenser, tidsfält eller timers. Automatiska stegvisa mängder får inte gissas ur fritext.
7. **E2E:** PR #11 kör ett specifikt inköpsscenario. Det är inte samma sak som att hela Playwright-sviten eller tillgänglighet med skärmläsare har verifierats.

## Säkerhet och redaktionellt ansvar
Inga recept ändras av denna tekniska PR. Recept-ID och äldre användardata bevaras. `review_history`, `cook_tests` och `decisions` får inte fyllas med påhittad provlagning. Prioritera verifierade livsmedelssäkerhetsrisker före smakändringar. Schemalagda expertuppgiften är rådgivande och ändrar inte data utan godkännande.

## Nästa kvalitetsgrind
Dokumentera faktisk provlagning med råvaror, mängder, utrustning, tid, utfallet och datum. Revidera varje befintligt recept först när ändringen har tydligt stöd och förväntad nytta.
