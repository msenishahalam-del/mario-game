/* Bank soalan Matematik Tahun 3 — Bidang Sukatan
   Topik: wang100, panjang, jisim, isipadu
   Bergantung pada randInt(), shuffle(), pilihan4() dalam index.html.
   Semua akses berlaku dalam fungsi penjana (dipanggil masa kuiz bermula).
*/
window.BANK = window.BANK || {};

(function () {
  'use strict';

  // RM12.5 -> "RM12.50"
  const rm = v => 'RM' + v.toFixed(2);
  const sen2 = () => [10, 20, 30, 40, 50, 60, 70, 80, 90][randInt(0, 8)];

  // ===================== WANG HINGGA RM100 =====================
  BANK.wang100 = {
    senang: [
      { t: 'RM1 = ▢ sen', a: 100, h: 'RM1 sentiasa 100 sen. Itu asas semua pengiraan wang.' },
      { t: '50 sen + 50 sen = ▢ sen', a: 100, h: '50 + 50 = 100 sen, iaitu tepat RM1.' },
      () => { const r = randInt(2, 9), s = sen2();
        return { t: 'RM' + r + ' dan ' + s + ' sen ditulis sebagai?', a: rm(r + s / 100),
          c: pilihan4(rm(r + s / 100), ['RM' + r + '.0' + (s / 10), 'RM' + s + '.' + r + '0', 'RM0.' + r + s]),
          h: 'Titik memisahkan RINGGIT (kiri) dan SEN (kanan). ' + s + ' sen ditulis .' + s }; },
      () => { const a = randInt(1, 4), b = randInt(1, 4);
        return { t: 'RM' + a + ' + RM' + b + ' = RM ▢', a: a + b, h: 'Tambah ringgit dengan ringgit: ' + a + ' + ' + b + ' = ' + (a + b) + '.' }; },
      () => { const n = randInt(2, 5);
        return { t: n + ' keping RM10 = RM ▢', a: n * 10, h: n + ' × RM10 = RM' + (n * 10) + '.' }; },
      { t: '2 syiling 50 sen bernilai RM ▢', a: 1, h: '50 + 50 = 100 sen. 100 sen ialah RM1.' }
    ],
    sederhana: [
      // sen mengumpul jadi ringgit — konsep teras
      () => { const a = randInt(1, 8) + 0.6, b = randInt(1, 8) + 0.8;
        const jum = Math.round((a + b) * 100) / 100;
        return { t: rm(a) + ' + ' + rm(b) + ' = RM ▢', a: jum, m: 'decimal', step: '0.01',
          h: '60 sen + 80 sen = 140 sen. 100 sen jadi RM1, jadi bawa RM1 dan tinggal 40 sen.' }; },
      () => { const harga = randInt(2, 9) + sen2() / 100, bayar = Math.ceil(harga);
        const baki = Math.round((bayar - harga) * 100) / 100;
        return { t: 'Beli buku ' + rm(harga) + ', bayar ' + rm(bayar) + '. Berapakah baki?', a: baki,
          m: 'decimal', step: '0.01', w: 'word',
          h: 'Kira KE ATAS dari ' + rm(harga) + ' hingga ' + rm(bayar) + ': bakinya ' + rm(baki) + '.' }; },
      () => { const b = randInt(5, 30), a = b + randInt(3, 40 - Math.min(b, 25));   // pastikan a > b, wang tak boleh negatif
        return { t: 'RM' + a + ' − RM' + b + ' = RM ▢', a: a - b, h: 'Tolak ringgit dengan ringgit: ' + a + ' − ' + b + ' = ' + (a - b) + '.' }; },
      () => { const n = randInt(2, 5), h2 = randInt(2, 8);
        return { t: n + ' batang pen, sebatang RM' + h2 + '. Jumlah harga = RM ▢', a: n * h2, w: 'word',
          h: 'Harga sama untuk setiap satu, jadi DARAB: ' + h2 + ' × ' + n + ' = ' + (n * h2) + '.' }; },
      { t: 'RM2.50 + RM2.50 = RM ▢', a: 5, m: 'decimal', step: '0.01',
        h: '50 sen + 50 sen = RM1. Jadi RM2 + RM2 + RM1 = RM5.' }
    ],
    susah: [
      // dua langkah: jumlah belanja, kemudian baki
      () => { const a = randInt(5, 20) + sen2() / 100, b = randInt(3, 15) + sen2() / 100;
        const belanja = Math.round((a + b) * 100) / 100;
        const bayar = Math.ceil(belanja / 10) * 10;
        const baki = Math.round((bayar - belanja) * 100) / 100;
        return { t: 'Aina ada RM' + bayar + '. Dia beli baju ' + rm(a) + ' dan topi ' + rm(b) +
            '. Berapakah <b>baki</b> duitnya?', a: baki, m: 'decimal', step: '0.01', w: 'word',
          h: 'DUA langkah. 1) Belanja = ' + rm(a) + ' + ' + rm(b) + ' = ' + rm(belanja) +
             '. 2) Baki = RM' + bayar + ' − ' + rm(belanja) + ' = ' + rm(baki) + '.' }; },
      // harga seunit — songsang
      () => { const n = randInt(2, 5), satu = randInt(2, 9);
        return { t: n + ' biji buku berharga RM' + (n * satu) + ' semuanya. Berapakah harga <b>sebiji</b>?',
          a: satu, w: 'word',
          h: 'Harga sama rata, jadi BAHAGI: RM' + (n * satu) + ' ÷ ' + n + ' = RM' + satu + '.' }; },
      // cukup atau tidak
      () => { const duit = randInt(2, 5) * 10, a = randInt(8, 18), b = randInt(8, 18);
        const cukup = (a + b) <= duit;
        return { t: 'Ali ada RM' + duit + '. Dia mahu beli barang RM' + a + ' dan RM' + b + '. Cukupkah duitnya?',
          a: cukup ? 'Cukup' : 'Tidak cukup',
          c: ['Cukup', 'Tidak cukup', 'Cukup, baki RM0', 'Tak boleh tahu'],
          w: 'word',
          h: 'Jumlahkan dahulu: RM' + a + ' + RM' + b + ' = RM' + (a + b) + '. Banding dengan RM' + duit +
             ' → ' + (cukup ? 'cukup' : 'tidak cukup') + '.' }; },
      () => { const n = randInt(3, 6), s = [20, 25, 50][randInt(0, 2)];
        const jum = Math.round(n * s) / 100;
        return { t: n + ' batang pen, sebatang ' + s + ' sen. Jumlah harga = RM ▢', a: jum,
          m: 'decimal', step: '0.01', w: 'word',
          h: n + ' × ' + s + ' sen = ' + (n * s) + ' sen. Tukar kepada ringgit: ' + (n * s) + ' ÷ 100 = ' + rm(jum) + '.' }; }
    ]
  };

  // ======= Pembina bersama untuk topik penukaran unit (panjang/jisim/isipadu) =======
  // Struktur sengaja SELARI supaya anak nampak corak penukaran yang sama berulang.
  function bankUnit(cfg) {
    const { kecil, besar, faktor, contohBesar, anggar } = cfg;
    return {
      senang: [
        { t: '1 ' + besar + ' = ▢ ' + kecil, a: faktor,
          h: '1 ' + besar + ' sentiasa ' + faktor + ' ' + kecil + '. Ini fakta asas yang perlu diingat.' },
        () => { const n = randInt(2, 5);
          return { t: n + ' ' + besar + ' = ▢ ' + kecil, a: n * faktor,
            h: n + ' × ' + faktor + ' = ' + (n * faktor) + '.' }; },
        () => { const n = randInt(2, 5);
          return { t: (n * faktor) + ' ' + kecil + ' = ▢ ' + besar, a: n,
            h: 'Setiap ' + faktor + ' ' + kecil + ' jadi 1 ' + besar + ': ' + (n * faktor) + ' ÷ ' + faktor + ' = ' + n + '.' }; },
        // rasa nombor — pilih unit yang munasabah
        () => { const c = anggar[randInt(0, anggar.length - 1)];
          return { t: 'Anggaran yang paling munasabah untuk ' + c.benda + ' ialah?', a: c.betul,
            c: pilihan4(c.betul, c.salah), w: 'word', h: c.h }; }
      ],
      sederhana: [
        () => { const n = randInt(1, 4), sisa = randInt(1, 9) * Math.max(1, Math.floor(faktor / 100));
          return { t: n + ' ' + besar + ' ' + sisa + ' ' + kecil + ' = ▢ ' + kecil, a: n * faktor + sisa,
            h: n + ' ' + besar + ' = ' + (n * faktor) + ' ' + kecil + '. Tambah ' + sisa + ' lagi = ' + (n * faktor + sisa) + '.' }; },
        () => { const n = randInt(1, 4), sisa = randInt(1, 9) * Math.max(1, Math.floor(faktor / 10));
          const jum = n * faktor + sisa;
          return { t: jum + ' ' + kecil + ' = ▢', a: n + ' ' + besar + ' ' + sisa + ' ' + kecil,
            c: pilihan4(n + ' ' + besar + ' ' + sisa + ' ' + kecil,
                        [jum + ' ' + besar, (n + 1) + ' ' + besar + ' ' + sisa + ' ' + kecil,
                         n + ' ' + besar + ' ' + (sisa + faktor / 10) + ' ' + kecil]),
            h: 'Setiap ' + faktor + ' ' + kecil + ' jadi 1 ' + besar + '. ' + jum + ' = ' + (n * faktor) + ' + ' + sisa +
               ', jadi ' + n + ' ' + besar + ' dan baki ' + sisa + ' ' + kecil + '.' }; },
        () => { const a = randInt(2, 9) * Math.floor(faktor / 10), b = randInt(1, 9) * Math.floor(faktor / 10);
          return { t: a + ' ' + kecil + ' + ' + b + ' ' + kecil + ' = ▢ ' + kecil, a: a + b,
            h: 'Unit sudah sama, jadi tambah terus: ' + a + ' + ' + b + ' = ' + (a + b) + '.' }; },
        () => { const n = randInt(2, 6), satu = Math.floor(faktor / randInt(2, 5));
          return { t: n + ' bekas, setiap satu ' + satu + ' ' + kecil + '. Jumlah = ▢ ' + kecil, a: n * satu, w: 'word',
            h: 'Sama banyak setiap satu, jadi DARAB: ' + satu + ' × ' + n + ' = ' + (n * satu) + '.' }; }
      ],
      susah: [
        // banding merentas unit — mesti tukar dahulu
        () => { const n = randInt(1, 3);
          const sisa = randInt(1, 9);                                   // bahagian kecil yang KECIL
          const nilaiA = n * faktor + sisa;                             // cth 3 m 7 cm = 307 cm
          const nilaiB = n * faktor + randInt(1, 4) * Math.floor(faktor / 10);   // sentiasa lebih besar
          const teksA = n + ' ' + besar + ' ' + sisa + ' ' + kecil;
          const teksB = nilaiB + ' ' + kecil;
          return { t: 'Mana lebih ' + cfg.lebih + ': <b>' + teksA + '</b> atau <b>' + teksB + '</b>?',
            a: teksB, c: [teksB, teksA, 'Sama', 'Tak boleh banding'],
            h: 'Tukar kepada unit SAMA dahulu: ' + teksA + ' = ' + nilaiA + ' ' + kecil +
               '. Banding ' + nilaiA + ' dengan ' + nilaiB + ' → ' + nilaiB + ' ' + kecil + ' lebih besar.' }; },
        // tolak merentas unit
        () => { const n = randInt(2, 4), potong = randInt(1, 9) * Math.floor(faktor / 10);
          return { t: contohBesar.replace('{n}', n).replace('{p}', potong + ' ' + kecil) + ' Berapa ' + kecil + ' tinggal?',
            a: n * faktor - potong, w: 'word',
            h: 'Tukar dahulu supaya unit sama: ' + n + ' ' + besar + ' = ' + (n * faktor) + ' ' + kecil +
               '. Kemudian ' + (n * faktor) + ' − ' + potong + ' = ' + (n * faktor - potong) + '.' }; },
        // bahagi merentas unit
        () => { const n = [2, 4, 5][randInt(0, 2)], jum = randInt(1, 3) * n;
          const satu = (jum * faktor) / n;
          return { t: jum + ' ' + besar + ' dibahagi sama rata kepada ' + n + ' bahagian. Setiap bahagian = ▢ ' + kecil,
            a: satu, w: 'word',
            h: 'Tukar dahulu: ' + jum + ' ' + besar + ' = ' + (jum * faktor) + ' ' + kecil +
               '. Kemudian bahagi: ' + (jum * faktor) + ' ÷ ' + n + ' = ' + satu + '.' }; }
      ]
    };
  }

  // ===================== UKURAN PANJANG =====================
  BANK.panjang = bankUnit({
    kecil: 'cm', besar: 'm', faktor: 100, lebih: 'panjang',
    contohBesar: 'Reben {n} m dipotong {p}.',
    anggar: [
      { benda: 'panjang sebatang pensel', betul: '15 cm', salah: ['15 m', '15 km', '15 mm'],
        h: 'Pensel sebesar tapak tangan — puluhan sentimeter. 15 m itu panjang bilik darjah!' },
      { benda: 'tinggi pintu bilik', betul: '2 m', salah: ['2 cm', '2 km', '2 mm'],
        h: 'Pintu lebih tinggi daripada orang dewasa, jadi meter. 2 cm hanya sebesar kuku.' },
      { benda: 'jarak dari rumah ke sekolah', betul: '3 km', salah: ['3 m', '3 cm', '3 mm'],
        h: 'Jarak jauh diukur dalam kilometer. 3 m hanya sepanjang katil.' },
      { benda: 'tebal sekeping duit syiling', betul: '2 mm', salah: ['2 cm', '2 m', '2 km'],
        h: 'Benda sangat nipis diukur dalam milimeter.' }
    ]
  });
  // mm khusus untuk panjang
  BANK.panjang.senang.push(
    { t: '1 cm = ▢ mm', a: 10, h: '1 cm sentiasa 10 mm. Tengok pembaris: ada 10 garis halus antara dua nombor.' },
    { t: '1 km = ▢ m', a: 1000, h: '1 km sentiasa 1 000 m.' });
  BANK.panjang.sederhana.push(
    { t: '5 cm = ▢ mm', a: 50, h: '5 × 10 = 50 mm.' },
    { t: '2 km = ▢ m', a: 2000, h: '2 × 1 000 = 2 000 m.' });
  BANK.panjang.susah.push(
    { t: 'Mana lebih panjang: <b>1 m 5 cm</b> atau <b>150 cm</b>?', a: '150 cm',
      c: ['150 cm', '1 m 5 cm', 'Sama panjang', 'Tak boleh banding'],
      h: 'Tukar kepada unit sama: 1 m 5 cm = 105 cm sahaja. 150 lebih besar daripada 105.' });

  // ===================== TIMBANGAN JISIM =====================
  BANK.jisim = bankUnit({
    kecil: 'g', besar: 'kg', faktor: 1000, lebih: 'berat',
    contohBesar: 'Beg tepung {n} kg diguna {p}.',
    anggar: [
      { benda: 'jisim sebiji telur', betul: '60 g', salah: ['60 kg', '600 g', '6 kg'],
        h: 'Telur ringan — puluhan gram sahaja. 60 kg itu berat orang dewasa!' },
      { benda: 'jisim sebuah beg sekolah', betul: '3 kg', salah: ['3 g', '300 kg', '30 kg'],
        h: 'Beg sekolah beberapa kilogram. 3 g hanya seringan kertas.' },
      { benda: 'jisim sebiji tembikai', betul: '2 kg', salah: ['2 g', '20 kg', '200 kg'],
        h: 'Tembikai berat tetapi masih boleh diangkat — beberapa kilogram.' }
    ]
  });
  BANK.jisim.susah.push(
    { t: '1 kg 200 g + 800 g = ▢ kg', a: 2,
      h: '200 g + 800 g = 1 000 g, iaitu tepat 1 kg. Jadi 1 kg + 1 kg = 2 kg.' },
    { t: 'Beg gula 2 kg dibahagi 4 paket sama berat. Setiap paket ▢ g', a: 500,
      h: 'Tukar dahulu: 2 kg = 2 000 g. Kemudian 2 000 ÷ 4 = 500 g.' });

  // ===================== ISIPADU CECAIR =====================
  BANK.isipadu = bankUnit({
    kecil: 'ml', besar: 'l', faktor: 1000, lebih: 'banyak',
    contohBesar: 'Jag {n} l dituang keluar {p}.',
    anggar: [
      { benda: 'isipadu sebotol air mineral kecil', betul: '500 ml', salah: ['5 ml', '5 l', '50 l'],
        h: 'Botol kecil muat lebih kurang setengah liter = 500 ml.' },
      { benda: 'isipadu satu sudu ubat', betul: '5 ml', salah: ['5 l', '500 ml', '50 l'],
        h: 'Sudu ubat sangat kecil — hanya beberapa mililiter.' },
      { benda: 'isipadu sebuah baldi', betul: '10 l', salah: ['10 ml', '100 l', '1 ml'],
        h: 'Baldi muat berpuluh liter air.' }
    ]
  });
  BANK.isipadu.susah.push(
    { t: '750 ml + 250 ml = ▢ ml', a: 1000,
      h: '750 + 250 = 1 000 ml — itu TEPAT 1 liter. Setiap kali cukup 1 000 ml, ia jadi 1 l.' },
    { t: 'Jag 2 l dituang penuh ke gelas 250 ml. Berapa gelas dapat diisi?', a: 8,
      h: 'Tukar dahulu: 2 l = 2 000 ml. Kemudian 2 000 ÷ 250 = 8 gelas.' });
})();
