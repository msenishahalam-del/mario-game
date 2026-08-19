/* Bank soalan Matematik Tahun 3 — Bidang Nombor & Operasi
   Topik: nilaiTempat, tambah10k, tolak10k
   Dimuat oleh index.html sebelum skrip utama. Bergantung pada randInt() & shuffle()
   yang ditakrif dalam index.html — semua akses berlaku di dalam fungsi penjana,
   yang hanya dipanggil semasa kuiz bermula, jadi susunan muat selamat.

   Bentuk item: { t: teks, a: jawapan, h: petua konsep, c?: [pilihan] }
   Item boleh jadi objek tetap ATAU fungsi () => item.
*/
window.BANK = window.BANK || {};

(function () {
  'use strict';

  const TEMPAT = ['sa', 'puluh', 'ratus', 'ribu'];

  // Tulis nombor 4 digit cara Malaysia: 4726 -> "4 726"
  function fmt(n) {
    return n >= 1000 ? String(n).slice(0, -3) + ' ' + String(n).slice(-3) : String(n);
  }

  // Nombor 4 digit dengan SEMUA digit berbeza — supaya "digit 7" tidak taksa
  function nombor4Unik() {
    const d = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 4);
    if (d[0] === 0) {                       // jangan biar sifar di depan
      const j = d.findIndex(x => x !== 0);  // TUKAR tempat, jangan tambah —
      const t = d[0]; d[0] = d[j]; d[j] = t;// menambah boleh hasilkan digit berulang
    }
    return d[0] * 1000 + d[1] * 100 + d[2] * 10 + d[3];
  }
  const digitPada = (n, idx) => Math.floor(n / Math.pow(10, idx)) % 10;   // idx: 0=sa

  // ===================== NILAI TEMPAT & NILAI DIGIT =====================
  BANK.nilaiTempat = {
    senang: [
      // "digit ini duduk di tempat apa?"
      () => {
        const n = nombor4Unik(), idx = randInt(0, 3), d = digitPada(n, idx);
        return {
          t: 'Dalam ' + fmt(n) + ', digit <b>' + d + '</b> berada di tempat ▢',
          a: TEMPAT[idx], c: TEMPAT.slice(),
          h: 'Kira dari KANAN: sa, puluh, ratus, ribu. Digit ' + d + ' ada di tempat ' + TEMPAT[idx] + '.'
        };
      },
      // "apakah digit di tempat ini?"
      () => {
        const n = nombor4Unik(), idx = randInt(0, 3);
        return {
          t: 'Dalam ' + fmt(n) + ', apakah digit di tempat <b>' + TEMPAT[idx] + '</b>?',
          a: digitPada(n, idx),
          h: 'Kira kedudukan dari KANAN: sa, puluh, ratus, ribu. Tempat ' + TEMPAT[idx] + ' ialah digit ' + digitPada(n, idx) + '.'
        };
      },
      { t: 'Berapa <b>digit</b> ada dalam nombor 3 000?', a: 4,
        h: 'Nombor ribu ada 4 digit: ribu, ratus, puluh, sa. 3 000 → 3, 0, 0, 0.' },
      { t: 'Nombor 1 000 mempunyai berapa <b>ratus</b>?', a: 10,
        h: '1 000 = 10 ratus, kerana 10 × 100 = 1 000.' },
      { t: 'Tempat mana paling KIRI dalam nombor 4 digit?', a: 'ribu', c: TEMPAT.slice(),
        h: 'Makin ke kiri makin besar nilainya. Dalam nombor 4 digit, paling kiri ialah ribu.' }
    ],
    sederhana: [
      // NILAI digit (bukan digit) — konsep teras
      () => {
        const n = nombor4Unik(), idx = randInt(1, 3), d = digitPada(n, idx);
        const nilai = d * Math.pow(10, idx);
        return {
          t: 'Nilai digit <b>' + d + '</b> dalam ' + fmt(n) + ' ialah ▢', a: nilai,
          h: 'Digitnya ' + d + ', tetapi ia duduk di tempat ' + TEMPAT[idx] +
             ' — jadi NILAInya ' + d + ' × ' + Math.pow(10, idx) + ' = ' + nilai + '.'
        };
      },
      // cerakin — satu sebutan hilang
      () => {
        const n = nombor4Unik(), idx = randInt(0, 3);
        const teks = [3, 2, 1, 0].map(i => (i === idx ? '▢' : fmt(digitPada(n, i) * Math.pow(10, i)))).join(' + ');
        return {
          t: 'Cerakinkan: ' + fmt(n) + ' = ' + teks, a: digitPada(n, idx) * Math.pow(10, idx),
          h: 'Setiap digit dicerakin ikut tempatnya. Digit ' + digitPada(n, idx) + ' di tempat ' +
             TEMPAT[idx] + ' bernilai ' + (digitPada(n, idx) * Math.pow(10, idx)) + '.'
        };
      },
      // perangkap sifar
      () => {
        const r = randInt(1, 9), p = randInt(1, 9), s = randInt(1, 9);
        const n = r * 1000 + 0 * 100 + p * 10 + s;
        return {
          t: 'Nilai digit <b>0</b> dalam ' + fmt(n) + ' ialah ▢', a: 0,
          h: 'Digit 0 di tempat ratus bermakna TIADA ratus. Nilainya 0 — tetapi tempatnya tetap perlu ditulis.'
        };
      },
      { t: 'Nombor manakah yang lebih besar: 2 999 atau 3 001?', a: '3 001',
        c: ['3 001', '2 999', 'Sama besar', 'Tak boleh banding'],
        h: 'Banding digit RIBU dahulu: 3 lebih besar daripada 2. Jadi 3 001 lebih besar walaupun digit lain kecil.' },
      { t: 'Berapa nilai digit 8 dalam 8 000?', a: 8000,
        h: 'Digit 8 di tempat ribu: 8 × 1 000 = 8 000.' }
    ],
    susah: [
      // banding nilai digit yang SAMA merentas nombor berbeza
      () => {
        const d = randInt(1, 9);
        const lain = () => { let x; do { x = randInt(1, 9); } while (x === d); return x; };
        const buat = idx => {                 // d duduk TEPAT sekali, di tempat idx
          let n = 0;
          for (let i = 3; i >= 0; i--) n += (i === idx ? d : lain()) * Math.pow(10, i);
          return n;
        };
        const pilihan = [3, 2, 1, 0].map(buat);
        const betul = pilihan[0];   // idx 3 = tempat ribu = nilai terbesar
        return {
          t: 'Nombor manakah yang <b>nilai</b> digit ' + d + ' nya paling besar?',
          a: fmt(betul), c: pilihan.map(fmt),
          h: 'Digit sama, tetapi nilainya bergantung pada TEMPAT. Makin ke KIRI, makin besar nilainya — jadi digit ' + d + ' di tempat ribu menang.'
        };
      },
      // beza nilai digit yang berulang dalam nombor yang sama
      () => {
        const d = randInt(1, 9), lain = randInt(1, 9);
        const n = d * 1000 + lain * 100 + d * 10 + randInt(1, 9);
        return {
          t: 'Dalam ' + fmt(n) + ', berapakah <b>beza</b> nilai digit ' + d + ' yang pertama dengan yang kedua?',
          a: d * 1000 - d * 10,
          h: 'Digit sama tetapi nilai berbeza. Yang pertama di tempat ribu = ' + (d * 1000) +
             '. Yang kedua di tempat puluh = ' + (d * 10) + '. Beza = ' + (d * 1000 - d * 10) + '.'
        };
      },
      // songsang: bina nombor daripada ciri
      () => {
        const r = randInt(1, 9), s = randInt(1, 9);
        const betul = r * 1000 + randInt(1, 9) * 100 + randInt(1, 9) * 10 + s;
        const salah = [
          s * 1000 + randInt(1, 9) * 100 + randInt(1, 9) * 10 + r,   // ribu & sa terbalik
          r * 1000 + randInt(1, 9) * 100 + s * 10 + randInt(1, 9),   // s di tempat puluh
          randInt(1, 9) * 1000 + r * 100 + randInt(1, 9) * 10 + s,   // r di tempat ratus
          betul + 1000 > 9999 ? betul - 1000 : betul + 1000,
          betul % 10 === 9 ? betul - 1 : betul + 1
        ].filter(x => x !== betul && x >= 1000 && x <= 9999);
        return {
          t: 'Nombor manakah yang digit <b>ribu</b>nya ' + r + ' dan digit <b>sa</b>nya ' + s + '?',
          a: fmt(betul), c: pilihan4(fmt(betul), salah.map(fmt)),
          h: 'Digit ribu ialah yang paling KIRI, digit sa yang paling KANAN. Cari ' + r + ' di kiri dan ' + s + ' di kanan.'
        };
      },
      { t: 'Nombor 4 digit terbesar yang boleh dibina daripada 3, 7, 1, 9 ialah ▢', a: 9731,
        h: 'Letak digit TERBESAR di tempat yang paling bernilai (ribu), kemudian menurun: 9, 7, 3, 1.' },
      { t: 'Nombor 4 digit terkecil yang boleh dibina daripada 5, 2, 8, 4 ialah ▢', a: 2458,
        h: 'Letak digit TERKECIL di tempat ribu, kemudian menaik: 2, 4, 5, 8.' }
    ]
  };

  // ===================== TAMBAH DALAM 10 000 =====================
  BANK.tambah10k = {
    senang: [
      // ratus bulat + ratus bulat, tiada mengumpul semula
      () => {
        const a = randInt(1, 8) * 1000 + randInt(0, 4) * 100;
        const b = randInt(1, 4) * 100;
        return { t: fmt(a) + ' + ' + fmt(b) + ' = ▢', a: a + b,
          h: 'Tambah ratus dengan ratus sahaja. Digit ribu tidak berubah kerana tiada yang melebihi 9 ratus.' };
      },
      // + 10 / + 100 / + 1000
      () => {
        const n = randInt(1, 8) * 1000 + randInt(1, 8) * 100 + randInt(1, 8) * 10 + randInt(1, 8);
        const t = [10, 100, 1000][randInt(0, 2)];
        const nama = t === 10 ? 'puluh' : t === 100 ? 'ratus' : 'ribu';
        return { t: fmt(n) + ' + ' + fmt(t) + ' = ▢', a: n + t,
          h: 'Tambah ' + t + ' hanya mengubah digit ' + nama + '. Digit lain kekal sama.' };
      },
      // dua nombor kecil tanpa mengumpul semula
      () => {
        const a = randInt(1, 4) * 1000 + randInt(0, 4) * 100 + randInt(0, 4) * 10 + randInt(0, 4);
        const b = randInt(1, 4) * 1000 + randInt(0, 4) * 100 + randInt(0, 4) * 10 + randInt(0, 4);
        return { t: fmt(a) + ' + ' + fmt(b) + ' = ▢', a: a + b,
          h: 'Susun ikut tempat: sa dengan sa, puluh dengan puluh. Tiada yang melebihi 9, jadi tiada bawa.' };
      }
    ],
    sederhana: [
      // satu kali mengumpul semula di tempat sa
      () => {
        const a = randInt(1, 8) * 1000 + randInt(0, 8) * 100 + randInt(0, 8) * 10 + randInt(5, 9);
        const b = randInt(1, 3) * 100 + randInt(0, 8) * 10 + randInt(5, 9);
        const sa = (a % 10) + (b % 10);
        return { t: fmt(a) + ' + ' + fmt(b) + ' = ▢', a: a + b,
          h: 'Mula dari SA: ' + (a % 10) + ' + ' + (b % 10) + ' = ' + sa +
             '. Tulis ' + (sa % 10) + ', bawa 1 ke tempat puluh.' };
      },
      () => {
        const a = randInt(2, 7) * 1000 + randInt(1, 9) * 100 + randInt(1, 9) * 10 + randInt(1, 9);
        const b = randInt(1, 9) * 100 + randInt(1, 9) * 10 + randInt(1, 9);
        return { t: fmt(a) + ' + ' + fmt(b) + ' = ▢', a: a + b,
          h: 'Susun tegak ikut tempat. Bila satu lajur melebihi 9, tulis digit sa lajur itu dan BAWA 1 ke lajur seterusnya.' };
      },
      // corak nombor
      () => {
        const beza = [100, 200, 500, 1000][randInt(0, 3)];
        // Hadkan supaya sebutan akhir tidak melebihi 10 000 (had silibus Tahun 3)
        const mula = randInt(5, Math.floor((9900 - 3 * beza) / 100)) * 100;
        return { t: 'Corak: ' + fmt(mula) + ', ' + fmt(mula + beza) + ', ' + fmt(mula + 2 * beza) + ', ▢',
          a: mula + 3 * beza,
          h: 'Cari BEZA antara dua sebutan: ' + beza + '. Tambah ' + beza + ' lagi kepada sebutan akhir.' };
      },
      { t: '2 500 + 2 500 = ▢', a: 5000,
        h: '500 + 500 = 1 000. Jadi 2 000 + 2 000 + 1 000 = 5 000.' }
    ],
    susah: [
      // sebutan hilang — songsang
      () => {
        const jum = randInt(3, 9) * 1000;
        const b = randInt(1, 8) * 100 + randInt(1, 9) * 10;
        return { t: '▢ + ' + fmt(b) + ' = ' + fmt(jum), a: jum - b,
          h: 'Untuk cari sebutan yang HILANG dalam tambah, guna TOLAK: ' + fmt(jum) + ' − ' + fmt(b) + ' = ' + fmt(jum - b) + '.' };
      },
      // anggaran
      () => {
        const a = randInt(2, 4) * 1000 + randInt(85, 99) * 10;
        const b = randInt(2, 4) * 1000 + randInt(10, 25) * 10;
        const bundarA = Math.round(a / 1000) * 1000, bundarB = Math.round(b / 1000) * 1000;
        const betul = bundarA + bundarB;
        return { t: 'Anggarkan ' + fmt(a) + ' + ' + fmt(b) + ' — lebih kurang berapa?',
          a: fmt(betul), c: pilihan4(fmt(betul), [fmt(betul - 1000), fmt(betul + 1000), fmt(betul * 10)]),
          h: 'Bundarkan ke ribu terdekat dahulu: ' + fmt(a) + '≈' + fmt(bundarA) + ', ' + fmt(b) + '≈' + fmt(bundarB) +
             '. Kemudian ' + fmt(bundarA) + ' + ' + fmt(bundarB) + ' = kira-kira ' + fmt(betul) + '.' };
      },
      // cerita dua langkah
      () => {
        const asas = randInt(10, 25) * 100;
        const lebih = randInt(2, 9) * 100 + randInt(1, 9) * 10;
        return { t: 'Ali kumpul ' + fmt(asas) + ' setem. Adiknya kumpul ' + fmt(lebih) +
            ' <b>lebih</b> daripada Ali. Berapakah <b>jumlah</b> setem mereka berdua?',
          a: asas + (asas + lebih), w: 'word',
          h: 'DUA langkah. 1) Adik = ' + fmt(asas) + ' + ' + fmt(lebih) + ' = ' + fmt(asas + lebih) +
             '. 2) Jumlah = ' + fmt(asas) + ' + ' + fmt(asas + lebih) + ' = ' + fmt(asas + asas + lebih) + '.' };
      },
      // tiga nombor
      () => {
        const a = randInt(10, 30) * 100, b = randInt(5, 25) * 100, c = randInt(1, 9) * 100;
        return { t: fmt(a) + ' + ' + fmt(b) + ' + ' + fmt(c) + ' = ▢', a: a + b + c,
          h: 'Tambah dua yang pertama dahulu, kemudian tambah yang ketiga. Tak perlu buat serentak.' };
      }
    ]
  };

  // ===================== TOLAK DALAM 10 000 =====================
  BANK.tolak10k = {
    senang: [
      () => {
        const a = randInt(4, 9) * 1000 + randInt(4, 9) * 100 + randInt(4, 9) * 10 + randInt(4, 9);
        const b = randInt(1, 3) * 1000 + randInt(1, 3) * 100 + randInt(1, 3) * 10 + randInt(1, 3);
        return { t: fmt(a) + ' − ' + fmt(b) + ' = ▢', a: a - b,
          h: 'Setiap digit atas lebih besar daripada digit bawah, jadi tolak terus ikut tempat — tiada pinjam.' };
      },
      () => {
        const n = randInt(2, 9) * 1000 + randInt(1, 9) * 100 + randInt(1, 9) * 10 + randInt(1, 9);
        const t = [10, 100, 1000][randInt(0, 2)];
        const nama = t === 10 ? 'puluh' : t === 100 ? 'ratus' : 'ribu';
        return { t: fmt(n) + ' − ' + fmt(t) + ' = ▢', a: n - t,
          h: 'Tolak ' + t + ' hanya mengubah digit ' + nama + '. Digit lain kekal sama.' };
      },
      { t: '1 000 − 500 = ▢', a: 500, h: '1 000 ialah dua kali 500, jadi baki tepat 500.' }
    ],
    sederhana: [
      // satu kali pinjam
      () => {
        const a = randInt(3, 9) * 1000 + randInt(2, 9) * 100 + randInt(2, 9) * 10 + randInt(0, 3);
        const b = randInt(1, 2) * 1000 + randInt(0, 1) * 100 + randInt(0, 1) * 10 + randInt(5, 9);
        return { t: fmt(a) + ' − ' + fmt(b) + ' = ▢', a: a - b,
          h: 'Tempat SA: ' + (a % 10) + ' − ' + (b % 10) + ' tak boleh. Pinjam 1 puluh, jadi ' +
             (a % 10 + 10) + ' − ' + (b % 10) + ' = ' + (a % 10 + 10 - b % 10) + '.' };
      },
      // "berapa lebih"
      () => {
        const a = randInt(20, 45) * 100, b = randInt(5, 18) * 100;
        return { t: 'Sekolah A ada ' + fmt(a) + ' buku, sekolah B ada ' + fmt(b) +
            ' buku. Berapa buku <b>lebih</b> di sekolah A?', a: a - b, w: 'word',
          h: '"Berapa lebih" bermakna cari BEZA, jadi guna tolak: ' + fmt(a) + ' − ' + fmt(b) + ' = ' + fmt(a - b) + '.' };
      },
      { t: '5 000 − 2 500 = ▢', a: 2500, h: '2 500 + 2 500 = 5 000, jadi baki juga 2 500.' }
    ],
    susah: [
      // pinjam merentas sifar — paling sukar bagi Tahun 3
      () => {
        const ribu = randInt(2, 9);
        const b = randInt(1, 9) * 100 + randInt(1, 9) * 10 + randInt(1, 9);
        const a = ribu * 1000;
        return { t: fmt(a) + ' − ' + fmt(b) + ' = ▢', a: a - b,
          h: 'Pinjam melalui sifar memang susah. Pecahkan: ' + fmt(a) + ' − 1 000 = ' + fmt(a - 1000) +
             ', kemudian ' + fmt(a - 1000) + ' + (1 000 − ' + fmt(b) + ') = ' + fmt(a - b) + '.' };
      },
      // penolak hilang
      () => {
        const a = randInt(3, 9) * 1000 + randInt(1, 9) * 100;
        const baki = randInt(5, 20) * 100;
        return { t: fmt(a) + ' − ▢ = ' + fmt(baki), a: a - baki,
          h: 'Untuk cari nombor yang DITOLAK, guna tolak juga: ' + fmt(a) + ' − ' + fmt(baki) + ' = ' + fmt(a - baki) + '.' };
      },
      // semak dengan tambah — konsep songsang
      () => {
        const a = randInt(3, 9) * 1000 + randInt(1, 9) * 100 + randInt(1, 9) * 10;
        const b = randInt(1, 2) * 1000 + randInt(1, 9) * 100;
        const jawapan = a - b;
        return { t: 'Jawapan ' + fmt(a) + ' − ' + fmt(b) + ' ialah ' + fmt(jawapan) +
            '. Bagaimana kita <b>semak</b> jawapan ini?',
          a: fmt(jawapan) + ' + ' + fmt(b),
          c: pilihan4(fmt(jawapan) + ' + ' + fmt(b),
                      [fmt(a) + ' + ' + fmt(b), fmt(a) + ' − ' + fmt(jawapan), fmt(jawapan) + ' − ' + fmt(b)]),
          h: 'Tolak disemak dengan TAMBAH. Jawapan + nombor yang ditolak mesti kembali kepada nombor asal.' };
      },
      // cerita dua langkah
      () => {
        const mula = randInt(40, 70) * 100, guna1 = randInt(5, 12) * 100, guna2 = randInt(5, 12) * 100;
        return { t: 'Kilang ada ' + fmt(mula) + ' biji telur. Dihantar ' + fmt(guna1) + ' biji pagi dan ' +
            fmt(guna2) + ' biji petang. Berapa biji <b>tinggal</b>?', a: mula - guna1 - guna2, w: 'word',
          h: 'DUA langkah. 1) Jumlah dihantar = ' + fmt(guna1) + ' + ' + fmt(guna2) + ' = ' + fmt(guna1 + guna2) +
             '. 2) Baki = ' + fmt(mula) + ' − ' + fmt(guna1 + guna2) + ' = ' + fmt(mula - guna1 - guna2) + '.' };
      }
    ]
  };
})();
