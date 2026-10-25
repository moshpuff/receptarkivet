// Offline-kontroll är endast ett komplement när Angular inte är installerat.
// Med riktiga npm-beroenden görs motsvarande (och starkare) kontroll av ng build.
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
const root = resolve(import.meta.dirname, '..');
if (existsSync(resolve(root, 'node_modules/@angular/core/package.json'))) {
  console.log('✓ Angular-paket finns: verklig typ-/templatekontroll utförs av ng build');
} else {
  execFileSync('tsc', ['-p', 'tests/tsconfig.static.json'], {cwd: root, stdio:'inherit'});
  console.log('✓ Offline TypeScript-kontroll med testdubblar (inte Angular-kompilering)');
}
