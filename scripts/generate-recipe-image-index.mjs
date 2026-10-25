import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Endast receptbilder som granskats mot ingredienser och tillagningssätt publiceras.
// Övriga piloter behålls utanför det godkända urvalet tills de omarbetats.
const approved = [
  "flaskfilegryta-champinjoner",
  "key-lime-pie",
  "tiramisu",
  "broccolisoppa-cheddar",
  "carbonara",
  "creme-brulee",
  "fish-and-chips",
  "philly-cheesesteak"
];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const images = path.join(root, 'public', 'recipe-images');
const selected = [];
for (const id of approved) {
  const card = path.join(images, `${id}-card.webp`);
  const hero = path.join(images, `${id}-hero.webp`);
  if (!fs.existsSync(card) || !fs.existsSync(hero)) continue;
  // Fånga felaktig uppladdning innan en bild kan visas i produktion.
  for (const file of [card,hero]) {
    const fd = fs.openSync(file, 'r');
    const hdr = Buffer.alloc(12);
    try { fs.readSync(fd,hdr,0,12,0); } finally { fs.closeSync(fd); }
    if (hdr.toString('ascii',0,4) !== 'RIFF' || hdr.toString('ascii',8,12) !== 'WEBP') {
      throw new Error(`Ogiltig WebP-fil: ${file}`);
    }
  }
  selected.push(id);
}
const out = path.join(root,'src','app','core','recipe-images.generated.ts');
fs.writeFileSync(out,`/** Automatiskt skapad av prebuild/prestart. Redigera inte manuellt. */
export const AVAILABLE_RECIPE_IMAGES: readonly string[] = ${JSON.stringify(selected)};\n`);
console.log(`✓ Receptbildspilot: ${selected.length} kvalitetsgranskade och kompletta bildpar publiceras`);
