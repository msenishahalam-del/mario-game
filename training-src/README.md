# Simulator Alignment Mesin Laser — Source

Source code untuk app latihan di `../training/` (dihidangkan melalui GitHub Pages
di `https://msenishahalam-del.github.io/mario-game/training/`).

Source asal tidak pernah di-commit; kod dalam folder ini direkonstruksi secara
transkripsi terus daripada bundle build (`training/assets/index-*.js`) — semua
string, kelas Tailwind dan logik dikekalkan seperti asal.

## Stack

- Vite 7 + React 19.2.8 (pin tepat — sama dengan build asal)
- TypeScript
- Tailwind CSS 4.3.3 (pin tepat) melalui `@tailwindcss/vite`
- lucide-react untuk ikon

## Cara build

```bash
cd training-src
npm ci
npm run build     # output terus ke ../training/ (padam asset index-* lama dulu)
```

`vite.config.ts` menetapkan `base: '/mario-game/training/'` dan
`outDir: '../training'` dengan `emptyOutDir: false` supaya `training/images/`
dan `training/favicon.svg` tidak dipadam.

Untuk development: `npm run dev`. Nota: gambar dirujuk pada URL base
`/mario-game/training/images/...`, jadi dalam mod dev gambar mungkin tidak
kelihatan — ini normal; sahkan visual dengan build + static server:

```bash
npm run build
npx http-server ../.. -p 8080   # buka http://localhost:8080/mario-game/training/
```

## Fallback jika npm registry tidak boleh dicapai

Lockfile (`package-lock.json`) di-commit, jadi `npm ci` berfungsi selagi cache/
registry tersedia. Jika suatu hari registry langsung tidak boleh dicapai,
alternatifnya ialah mod tanpa-build: vendorkan fail ESM `react`/`react-dom`
(muat turun sekali dari esm.sh), guna import-map dalam `index.html`, dan tulis
JSX sebagai fail yang telah di-transpile. CSS build sedia ada boleh diguna semula
dan hanya kelas baharu perlu ditambah secara manual.

## Struktur

- `src/levels.ts` — config semua level (nombor, label, skru, imej)
- `src/lib/sim.ts` — pemalar & fungsi simulasi (threshold, preset, langkah prosedur)
- `src/lib/settings.ts` — simpan/muat tetapan localStorage
- `src/hooks/` — `useAlignmentSim` (Level cermin/head), `useStraightProcedure`
  (prosedur beam lurus), `useMediaQuery`
- `src/components/` — komponen UI; `App.tsx` menyusun layout grid utama
