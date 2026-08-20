/* Bank soalan untuk Edris (6 tahun) — Tambah dan Tolak dipisahkan.
   Bergantung pada randInt(), shuffle(), pilihan4() dalam index.html.
   Semua akses berlaku dalam fungsi penjana (dipanggil masa kuiz bermula).

   Reka bentuk untuk umur 6: nombor kecil, ada sokongan visual emoji pada aras
   senang, dan setiap soalan bawa petua yang mengajar CARA berfikir.
*/
window.BANK = window.BANK || {};

(function () {
  'use strict';

  const BENDA = ['🍎', '⭐', '🐟', '🎈', '🍪', '🚗'];
  const ikon = (n, e) => new Array(n).fill(e).join('');

  // ===================== TAMBAH (6 tahun) =====================
  BANK.tambah6 = {
    senang: [
      // visual: bilang semua
      () => { const e = BENDA[randInt(0, BENDA.length - 1)];
        const a = randInt(1, 4), b = randInt(1, 4);
        return { t: ikon(a, e) + ' + ' + ikon(b, e) + ' = ▢', a: a + b,
          h: 'Bilang semuanya sekali: ' + a + ' campur ' + b + ' jadi ' + (a + b) + '.' }; },
      // + 1 ialah nombor seterusnya
      () => { const a = randInt(1, 8);
        return { t: a + ' + 1 = ▢', a: a + 1,
          h: 'Tambah 1 bermakna nombor SETERUSNYA selepas ' + a + ', iaitu ' + (a + 1) + '.' }; },
      // + 0 tidak berubah
      () => { const a = randInt(1, 9);
        return { t: a + ' + 0 = ▢', a: a,
          h: 'Tambah 0 bermakna tidak tambah apa-apa, jadi jawapannya kekal ' + a + '.' }; },
      // jumlah kecil
      () => { const a = randInt(1, 5), b = randInt(1, 4);
        return { t: a + ' + ' + b + ' = ▢', a: a + b,
          h: 'Mula dari ' + a + ', kira ke depan ' + b + ' kali: jadi ' + (a + b) + '.' }; },
      // dua sama (double)
      () => { const a = randInt(1, 5);
        return { t: a + ' + ' + a + ' = ▢', a: a + a,
          h: 'Dua kumpulan yang SAMA banyak. ' + a + ' dan ' + a + ' lagi jadi ' + (a + a) + '.' }; }
    ],
    sederhana: [
      // cukupkan 10
      () => { const a = randInt(1, 9);
        return { t: a + ' + ▢ = 10', a: 10 - a,
          h: 'Berapa lagi perlu untuk cukup 10? Dari ' + a + ' ke 10 ialah ' + (10 - a) + '.' }; },
      () => { const a = randInt(4, 9), b = randInt(2, 9);
        return { t: a + ' + ' + b + ' = ▢', a: a + b,
          h: 'Mula dari nombor BESAR (' + Math.max(a, b) + ') kemudian kira ke depan ' + Math.min(a, b) + ' kali.' }; },
      // tukar tempat — sifat kalis tukar tertib
      () => { const a = randInt(2, 8), b = randInt(2, 8);
        return { t: 'Jika ' + a + ' + ' + b + ' = ' + (a + b) + ', berapakah ' + b + ' + ' + a + '?', a: a + b,
          h: 'Tukar tempat pun jawapannya SAMA. ' + a + ' + ' + b + ' dan ' + b + ' + ' + a + ' kedua-duanya ' + (a + b) + '.' }; },
      () => { const a = randInt(10, 15), b = randInt(1, 5);
        return { t: a + ' + ' + b + ' = ▢', a: a + b,
          h: 'Mula dari ' + a + ', kira ke depan ' + b + ' kali: jadi ' + (a + b) + '.' }; }
    ],
    susah: [
      // tiga nombor
      () => { const a = randInt(1, 5), b = randInt(1, 5), c = randInt(1, 5);
        return { t: a + ' + ' + b + ' + ' + c + ' = ▢', a: a + b + c,
          h: 'Buat DUA yang pertama dahulu: ' + a + ' + ' + b + ' = ' + (a + b) + '. Kemudian tambah ' + c + ' = ' + (a + b + c) + '.' }; },
      // nombor hilang
      () => { const jum = randInt(6, 15), a = randInt(1, jum - 1);
        return { t: a + ' + ▢ = ' + jum, a: jum - a,
          h: 'Kira dari ' + a + ' sampai ' + jum + '. Berapa langkah? ' + (jum - a) + '.' }; },
      // cerita
      () => { const a = randInt(3, 8), b = randInt(2, 6);
        const e = BENDA[randInt(0, BENDA.length - 1)];
        return { t: 'Edris ada ' + a + ' ' + e + '. Ibu beri ' + b + ' lagi. Berapa semuanya?', a: a + b, w: 'word',
          h: '"Beri lagi" bermakna TAMBAH: ' + a + ' + ' + b + ' = ' + (a + b) + '.' }; },
      // konsep: operasi apa
      () => { const a = randInt(3, 7), b = randInt(2, 5);
        return { t: 'Edris ada ' + a + ' gula-gula. Kakak beri ' + b + ' lagi. Kita perlu buat apa?',
          a: 'Tambah', c: ['Tambah', 'Tolak', 'Darab', 'Bahagi'], w: 'word',
          h: 'Bila dapat LAGI, jumlahnya bertambah — jadi kita guna tambah.' }; }
    ]
  };

  // ===================== TOLAK (6 tahun) =====================
  BANK.tolak6 = {
    senang: [
      // visual: ambil keluar
      () => { const e = BENDA[randInt(0, BENDA.length - 1)];
        const a = randInt(3, 6), b = randInt(1, a - 1);
        return { t: ikon(a, e) + ' tolak ' + b + ' = ▢', a: a - b,
          h: 'Mula dengan ' + a + ', buang ' + b + '. Yang tinggal ' + (a - b) + '.' }; },
      // − 1 ialah nombor sebelum
      () => { const a = randInt(2, 9);
        return { t: a + ' − 1 = ▢', a: a - 1,
          h: 'Tolak 1 bermakna nombor SEBELUM ' + a + ', iaitu ' + (a - 1) + '.' }; },
      // − 0 tidak berubah
      () => { const a = randInt(1, 9);
        return { t: a + ' − 0 = ▢', a: a,
          h: 'Tolak 0 bermakna tidak buang apa-apa, jadi jawapannya kekal ' + a + '.' }; },
      // tolak semua = 0
      () => { const a = randInt(2, 9);
        return { t: a + ' − ' + a + ' = ▢', a: 0,
          h: 'Buang SEMUA yang ada, jadi tiada apa tinggal — jawapannya 0.' }; },
      () => { const a = randInt(4, 9), b = randInt(1, 3);
        return { t: a + ' − ' + b + ' = ▢', a: a - b,
          h: 'Mula dari ' + a + ', kira ke BELAKANG ' + b + ' kali: jadi ' + (a - b) + '.' }; }
    ],
    sederhana: [
      () => { const a = randInt(6, 9), b = randInt(3, 5);
        return { t: a + ' − ' + b + ' = ▢', a: a - b,
          h: 'Kira ke belakang dari ' + a + ' sebanyak ' + b + ' langkah, sampai ' + (a - b) + '.' }; },
      // daripada 10
      () => { const b = randInt(1, 9);
        return { t: '10 − ' + b + ' = ▢', a: 10 - b,
          h: 'Guna pasangan 10: ' + b + ' dan ' + (10 - b) + ' bergandingan jadi 10.' }; },
      () => { const a = randInt(11, 18), b = randInt(1, 8);
        return { t: a + ' − ' + b + ' = ▢', a: a - b,
          h: 'Kira ke belakang dari ' + a + ' sebanyak ' + b + ' langkah: jadi ' + (a - b) + '.' }; },
      // beza
      () => { const a = randInt(6, 12), b = randInt(2, 5);
        return { t: 'Edris ada ' + a + ' pensel, Enisa ada ' + b + '. Berapa LEBIH pensel Edris?', a: a - b, w: 'word',
          h: '"Berapa lebih" bermakna cari BEZA, jadi tolak: ' + a + ' − ' + b + ' = ' + (a - b) + '.' }; }
    ],
    susah: [
      // dua operasi
      () => { const a = randInt(8, 15), b = randInt(1, 4), c = randInt(1, 4);
        return { t: a + ' − ' + b + ' − ' + c + ' = ▢', a: a - b - c,
          h: 'Buat SATU demi satu dari kiri: ' + a + ' − ' + b + ' = ' + (a - b) + ', kemudian − ' + c + ' = ' + (a - b - c) + '.' }; },
      // nombor hilang di depan
      () => { const x = randInt(5, 12), b = randInt(1, 4);
        return { t: '▢ − ' + b + ' = ' + (x - b), a: x,
          h: 'Kalau buang ' + b + ' tinggal ' + (x - b) + ', maka asalnya ' + (x - b) + ' + ' + b + ' = ' + x + '.' }; },
      // nombor hilang di belakang
      () => { const a = randInt(6, 12), x = randInt(1, 5);
        return { t: a + ' − ▢ = ' + (a - x), a: x,
          h: 'Dari ' + a + ' turun ke ' + (a - x) + '. Berapa yang dibuang? ' + x + '.' }; },
      // songsang: semak dengan tambah
      () => { const a = randInt(7, 14), b = randInt(2, 5);
        return { t: 'Edris kata ' + a + ' − ' + b + ' = ' + (a - b) + '. Bagaimana nak SEMAK betul ke tidak?',
          a: (a - b) + ' + ' + b, c: pilihan4((a - b) + ' + ' + b, [a + ' + ' + b, a + ' − ' + (a - b), (a - b) + ' − ' + b]),
          w: 'word',
          h: 'Tolak disemak dengan TAMBAH. Kalau ' + (a - b) + ' + ' + b + ' balik jadi ' + a + ', jawapannya betul.' }; },
      // cerita
      () => { const a = randInt(6, 12), b = randInt(2, 5);
        const e = BENDA[randInt(0, BENDA.length - 1)];
        return { t: 'Edris ada ' + a + ' ' + e + '. Dia beri ' + b + ' kepada kawan. Berapa tinggal?', a: a - b, w: 'word',
          h: '"Beri kepada orang" bermakna jumlahnya berkurang — guna TOLAK: ' + a + ' − ' + b + ' = ' + (a - b) + '.' }; }
    ]
  };
})();
