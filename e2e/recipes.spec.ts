import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

const recipeCatalog: {id:string;name:string}[] = JSON.parse(readFileSync('src/data/recipes.json', 'utf8'));

// Browser-testsviten körs mot det riktiga Angular-bygget när beroendena
// har installerats. Den är inte ersättning för logiktesterna utan komplement.
test('visar alla recept och kan öppna detaljer', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('app-recipe-card')).toHaveCount(recipeCatalog.length);
  await expect(page.getByRole('link', {name: /Receptarkivet/}).first()).toBeVisible();
  await page.locator('app-recipe-card .card-link').first().click();
  await expect(page.locator('app-detail h1')).toBeVisible();
  await expect(page.getByRole('heading', {name:'Ingredienser'})).toBeVisible();
  await expect(page.getByRole('heading', {name:'Gör så här'})).toBeVisible();
  await expect(page.getByText('Ungefärligt näringsvärde')).toBeVisible();
});

test('sökning, kategori, tagg, land och återställning', async ({page}) => {
  await page.goto('/');
  await page.getByRole('searchbox', {name: 'Sök recept'}).fill('wallenbergare');
  await expect(page.locator('app-recipe-card')).toHaveCount(1);
  await page.getByRole('button', {name:'Rensa filter'}).click();
  await page.getByRole('button', {name:'Svensk husman'}).click();
  await expect(page.locator('app-recipe-card').first()).toBeVisible();
  await page.getByRole('combobox', {name:'Filtrera efter tagg'}).selectOption('Kött');
  await page.getByRole('button', {name:'Rensa filter'}).click();
  await page.getByRole('combobox', {name:'Filtrera efter land'}).selectOption('SE');
  await expect(page.locator('app-recipe-card').first()).toBeVisible();
  await page.getByRole('button', {name:'Rensa filter'}).click();
  await expect(page.locator('app-recipe-card')).toHaveCount(recipeCatalog.length);
});

test('skalar ingredienser och behåller portionsvalet', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await expect(page.locator('app-detail h1')).toContainText('Wallenbergare');
  const kalvfars = page.locator('.ingredient', {hasText: 'Kalvfärs'}).first();
  await expect(kalvfars).toContainText('500 g');
  await page.getByRole('button', {name:'½ sats'}).click();
  await expect(kalvfars).toContainText('250 g');
  await page.getByRole('button', {name:'2 satser'}).click();
  await expect(kalvfars).toContainText('1 000 g');
  await page.reload();
  await expect(page.getByRole('button', {name:'2 satser'})).toHaveAttribute('aria-pressed','true');
});

test('favoriter och avbockade ingredienser sparas vid omladdning', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await page.getByRole('button', {name:/Spara recept/}).click();
  const checkbox = page.locator('.ingredient input[type=checkbox]').first();
  await checkbox.check();
  await page.reload();
  await expect(page.getByRole('button', {name:'♥ Sparat'})).toBeVisible();
  await expect(page.locator('.ingredient input[type=checkbox]').first()).toBeChecked();
  await page.getByRole('link', {name:'Till alla recept'}).click();
  await page.getByRole('button', {name: /Sparade/}).click();
  await expect(page.locator('app-recipe-card')).toHaveCount(1);
  await expect(page.locator('app-recipe-card')).toContainText('Wallenbergare');
});

test('inköpslista återger rätt antal och mängder', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await page.getByRole('button', {name:'2 satser'}).click();
  await page.getByRole('button', {name:/Lägg till i inköpslistan/}).click();
  await page.getByRole('link', {name:/Planera & handla/}).click();
  await expect(page.locator('.bag-recipe')).toHaveCount(1);
  await expect(page.locator('.bag-recipe')).toContainText('1 000 g');
  await page.reload();
  await expect(page.locator('.bag-recipe')).toHaveCount(1);
  await page.getByRole('checkbox', {name:/Wallenbergare/}).uncheck();
  await expect(page.locator('.bag-recipe')).toHaveCount(0);
});

test('näringsvärden, shoppingtips och receptkällor finns i detaljvyn', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await page.locator('details.nutrition-details summary').click();
  await expect(page.locator('details.nutrition-details')).toHaveAttribute('open','');
  await expect(page.locator('.nutrition-stat')).toHaveCount(4);
  await expect(page.locator('.nutrition-stat').first()).toContainText('kcal');
  await expect(page.locator('details.shopping-details')).toBeVisible();
  await page.locator('details.shopping-details summary').click();
  await expect(page.locator('.shopping-inner')).toBeVisible();
  await expect(page.locator('.source-box a').first()).toHaveAttribute('href', /^https?:\/\//);
});

test('ogiltig receptlänk hanteras', async ({page}) => {
  await page.goto('/#/recept/det-har-receptet-finns-inte');
  await expect(page.getByRole('heading', {name:'Receptet hittades inte'})).toBeVisible();
  await page.getByRole('link', {name:'Visa alla recept'}).click();
  await expect(page.locator('app-recipe-card')).toHaveCount(recipeCatalog.length);
});

test('kan kopiera inköpslistan eller välja manuell kopiering', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await page.getByRole('button', {name:/Lägg till i inköpslistan/}).click();
  await page.getByRole('link', {name:/Planera & handla/}).click();
  await page.getByRole('button', {name:/Kopiera listan/}).click();
  const toast = page.locator('.toast');
  await expect(toast).toContainText(/Inköpslistan kopierad|Markera och kopiera/);
  if ((await toast.textContent())?.includes('Markera')) {
    await expect(page.locator('#manual-list')).toContainText('Wallenbergare');
  }
});

test('skriv ut-knappen anropar webbläsarens utskriftsfunktion', async ({page}) => {
  await page.addInitScript(() => {
    window.print = () => document.documentElement.dataset['printCalled'] = 'true';
  });
  await page.goto('/#/recept/wallenbergare');
  await page.getByRole('button', {name:'Skriv ut'}).click();
  await expect(page.locator('html')).toHaveAttribute('data-print-called', 'true');
});

test('inga horisontella sidöverskridningar', async ({page}) => {
  for (const url of ['/', '/#/recept/wallenbergare', '/#/inkopslista']) {
    await page.goto(url);
    const overflows = await page.evaluate(() =>
      document.documentElement.scrollWidth > window.innerWidth + 2
    );
    expect(overflows, `Horisontell sidöverskridning på ${url}`).toBe(false);
  }
});


test('samtliga recepts detaljsidor laddar utan runtime-fel', async ({page}, testInfo) => {
  test.skip(testInfo.project.name === 'mobile-chromium', 'Alla recept kontrolleras på dator; mobilfunktioner kontrolleras separat.');
  expect(recipeCatalog.length).toBeGreaterThanOrEqual(100);
  const runtimeErrors: string[] = [];
  page.on('pageerror', error => runtimeErrors.push(error.message));
  for (const recipe of recipeCatalog) {
    await page.goto('/#/recept/' + encodeURIComponent(recipe.id));
    await expect(page.locator('app-detail h1')).toContainText(recipe.name);
    await expect(page.locator('.ingredient').first()).toBeVisible();
    await expect(page.locator('.step').first()).toBeVisible();
  }
  expect(runtimeErrors).toEqual([]);
});


test('sökning i inköpslistans receptväljare', async ({page}) => {
  await page.goto('/#/inkopslista');
  const picker = page.getByRole('searchbox', {name: 'Sök bland recepten'});
  await picker.fill('wallenbergare');
  await expect(page.locator('.bag-choice')).toHaveCount(1);
  await expect(page.locator('.bag-choice')).toContainText('Wallenbergare');
  await picker.fill('ordfinnsinteirecepten123');
  await expect(page.getByText('Inga recept matchar sökningen.')).toBeVisible();
});

test('ingredienskommentarer följer med när satsstorleken ändras', async ({page}) => {
  await page.goto('/#/recept/carbonara');
  await expect(page.locator('.ingredient-note').first()).toBeVisible();
  await page.getByRole('button', {name: '2 satser'}).click();
  await expect(page.locator('.ingredient-note').first()).toBeVisible();
});


test('hela flödet: planera, anpassa, handla, laga, spara resultat', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await page.getByRole('button', {name:/Lägg till i inköpslistan/}).click();
  await page.getByRole('link', {name: /Planera & handla/}).click();
  await expect(page.locator('.bag-recipe')).toHaveCount(1);
  await page.getByRole('button', {name:'2 satser'}).click();
  await expect(page.locator('.bag-item').first()).toContainText('1 000 g');
  const checkbox = page.locator('.bag-item input').first();
  await checkbox.check();
  await expect(page.locator('.bag-progress')).toBeVisible();
  await page.reload();
  await expect(page.locator('.bag-item input').first()).toBeChecked();
  await page.locator('.bag-cook-link').click();
  await expect(page.getByRole('heading', {name:'Wallenbergare'})).toBeVisible();
  await expect(page.getByText('Steg 1 av')).toBeVisible();
  await page.getByRole('button', {name:'Nästa steg'}).click();
  await page.reload();
  await expect(page.getByText('Steg 2 av')).toBeVisible();
  const stepCount = await page.locator('#step-jump option').count();
  await page.locator('#step-jump').selectOption(String(stepCount - 1));
  await page.getByRole('button', {name:/Klart – jag har lagat rätten/}).click();
  await expect(page.getByText('Klart! Smaklig måltid.')).toBeVisible();
  await page.getByLabel('Egen anteckning om receptet').fill('Extra lingon nästa gång.');
  await page.getByRole('button', {name:'Spara anteckning'}).click();
  await page.reload();
  await expect(page.getByLabel('Egen anteckning om receptet')).toHaveValue('Extra lingon nästa gång.');
});

test('inköp och tillagningsingredienser har oberoende checklistor', async ({page}) => {
  await page.goto('/#/inkopslista');
  await page.getByRole('searchbox', {name:'Sök bland recepten'}).fill('wallenbergare');
  await page.locator('.bag-choice input').check();
  await page.locator('.bag-item input').first().check();
  await page.locator('.bag-cook-link').click();
  if (await page.getByRole('button', {name:/Ingredienser/}).isVisible()) {
    await page.getByRole('button', {name:/Ingredienser/}).click();
  }
  await expect(page.locator('.cook-ingredients .ingredient input').first()).not.toBeChecked();
  await page.locator('.cook-ingredients .ingredient input').first().check();
  await page.getByRole('button', {name:'Börja om med ingredienserna'}).click();
  await expect(page.locator('.cook-ingredients .ingredient input').first()).not.toBeChecked();
  await page.getByRole('link', {name:/Planera & handla/}).click();
  await expect(page.locator('.bag-item input').first()).toBeChecked();
});

test('ankarlänkar stör inte Angulars hash-navigation', async ({page}) => {
  await page.goto('/');
  await page.getByRole('button', {name:/Utforska recepten/}).click();
  await expect(page.locator('app-recipe-card').first()).toBeVisible();
  await expect(page).toHaveURL(/#\/?$/);
  await page.goto('/#/inkopslista');
  await page.getByRole('button', {name:/Välj recept nedan/}).click();
  await expect(page.getByRole('searchbox', {name:'Sök bland recepten'})).toBeFocused();
  await expect(page).toHaveURL(/#\/inkopslista$/);
});


test('hoppa till innehållet skadar inte hash-routen', async ({page}) => {
  await page.goto('/#/recept/wallenbergare');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button',{name:'Hoppa till innehållet'})).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#content')).toBeFocused();
  await expect(page).toHaveURL(/#\/recept\/wallenbergare$/);
});


test('middagsförslag: två snabba val, verklig tidsgräns och direkt till köksläge', async ({page}) => {
  await page.goto('/');
  const helper = page.locator('.dinner-helper');
  await expect(helper.getByRole('heading', {name: 'Vad ska vi äta ikväll?'})).toBeVisible();
  await helper.getByRole('button', {name: '15 min'}).click();
  await helper.getByRole('button', {name: 'Ge mig middagsförslag'}).click();
  await expect(helper.locator('.dinner-result')).toHaveCount(2);
  await expect(helper.getByText('Bara 2 recept matchar 15 minuter.')).toBeVisible();
  await helper.getByRole('button', {name: 'Visa upp till 30 minuter'}).click();
  await expect(helper.locator('.dinner-result')).toHaveCount(3);
  const firstBefore = await helper.locator('.dinner-result-name').first().textContent();
  await helper.getByRole('button', {name: 'Visa andra förslag'}).click();
  const firstAfter = await helper.locator('.dinner-result-name').first().textContent();
  expect(firstAfter).not.toBe(firstBefore);
  await helper.locator('.dinner-start').first().click();
  await expect(page.locator('app-cook h1')).toBeVisible();
});

test('middagsförslag: olika energi ger fler val och stör inte vanlig receptsökning', async ({page}) => {
  await page.goto('/');
  const helper = page.locator('.dinner-helper');
  await helper.getByRole('button', {name: 'Jag orkar lite mer'}).click();
  await helper.getByRole('button', {name: '45 min'}).click();
  await helper.getByRole('button', {name: 'Ge mig middagsförslag'}).click();
  await expect(helper.locator('.dinner-result')).toHaveCount(3);
  await page.getByRole('searchbox', {name:'Sök recept'}).fill('wallenbergare');
  await expect(page.locator('app-recipe-card')).toHaveCount(1);
  await expect(helper.locator('.dinner-result')).toHaveCount(3);
});
