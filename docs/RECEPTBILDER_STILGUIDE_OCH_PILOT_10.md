# Receptarkivet – bildpilot med 10 recept

> **Status:** Färdiga produktionsprompter och kvalitetskrav. **Inga nya bilder är genererade eller publicerade i appen genom detta dokument.** Varje bild ska granskas innan den används.

## Bildriktning

Visuell inspiration: [Restaurang Pulls galleri](https://resto.pull.ee/#galerii), som referens för professionell, aptitlig restaurang-/editorial-känsla – **inte** för att efterlikna enskilda fotografier.

**Gemensam instruktion att använda före varje receptprompt (på engelska):**

> Ultra-realistic high-end restaurant and editorial cookbook photography. The depicted meal must match the supplied recipe ingredients, cooking method, texture, cut and serving exactly. Premium restaurant-level food styling, but plausible and edible, never artificial luxury or fabricated food. Beautiful controlled directional light, nuanced deep shadows, realistic color and appetite appeal, excellent micro-texture and subtle atmospheric depth. Use varied camera viewpoints, place settings, lighting and plating suited to each dish – never repeat the same beige speckled ceramic plate and 3/4 composition for every image. The food is the unmistakable subject, with clean natural backgrounds and no clutter. Photographically believable details. 4:3 landscape image, subject and essential accompaniments kept within a central safe crop that works for a 3:2 detail hero. No people, no lettering, no watermarks. No ingredients, garnishes, sauces, side dishes or decorations absent from the recipe. This is an AI illustration, not a photograph of a tested/served plate.

**Gemensamt negativt filter:** no extra garnish, no random herbs, no unexpected side dishes, no fake steam, no oversaturation, no plastic food, no heavy HDR, no identical composition between dishes, no crowded kitchen props, no intrusive hands.

För varje prompt finns en egen kameravinkel och stilmässig karaktär. Alla tio är baserade på de faktiska recepten i `src/data/recipes.json`, inte endast maträttsnamn.

## Prompter

### 1. Kycklingsatay med jordnötssås

- **Recept-ID:** `kycklingsatay-jordnotssas`
- **Kameravinkel:** 35° nära tallrikens nivå, diagonal komposition
- **Ljussättning:** Kontrastrikt sidoljus, mörkare trä och mörk keramik
- **Alt-text:** Grillade kycklingspett med jordnötssås, jasminris och gurka på en mörk tallrik.

**Prompt (lägg till gemensam instruktion först):**

> Show Thai chicken satay based on boneless chicken thigh marinated in coconut milk, red curry paste and mild curry, cooked with convincing golden browning and small charred patches. Several wooden skewers lie diagonally across a restrained dark ceramic plate. Include a neat small serving of fluffy jasmine rice, sliced fresh cucumber, and a small bowl of glossy, thick coconut-peanut sauce with red curry; optional chopped roasted peanuts only. Distinct textures: juicy chicken, charred edges, thick sauce, individual rice grains. Camera at approximately 35 degrees above table level, looking along the skewers from the front corner. Cinematic restaurant side lighting, a deep warm wood surface and softly falling shadows, elegant but not theatrical. No coriander/cilantro, banana leaves, chili peppers or other added side dishes.

### 2. Fläskfilégryta med champinjoner

- **Recept-ID:** `flaskfilegryta-champinjoner`
- **Kameravinkel:** 50° lätt ovanifrån, framhäv såsens struktur
- **Ljussättning:** Mjuk restaurangbelysning med varm högdager över såsen
- **Alt-text:** Skivor av fläskfilé och champinjoner i krämig sås med basmatiris.

**Prompt (lägg till gemensam instruktion först):**

> Photograph a luxurious but realistic Swedish pork tenderloin and mushroom cream stew. Clearly show 2-cm pork tenderloin medallions with gently browned outer surfaces and tender cooked centers, well-browned sliced button mushrooms, finely cooked yellow onion, and a smooth light-brown sauce made from cream, milk, soy, tomato purée and Dijon mustard. Serve with a separate neat mound of basmati rice on the same plate; a small restrained scattering of parsley is optional and faithful to the recipe. Shoot from a 50-degree elevated angle to emphasize the creamy sauce and mushroom detail. Off-white modern shallow plate, dark walnut tabletop, soft spot of warm directional light and deep controlled shadows. No wholegrain mustard seeds, no extra vegetables, no wine glass, no gravy replacement.

### 3. Key Lime Pie

- **Recept-ID:** `key-lime-pie`
- **Kameravinkel:** 15° låg sidovinkel, skarp genomskärning
- **Ljussättning:** Klar ljusriktning mot fyllningens kant, dämpad bakgrund
- **Alt-text:** Genomskuren Key Lime Pie med digestivebotten, len limefyllning och vispad grädde.

**Prompt (lägg till gemensam instruktion först):**

> Create a close low-angle editorial dessert photograph of a single precisely cut slice of key lime pie in crisp profile. It must show a baked crushed-digestive-biscuit and butter crust, a smooth firm-but-creamy pale lemon-lime colored filling made with sweetened condensed milk, egg yolk and fresh lime juice, and softly whipped unsweetened cream on top. Garnish delicately with finely grated green lime zest only. The slice is on a small clean neutral dessert plate; optionally show the remaining pie softly blurred in the background, but the plated slice is dominant. Camera about 15 degrees above table height, with a focus plane crossing the crust and filling layers. Elegant fine-dining pastry lighting, controlled shadows and natural highlights. No meringue, no lemon slices, no green dye, no raspberries or cookie toppings.

### 4. Caesarsallad med kyckling

- **Recept-ID:** `caesarsallad-kyckling`
- **Kameravinkel:** 90° rakt ovanifrån, tydlig grafisk uppläggning
- **Ljussättning:** Friskt, balanserat dagsljus med mjuka skuggor
- **Alt-text:** Caesarsallad ovanifrån med romansallad, skivad kyckling, krutonger och parmesan.

**Prompt (lägg till gemensam instruktion först):**

> Top-down professional editorial photograph of a generous chicken Caesar salad arranged deliberately in a wide dark stoneware bowl. Exact visible ingredients: thoroughly dried crisp romaine lettuce leaves lightly coated in creamy Caesar dressing, succulent pan-seared chicken breast cut into slices, golden olive-oil sourdough croutons and thin shaved Parmesan. The dressing is creamy and lightly textured, based on mayonnaise, anchovy fillets, grated Parmesan, garlic, Dijon mustard, Worcestershire and lemon, but no standalone visible anchovies are required. Camera straight overhead at 90 degrees so the shapes, freshness and color contrasts are striking. Soft controlled daylight and a minimal graphite-toned table surface. A refined contemporary restaurant salad, not generic mixed greens. No bacon, cherry tomatoes, avocado, egg, lemon wedges or unrelated garnishes.

### 5. Lasagne

- **Recept-ID:** `lasagne`
- **Kameravinkel:** 20° låg sidovy, bygg fokus på tydliga lager
- **Ljussättning:** Dramatisk men naturlig varm sidobelysning
- **Alt-text:** Lasagne i låg sidovinkel med synliga lager av ragù, pastaplattor och béchamelsås.

**Prompt (lägg till gemensam instruktion först):**

> Restaurant-quality low-angle photograph of a generous clean-cut portion of traditional lasagne alla bolognese. The cross-section must reveal several distinct pasta sheet layers, slow-cooked beef ragù with finely cooked soffritto and pancetta, silky pale béchamel, and a restrained melted mozzarella and Parmigiano Reggiano top browned to a beautiful golden crust. Let the lasagne rest so it stands upright naturally, with realistic sauce and surface texture rather than collapsing or looking dry. Camera approximately 20 degrees above tabletop height, emphasizing depth and pasta stratification. Matte charcoal plate with a small pool of naturally released sauce, warm directional side light and a softly darkened restaurant background. No ricotta layers, mushrooms, spinach, parsley scatter or decorative cherry tomatoes. Salad is optional in the recipe and deliberately omitted.

### 6. Wallenbergare

- **Recept-ID:** `wallenbergare`
- **Kameravinkel:** 45° upphöjd bordsvinkel, klassisk uppläggning
- **Ljussättning:** Skandinaviskt fönsterljus, precisa varma reflexer i smöret
- **Alt-text:** Ljust gyllene Wallenbergare med potatispuré, gröna ärtor, lingon och brynt smör.

**Prompt (lägg till gemensam instruktion först):**

> Elegant and authentic Swedish Wallenbergare plated like a top Stockholm restaurant's refined husmanskost. Feature one delicately light-golden finely breadcrumb-coated soft veal patty, not a dark pan-fried hamburger and not a thick schnitzel. Beside it arrange smooth whipped potato purée, a modest portion of shiny green peas, a small spoonful of rårörda lingonberries with discernible berries, and genuine nut-brown butter gently spooned around the patty. Show a believable edible portion, not miniature fine-dining abstractions. Camera at a 45-degree elevated table angle that captures every traditional accompaniment and the delicate pale-golden crust. Warm northern-window light, quiet contemporary porcelain and a darker natural linen setting. No parsley, carrots, cucumber, cream gravy or other side dishes.

### 7. Tiramisu

- **Recept-ID:** `tiramisu`
- **Kameravinkel:** 10° nästan i ögonhöjd, tät makrobild
- **Ljussättning:** Lågmält restaurangljus med kontrast i kakao och kräm
- **Alt-text:** Närbild på tiramisu med lager av kaffedoppade savoiardikex, mascarpone och kakao.

**Prompt (lägg till gemensam instruktion först):**

> An intimate near-eye-level macro photograph of a clean rectangular portion of classic Italian tiramisu. The cut side must reveal distinct layers of coffee-dipped savoiardi ladyfingers and softly set airy mascarpone cream prepared with eggs and sugar, dusted with unsweetened cocoa powder on top. Make the coffee-soaked sponge believable and moist but not flooded; cream should look luscious and hold shape. A restrained neutral dark dessert plate and the slightest suggestion of an espresso cup in deep background blur can support the mood, but the tiramisu is the sole clear hero. Camera at approximately 10 degrees above table height with shallow realistic depth of field. Warm, dramatic but subtle restaurant lighting. No chocolate sauce, liqueur bottle, chocolate shavings, berries, mint or whipped-cream rosettes.

### 8. Broccolisoppa med cheddar

- **Recept-ID:** `broccolisoppa-cheddar`
- **Kameravinkel:** 75° nära ovanifrån, låt soppan och krutongerna dominera
- **Ljussättning:** Mjukt diffust ljus med grön, frisk färgåtergivning
- **Alt-text:** Grön krämig broccolisoppa med cheddar och gyllenbruna vitlökskrutonger.

**Prompt (lägg till gemensam instruktion först):**

> A sophisticated but comforting restaurant bowl of creamy blended broccoli soup with mature cheddar, cream, vegetable stock and sautéed onion. The soup's color should be a natural light-to-medium green with tiny broccoli speckles, never unnaturally neon. A few crisp golden butter-and-garlic toast croutons float on the surface, with a small realistic amount of grated cheddar melting into the hot soup; optional parsley is acceptable only in a restrained amount. Shoot from a pronounced 75-degree near-overhead angle to highlight surface texture and the croutons. Use a matte pale ceramic soup bowl against a quietly textured charcoal linen surface, diffused window-style light and gentle shadows. No bacon, chicken, chili oil, pumpkin seeds, cream art, large broccoli florets or unrelated toppings.

### 9. Club Sandwich med kyckling och bacon

- **Recept-ID:** `club-sandwich-kyckling`
- **Kameravinkel:** 10° låg vinkel från sidan, visa samtliga tre brödskivor
- **Ljussättning:** Tydligt restaurangsidoljus med skarpa texturer i brödet
- **Alt-text:** Trippeltoastad Club Sandwich i sidovy med kyckling, bacon, sallad och tomat.

**Prompt (lägg till gemensam instruktion först):**

> A meticulously assembled classic triple-decker club sandwich with chicken and bacon, photographed from an unusually low side angle to celebrate its precise layers. The sandwich consists of three lightly golden toasted white sandwich bread slices separated by two substantial fillings showing properly cooked thin-sliced chicken breast, crispy bacon, dry romaine lettuce, ripe tomato slices and mayonnaise, optionally with only a subtle hint of Dijon mustard. Cut neatly into triangles and hold with small cocktail picks if needed. Hero composition on a dark wooden board or simple modern plate; maintain real-world physical plausibility, exact number of bread layers and crisp recognizable ingredients. Strong but natural directional restaurant lighting, muted surroundings and shallow depth of field. No fries, chips, cheese, avocado, extra sauce bowls, pickles, eggs or unnecessary garnish.

### 10. Pavlova med grädde och bär

- **Recept-ID:** `pavlova-bar`
- **Kameravinkel:** 55° snett uppifrån, visa både marängskal och topping
- **Ljussättning:** Ljus, elegant dessertfotografi med djupare bakgrund
- **Alt-text:** Pavlova med frasig vit maräng, vispad grädde, jordgubbar, hallon och blåbär.

**Prompt (lägg till gemensam instruktion först):**

> A large classic pavlova plated for a refined restaurant dessert presentation. Show a pale delicately cracked crisp meringue shell with a subtly marshmallow-soft center visible where the top opens, filled with naturally soft unsweetened vanilla whipped cream, fresh strawberries, raspberries and blueberries; an optional light scattering of fresh passion-fruit pulp is faithful to the recipe. The pavlova should look gently handmade and fragile rather than like a perfect commercial cake or stiff frosted sponge. Camera at a 55-degree elevated angle that shows the meringue's height, its delicate fracture structure and the fruit arrangement at once. Contemporary pale cake stand, deep neutral background, delicate sculptural side light that preserves bright white detail. No mint leaves, edible flowers, chocolate, caramel, lemon curd or colored sauces.

## Kontroll innan en bild godkänns

1. Kontrollera bildens alla synliga ingredienser, tillbehör och garneringar mot receptets faktiska JSON-fält. Avvisa bilden om något väsentligt tillförts eller saknas.
2. Kontrollera rätt tillagningssätt och textur: Wallenbergare ska vara ljust gyllene; lasagnen ska visa béchamel, inte ricotta; tiramisun ska inte innehålla chokladsås; Club Sandwich ska inte få pommes i originalbilden.
3. Variera kameravinklarna enligt specifikationerna, inte identisk keramiktallrik och samma inramning i varje bild. Stilen ska vara sammanhängande genom professionell kvalitet, inte genom kopierad komposition.
4. Kontrollera 4:3-kortbeskärning och 3:2-detaljbeskärning utan att väsentliga tillbehör skärs av.
5. Spara en godkänd källa i originalupplösning och generera optimerade WebP-varianter; visa alt-text och märk AI-bild som illustration där det är relevant.
6. Om kvalitetskraven inte uppfylls: justera prompten eller generera om. Ingen bild ska publiceras som verifierad representation av ett provlagat recept.

## Bildfilskonvention (planerad, ej implementerad)

- `public/recipe-images/<recipe-id>-card.webp` (4:3, cirka 600 px bredd)
- `public/recipe-images/<recipe-id>-hero.webp` (3:2 eller 4:3, cirka 1200 px bredd)
- Recept utan godkänd bild behåller sin befintliga illustrerade reservvy.

Genererade bilder ska märkas som **AI-genererade receptillustrationer** så att de inte misstas för dokumentation av en tillagad måltid.