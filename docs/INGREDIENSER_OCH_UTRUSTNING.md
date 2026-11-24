# Ingrediens- och utrustningsikoner

**Infört 2026-11-24**

## Utseende
Små, diskreta **Tabler Icons**, stroke 2, visas på varje ingrediensrad i både receptvyn och köksläget. Råvarunamn och mängd förblir huvudsaken; ikonen är dekorativ och dold för skärmläsare eftersom namnet redan förmedlar informationen. Även om en ingrediens inte känns igen visas en neutral förpackningsikon.

I receptvyn visas en kompakt **Utrustning**-rad om tillagningsstegen uttryckligen nämner någon utrustning som kan identifieras. Inga tomma utrustningssektioner eller stora dekorativa kort.

## Datakälla
`src/app/core/recipe-presentation.ts` innehåller en regelbaserad kategorisering av svenska ingrediensnamn och uttryckligen nämnd utrustning, utan nätverkstjänster. Matchning använder Unicode-medvetna ordgränser och behandlar små/stora bokstäver lika.

Den svenska matchningen täcker bland annat vanliga böjningsformer och sammansättningar (t.ex. vitlöksklyftor, torskrygg, vispgrädde och basmatiris). Enbart ordet **grilla** innebär inte att en separat grill måste användas.\n\nGrundregeln är försiktighet: utrustningsnamn presenteras utifrån stegtext och inte via generiska gissningar som att all mat behöver stekpanna. Det är **inte** en verifierad, fullständig packlista och kan missa utrustning som förutsätts men inte nämns i recepten.

`Recipe.equipment?: string[]` ger möjlighet för redaktionen att lägga till en korrekt, receptspecifik utrustningslista. Sådana listor har företräde framför automatisk härledning. Redaktören måste bekräfta vad som verkligen krävs respektive är valfritt. Detta kräver successiv genomgång av receptarkivet.

## Ikoner
Alla symboler är Tabler outline-SVG, stroke 2, lokalt inbäddade i `src/app/components/ui-icon.component.ts`. Ingen Lucide-fallback eller extra ikonbibliotek används. Källor och licens: [Tabler Icons MIT](https://github.com/tabler/tabler-icons/blob/main/LICENSE).

## Kvalitet och teststatus
- Ikonnamn från presentationsreglerna jämfördes med faktiska `@case`-definitioner; inga saknade namn upptäcktes.\n- `tests/verify-logic.cjs` har kompletterats med fall för svenska råvarunamn, neutrala ikoner, maximal listlängd och företräde för granskade utrustningslistor. `tests/validate-recipes.mjs` validerar också format och dubbletter när `equipment` anges.\n- Presenter-logiken och ikonernas typer har separerats från Angular-komponenten för att kunna testas i befintlig TypeScript/Node-testsvit.
- Både receptvyn och köksläget använder samma ingrediensfunktion.
- Det är möjligt att några råvaror får en allmän symbol. Hellre neutral ikon än en felaktig specifik ikon.
- Automatiska testfiler har uppdaterats men **inte körts och bekräftats gröna** i denna arbetsomgång. Angular-build, användning i mobilwebbläsare och manuell granskning av samtliga recept återstår.
