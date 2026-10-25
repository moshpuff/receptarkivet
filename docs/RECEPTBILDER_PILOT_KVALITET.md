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

Endast följande är vitlistade i `scripts/generate-recipe-image-index.mjs`:
`flaskfilegryta-champinjoner`, `key-lime-pie`, `tiramisu`, `broccolisoppa-cheddar`.

Inga bilder lagras i GitHub genom denna kodändring; bildfiler måste laddas upp separat. 
Bildindexet genereras automatiskt vid `npm run build`.
