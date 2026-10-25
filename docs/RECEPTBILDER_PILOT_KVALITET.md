# Pilotbilder – kvalitetsbeslut

**Status:** Receptbilderna är AI-genererade illustrationer, inte fotografier av lagad mat. 
En kandidat får inte publiceras om den avviker från de synliga ingredienserna eller uppläggningen.

| Recept | Bedömning | Kommentar |
|---|---|---|
| Kycklingsatay | Måste justeras | Koriander och dekoration som inte ingår i originalreceptet |
| Fläskfilégryta med champinjoner | Preliminärt godkänd | Fläskfilé, svamp, sås, ris, möjlig persilja |
| Key Lime Pie | Preliminärt godkänd | Kexbotten, limefyllning och grädde enligt receptet |
| Caesarsallad | Måste granskas | Eventuell extra örtgarnering |
| Lasagne | Måste granskas | Valfri sallad och örter – kontrollera mot slutlig servering |
| Wallenbergare | Måste justeras | Färska örter som inte ingår |
| Tiramisu | Preliminärt godkänd | Kakao, mascarpone, kaffedoppade savoiardikex |
| Broccolisoppa med cheddar | Preliminärt godkänd | Broccoli, ost, krutonger, valfri persilja |
| Club Sandwich | Måste justeras | Ursprunglig bild hade pommes; beskärning utesluter detta men brödlagren måste verifieras |
| Pavlova | Måste justeras | Myntablad ingår inte i receptet |

**Godkända recept-ID:n för visning** i `scripts/generate-recipe-image-index.mjs`:
`flaskfilegryta-champinjoner`, `key-lime-pie`, `tiramisu`, `broccolisoppa-cheddar`, `carbonara`, `creme-brulee`, `fish-and-chips`, `philly-cheesesteak`.

**Uppladdat 25 oktober 2026:** De fem kompletta bildparen för `carbonara`, `fish-and-chips`, `creme-brulee`, `philly-cheesesteak` och `tiramisu` finns i `public/recipe-images/`. Alla är tillfälliga piloter beskurna ur ett större AI-kollage med verklig källupplösning ungefär 368 × 240 px, sedan uppskalade. De bör ersättas av individuellt genererade högupplösta illustrationer före slutlig bildkvalitetsgodkänning. Se `docs/BILDPILOT_5.md`.

Bildindexet genereras automatiskt vid `npm run build`. Recept utan kompletta och godkända par visar fortfarande emoji.
