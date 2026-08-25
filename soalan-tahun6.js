/* Bank soalan untuk Edris (6 tahun) — Tambah dan Tolak dipisahkan.
   Bergantung pada randInt(), shuffle(), pilihan4() dalam index.html.
   Semua akses berlaku dalam fungsi penjana (dipanggil masa kuiz bermula).

   Reka bentuk untuk umur 6: nombor kecil, ada sokongan visual emoji pada aras
   senang, dan setiap soalan bawa petua yang mengajar CARA berfikir.
*/
window.BANK = window.BANK || {};

(function () {
  'use strict';

  const W = 'word';   // balut sebagai soalan berayat (teks panjang)
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
  // ===================== BAHAGI ASAS (6 tahun) =====================
  // Semuanya CERITA BERGAMBAR. Budak 6 tahun boleh bilang barang, bilang orang,
  // kemudian kongsi sendiri. Tiada simbol abstrak seperti "18 ÷ ▢ = 6".
  const ORANG = ['🧒', '👦', '👧'];

  // barang dikongsi kepada beberapa orang -> berapa SETIAP ORANG dapat
  function kongsi(emoji, namaBarang, setiap, orang, ceritaAwal) {
    const jum = setiap * orang;
    const barisBarang = new Array(jum).fill(emoji).join('');
    const barisOrang = Array.from({ length: orang }, (_, i) => ORANG[i % ORANG.length]).join('');
    return {
      t: (ceritaAwal ? '<span class="bagi-label">' + ceritaAwal + '</span>' : '') +
         '<span class="bagi-row">' + barisBarang + '</span>' +
         '<span class="bagi-label">dikongsi sama banyak kepada</span>' +
         '<span class="bagi-row">' + barisOrang + '</span>' +
         '<span class="bagi-soal">Berapa ' + namaBarang + ' setiap orang dapat?</span>',
      a: setiap, w: 'raw',
      h: 'Bilang barang: ' + jum + '. Bilang orang: ' + orang + '. Kongsi sama banyak — setiap orang dapat ' + setiap + '.'
    };
  }

  // berapa ORANG boleh dapat, kalau setiap orang dapat sekian banyak
  function kongsiOrang(emoji, namaBarang, setiap, orang) {
    const jum = setiap * orang;
    return {
      t: '<span class="bagi-row">' + new Array(jum).fill(emoji).join('') + '</span>' +
         '<span class="bagi-soal">Setiap orang dapat ' + setiap + ' ' + namaBarang +
         '.<br>Berapa ramai orang boleh dapat?</span>',
      a: orang, w: 'raw',
      h: 'Ada ' + jum + ' ' + namaBarang + '. Asingkan ' + setiap + ' untuk setiap orang — dapat ' + orang + ' kumpulan.'
    };
  }

  BANK.bahagiAsas = {
    // Nombor kecil, jawapan 2 atau 3, mudah dibilang
    senang: [
      () => kongsi('🍬', 'gula-gula', 3, 2),
      () => kongsi('🍎', 'epal', 2, 2),
      () => kongsi('🍪', 'biskut', 2, 3),
      () => kongsi('⭐', 'bintang', 4, 2),
      () => kongsi('🎈', 'belon', 3, 3),
      () => kongsi('🍌', 'pisang', 2, 4),
      () => kongsi('🐟', 'ikan', 3, 2),
      () => kongsi('🚗', 'kereta', 2, 2),
      () => kongsi('🍓', 'strawberi', 4, 2),
      () => kongsi('🧁', 'kek', 3, 2)
    ],
    // Cerita sebenar. Bilangan orang DINYATAKAN TERUS dalam ayat, supaya budak
    // tidak perlu menambah dirinya sendiri ke dalam kiraan.
    sederhana: [
      () => kongsi('🍕', 'slice pizza', 2, 2, 'Pizza ada 4 slice, dimakan oleh 2 orang.'),
      () => kongsi('🍕', 'slice pizza', 2, 3, 'Pizza ada 6 slice, dimakan oleh 3 orang.'),
      () => kongsi('🍕', 'slice pizza', 3, 2, 'Pizza ada 6 slice, dimakan oleh 2 orang.'),
      () => kongsi('🍕', 'slice pizza', 2, 4, 'Pizza ada 8 slice, dimakan oleh 4 orang.'),
      () => kongsi('🍕', 'slice pizza', 4, 2, 'Pizza ada 8 slice, dimakan oleh 2 orang.'),
      () => kongsi('🍬', 'gula-gula', 2, 3, 'Ada 6 gula-gula, dikongsi oleh 3 orang.'),
      () => kongsi('🍬', 'gula-gula', 3, 3, 'Ada 9 gula-gula, dikongsi oleh 3 orang.'),
      () => kongsi('🍪', 'biskut', 2, 4, 'Ada 8 biskut, dikongsi oleh 4 orang.'),
      () => kongsi('🍭', 'lolipop', 4, 2, 'Ada 8 lolipop, dikongsi oleh 2 orang.'),
      () => kongsi('🥪', 'sandwic', 3, 3, 'Ada 9 sandwic, dikongsi oleh 3 orang.'),
      () => kongsi('🍊', 'oren', 5, 2, 'Ada 10 biji oren, dikongsi oleh 2 orang.'),
      () => kongsi('🍩', 'donat', 2, 5, 'Ada 10 donat, dikongsi oleh 5 orang.')
    ],
    // Masih bergambar, cuma nombor lebih besar atau songsang yang KONKRIT
    susah: [
      () => kongsi('🍬', 'gula-gula', 4, 3),
      () => kongsi('🍪', 'biskut', 3, 4),
      () => kongsi('⭐', 'bintang', 5, 2),
      () => kongsi('🍕', 'slice pizza', 4, 3, 'Pizza ada 12 slice, dimakan oleh 3 orang.'),
      () => kongsiOrang('🍬', 'gula-gula', 2, 3),
      () => kongsiOrang('🍪', 'biskut', 3, 2),
      () => kongsiOrang('🍎', 'epal', 2, 4),
      () => kongsiOrang('🎈', 'belon', 4, 2),
      () => kongsiOrang('🍓', 'strawberi', 3, 3),
      () => kongsiOrang('🧁', 'kek', 2, 5)
    ]
  };
  // ===================== EJAAN BM 3.0 (6 tahun) =====================
  // Suku kata PERTAMA diberi sebagai clue, Edris taip BAKI perkataan.
  //   HUJAN  -> tunjuk "HU _ _ _"   taip JAN
  //   KERUSI -> tunjuk "KE _ _ _ _" taip RUSI
  // Aras ditentukan oleh berapa banyak huruf perlu ditaip: 3, 4, kemudian 5-6.
  function ejaan3(emoji, clue, baki) {
    const kotak = new Array(baki.length).fill('<i></i>').join('');
    return {
      t: '<span class="ejaan-emoji">' + emoji + '</span><span class="ejaan3-row"><b>' + clue + '</b>' + kotak + '</span>',
      a: baki, m: 'text', maxLen: baki.length, w: 'raw',
      h: 'Perkataannya ' + clue + baki + '. Bahagian yang perlu ditaip ialah ' + baki + '.'
    };
  }

  BANK.ejaan3 = {
    // 3 huruf perlu ditaip
    senang: [
      ejaan3('🌧️','HU','JAN'),   ejaan3('🐘','GA','JAH'),   ejaan3('🏠','RU','MAH'),
      ejaan3('🌙','BU','LAN'),   ejaan3('🐟','I','KAN'),    ejaan3('🐓','A','YAM'),
      ejaan3('🌴','PO','KOK'),   ejaan3('👟','KA','SUT'),   ejaan3('🐜','SE','MUT'),
      ejaan3('🦆','I','TIK'),    ejaan3('🛏️','KA','TIL'),   ejaan3('🐛','U','LAT'),
      ejaan3('🦀','KE','TAM'),   ejaan3('🍍','NA','NAS'),   ejaan3('🥕','LO','BAK'),
      ejaan3('🐍','U','LAR'),    ejaan3('🐝','LE','BAH'),   ejaan3('🦁','SI','NGA'),
      ejaan3('🧺','BA','KUL'),   ejaan3('🍳','TE','LUR'),   ejaan3('✏️','PEN','SEL'),
      ejaan3('🪟','TING','KAP'), ejaan3('🧦','STO','KIN'),  ejaan3('🪞','CER','MIN'),
      ejaan3('🍽️','PING','GAN'), ejaan3('🏖️','PAN','TAI'),  ejaan3('🌊','OM','BAK'),
      ejaan3('🎈','BE','LON'),   ejaan3('🧴','SA','BUN'),   ejaan3('🪥','BE','RUS'),
      ejaan3('🦵','LU','TUT'),   ejaan3('📻','RA','DIO'),   ejaan3('🐒','MON','YET')
    ],
    // 4 huruf perlu ditaip
    sederhana: [
      ejaan3('🪑','KE','RUSI'),  ejaan3('🍌','PI','SANG'),  ejaan3('🚗','KE','RETA'),
      ejaan3('⭐','BIN','TANG'), ejaan3('🐦','BU','RUNG'),  ejaan3('🥥','KE','LAPA'),
      ejaan3('🌽','JA','GUNG'),  ejaan3('🧅','BA','WANG'),  ejaan3('☂️','PA','YUNG'),
      ejaan3('⛰️','GU','NUNG'),  ejaan3('🎁','HA','DIAH'),  ejaan3('🧕','TU','DUNG'),
      ejaan3('🥔','KEN','TANG'), ejaan3('🐐','KAM','BING'), ejaan3('🦐','U','DANG'),
      ejaan3('🐙','SO','TONG'),  ejaan3('🪆','BO','NEKA'),  ejaan3('🥁','GEN','DANG')
    ],
    // 5-6 huruf perlu ditaip — paling mencabar
    susah: [
      ejaan3('🚲','BA','SIKAL'),  ejaan3('🐅','HA','RIMAU'),  ejaan3('🏫','SE','KOLAH'),
      ejaan3('🌈','PE','LANGI'),  ejaan3('🧹','PE','NYAPU'),  ejaan3('🍉','TEM','BIKAI'),
      ejaan3('🥤','MI','NUMAN'),  ejaan3('🚑','AM','BULANS'), ejaan3('🍜','MA','KANAN'),
      ejaan3('🏥','HOS','PITAL'), ejaan3('🎺','TE','ROMPET'), ejaan3('🦒','ZI','RAFAH'),
      ejaan3('🐧','PE','NGUIN'),  ejaan3('📱','TE','LEFON'),  ejaan3('💻','KOM','PUTER')
    ]
  };
  // ===================== ENGLISH SPELLING (6 tahun) =====================
  // Sama seperti Ejaan BM: bahagian awal diberi, Edris taip BAKI perkataan.
  //   RAIN  -> tunjuk "RA" + 2 kotak -> taip IN
  //   WATER -> tunjuk "WA" + 3 kotak -> taip TER
  BANK.spelling = {
    // 2 huruf perlu ditaip
    senang: [
      ejaan3('🌧️','RA','IN'),   ejaan3('🐟','FI','SH'),   ejaan3('🐦','BI','RD'),
      ejaan3('🌳','TR','EE'),   ejaan3('📖','BO','OK'),   ejaan3('🍎','APP','LE'),
      ejaan3('🚗','C','AR'),    ejaan3('⭐','ST','AR'),   ejaan3('🌙','MO','ON'),
      ejaan3('☀️','S','UN'),    ejaan3('🐕','D','OG'),    ejaan3('🐈','C','AT'),
      ejaan3('🏠','HO','ME'),   ejaan3('🥛','MI','LK'),   ejaan3('🎩','H','AT'),
      ejaan3('🐝','B','EE'),    ejaan3('🥚','E','GG'),    ejaan3('👁️','E','YE'),
      ejaan3('🦶','FO','OT'),   ejaan3('✋','HA','ND')
    ],
    // 3 huruf perlu ditaip
    sederhana: [
      ejaan3('💧','WA','TER'),  ejaan3('🌸','FLO','WER'), ejaan3('🪟','WIN','DOW'),
      ejaan3('🚪','D','OOR'),   ejaan3('🪑','CH','AIR'),  ejaan3('🍞','BR','EAD'),
      ejaan3('🐔','CHIC','KEN'),ejaan3('🌈','RAIN','BOW'),ejaan3('👟','S','HOE'),
      ejaan3('🧦','S','OCK'),   ejaan3('🐁','MO','USE'),  ejaan3('🏫','SCH','OOL'),
      ejaan3('🍌','BAN','ANA'), ejaan3('🦁','L','ION'),   ejaan3('🐒','MON','KEY'),
      ejaan3('🖐️','FIN','GER'), ejaan3('🌊','OC','EAN'),  ejaan3('🐅','TI','GER'),
      ejaan3('🦆','D','UCK'),   ejaan3('🦈','SH','ARK'),  ejaan3('🪁','K','ITE'),
      ejaan3('🐳','WH','ALE'),  ejaan3('🥕','CAR','ROT'), ejaan3('🎈','BALL','OON')
    ],
    // 4 huruf perlu ditaip
    susah: [
      ejaan3('🐧','PEN','GUIN'),   ejaan3('🍊','OR','ANGE'),   ejaan3('💻','COMP','UTER'),
      ejaan3('🏥','HOSP','ITAL'),  ejaan3('🥪','SAND','WICH'), ejaan3('🦒','GIR','AFFE'),
      ejaan3('🌟','STAR','FISH'),  ejaan3('🍕','P','IZZA'),    ejaan3('🐎','H','ORSE'),
      ejaan3('🎸','GU','ITAR'),    ejaan3('🚀','RO','CKET'),   ejaan3('🌵','CA','CTUS')
    ]
  };
  // ===================== PENDIDIKAN ISLAM ASAS (6 tahun) =====================
  // Asas yang perlu dihafal & difahami umur 6: bilangan rakaat, urutan wuduk,
  // rukun Islam, waktu solat, dan adab harian. Semua A/B/C/D.
  BANK.agama6 = {
    senang: [
      {t:'Solat <b>Subuh</b> berapa rakaat?',a:'2 rakaat',c:['2 rakaat','3 rakaat','4 rakaat','5 rakaat'],h:'Subuh ialah solat yang paling sedikit rakaatnya, iaitu 2.'},
      {t:'Solat <b>Zuhur</b> berapa rakaat?',a:'4 rakaat',c:['4 rakaat','2 rakaat','3 rakaat','5 rakaat'],h:'Zuhur 4 rakaat, sama seperti Asar dan Isyak.'},
      {t:'Solat <b>Asar</b> berapa rakaat?',a:'4 rakaat',c:['4 rakaat','2 rakaat','3 rakaat','5 rakaat'],h:'Asar 4 rakaat.'},
      {t:'Solat <b>Maghrib</b> berapa rakaat?',a:'3 rakaat',c:['3 rakaat','2 rakaat','4 rakaat','5 rakaat'],h:'Maghrib satu-satunya solat fardhu yang 3 rakaat.'},
      {t:'Solat <b>Isyak</b> berapa rakaat?',a:'4 rakaat',c:['4 rakaat','2 rakaat','3 rakaat','5 rakaat'],h:'Isyak 4 rakaat.'},
      {t:'Berapa <b>waktu</b> solat fardhu dalam sehari semalam?',a:'5 waktu',c:['5 waktu','3 waktu','4 waktu','6 waktu'],h:'Subuh, Zuhur, Asar, Maghrib dan Isyak — lima waktu.'},
      {t:'Semasa berwuduk, bahagian apa yang dibasuh <b>paling akhir</b>?',a:'Kaki',c:['Kaki','Muka','Tangan','Kepala'],h:'Urutan wuduk berakhir dengan membasuh kaki hingga buku lali.'},
      {t:'Apakah <b>rukun wuduk yang pertama</b>?',a:'Niat',c:['Niat','Basuh kaki','Sapu kepala','Berkumur'],h:'Setiap ibadah bermula dengan niat di dalam hati.'},
      {t:'Kitab suci umat Islam ialah?',a:'Al-Quran',c:['Al-Quran','Buku cerita','Kamus','Buku teks'],h:'Al-Quran diturunkan kepada Nabi Muhammad SAW.'},
      {t:'Nabi terakhir umat Islam ialah?',a:'Nabi Muhammad SAW',c:['Nabi Muhammad SAW','Nabi Adam AS','Nabi Musa AS','Nabi Isa AS'],h:'Nabi Muhammad SAW ialah nabi dan rasul yang terakhir.'},
      {t:'Sebelum makan kita baca?',a:'Bismillah',c:['Bismillah','Alhamdulillah','Subhanallah','Allahu Akbar'],h:'Bismillah bermaksud "dengan nama Allah" — dibaca sebelum memulakan sesuatu.'},
      {t:'Selepas makan kita baca?',a:'Alhamdulillah',c:['Alhamdulillah','Bismillah','Astaghfirullah','Insya-Allah'],h:'Alhamdulillah ialah ucapan syukur selepas menerima nikmat.'},
      {t:'Tempat umat Islam solat berjemaah ialah?',a:'Masjid',c:['Masjid','Pasar','Sekolah','Padang'],h:'Masjid dan surau ialah tempat solat berjemaah.'},
      {t:'Umat Islam berpuasa pada bulan?',a:'Ramadan',c:['Ramadan','Syawal','Rejab','Muharam'],h:'Ramadan ialah bulan puasa, bulan kesembilan dalam kalendar Islam.'},
      {t:'Sebelum solat kita mesti?',a:'Ambil wuduk',c:['Ambil wuduk','Makan dahulu','Tidur dahulu','Bermain dahulu'],h:'Wuduk menyucikan diri sebelum mengadap Allah.'},
      {t:'Apabila bertemu orang Islam kita ucap?',a:'Assalamualaikum',c:['Assalamualaikum','Selamat tinggal','Terima kasih','Maaf'],h:'Memberi salam ialah doa keselamatan untuk orang yang kita temui.'},
      {t:'Berapa <b>rukun Islam</b> semuanya?',a:'5',c:['5','3','4','6'],h:'Lima: syahadah, solat, puasa, zakat dan haji.'},
      {t:'Solat mana yang dilakukan pada waktu <b>pagi</b>?',a:'Subuh',c:['Subuh','Zuhur','Asar','Isyak'],h:'Subuh dilakukan sebelum matahari naik.'}
    ],
    sederhana: [
      {t:'Solat manakah yang <b>3 rakaat</b>?',a:'Maghrib',c:['Maghrib','Subuh','Zuhur','Isyak'],h:'Hanya Maghrib yang 3 rakaat; Subuh 2, yang lain 4.'},
      {t:'Solat manakah yang <b>paling sedikit</b> rakaatnya?',a:'Subuh',c:['Subuh','Maghrib','Zuhur','Asar'],h:'Subuh 2 rakaat, paling sedikit antara solat fardhu.'},
      {t:'Selepas berkumur semasa wuduk, apa yang dibasuh?',a:'Muka',c:['Muka','Kaki','Kepala','Telinga'],h:'Urutan: tangan, kumur, hidung, kemudian MUKA, tangan hingga siku, kepala, kaki.'},
      {t:'Selepas membasuh muka semasa wuduk, apa pula?',a:'Tangan hingga siku',c:['Tangan hingga siku','Kaki','Rambut','Telinga'],h:'Selepas muka, basuh kedua tangan hingga siku.'},
      {t:'Semasa wuduk, kepala kita?',a:'Disapu',c:['Disapu','Dibasuh sepenuhnya','Dibiar','Digosok kuat'],h:'Kepala hanya disapu dengan tangan basah, tidak dibasuh sepenuhnya.'},
      {t:'Kaki dibasuh hingga ke?',a:'Buku lali',c:['Buku lali','Lutut','Peha','Jari sahaja'],h:'Membasuh kaki mesti sampai buku lali supaya sempurna.'},
      {t:'Rukun Islam yang <b>pertama</b> ialah?',a:'Mengucap dua kalimah syahadah',c:['Mengucap dua kalimah syahadah','Solat','Puasa','Zakat'],h:'Syahadah ialah pengakuan tiada Tuhan selain Allah dan Muhammad itu rasul-Nya.'},
      {t:'Rukun Islam yang <b>kedua</b> ialah?',a:'Mendirikan solat',c:['Mendirikan solat','Puasa','Zakat','Haji'],h:'Selepas syahadah, solat ialah rukun yang kedua.'},
      {t:'Umat Islam solat menghadap ke arah?',a:'Kiblat',c:['Kiblat','Matahari','Utara','Laut'],h:'Kiblat ialah arah Kaabah di Mekah.'},
      {t:'Kaabah terletak di negara?',a:'Arab Saudi',c:['Arab Saudi','Malaysia','Indonesia','Mesir'],h:'Kaabah berada di Kota Mekah, Arab Saudi.'},
      {t:'Solat mana dilakukan pada waktu <b>tengah hari</b>?',a:'Zuhur',c:['Zuhur','Subuh','Maghrib','Isyak'],h:'Zuhur masuk selepas matahari condong dari tengah langit.'},
      {t:'Solat mana dilakukan selepas <b>matahari terbenam</b>?',a:'Maghrib',c:['Maghrib','Asar','Subuh','Isyak'],h:'Maghrib masuk sebaik matahari terbenam.'},
      {t:'Solat mana dilakukan pada waktu <b>malam</b>?',a:'Isyak',c:['Isyak','Subuh','Zuhur','Asar'],h:'Isyak ialah solat terakhir dalam sehari.'},
      {t:'Sebelum tidur kita digalakkan?',a:'Membaca doa',c:['Membaca doa','Menonton TV','Bermain','Makan banyak'],h:'Berdoa sebelum tidur ialah adab yang diajar Nabi.'},
      {t:'Apa yang <b>membatalkan</b> wuduk?',a:'Membuang air kecil',c:['Membuang air kecil','Minum air','Berjalan','Membaca buku'],h:'Keluar sesuatu daripada qubul atau dubur membatalkan wuduk.'},
      {t:'Berapa <b>jumlah rakaat</b> Zuhur dan Asar digabungkan?',a:'8 rakaat',c:['8 rakaat','6 rakaat','7 rakaat','10 rakaat'],h:'Zuhur 4 + Asar 4 = 8 rakaat.'},
      {t:'Hari raya selepas sebulan berpuasa ialah?',a:'Aidilfitri',c:['Aidilfitri','Aidiladha','Maulidur Rasul','Awal Muharam'],h:'Aidilfitri disambut pada 1 Syawal, selepas Ramadan.'},
      {t:'Semasa solat, kita bercakap dengan?',a:'Allah',c:['Allah','Kawan','Guru','Ibu'],h:'Solat ialah waktu kita mengadap dan berdoa kepada Allah.'}
    ],
    susah: [
      {t:'Berapa <b>jumlah rakaat</b> solat fardhu dalam sehari semalam?',a:'17 rakaat',c:['17 rakaat','15 rakaat','20 rakaat','12 rakaat'],h:'2 + 4 + 4 + 3 + 4 = 17 rakaat semuanya.'},
      {t:'Berapa solat fardhu yang mempunyai <b>4 rakaat</b>?',a:'3 solat',c:['3 solat','2 solat','4 solat','1 solat'],h:'Zuhur, Asar dan Isyak — ketiga-tiganya 4 rakaat.'},
      {t:'Susunan wuduk yang <b>betul</b>?',a:'Muka, tangan, kepala, kaki',c:['Muka, tangan, kepala, kaki','Kaki, muka, tangan, kepala','Kepala, kaki, muka, tangan','Tangan, kaki, muka, kepala'],h:'Bermula dari atas ke bawah: muka, tangan hingga siku, sapu kepala, akhir sekali kaki.',w:W},
      {t:'Jika Maghrib 3 rakaat dan Subuh 2 rakaat, berapa jumlahnya?',a:'5 rakaat',c:['5 rakaat','4 rakaat','6 rakaat','7 rakaat'],h:'3 + 2 = 5 rakaat.',w:W},
      {t:'Edris sudah solat Subuh dan Zuhur. Berapa rakaat semuanya?',a:'6 rakaat',c:['6 rakaat','4 rakaat','8 rakaat','5 rakaat'],h:'Subuh 2 + Zuhur 4 = 6 rakaat.',w:W},
      {t:'Kenapa kita perlu berwuduk sebelum solat?',a:'Untuk menyucikan diri',c:['Untuk menyucikan diri','Supaya sejuk','Supaya bersih baju','Supaya tidak mengantuk'],h:'Wuduk ialah bersuci, syarat sah sebelum menunaikan solat.',w:W},
      {t:'Apa berlaku jika wuduk terbatal sebelum sempat solat?',a:'Perlu ambil wuduk semula',c:['Perlu ambil wuduk semula','Terus solat sahaja','Tidak perlu solat','Tunggu esok'],h:'Solat mesti dilakukan dalam keadaan berwuduk, jadi perlu diulang.',w:W},
      {t:'Kenapa Maghrib mudah diingat?',a:'Ia satu-satunya solat 3 rakaat',c:['Ia satu-satunya solat 3 rakaat','Ia paling panjang','Ia pada waktu pagi','Ia 5 rakaat'],h:'Antara lima solat fardhu, hanya Maghrib yang 3 rakaat.',w:W},
      {t:'Berapa rakaat lagi selepas Subuh untuk cukup 17 rakaat sehari?',a:'15 rakaat',c:['15 rakaat','13 rakaat','16 rakaat','12 rakaat'],h:'Jumlah 17, tolak Subuh 2 rakaat, tinggal 15 rakaat.',w:W},
      {t:'Rukun Islam ketiga, keempat dan kelima ialah?',a:'Puasa, zakat, haji',c:['Puasa, zakat, haji','Solat, puasa, zakat','Syahadah, solat, puasa','Zakat, haji, solat'],h:'Urutannya: syahadah, solat, puasa, zakat, haji.',w:W},
      {t:'Kenapa kita memberi salam kepada orang lain?',a:'Ia doa keselamatan untuk mereka',c:['Ia doa keselamatan untuk mereka','Supaya nampak sopan sahaja','Kerana disuruh guru','Supaya dapat hadiah'],h:'Assalamualaikum bermaksud "semoga keselamatan ke atas kamu".',w:W},
      {t:'Solat Isyak dan Maghrib berapa rakaat semuanya?',a:'7 rakaat',c:['7 rakaat','6 rakaat','8 rakaat','5 rakaat'],h:'Isyak 4 + Maghrib 3 = 7 rakaat.',w:W},
      {t:'Manakah <b>bukan</b> rukun Islam?',a:'Membaca buku',c:['Membaca buku','Solat','Puasa','Zakat'],h:'Rukun Islam ada lima: syahadah, solat, puasa, zakat dan haji.'},
      {t:'Kenapa niat penting semasa wuduk dan solat?',a:'Ia menentukan tujuan ibadah kita',c:['Ia menentukan tujuan ibadah kita','Supaya cepat siap','Supaya orang nampak','Tiada sebab'],h:'Niat membezakan antara ibadah dengan perbuatan biasa.',w:W},
      {t:'Susunan waktu solat dari pagi ke malam yang betul?',a:'Subuh, Zuhur, Asar, Maghrib, Isyak',c:['Subuh, Zuhur, Asar, Maghrib, Isyak','Zuhur, Subuh, Asar, Isyak, Maghrib','Asar, Subuh, Zuhur, Maghrib, Isyak','Subuh, Asar, Zuhur, Isyak, Maghrib'],h:'Ikut peredaran matahari: pagi, tengah hari, petang, senja, malam.',w:W}
    ]
  };
  // ===================== MAKANAN SIHAT (6 tahun) =====================
  // Banding DUA gambar besar — Edris pilih yang lebih sihat tanpa perlu membaca.
  // Sengaja 2 pilihan sahaja, bukan A/B/C/D: soalan ini memang perbandingan dua
  // benda, jadi menambah pilihan palsu hanya melemahkannya.
  // Nada: "lebih sihat" dan "sekali-sekala", bukan "makanan jahat".
  function banding(eA, namaA, eB, namaB, sihatA, petua) {
    const pilA = eA + ' ' + namaA, pilB = eB + ' ' + namaB;
    return {
      t: '<span class="sihat-vs">' + eA + '<b>ATAU</b>' + eB + '</span>' +
         '<span class="bagi-soal">Mana lebih <b>sihat</b>?</span>',
      a: sihatA ? pilA : pilB, c: [pilA, pilB], w: 'raw', h: petua
    };
  }
  // pilih satu daripada empat gambar
  function pilihSihat(senarai, betul, soalan, petua) {
    return {
      t: '<span class="sihat-satu">' + senarai.map(x => x.split(' ')[0]).join(' ') + '</span>' +
         '<span class="bagi-soal">' + soalan + '</span>',
      a: betul, c: senarai.slice(), w: 'raw', h: petua
    };
  }

  BANK.sihat = {
    // Banding dua — paling mudah, cuma tengok gambar
    senang: [
      () => banding('💧','Air kosong','🧋','Air Milo',true,'Air kosong tiada gula langsung. Air Milo sedap, tapi elok sekali-sekala sahaja.'),
      () => banding('🍎','Buah epal','🍦','Ais krim',true,'Buah ada vitamin dan serat. Ais krim banyak gula — sedap, tapi sekali-sekala.'),
      () => banding('🥜','Kacang','🍟','Kentang goreng',true,'Kacang ada protein untuk tumbesaran. Kentang goreng banyak minyak dan garam.'),
      () => banding('🥛','Susu','🥤','Air gas',true,'Susu ada kalsium untuk tulang kuat. Air gas hanya gula sahaja.'),
      () => banding('🍚','Nasi','🍬','Gula-gula',true,'Nasi beri tenaga untuk bermain. Gula-gula boleh merosakkan gigi.'),
      () => banding('🥦','Sayur brokoli','🍩','Donat',true,'Sayur ada vitamin dan serat. Donat banyak gula dan minyak.'),
      () => banding('🍌','Pisang','🍫','Coklat',true,'Pisang beri tenaga dan serat. Coklat banyak gula.'),
      () => banding('🐟','Ikan','🌭','Sosej',true,'Ikan ada protein dan baik untuk otak. Sosej banyak garam dan pengawet.'),
      () => banding('🥚','Telur','🍪','Biskut manis',true,'Telur ada protein untuk membesar. Biskut manis banyak gula.'),
      () => banding('🍊','Oren','🧃','Air manis kotak',true,'Oren ada vitamin C dan serat. Air kotak selalunya banyak gula tambahan.'),
      () => banding('🥕','Lobak merah','🍭','Lolipop',true,'Lobak baik untuk mata. Lolipop hanya gula.'),
      () => banding('🍗','Ayam panggang','🍔','Burger',true,'Ayam panggang kurang minyak. Burger biasanya digoreng dan banyak lemak.'),
      () => banding('🌽','Jagung rebus','🍿','Popcorn bermentega',true,'Jagung rebus tiada tambahan mentega dan garam.'),
      () => banding('🍇','Anggur','🧁','Kek cawan',true,'Anggur manis semula jadi dan ada vitamin. Kek banyak gula tambahan.'),
      () => banding('🍉','Tembikai','🥤','Air sirap',true,'Tembikai banyak air dan vitamin, tanpa gula tambahan.'),
      () => banding('🥗','Salad','🍕','Pizza',true,'Salad penuh sayur. Pizza banyak keju dan lemak.'),
      () => banding('🍠','Ubi rebus','🍰','Kek coklat',true,'Ubi rebus ada serat dan tenaga. Kek banyak gula.'),
      () => banding('🥒','Timun','🍫','Coklat bar',true,'Timun banyak air dan rendah gula.')
    ],
    // Pilih satu daripada empat
    sederhana: [
      () => pilihSihat(['🍎 Epal','🍟 Kentang goreng','🍬 Gula-gula','🍦 Ais krim'],'🍎 Epal','Mana paling <b>sihat</b>?','Buah boleh dimakan setiap hari; tiga lagi itu untuk sekali-sekala.'),
      () => pilihSihat(['💧 Air kosong','🥤 Air gas','🧃 Air kotak','🧋 Bubble tea'],'💧 Air kosong','Minuman mana paling <b>sihat</b>?','Air kosong ialah minuman terbaik — tiada gula langsung.'),
      () => pilihSihat(['🥦 Brokoli','🍩 Donat','🍰 Kek','🍪 Biskut'],'🥦 Brokoli','Mana paling <b>sihat</b>?','Sayur ada vitamin dan serat yang badan perlukan setiap hari.'),
      () => pilihSihat(['🐟 Ikan','🌭 Sosej','🍔 Burger','🍟 Kentang goreng'],'🐟 Ikan','Mana paling <b>sihat</b>?','Ikan ada protein dan baik untuk otak.'),
      () => pilihSihat(['🍟 Kentang goreng','🍎 Epal','🥕 Lobak','🥦 Brokoli'],'🍟 Kentang goreng','Mana yang elok dimakan <b>sekali-sekala</b> sahaja?','Makanan bergoreng banyak minyak — sedap, tetapi bukan untuk setiap hari.'),
      () => pilihSihat(['🍬 Gula-gula','🍌 Pisang','🍊 Oren','🍇 Anggur'],'🍬 Gula-gula','Mana yang elok dimakan <b>sekali-sekala</b> sahaja?','Gula-gula tiada zat dan boleh merosakkan gigi.'),
      () => pilihSihat(['🥛 Susu','🥜 Kacang','🥚 Telur','🍭 Lolipop'],'🍭 Lolipop','Mana yang <b>paling sedikit</b> zatnya?','Susu, kacang dan telur ada protein atau kalsium. Lolipop hanya gula.'),
      () => pilihSihat(['🥗 Salad','🍕 Pizza','🍔 Burger','🌭 Hot dog'],'🥗 Salad','Mana paling <b>sihat</b>?','Salad penuh sayur segar.'),
      () => pilihSihat(['🍉 Tembikai','🍫 Coklat','🧁 Kek cawan','🍮 Puding'],'🍉 Tembikai','Mana paling <b>sihat</b>?','Buah manis secara semula jadi, tanpa gula tambahan.'),
      () => pilihSihat(['🥤 Air gas','💧 Air kosong','🥛 Susu','🍊 Jus oren'],'🥤 Air gas','Minuman mana paling banyak <b>gula</b>?','Air gas hampir semuanya gula dan tiada zat.'),
      () => pilihSihat(['🍚 Nasi','🍞 Roti','🥔 Ubi','🍩 Donat'],'🍩 Donat','Mana yang paling banyak <b>gula dan minyak</b>?','Nasi, roti dan ubi beri tenaga. Donat digoreng dan bergula.'),
      () => pilihSihat(['🥦 Sayur','🍎 Buah','🐟 Ikan','🍿 Popcorn bermentega'],'🍿 Popcorn bermentega','Mana yang <b>bukan</b> makanan harian?','Tiga yang lain patut ada dalam pinggan setiap hari.')
    ],
    // Kenapa — sebab di sebalik pilihan
    susah: [
      {t:'Kenapa <b>air kosong</b> lebih baik daripada air manis?',a:'Air kosong tiada gula',c:['Air kosong tiada gula','Air kosong lebih sejuk','Air kosong lebih murah','Air kosong lebih cantik'],h:'Gula berlebihan boleh merosakkan gigi dan menaikkan berat badan.',w:W},
      {t:'Terlalu banyak <b>gula</b> boleh menyebabkan?',a:'Gigi rosak',c:['Gigi rosak','Mata terang','Rambut panjang','Kaki kuat'],h:'Kuman dalam mulut suka gula, dan ia merosakkan gigi.',w:W},
      {t:'<b>Buah dan sayur</b> banyak mengandungi?',a:'Vitamin',c:['Vitamin','Minyak','Gula tambahan','Garam'],h:'Vitamin menjaga badan supaya tidak mudah sakit.'},
      {t:'<b>Ikan, telur dan kacang</b> banyak mengandungi?',a:'Protein',c:['Protein','Gula','Minyak','Garam'],h:'Protein ialah bahan untuk membina badan supaya membesar.'},
      {t:'<b>Susu</b> baik untuk?',a:'Tulang dan gigi',c:['Tulang dan gigi','Rambut sahaja','Kuku sahaja','Mata sahaja'],h:'Kalsium dalam susu menguatkan tulang dan gigi.'},
      {t:'<b>Nasi dan roti</b> memberi kita?',a:'Tenaga',c:['Tenaga','Vitamin C','Kalsium','Air'],h:'Karbohidrat memberi tenaga untuk belajar dan bermain.'},
      {t:'Kenapa makanan <b>bergoreng</b> elok dimakan sekali-sekala?',a:'Ia banyak minyak',c:['Ia banyak minyak','Ia terlalu sejuk','Ia terlalu keras','Ia tiada rasa'],h:'Terlalu banyak minyak tidak baik untuk jantung.',w:W},
      {t:'Kenapa <b>sayur</b> membantu perut kita?',a:'Ia ada serat',c:['Ia ada serat','Ia ada gula','Ia ada minyak','Ia ada garam'],h:'Serat membantu penghadaman supaya senang membuang air besar.',w:W},
      {t:'Edris dahaga selepas bermain. Apa <b>terbaik</b> diminum?',a:'💧 Air kosong',c:['💧 Air kosong','🥤 Air gas','🧋 Bubble tea','🧃 Air kotak'],h:'Badan kehilangan air semasa berpeluh — air kosong menggantikannya terus.',w:W},
      {t:'Manakah <b>pinggan seimbang</b> untuk makan tengah hari?',a:'Nasi, ikan dan sayur',c:['Nasi, ikan dan sayur','Kek dan air gas','Gula-gula dan coklat','Donat dan ais krim'],h:'Pinggan seimbang ada tenaga, protein dan sayur.',w:W},
      {t:'Kenapa kita perlu makan <b>pelbagai</b> jenis makanan?',a:'Setiap makanan beri zat berbeza',c:['Setiap makanan beri zat berbeza','Supaya tidak bosan','Supaya kenyang lama','Supaya murah'],h:'Tiada satu makanan pun ada semua zat yang badan perlukan.',w:W},
      {t:'Bolehkah kita makan ais krim?',a:'Boleh, tetapi sekali-sekala',c:['Boleh, tetapi sekali-sekala','Tidak boleh langsung','Boleh setiap hari','Boleh sepanjang hari'],h:'Tiada makanan yang haram dimakan — cuma yang manis dan berminyak elok dihadkan.',w:W},
      {t:'Sebelum makan, tangan perlu?',a:'Dibasuh',c:['Dibasuh','Dilap pada baju','Dibiar','Digosok pada meja'],h:'Kuman pada tangan boleh masuk ke perut melalui makanan.'},
      {t:'Berapa kali sehari kita patut makan <b>buah atau sayur</b>?',a:'Setiap hari',c:['Setiap hari','Sekali seminggu','Sekali sebulan','Tidak perlu'],h:'Buah dan sayur perlu setiap hari kerana badan tidak menyimpan vitamin lama.'},
      {t:'Sarapan pagi penting kerana?',a:'Beri tenaga untuk belajar',c:['Beri tenaga untuk belajar','Supaya cepat besar','Supaya tidak mengantuk sahaja','Supaya gigi putih'],h:'Selepas tidur badan perlukan tenaga semula untuk berfikir dan bermain.',w:W}
    ]
  };
})();
