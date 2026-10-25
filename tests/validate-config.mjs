/* Liten, beroendefri konfigurationskontroll; ersätter INTE ng build. */
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root = resolve(import.meta.dirname, '..');
const read = p => readFileSync(resolve(root, p), 'utf8');
const pkg = JSON.parse(read('package.json'));
const angular = JSON.parse(read('angular.json'));
const manifest = JSON.parse(read('public/manifest.webmanifest'));
const worker = JSON.parse(read('ngsw-config.json'));
const index = read('src/index.html');
assert.equal(pkg.name, 'receptarkivet-angular');
for (const dep of ['@angular/core','@angular/router','@angular/service-worker','@angular/build','@angular/cli','@angular/compiler-cli'])
  assert.ok(pkg.dependencies?.[dep] || pkg.devDependencies?.[dep], `Saknar paket: ${dep}`);
assert.equal(angular.projects.receptarkivet.architect.build.builder, '@angular/build:application');
assert.equal(angular.projects.receptarkivet.architect.build.options.serviceWorker, 'ngsw-config.json');
assert.ok(index.includes('<app-root>'), 'Saknad Angular-mountpoint');
assert.ok(index.includes('<base href="/">'), 'Saknat base-href');
assert.ok(worker.assetGroups.some(group => group.resources.files.includes('/*.js')));
for (const icon of manifest.icons) {
  const file = resolve(root,'public',icon.src);
  assert.ok(existsSync(file), `Saknad appikon ${icon.src}`);
  const bytes = readFileSync(file);
  assert.equal(bytes.subarray(1,4).toString(), 'PNG', `Ogiltig ikon ${icon.src}`);
  assert.equal(`${bytes.readUInt32BE(16)}x${bytes.readUInt32BE(20)}`, icon.sizes.replace(' ','x'));
}
console.log('✓ Projektkonfiguration, service worker, manifest och ikoner: godkända statiska kontroller');
console.log('  OBS: Angular-runtime och produktionsbygge kräver npm-paketen.');
