/* Bank soalan Sains Tahun 3 — KSSR Semakan 2017
   10 unit rasmi. Setiap unit ~50 soalan: senang → sederhana → susah.
   Bergantung pada shuffle()/randInt()/pilihan4() dalam index.html.
*/
window.BANK = window.BANK || {};

(function () {
  'use strict';
  const W = 'word';   // balut sebagai soalan berayat (teks panjang)

  // ============ UNIT 1: KEMAHIRAN SAINTIFIK ============
  BANK.sainsU1 = {
    senang: [
      {t:'Alat apa digunakan untuk mengukur suhu?',a:'Termometer',c:['Termometer','Pembaris','Neraca','Jam randik'],h:'Termometer mengukur suhu dalam darjah Celsius.'},
      { t: 'Kita guna deria apa untuk MEMERHATI warna bunga?', a: 'Mata', c: ['Mata','Telinga','Hidung','Lidah'], h: 'Memerhati warna guna deria penglihatan, iaitu mata.' },
      { t: 'Alat apa digunakan untuk mengukur PANJANG?', a: 'Pembaris', c: ['Pembaris','Jam','Neraca','Termometer'], h: 'Pembaris mengukur panjang dalam cm dan mm.' },
      { t: 'Alat apa digunakan untuk mengukur MASA?', a: 'Jam randik', c: ['Jam randik','Pembaris','Neraca','Silinder penyukat'], h: 'Jam randik mengukur berapa lama sesuatu berlaku.' },
      { t: 'Alat apa digunakan untuk mengukur JISIM?', a: 'Neraca', c: ['Neraca','Pembaris','Jam randik','Termometer'], h: 'Neraca menimbang jisim dalam gram dan kilogram.' },
      { t: 'Alat apa digunakan untuk mengukur ISI PADU cecair?', a: 'Silinder penyukat', c: ['Silinder penyukat','Pembaris','Neraca','Jam randik'], h: 'Silinder penyukat menyukat isi padu cecair dalam ml.' },
      { t: 'Deria apa kita guna untuk mendengar bunyi?', a: 'Telinga', c: ['Telinga','Mata','Kulit','Lidah'], h: 'Telinga ialah deria pendengaran.' },
      { t: 'Deria apa kita guna untuk merasa rasa masin?', a: 'Lidah', c: ['Lidah','Hidung','Mata','Telinga'], h: 'Lidah ialah deria rasa.' },
      { t: 'Deria apa kita guna untuk menghidu bau?', a: 'Hidung', c: ['Hidung','Lidah','Mata','Kulit'], h: 'Hidung ialah deria bau.' },
      { t: 'Menyusun objek mengikut saiz besar ke kecil dipanggil?', a: 'Mengelas', c: ['Mengelas','Memerhati','Meramal','Mengukur'], h: 'Mengelas bermakna mengumpul atau menyusun ikut ciri sepunya.' },
      { t: 'Meneka apa akan berlaku seterusnya dipanggil?', a: 'Meramal', c: ['Meramal','Mengukur','Mengelas','Merekod'], h: 'Meramal ialah membuat jangkaan berdasarkan maklumat yang ada.' },
      { t: 'Unit untuk mengukur panjang yang biasa ialah?', a: 'Sentimeter', c: ['Sentimeter','Gram','Saat','Mililiter'], h: 'Panjang diukur dalam mm, cm, m atau km.' },
      { t: 'Unit untuk mengukur jisim ialah?', a: 'Gram', c: ['Gram','Sentimeter','Saat','Mililiter'], h: 'Jisim diukur dalam gram dan kilogram.' },
      { t: 'Unit untuk mengukur isi padu cecair ialah?', a: 'Mililiter', c: ['Mililiter','Gram','Sentimeter','Saat'], h: 'Isi padu cecair diukur dalam ml dan liter.' },
      { t: 'Menulis apa yang kita lihat dalam jadual dipanggil?', a: 'Merekod', c: ['Merekod','Meramal','Menghidu','Mengukur'], h: 'Merekod bermakna mencatat pemerhatian supaya tidak lupa.' },
      { t: 'Berapa banyak deria yang manusia ada?', a: '5', c: ['5','3','4','6'], h: 'Lima deria: penglihatan, pendengaran, bau, rasa dan sentuhan.' },
      { t: 'Deria apa kita guna untuk merasa panas dan sejuk?', a: 'Kulit', c: ['Kulit','Mata','Telinga','Hidung'], h: 'Kulit ialah deria sentuhan — merasa panas, sejuk, kasar dan licin.' },
      { t: 'Alat apa digunakan untuk melihat benda yang sangat kecil?', a: 'Kanta pembesar', c: ['Kanta pembesar','Pembaris','Neraca','Jam randik'], h: 'Kanta pembesar membesarkan imej benda kecil supaya jelas dilihat.' }
    ],
    sederhana: [
      { t: 'Ali menyusun daun mengikut bentuk. Kemahiran apa yang dia guna?', a: 'Mengelas', c: ['Mengelas','Meramal','Mengukur','Merekod'], h: 'Menyusun ikut ciri yang sama ialah mengelas.', w: W },
      { t: 'Siti kata "esok akan hujan kerana awan gelap". Kemahiran apa itu?', a: 'Meramal', c: ['Meramal','Mengukur','Mengelas','Memerhati'], h: 'Meramal ialah menjangka kejadian akan datang berdasarkan bukti.', w: W },
      { t: 'Untuk tahu bola mana lebih berat, alat apa digunakan?', a: 'Neraca', c: ['Neraca','Pembaris','Jam randik','Kanta pembesar'], h: 'Berat dan jisim ditentukan dengan neraca.', w: W },
      { t: 'Untuk tahu siapa berlari lebih laju, apa yang perlu diukur?', a: 'Masa', c: ['Masa','Jisim','Isi padu','Warna'], h: 'Yang lebih laju mengambil MASA lebih singkat untuk jarak sama.', w: W },
      { t: 'Bacaan pada silinder penyukat dibaca pada bahagian?', a: 'Paras mata', c: ['Paras mata','Dari atas','Dari bawah','Dari tepi'], h: 'Mata mesti sejajar dengan paras cecair supaya bacaan tepat.' },
      { t: 'Kenapa kita perlu ULANG ukuran beberapa kali?', a: 'Supaya lebih tepat', c: ['Supaya lebih tepat','Supaya cepat siap','Supaya nampak banyak kerja','Tiada sebab'], h: 'Ulangan mengurangkan kesilapan dan menjadikan keputusan lebih dipercayai.', w: W },
      { t: 'Sebelum mengukur jisim, jarum neraca patut menunjuk ke?', a: 'Sifar', c: ['Sifar','Satu','Sepuluh','Mana-mana'], h: 'Neraca mesti disifarkan dahulu supaya bacaan tidak tersasar.' },
      { t: 'Ali guna jengkal tangan untuk ukur meja. Apa masalahnya?', a: 'Saiz jengkal setiap orang berbeza', c: ['Saiz jengkal setiap orang berbeza','Jengkal terlalu panjang','Jengkal tak boleh dilipat','Tiada masalah'], h: 'Unit piawai seperti cm sama untuk semua orang; jengkal tidak.', w: W },
      { t: 'Yang manakah unit PIAWAI?', a: 'Sentimeter', c: ['Sentimeter','Jengkal','Depa','Tapak kaki'], h: 'Unit piawai diiktiraf sama di seluruh dunia.' },
      { t: 'Deria mana TIDAK sesuai untuk menguji bahan kimia?', a: 'Lidah', c: ['Lidah','Mata','Telinga','Hidung'], h: 'Jangan sekali-kali merasa bahan kimia — ia boleh meracun.', w: W },
      { t: 'Untuk merekod keputusan supaya mudah dibaca, kita guna?', a: 'Jadual', c: ['Jadual','Cerita panjang','Lukisan sahaja','Ingatan'], h: 'Jadual menyusun data supaya senang dibanding.' },
      { t: 'Enisa ukur air 250 ml, kemudian tambah 150 ml. Jumlah isi padu?', a: '400 ml', c: ['400 ml','100 ml','350 ml','450 ml'], h: '250 + 150 = 400 ml.', w: W },
      { t: 'Apakah yang diperhati apabila kita guna deria SENTUHAN?', a: 'Kasar atau licin', c: ['Kasar atau licin','Warna','Bau','Bunyi'], h: 'Sentuhan mengesan tekstur, suhu dan tekanan.' },
      { t: 'Objek manakah paling sesuai diukur dengan pembaris?', a: 'Buku', c: ['Buku','Air dalam gelas','Berat batu','Masa berlari'], h: 'Pembaris untuk panjang; air guna silinder penyukat.', w: W },
      { t: 'Susunan langkah yang betul: memerhati, kemudian?', a: 'Merekod', c: ['Merekod','Membuang','Tidur','Bermain'], h: 'Selepas memerhati kita catat supaya data tidak hilang.' },
      { t: 'Alat apa paling sesuai untuk melihat urat halus pada daun?', a: 'Kanta pembesar', c: ['Kanta pembesar','Neraca','Jam randik','Silinder penyukat'], h: 'Kanta pembesar membesarkan butiran halus.', w: W }
    ],
    susah: [
      { t: 'Ali ukur pensel 3 kali: 12 cm, 12 cm, 12 cm. Apa maksudnya?', a: 'Ukurannya boleh dipercayai', c: ['Ukurannya boleh dipercayai','Ukurannya salah','Pembaris rosak','Perlu ukur guna jengkal'], h: 'Bacaan yang konsisten menunjukkan ukuran itu tepat dan boleh dipercayai.', w: W },
      { t: 'Kenapa saintis guna unit piawai dan bukan jengkal?', a: 'Supaya semua orang dapat keputusan sama', c: ['Supaya semua orang dapat keputusan sama','Supaya nampak pandai','Kerana jengkal susah','Kerana pembaris mahal'], h: 'Sains perlu keputusan yang boleh diulang sesiapa sahaja, di mana-mana.', w: W },
      { t: 'Untuk banding tumbesaran 2 pokok, apa yang perlu SAMA?', a: 'Air dan cahaya', c: ['Air dan cahaya','Warna pasu','Nama pokok','Hari menyiram'], h: 'Hanya satu perkara boleh berbeza; yang lain mesti sama supaya perbandingan adil.', w: W },
      { t: 'Enisa ramal ais akan cair. Apa buktinya paling kukuh?', a: 'Ais cair bila dibiar di tempat panas', c: ['Ais cair bila dibiar di tempat panas','Kawan kata begitu','Ais warna putih','Ais berat'], h: 'Ramalan disokong oleh pemerhatian sebenar, bukan pendapat.', w: W },
      { t: 'Bacaan 2 murid berbeza jauh untuk objek sama. Apa patut dibuat?', a: 'Ukur semula bersama-sama', c: ['Ukur semula bersama-sama','Pilih yang besar','Pilih yang kecil','Abaikan sahaja'], h: 'Bila data bercanggah, ulang pengukuran untuk cari puncanya.', w: W },
      { t: 'Kemahiran manakah PALING awal digunakan dalam penyiasatan?', a: 'Memerhati', c: ['Memerhati','Membuat kesimpulan','Merekod','Melapor'], h: 'Semua bermula dengan pemerhatian; barulah kita boleh ukur dan simpul.', w: W },
      { t: 'Air dalam bikar nampak 200 ml dari atas, 180 ml pada paras mata. Yang mana betul?', a: '180 ml', c: ['180 ml','200 ml','190 ml','Kedua-duanya betul'], h: 'Bacaan tepat mesti diambil pada paras mata; dari atas menipu.', w: W },
      { t: 'Kesimpulan yang baik mesti berdasarkan?', a: 'Data yang dikumpul', c: ['Data yang dikumpul','Tekaan','Cerita kawan','Warna kegemaran'], h: 'Kesimpulan sains datang daripada bukti, bukan perasaan.', w: W },
      { t: '3 biji buah ditimbang: 120 g, 150 g, 130 g. Jumlah jisim?', a: '400 g', c: ['400 g','300 g','380 g','420 g'], h: '120 + 150 + 130 = 400 g.', w: W },
      { t: 'Kenapa perlu rekod tarikh semasa membuat pemerhatian?', a: 'Untuk tahu perubahan mengikut masa', c: ['Untuk tahu perubahan mengikut masa','Supaya cantik','Untuk isi ruang','Tiada sebab'], h: 'Tarikh membolehkan kita banding keadaan sebelum dan selepas.', w: W },
      { t: 'Manakah pemerhatian, bukan pendapat?', a: 'Daun itu berwarna hijau', c: ['Daun itu berwarna hijau','Daun itu cantik','Daun itu terbaik','Daun itu menyeramkan'], h: 'Pemerhatian boleh diukur atau dilihat sesiapa; pendapat berbeza antara orang.', w: W },
      { t: 'Alat mana boleh ganti neraca untuk banding berat DUA objek?', a: 'Neraca tuas', c: ['Neraca tuas','Pembaris','Jam randik','Kanta pembesar'], h: 'Neraca tuas menunjukkan yang mana lebih berat walaupun tanpa nombor.', w: W },
      { t: 'Isi padu batu diukur dengan cara?', a: 'Rendam dalam air, lihat air naik', c: ['Rendam dalam air, lihat air naik','Timbang dengan neraca','Ukur dengan pembaris','Kira dengan jam'], h: 'Air yang tersesar sama dengan isi padu batu itu.', w: W },
      { t: 'Kenapa kita tidak boleh guna deria SAHAJA untuk mengukur?', a: 'Deria boleh tertipu', c: ['Deria boleh tertipu','Deria terlalu laju','Deria terlalu mahal','Deria tidak berguna'], h: 'Deria memberi anggaran; alat memberi nilai yang tepat dan sama untuk semua.', w: W },
      { t: 'Dua bikar air sama banyak tetapi bentuk berbeza. Isi padunya?', a: 'Sama', c: ['Sama','Yang tinggi lebih banyak','Yang lebar lebih banyak','Tak boleh tahu'], h: 'Bentuk bekas tidak mengubah isi padu; sukat untuk pastikan.', w: W },
      { t: 'Langkah terakhir dalam penyiasatan sains ialah?', a: 'Membuat kesimpulan', c: ['Membuat kesimpulan','Memerhati','Mengukur','Meramal'], h: 'Selepas data dikumpul dan direkod, barulah kita simpulkan.', w: W }
    ]
  };

  // ============ UNIT 2: PERATURAN BILIK SAINS ============
  BANK.sainsU2 = {
    senang: [
      {t:'Bolehkah membawa balik radas bilik sains ke rumah?',a:'Tidak boleh',c:['Tidak boleh','Boleh','Boleh jika kecil','Boleh jika minta kawan'],h:'Radas milik sekolah dan mungkin berbahaya jika digunakan tanpa pengawasan.'},
      { t: 'Bolehkah kita makan di dalam bilik sains?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh jika lapar','Boleh waktu rehat'], h: 'Makanan boleh tercemar bahan kimia dan meracun kita.' },
      { t: 'Bolehkah berlari di dalam bilik sains?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh jika laju','Boleh jika seronok'], h: 'Berlari boleh melanggar radas dan menyebabkan kemalangan.' },
      { t: 'Apa perlu dibuat sebelum mula eksperimen?', a: 'Baca arahan', c: ['Baca arahan','Terus sentuh bahan','Bermain radas','Buka tingkap'], h: 'Arahan memberitahu langkah selamat yang perlu diikut.' },
      { t: 'Siapa perlu diberitahu jika radas pecah?', a: 'Guru', c: ['Guru','Kawan','Tiada sesiapa','Adik'], h: 'Guru tahu cara membersihkan pecahan dengan selamat.' },
      { t: 'Bolehkah merasa bahan kimia dengan lidah?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh sikit','Boleh jika sedap','Boleh jika berani'], h: 'Bahan kimia boleh meracun walaupun sedikit.' },
      { t: 'Apa perlu dipakai untuk melindungi mata?', a: 'Cermin mata keselamatan', c: ['Cermin mata keselamatan','Topi','Sarung tangan','Kasut'], h: 'Cermin mata keselamatan menghalang percikan masuk ke mata.' },
      { t: 'Selepas eksperimen, tangan perlu?', a: 'Dibasuh', c: ['Dibasuh','Dilap pada baju','Dibiar sahaja','Dijilat'], h: 'Membasuh tangan membuang sisa bahan kimia.' },
      { t: 'Bolehkah bermain dengan api tanpa kebenaran guru?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh jika kecil','Boleh jika cepat'], h: 'Api hanya digunakan di bawah pengawasan guru.' },
      { t: 'Bolehkah kita minum air dari bikar makmal?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh jika bersih','Boleh jika dahaga'], h: 'Bikar mungkin ada sisa bahan kimia walaupun nampak bersih.' },
      { t: 'Rambut panjang perlu?', a: 'Diikat', c: ['Diikat','Dibiar','Dipotong','Diwarna'], h: 'Rambut terurai boleh terkena api atau bahan kimia.' },
      { t: 'Selepas guna radas, ia perlu?', a: 'Dibersih dan disimpan', c: ['Dibersih dan disimpan','Dibiar di meja','Dibuang','Dibawa balik'], h: 'Radas bersih selamat digunakan orang seterusnya.' },
      { t: 'Bolehkah menjalankan eksperimen sendiri tanpa guru?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh jika pandai','Boleh jika ramai'], h: 'Guru mengawasi supaya langkah selamat diikut.' },
      { t: 'Apa perlu dibuat jika bahan kimia terkena kulit?', a: 'Basuh dengan air dan beritahu guru', c: ['Basuh dengan air dan beritahu guru','Lap dengan baju','Biarkan kering','Sapu minyak'], h: 'Air melarutkan bahan kimia; guru perlu tahu untuk rawatan lanjut.' },
      { t: 'Botol bahan kimia perlu ada?', a: 'Label', c: ['Label','Gambar','Warna cantik','Reben'], h: 'Label memberitahu isi kandungan supaya tidak tersalah guna.' },
      { t: 'Bolehkah menghidu bahan kimia terus dari botol?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh jika wangi','Boleh sekali'], h: 'Wasap pekat boleh merosakkan hidung dan paru-paru.' },
      { t: 'Kasut yang sesuai di bilik sains ialah?', a: 'Kasut tertutup', c: ['Kasut tertutup','Selipar','Kaki ayam','Kasut tumit tinggi'], h: 'Kasut tertutup melindungi kaki daripada bahan tumpah dan pecahan kaca.' },
      { t: 'Bolehkah menolak kawan di bilik sains?', a: 'Tidak boleh', c: ['Tidak boleh','Boleh','Boleh main-main','Boleh perlahan'], h: 'Tolakan boleh menyebabkan bahan tumpah atau radas pecah.' }
    ],
    sederhana: [
      { t: 'Cara betul menghidu bahan kimia ialah?', a: 'Kipas wasap ke arah hidung', c: ['Kipas wasap ke arah hidung','Hidu terus dari botol','Tarik nafas dalam','Jangan hidu langsung'], h: 'Mengipas membawa sedikit wasap sahaja — cukup untuk dikesan, selamat untuk dihidu.', w: W },
      { t: 'Kaca pecah di lantai. Apa yang PALING selamat?', a: 'Beritahu guru, jangan sentuh', c: ['Beritahu guru, jangan sentuh','Kutip dengan tangan','Tendang ke tepi','Tutup dengan kertas'], h: 'Kaca pecah boleh mengelar; guru ada alat yang sesuai.', w: W },
      { t: 'Kenapa meja perlu dibersih SEBELUM dan SELEPAS eksperimen?', a: 'Elak pencemaran dan kemalangan', c: ['Elak pencemaran dan kemalangan','Supaya cantik','Supaya cepat balik','Supaya guru gembira'], h: 'Sisa bahan lama boleh merosakkan keputusan dan membahayakan.', w: W },
      { t: 'Api terbakar di meja. Tindakan pertama?', a: 'Beritahu guru segera', c: ['Beritahu guru segera','Tiup api','Lari keluar','Siram dengan apa-apa'], h: 'Guru tahu alat pemadam yang betul; tindakan salah boleh merebakkan api.', w: W },
      { t: 'Kenapa dilarang makan di bilik sains?', a: 'Makanan boleh tercemar bahan kimia', c: ['Makanan boleh tercemar bahan kimia','Nanti kenyang','Nanti kotor sikit','Tiada sebab kukuh'], h: 'Bahan kimia halus boleh melekat pada makanan tanpa disedari.', w: W },
      { t: 'Bahan kimia berlebihan selepas guna patut?', a: 'Jangan tuang balik ke botol asal', c: ['Jangan tuang balik ke botol asal','Tuang balik ke botol','Simpan dalam poket','Bawa balik rumah'], h: 'Bahan yang dituang balik boleh mencemar keseluruhan botol.', w: W },
      { t: 'Simbol tengkorak pada botol bermaksud?', a: 'Beracun', c: ['Beracun','Sedap','Selamat','Mahal'], h: 'Tengkorak memberi amaran bahan itu boleh meracun.' },
      { t: 'Kenapa perlu pakai sarung tangan?', a: 'Melindungi kulit tangan', c: ['Melindungi kulit tangan','Supaya cantik','Supaya hangat','Supaya kuat'], h: 'Sarung tangan menghalang bahan kimia menyentuh kulit.', w: W },
      { t: 'Alat memanaskan yang selamat untuk murid ialah?', a: 'Yang diawasi guru', c: ['Yang diawasi guru','Mancis sendiri','Lilin di poket','Api unggun'], h: 'Semua kerja melibatkan haba mesti diawasi guru.', w: W },
      { t: 'Kenapa radas kaca perlu diletak jauh dari tepi meja?', a: 'Elak terjatuh dan pecah', c: ['Elak terjatuh dan pecah','Supaya kemas','Supaya nampak','Supaya sejuk'], h: 'Radas di tepi mudah tersiku dan jatuh.', w: W },
      { t: 'Sebelum balik dari bilik sains, apa perlu ditutup?', a: 'Paip air dan suis', c: ['Paip air dan suis','Pintu sahaja','Tingkap sahaja','Buku'], h: 'Paip dan suis terbuka boleh menyebabkan banjir atau kebakaran.', w: W },
      { t: 'Murid alah kepada sesuatu bahan. Apa patut dibuat?', a: 'Beritahu guru sebelum eksperimen', c: ['Beritahu guru sebelum eksperimen','Rahsiakan','Tunggu sampai sakit','Tukar tempat duduk'], h: 'Guru boleh sediakan alternatif yang selamat lebih awal.', w: W },
      { t: 'Cecair panas patut dituang?', a: 'Perlahan dan menjauhi badan', c: ['Perlahan dan menjauhi badan','Laju','Ke arah kawan','Sambil berjalan'], h: 'Tuangan perlahan mengelak percikan mengenai kulit.', w: W },
      { t: 'Kenapa perlu ikut ARAHAN guru dengan tepat?', a: 'Supaya eksperimen selamat dan berjaya', c: ['Supaya eksperimen selamat dan berjaya','Supaya cepat habis','Supaya dapat markah','Supaya nampak rajin'], h: 'Langkah yang diubah sendiri boleh menyebabkan tindak balas berbahaya.', w: W },
      { t: 'Peti kecemasan di bilik sains digunakan untuk?', a: 'Rawatan awal kecederaan', c: ['Rawatan awal kecederaan','Menyimpan makanan','Menyimpan buku','Menyimpan radas'], h: 'Peti kecemasan mengandungi alat rawatan luka ringan.' },
      { t: 'Yang manakah TIDAK dibenarkan di bilik sains?', a: 'Bergurau senda', c: ['Bergurau senda','Mendengar arahan','Mencatat data','Membersih meja'], h: 'Gurauan mengalih perhatian dan menyebabkan kemalangan.' }
    ],
    susah: [
      { t: 'Kenapa peraturan bilik sains LEBIH ketat daripada bilik darjah biasa?', a: 'Ada bahan dan radas yang berbahaya', c: ['Ada bahan dan radas yang berbahaya','Bilik lebih besar','Guru lebih garang','Meja lebih tinggi'], h: 'Risiko bahan kimia, kaca dan haba menuntut penjagaan tambahan.', w: W },
      { t: 'Murid tumpahkan asid tetapi takut dimarah, jadi dia diam. Kesannya?', a: 'Orang lain boleh tercedera', c: ['Orang lain boleh tercedera','Tiada apa berlaku','Asid hilang sendiri','Meja jadi bersih'], h: 'Tumpahan tersembunyi membahayakan sesiapa yang menyentuhnya kemudian.', w: W },
      { t: 'Kenapa label botol lebih penting daripada mengingat warna cecair?', a: 'Banyak bahan berbeza warnanya sama', c: ['Banyak bahan berbeza warnanya sama','Label lebih cantik','Warna cepat pudar','Label lebih murah'], h: 'Air, asid cair dan alkali cair semuanya jernih — hanya label boleh dipercayai.', w: W },
      { t: 'Semasa kebakaran kecil, kenapa TIDAK boleh tiup api?', a: 'Tiupan boleh merebakkan api', c: ['Tiupan boleh merebakkan api','Nanti penat','Nanti bising','Api jadi sejuk'], h: 'Udara membekalkan oksigen dan menyebarkan bahan terbakar.', w: W },
      { t: 'Dua murid berkongsi radas tetapi seorang tak ikut arahan. Apa risiko utama?', a: 'Kedua-duanya boleh cedera', c: ['Kedua-duanya boleh cedera','Hanya yang salah cedera','Tiada risiko','Radas jadi lebih baik'], h: 'Dalam ruang kerja yang sama, kesilapan seorang menjejaskan semua.', w: W },
      { t: 'Kenapa sisa eksperimen tidak boleh dibuang ke sinki sesuka hati?', a: 'Boleh mencemar air dan merosakkan paip', c: ['Boleh mencemar air dan merosakkan paip','Nanti sinki penuh','Nanti bising','Tiada sebab'], h: 'Sesetengah bahan mencemar alam sekitar dan mengakis paip.', w: W },
      { t: 'Apakah tujuan UTAMA semua peraturan bilik sains?', a: 'Menjaga keselamatan semua orang', c: ['Menjaga keselamatan semua orang','Menjadikan kerja lambat','Menyusahkan murid','Menjimatkan bahan'], h: 'Setiap peraturan wujud kerana pernah ada kemalangan sebenar.', w: W },
      { t: 'Murid nampak wayar berbulu terdedah pada alat. Tindakan terbaik?', a: 'Jangan guna, beritahu guru', c: ['Jangan guna, beritahu guru','Balut dengan kertas','Guna cepat-cepat','Tarik wayar'], h: 'Wayar terdedah boleh menyebabkan renjatan elektrik.', w: W },
      { t: 'Kenapa perlu tahu lokasi pemadam api SEBELUM eksperimen?', a: 'Masa bertindak sangat singkat semasa kecemasan', c: ['Masa bertindak sangat singkat semasa kecemasan','Supaya nampak pandai','Untuk hiasan','Untuk ujian'], h: 'Semasa kecemasan tiada masa untuk mencari; ia mesti sudah diketahui.', w: W },
      { t: 'Manakah tindakan PALING berbahaya?', a: 'Mencampur bahan kimia sendiri', c: ['Mencampur bahan kimia sendiri','Menulis pemerhatian','Membasuh tangan','Membaca label'], h: 'Campuran tidak dibenarkan boleh menghasilkan gas beracun atau letupan.', w: W },
      { t: 'Kenapa cermin mata keselamatan perlu dipakai walaupun kita berhati-hati?', a: 'Kemalangan berlaku tanpa diduga', c: ['Kemalangan berlaku tanpa diduga','Supaya nampak saintis','Kerana wajib sahaja','Supaya nampak jelas'], h: 'Percikan berlaku dalam sekelip mata — perlindungan mesti sudah dipakai.', w: W },
      { t: 'Selepas kemalangan kecil, kenapa perlu direkod?', a: 'Supaya boleh dielak pada masa depan', c: ['Supaya boleh dielak pada masa depan','Untuk menghukum murid','Untuk isi fail','Tiada guna'], h: 'Rekod membantu kenal pasti punca dan memperbaiki peraturan.', w: W },
      { t: 'Manakah contoh sikap saintis yang BAIK?', a: 'Jujur melaporkan keputusan walaupun gagal', c: ['Jujur melaporkan keputusan walaupun gagal','Ubah data supaya cantik','Salin kerja kawan','Rahsiakan kesilapan'], h: 'Kejujuran ialah asas sains; data palsu merosakkan semua kesimpulan.', w: W },
      { t: 'Kenapa beg diletak di tempat khas, bukan di lorong?', a: 'Elak orang tersandung semasa kecemasan', c: ['Elak orang tersandung semasa kecemasan','Supaya kemas','Supaya tak hilang','Supaya senang ambil'], h: 'Lorong mesti lapang supaya boleh keluar cepat jika berlaku kecemasan.', w: W },
      { t: 'Peraturan mana melindungi ALAM SEKITAR, bukan hanya murid?', a: 'Buang sisa di tempat yang betul', c: ['Buang sisa di tempat yang betul','Pakai cermin mata','Ikat rambut','Jangan berlari'], h: 'Pelupusan sisa yang betul menghalang pencemaran air dan tanah.', w: W },
      { t: 'Murid tidak faham arahan tetapi malu bertanya. Apa risikonya?', a: 'Dia boleh buat langkah salah dan cedera', c: ['Dia boleh buat langkah salah dan cedera','Dia akan belajar sendiri','Tiada risiko','Guru akan marah sahaja'], h: 'Bertanya lebih selamat daripada meneka dalam kerja amali.', w: W }
    ]
  };
  // ============ UNIT 3: MANUSIA ============
  BANK.sainsU3 = {
    senang: [
      {t:'Organ deria untuk melihat ialah?',a:'Mata',c:['Mata','Telinga','Hidung','Kulit'],h:'Mata mengesan cahaya dan membolehkan kita melihat.'},
      {t:'Manusia bernafas menggunakan?',a:'Peparu',c:['Peparu','Jantung','Perut','Otak'],h:'Peparu mengambil oksigen daripada udara.'},
      {t:'Organ yang mengepam darah ke seluruh badan?',a:'Jantung',c:['Jantung','Peparu','Hati','Ginjal'],h:'Jantung mengepam darah tanpa henti.'},
      {t:'Organ yang mengawal pergerakan dan fikiran?',a:'Otak',c:['Otak','Jantung','Perut','Tulang'],h:'Otak ialah pusat kawalan badan.'},
      {t:'Makanan dihadam di dalam?',a:'Perut',c:['Perut','Otak','Peparu','Jantung'],h:'Perut menghancurkan makanan sebelum diserap usus.'},
      {t:'Manusia perlu apa untuk hidup?',a:'Makanan, air dan udara',c:['Makanan, air dan udara','Wang','Kereta','Telefon'],h:'Itulah keperluan asas semua manusia.'},
      {t:'Berapa peringkat tumbesaran manusia bermula?',a:'Bayi',c:['Bayi','Dewasa','Remaja','Tua'],h:'Urutannya bayi, kanak-kanak, remaja, dewasa, tua.'},
      {t:'Selepas bayi, peringkat seterusnya ialah?',a:'Kanak-kanak',c:['Kanak-kanak','Dewasa','Tua','Remaja'],h:'Bayi membesar menjadi kanak-kanak.'},
      {t:'Rangka manusia diperbuat daripada?',a:'Tulang',c:['Tulang','Otot','Kulit','Darah'],h:'Rangka menyokong badan dan melindungi organ.'},
      {t:'Gigi digunakan untuk?',a:'Mengunyah makanan',c:['Mengunyah makanan','Bernafas','Melihat','Mendengar'],h:'Gigi memecahkan makanan supaya mudah dihadam.'},
      {t:'Kita perlu tidur untuk?',a:'Merehatkan badan',c:['Merehatkan badan','Membesar cepat','Menjadi kuat serta-merta','Tiada sebab'],h:'Tidur membantu badan pulih dan otak berehat.'},
      {t:'Berapa kali sehari kita patut berus gigi?',a:'Dua kali',c:['Dua kali','Sekali seminggu','Tidak perlu','Lima kali'],h:'Pagi dan sebelum tidur, supaya gigi tidak rosak.'},
      {t:'Organ yang melindungi seluruh badan di luar?',a:'Kulit',c:['Kulit','Tulang','Otot','Darah'],h:'Kulit menghalang kuman masuk ke dalam badan.'},
      {t:'Air kencing dikeluarkan melalui organ?',a:'Ginjal',c:['Ginjal','Peparu','Jantung','Otak'],h:'Ginjal menapis bahan buangan daripada darah.'},
      {t:'Manusia bergerak menggunakan?',a:'Otot dan tulang',c:['Otot dan tulang','Rambut','Kuku','Gigi'],h:'Otot menarik tulang supaya badan bergerak.'},
      {t:'Berapa lama bayi menjadi dewasa?',a:'Bertahun-tahun',c:['Bertahun-tahun','Beberapa hari','Beberapa minggu','Sehari'],h:'Tumbesaran manusia berlaku perlahan-lahan selama bertahun.'},
      {t:'Makanan berkhasiat penting untuk?',a:'Tumbesaran badan',c:['Tumbesaran badan','Menjadi kaya','Menjadi tinggi serta-merta','Tiada guna'],h:'Zat makanan membina tisu dan memberi tenaga.'},
      {t:'Senaman baik untuk?',a:'Menguatkan otot dan jantung',c:['Menguatkan otot dan jantung','Menambah berat','Merosakkan tulang','Melemahkan badan'],h:'Senaman menjadikan jantung dan otot lebih kuat.'}
    ],
    sederhana:[
      {t:'Kenapa kita rasa penat selepas berlari?',a:'Otot guna banyak tenaga',c:['Otot guna banyak tenaga','Tulang patah','Darah berhenti','Otak tidur'],h:'Otot membakar tenaga semasa bekerja kuat.',w:W},
      {t:'Kenapa jantung berdegup laju semasa senaman?',a:'Badan perlukan lebih oksigen',c:['Badan perlukan lebih oksigen','Jantung takut','Badan sejuk','Darah berkurang'],h:'Jantung mengepam lebih laju untuk hantar oksigen ke otot.',w:W},
      {t:'Urutan tumbesaran yang BETUL?',a:'Bayi, kanak-kanak, remaja, dewasa',c:['Bayi, kanak-kanak, remaja, dewasa','Bayi, remaja, kanak-kanak, dewasa','Dewasa, remaja, bayi','Kanak-kanak, bayi, dewasa'],h:'Tumbesaran sentiasa dari kecil ke besar mengikut urutan.',w:W},
      {t:'Apa berlaku jika kita tidak minum air cukup?',a:'Badan jadi lemah dan dahaga',c:['Badan jadi lemah dan dahaga','Badan jadi kuat','Tiada apa berlaku','Kita jadi tinggi'],h:'Air perlu untuk semua proses dalam badan.',w:W},
      {t:'Kenapa kanak-kanak perlu susu?',a:'Kalsium menguatkan tulang',c:['Kalsium menguatkan tulang','Susu sedap','Susu murah','Supaya cepat tidur'],h:'Kalsium ialah bahan pembina tulang dan gigi.',w:W},
      {t:'Organ mana melindungi otak?',a:'Tengkorak',c:['Tengkorak','Tulang rusuk','Tulang belakang','Kulit'],h:'Tengkorak ialah tulang keras yang melindungi otak.'},
      {t:'Tulang rusuk melindungi?',a:'Jantung dan peparu',c:['Jantung dan peparu','Otak','Perut sahaja','Kaki'],h:'Sangkar rusuk mengelilingi organ penting di dada.'},
      {t:'Apa berlaku kepada gigi jika makan gula-gula terlalu banyak?',a:'Gigi berlubang',c:['Gigi berlubang','Gigi jadi kuat','Gigi jadi putih','Tiada kesan'],h:'Gula menggalakkan kuman merosakkan enamel gigi.',w:W},
      {t:'Kenapa kita bernafas lebih laju selepas berlari?',a:'Badan perlukan lebih oksigen',c:['Badan perlukan lebih oksigen','Peparu penuh','Hidung sejuk','Udara habis'],h:'Otot yang bekerja kuat memerlukan lebih banyak oksigen.',w:W},
      {t:'Manakah amalan kebersihan diri?',a:'Membasuh tangan sebelum makan',c:['Membasuh tangan sebelum makan','Berkongsi berus gigi','Tidak mandi','Makan tanpa basuh tangan'],h:'Membasuh tangan menghalang kuman masuk melalui makanan.',w:W},
      {t:'Bahagian mana badan yang paling banyak bergerak?',a:'Sendi',c:['Sendi','Tengkorak','Kuku','Rambut'],h:'Sendi ialah tempat dua tulang bertemu dan boleh bergerak.'},
      {t:'Kenapa peringkat remaja penting?',a:'Badan berubah dengan cepat',c:['Badan berubah dengan cepat','Badan berhenti membesar','Badan mengecil','Tiada perubahan'],h:'Remaja mengalami perubahan besar sebelum menjadi dewasa.',w:W},
      {t:'Makanan seimbang bermakna?',a:'Ada pelbagai jenis zat',c:['Ada pelbagai jenis zat','Banyak nasi sahaja','Banyak gula','Sedikit sahaja'],h:'Badan perlukan karbohidrat, protein, vitamin dan mineral.',w:W},
      {t:'Apa fungsi darah?',a:'Membawa oksigen dan makanan',c:['Membawa oksigen dan makanan','Menyokong badan','Menghadam makanan','Melihat'],h:'Darah ialah sistem penghantaran badan.'},
      {t:'Kenapa orang tua mudah patah tulang?',a:'Tulang jadi lebih rapuh',c:['Tulang jadi lebih rapuh','Tulang jadi besar','Tulang jadi lembut','Tiada tulang'],h:'Kandungan kalsium tulang berkurang dengan usia.',w:W},
      {t:'Manakah BUKAN keperluan asas manusia?',a:'Permainan video',c:['Permainan video','Air','Udara','Makanan'],h:'Keperluan asas ialah yang tanpanya kita tidak boleh hidup.'}
    ],
    susah:[
      {t:'Kenapa kita tidak boleh hidup tanpa udara walau seminit dua?',a:'Sel badan perlukan oksigen berterusan',c:['Sel badan perlukan oksigen berterusan','Udara sejuk','Udara ringan','Udara ada di mana-mana'],h:'Tanpa oksigen, sel terutama sel otak cepat rosak.',w:W},
      {t:'Bagaimana peparu dan jantung bekerjasama?',a:'Peparu ambil oksigen, jantung hantar ke badan',c:['Peparu ambil oksigen, jantung hantar ke badan','Jantung ambil oksigen','Kedua-duanya menghadam','Tiada kaitan'],h:'Darah mengambil oksigen di peparu sebelum diedarkan jantung.',w:W},
      {t:'Kenapa kanak-kanak makan lebih banyak berbanding saiz badan mereka?',a:'Mereka sedang membesar dengan cepat',c:['Mereka sedang membesar dengan cepat','Mereka tamak','Perut lebih besar','Mereka kurang tidur'],h:'Tumbesaran memerlukan bahan binaan dan tenaga tambahan.',w:W},
      {t:'Apa akan berlaku jika seseorang tidak pernah bersenam?',a:'Otot dan jantung menjadi lemah',c:['Otot dan jantung menjadi lemah','Otot jadi kuat','Tulang jadi panjang','Tiada kesan'],h:'Organ yang tidak digunakan akan kehilangan kekuatan.',w:W},
      {t:'Kenapa manusia dikatakan MEMBESAR, bukan bertambah bilangan organ?',a:'Organ sedia ada menjadi lebih besar',c:['Organ sedia ada menjadi lebih besar','Organ baharu tumbuh','Organ bertukar','Organ berkurang'],h:'Tumbesaran ialah pertambahan saiz dan kematangan, bukan bilangan organ.',w:W},
      {t:'Susunan sistem penghadaman yang betul?',a:'Mulut, perut, usus',c:['Mulut, perut, usus','Perut, mulut, usus','Usus, mulut, perut','Mulut, usus, perut'],h:'Makanan masuk melalui mulut, dihancur di perut, diserap di usus.',w:W},
      {t:'Kenapa penting cuci tangan selepas ke tandas?',a:'Menghalang kuman berpindah ke makanan',c:['Menghalang kuman berpindah ke makanan','Supaya tangan wangi','Supaya tangan sejuk','Tiada sebab'],h:'Kuman pada tangan mudah berpindah dan menyebabkan penyakit.',w:W},
      {t:'Dua orang sebaya, seorang tinggi seorang rendah. Kenapa?',a:'Baka dan pemakanan berbeza',c:['Baka dan pemakanan berbeza','Seorang lebih tua','Seorang tak tidur','Tiada sebab'],h:'Tumbesaran dipengaruhi baka, makanan dan kesihatan.',w:W},
      {t:'Kenapa doktor periksa degupan jantung?',a:'Untuk tahu keadaan kesihatan',c:['Untuk tahu keadaan kesihatan','Untuk kira umur','Untuk ukur tinggi','Untuk lihat warna darah'],h:'Kadar degupan menunjukkan sama ada jantung bekerja normal.',w:W},
      {t:'Manakah menunjukkan badan sedang MEMBAIKI diri?',a:'Luka sembuh dan bertutup',c:['Luka sembuh dan bertutup','Rambut kotor','Kuku panjang','Baju koyak'],h:'Badan membina sel baharu untuk menutup luka.',w:W},
      {t:'Kenapa gigi kekal perlu dijaga lebih daripada gigi susu?',a:'Gigi kekal tidak tumbuh semula',c:['Gigi kekal tidak tumbuh semula','Gigi kekal lebih kecil','Gigi susu lebih penting','Kedua-duanya sama'],h:'Sekali gigi kekal rosak, ia tidak akan diganti.',w:W},
      {t:'Apa hubungan antara otot dan tulang semasa bergerak?',a:'Otot menarik tulang',c:['Otot menarik tulang','Tulang menarik otot','Kedua-duanya diam','Kulit yang menarik'],h:'Otot mengecut dan menarik tulang di sendi.',w:W},
      {t:'Kenapa tidur cukup penting untuk murid?',a:'Otak menyusun ingatan semasa tidur',c:['Otak menyusun ingatan semasa tidur','Supaya tak lapar','Supaya cepat besar','Supaya tak bosan'],h:'Tidur membantu otak menyimpan apa yang dipelajari.',w:W},
      {t:'Manakah kesan PALING serius jika kurang zat makanan?',a:'Tumbesaran terbantut',c:['Tumbesaran terbantut','Rambut kusut','Baju longgar','Cepat mengantuk sahaja'],h:'Tanpa zat, badan tidak dapat membina tisu baharu untuk membesar.',w:W},
      {t:'Kenapa manusia perlu pelbagai jenis makanan, bukan satu jenis sahaja?',a:'Setiap makanan beri zat berbeza',c:['Setiap makanan beri zat berbeza','Supaya tak bosan','Supaya murah','Supaya kenyang lama'],h:'Tiada satu makanan pun mengandungi semua zat yang badan perlukan.',w:W},
      {t:'Apa persamaan antara peparu, jantung dan otak?',a:'Ketiga-tiganya organ penting untuk hidup',c:['Ketiga-tiganya organ penting untuk hidup','Ketiga-tiganya di kepala','Ketiga-tiganya tulang','Ketiga-tiganya di perut'],h:'Kerosakan pada mana-mana satu boleh mengancam nyawa.',w:W}
    ]
  };
  // ============ UNIT 4: HAIWAN ============
  BANK.sainsU4 = {
    senang: [
      {t:'Haiwan yang badannya ditutupi bulu tebal ialah?',a:'Kucing',c:['Kucing','Ikan','Ular','Katak'],h:'Mamalia seperti kucing berbulu untuk mengekalkan haba badan.'},
      {t:'Haiwan yang bertelur ialah?',a:'Ayam',c:['Ayam','Kucing','Lembu','Kambing'],h:'Ayam, burung, ikan, katak dan ular bertelur.'},
      {t:'Haiwan yang melahirkan anak ialah?',a:'Kucing',c:['Kucing','Ayam','Ikan','Katak'],h:'Mamalia seperti kucing melahirkan anak.'},
      {t:'Ikan bernafas menggunakan?',a:'Insang',c:['Insang','Peparu','Kulit','Hidung'],h:'Insang mengambil oksigen yang larut dalam air.'},
      {t:'Burung bergerak dengan?',a:'Terbang',c:['Terbang','Berenang','Merayap','Melompat sahaja'],h:'Sayap membolehkan burung terbang.'},
      {t:'Ular bergerak dengan cara?',a:'Merayap',c:['Merayap','Terbang','Berjalan','Berenang sahaja'],h:'Ular tiada kaki, jadi ia merayap.'},
      {t:'Haiwan yang makan tumbuhan sahaja dipanggil?',a:'Herbivor',c:['Herbivor','Karnivor','Omnivor','Insektivor'],h:'Herbivor makan rumput, daun dan buah.'},
      {t:'Haiwan yang makan daging sahaja dipanggil?',a:'Karnivor',c:['Karnivor','Herbivor','Omnivor','Nektivor'],h:'Karnivor memburu haiwan lain untuk makanan.'},
      {t:'Haiwan yang makan tumbuhan DAN daging dipanggil?',a:'Omnivor',c:['Omnivor','Herbivor','Karnivor','Vegetarian'],h:'Omnivor makan kedua-duanya, seperti ayam dan manusia.'},
      {t:'Kucing ialah haiwan jenis?',a:'Karnivor',c:['Karnivor','Herbivor','Omnivor','Tiada'],h:'Kucing memakan daging dan mempunyai gigi tajam.'},
      {t:'Lembu ialah haiwan jenis?',a:'Herbivor',c:['Herbivor','Karnivor','Omnivor','Insektivor'],h:'Lembu makan rumput sahaja.'},
      {t:'Katak membiak dengan?',a:'Bertelur',c:['Bertelur','Melahirkan anak','Berspora','Keratan'],h:'Katak bertelur di dalam air.'},
      {t:'Anak katak dipanggil?',a:'Berudu',c:['Berudu','Anak ayam','Ulat','Larva'],h:'Berudu hidup dalam air dan bernafas dengan insang.'},
      {t:'Kupu-kupu bermula sebagai?',a:'Telur',c:['Telur','Kepompong','Ulat beluncas','Kupu-kupu kecil'],h:'Kitaran: telur, ulat beluncas, kepompong, kupu-kupu.'},
      {t:'Haiwan yang hidup di air dan darat?',a:'Katak',c:['Katak','Ayam','Kucing','Burung'],h:'Katak boleh hidup di kedua-dua tempat.'},
      {t:'Badan ikan ditutupi?',a:'Sisik',c:['Sisik','Bulu','Rambut','Kulit licin sahaja'],h:'Sisik melindungi badan ikan.'},
      {t:'Badan burung ditutupi?',a:'Bulu pelepah',c:['Bulu pelepah','Sisik','Rambut','Kulit tebal'],h:'Bulu membantu burung terbang dan kekal panas.'},
      {t:'Haiwan memerlukan apa untuk hidup?',a:'Makanan, air dan udara',c:['Makanan, air dan udara','Rumah besar','Baju','Wang'],h:'Sama seperti manusia, itulah keperluan asas haiwan.'}
    ],
    sederhana:[
      {t:'Kenapa ikan tidak boleh hidup di darat?',a:'Insang tidak boleh ambil oksigen dari udara',c:['Insang tidak boleh ambil oksigen dari udara','Ikan takut','Darat terlalu panas','Ikan tiada kaki'],h:'Insang hanya berfungsi apabila basah dan dalam air.',w:W},
      {t:'Gigi tajam pada harimau menunjukkan ia?',a:'Karnivor',c:['Karnivor','Herbivor','Omnivor','Pemakan tumbuhan'],h:'Gigi tajam sesuai untuk mengoyak daging.',w:W},
      {t:'Gigi rata dan lebar pada lembu sesuai untuk?',a:'Mengunyah rumput',c:['Mengunyah rumput','Mengoyak daging','Memecah tulang','Menggigit besi'],h:'Gigi rata mengisar tumbuhan yang liat.',w:W},
      {t:'Urutan kitaran hidup kupu-kupu yang betul?',a:'Telur, ulat, kepompong, kupu-kupu',c:['Telur, ulat, kepompong, kupu-kupu','Telur, kepompong, ulat, kupu-kupu','Ulat, telur, kupu-kupu','Kepompong, telur, ulat'],h:'Kupu-kupu melalui empat peringkat berbeza.',w:W},
      {t:'Urutan kitaran hidup katak yang betul?',a:'Telur, berudu, katak muda, katak dewasa',c:['Telur, berudu, katak muda, katak dewasa','Berudu, telur, katak','Katak, telur, berudu','Telur, katak, berudu'],h:'Berudu kehilangan ekor dan menumbuhkan kaki.',w:W},
      {t:'Kenapa berudu tinggal dalam air?',a:'Ia bernafas dengan insang',c:['Ia bernafas dengan insang','Ia takut','Air lebih sejuk','Ia tak boleh melompat'],h:'Berudu hanya menumbuhkan peparu apabila membesar.',w:W},
      {t:'Haiwan berikut yang membiak dengan MELAHIRKAN anak?',a:'Lembu',c:['Lembu','Ayam','Ikan','Ular'],h:'Mamalia melahirkan anak dan menyusukannya.'},
      {t:'Kenapa induk burung membina sarang?',a:'Melindungi telur dan anak',c:['Melindungi telur dan anak','Untuk tidur sahaja','Untuk bermain','Untuk simpan makanan'],h:'Sarang menjaga telur daripada sejuk dan pemangsa.',w:W},
      {t:'Haiwan yang bergerak dengan mengengsot ialah?',a:'Siput',c:['Siput','Kuda','Burung','Ikan'],h:'Siput bergerak perlahan menggunakan kaki berlendir.'},
      {t:'Apa persamaan ayam dan itik?',a:'Kedua-duanya bertelur',c:['Kedua-duanya bertelur','Kedua-duanya berenang','Kedua-duanya karnivor','Kedua-duanya bersisik'],h:'Kedua-duanya burung yang membiak dengan bertelur.',w:W},
      {t:'Kenapa itik boleh berenang tetapi ayam tidak pandai?',a:'Kaki itik berselaput',c:['Kaki itik berselaput','Itik lebih ringan','Ayam takut air','Itik ada sisik'],h:'Kaki berselaput bertindak seperti pendayung.',w:W},
      {t:'Haiwan yang hidup dalam kumpulan besar ialah?',a:'Semut',c:['Semut','Harimau','Ular','Helang'],h:'Semut hidup berkoloni dan bekerjasama.'},
      {t:'Manakah haiwan omnivor?',a:'Ayam',c:['Ayam','Lembu','Harimau','Kambing'],h:'Ayam makan biji-bijian dan juga cacing atau serangga.'},
      {t:'Apa yang melindungi kura-kura daripada bahaya?',a:'Cengkerang',c:['Cengkerang','Bulu','Sisik halus','Duri'],h:'Kura-kura menarik badan masuk ke dalam cengkerang keras.'},
      {t:'Kenapa haiwan perlu bergerak?',a:'Mencari makanan dan mengelak bahaya',c:['Mencari makanan dan mengelak bahaya','Untuk bersenam','Untuk bermain','Tiada sebab'],h:'Pergerakan penting untuk terus hidup.',w:W},
      {t:'Ulat beluncas berubah menjadi kupu-kupu di dalam?',a:'Kepompong',c:['Kepompong','Telur','Sarang','Air'],h:'Kepompong ialah tempat perubahan bentuk berlaku.'}
    ],
    susah:[
      {t:'Kenapa kitaran hidup katak dikatakan BERUBAH BENTUK?',a:'Bentuk badannya sangat berbeza setiap peringkat',c:['Bentuk badannya sangat berbeza setiap peringkat','Ia bertukar warna','Ia bertukar saiz sahaja','Ia bertukar tempat'],h:'Berudu tiada kaki dan berinsang; katak dewasa berkaki dan berperparu.',w:W},
      {t:'Apa akan berlaku kepada herbivor jika semua tumbuhan mati?',a:'Herbivor akan kelaparan',c:['Herbivor akan kelaparan','Herbivor makan daging','Herbivor jadi kuat','Tiada kesan'],h:'Herbivor bergantung sepenuhnya pada tumbuhan.',w:W},
      {t:'Jika semua herbivor pupus, apa jadi kepada karnivor?',a:'Karnivor kehilangan makanan',c:['Karnivor kehilangan makanan','Karnivor jadi herbivor','Karnivor bertambah','Tiada kesan'],h:'Rantai makanan terputus apabila satu peringkat hilang.',w:W},
      {t:'Kenapa haiwan bertelur biasanya menghasilkan banyak telur?',a:'Kebanyakan telur tidak sempat menetas',c:['Kebanyakan telur tidak sempat menetas','Untuk dijual','Kerana mudah','Untuk makanan'],h:'Banyak telur dimakan pemangsa, jadi bilangan besar meningkatkan peluang hidup.',w:W},
      {t:'Kenapa mamalia biasanya melahirkan sedikit anak sahaja?',a:'Induk menjaga anak sehingga kuat',c:['Induk menjaga anak sehingga kuat','Kerana malas','Kerana kecil','Tiada sebab'],h:'Penjagaan induk meningkatkan peluang hidup setiap anak.',w:W},
      {t:'Apa persamaan insang ikan dan peparu manusia?',a:'Kedua-duanya untuk bernafas',c:['Kedua-duanya untuk bernafas','Kedua-duanya menghadam','Kedua-duanya mengepam darah','Kedua-duanya di kepala'],h:'Fungsi sama, tetapi satu untuk air dan satu untuk udara.',w:W},
      {t:'Bagaimana bentuk gigi memberitahu jenis makanan haiwan?',a:'Tajam untuk daging, rata untuk tumbuhan',c:['Tajam untuk daging, rata untuk tumbuhan','Semua gigi sama','Tajam untuk tumbuhan','Gigi tiada kaitan'],h:'Struktur badan haiwan sesuai dengan cara ia hidup.',w:W},
      {t:'Kenapa haiwan di kawasan sejuk berbulu tebal?',a:'Untuk mengekalkan haba badan',c:['Untuk mengekalkan haba badan','Supaya cantik','Supaya berat','Untuk berenang'],h:'Bulu tebal bertindak sebagai penebat haba.',w:W},
      {t:'Manakah BUKAN peringkat kitaran hidup kupu-kupu?',a:'Berudu',c:['Berudu','Telur','Ulat beluncas','Kepompong'],h:'Berudu ialah peringkat katak, bukan kupu-kupu.',w:W},
      {t:'Kenapa kitaran hidup penting untuk sesuatu spesies?',a:'Supaya spesies itu berterusan',c:['Supaya spesies itu berterusan','Supaya haiwan cantik','Supaya haiwan besar','Tiada sebab'],h:'Tanpa pembiakan, spesies akan pupus.',w:W},
      {t:'Dua haiwan bertelur tetapi satu di air satu di darat. Contohnya?',a:'Katak dan ayam',c:['Katak dan ayam','Kucing dan lembu','Harimau dan singa','Kambing dan biri-biri'],h:'Katak bertelur di air, ayam bertelur di darat.',w:W},
      {t:'Kenapa ayam dikelaskan sebagai omnivor dan bukan herbivor?',a:'Ayam juga makan cacing dan serangga',c:['Ayam juga makan cacing dan serangga','Ayam makan rumput','Ayam tidak makan','Ayam makan daging sahaja'],h:'Omnivor makan kedua-dua tumbuhan dan haiwan.',w:W},
      {t:'Apa kesan jika habitat haiwan dimusnahkan?',a:'Haiwan kehilangan tempat tinggal dan makanan',c:['Haiwan kehilangan tempat tinggal dan makanan','Haiwan jadi lebih kuat','Haiwan bertambah','Tiada kesan'],h:'Habitat menyediakan makanan, tempat berlindung dan tempat membiak.',w:W},
      {t:'Kenapa haiwan yang bergerak laju biasanya karnivor?',a:'Ia perlu memburu mangsa',c:['Ia perlu memburu mangsa','Ia suka berlari','Ia ringan','Ia takut'],h:'Kelajuan diperlukan untuk menangkap haiwan lain.',w:W},
      {t:'Cara terbaik mengelas haiwan ialah berdasarkan?',a:'Ciri sepunya seperti cara bernafas dan membiak',c:['Ciri sepunya seperti cara bernafas dan membiak','Warna badan','Nama haiwan','Saiz sahaja'],h:'Pengelasan sains guna ciri struktur, bukan rupa luaran sahaja.',w:W},
      {t:'Apa yang SAMA antara semua haiwan?',a:'Semua perlu makanan, air dan udara',c:['Semua perlu makanan, air dan udara','Semua bertelur','Semua berbulu','Semua boleh terbang'],h:'Itulah keperluan asas yang dikongsi semua benda hidup.',w:W}
    ]
  };

  // ============ UNIT 5: TUMBUH-TUMBUHAN ============
  BANK.sainsU5 = {
    senang:[
      {t:'Bahagian tumbuhan yang biasanya berwarna dan wangi ialah?',a:'Bunga',c:['Bunga','Akar','Batang','Daun'],h:'Bunga berwarna dan wangi untuk menarik pendebunga.'},
      {t:'Bahagian tumbuhan yang menyerap air dari tanah?',a:'Akar',c:['Akar','Daun','Bunga','Buah'],h:'Akar menyerap air dan garam mineral.'},
      {t:'Bahagian yang membuat makanan untuk tumbuhan?',a:'Daun',c:['Daun','Akar','Batang','Buah'],h:'Daun membuat makanan menggunakan cahaya matahari.'},
      {t:'Bahagian yang menyokong tumbuhan tegak?',a:'Batang',c:['Batang','Daun','Bunga','Akar'],h:'Batang menyokong dan mengangkut air ke daun.'},
      {t:'Bahagian tumbuhan yang menjadi buah?',a:'Bunga',c:['Bunga','Akar','Daun','Batang'],h:'Selepas pendebungaan, bunga menjadi buah.'},
      {t:'Tumbuhan memerlukan apa untuk hidup?',a:'Air, cahaya dan udara',c:['Air, cahaya dan udara','Wang','Muzik','Baja sahaja'],h:'Itulah keperluan asas semua tumbuhan.'},
      {t:'Kebanyakan tumbuhan membiak melalui?',a:'Biji benih',c:['Biji benih','Telur','Anak','Air'],h:'Biji benih tumbuh menjadi pokok baharu.'},
      {t:'Warna kebanyakan daun ialah?',a:'Hijau',c:['Hijau','Merah','Biru','Hitam'],h:'Klorofil hijau membantu daun membuat makanan.'},
      {t:'Tumbuhan mendapat cahaya daripada?',a:'Matahari',c:['Matahari','Bulan','Bintang','Lampu jalan'],h:'Matahari ialah sumber cahaya utama untuk tumbuhan.'},
      {t:'Pisang membiak melalui?',a:'Sucker (anak pokok)',c:['Sucker (anak pokok)','Biji benih','Spora','Telur'],h:'Pokok pisang tumbuh anak di pangkalnya.'},
      {t:'Keladi dan halia membiak melalui?',a:'Batang bawah tanah',c:['Batang bawah tanah','Daun','Bunga','Biji'],h:'Rizom di bawah tanah tumbuh menjadi pokok baharu.'},
      {t:'Tumbuhan yang membiak melalui DAUN ialah?',a:'Setawar',c:['Setawar','Padi','Jagung','Durian'],h:'Anak pokok tumbuh pada pinggir daun setawar.'},
      {t:'Bunga menarik serangga dengan?',a:'Warna dan bau',c:['Warna dan bau','Bunyi','Duri','Getah'],h:'Warna cerah dan bau harum menarik pendebunga.'},
      {t:'Bahagian tumbuhan yang biasanya di bawah tanah?',a:'Akar',c:['Akar','Daun','Bunga','Buah'],h:'Akar menyerap air dan mencengkam tumbuhan pada tanah.'},
      {t:'Ubi kentang ialah bahagian?',a:'Batang',c:['Batang','Akar','Daun','Buah'],h:'Ubi kentang ialah batang bawah tanah yang membengkak.'},
      {t:'Biji benih tumbuh menjadi pokok dipanggil?',a:'Percambahan',c:['Percambahan','Pendebungaan','Penyerapan','Pernafasan'],h:'Percambahan ialah permulaan pertumbuhan biji benih.'},
      {t:'Untuk bercambah, biji benih perlukan?',a:'Air dan udara',c:['Air dan udara','Wang','Muzik','Cahaya bulan'],h:'Air melembutkan biji dan udara membekalkan oksigen.'},
      {t:'Tumbuhan menghasilkan gas apa yang manusia perlukan?',a:'Oksigen',c:['Oksigen','Karbon dioksida','Asap','Wap'],h:'Tumbuhan membebaskan oksigen semasa membuat makanan.'}
    ],
    sederhana:[
      {t:'Kenapa pokok di dalam bilik gelap akan mati?',a:'Tiada cahaya untuk membuat makanan',c:['Tiada cahaya untuk membuat makanan','Bilik terlalu sejuk','Tiada bunyi','Terlalu banyak air'],h:'Tanpa cahaya, daun tidak dapat menghasilkan makanan.',w:W},
      {t:'Kenapa akar tumbuh ke bawah?',a:'Mencari air dan mencengkam tanah',c:['Mencari air dan mencengkam tanah','Kerana berat','Kerana gelap','Tiada sebab'],h:'Akar tumbuh ke arah air dan graviti.',w:W},
      {t:'Kenapa batang tumbuh ke atas?',a:'Mendapatkan cahaya matahari',c:['Mendapatkan cahaya matahari','Kerana ringan','Kerana angin','Tiada sebab'],h:'Tumbuhan tumbuh ke arah cahaya supaya daun dapat cahaya.',w:W},
      {t:'Apa berlaku jika tumbuhan tidak disiram lama?',a:'Ia layu dan mati',c:['Ia layu dan mati','Ia jadi lebih hijau','Ia berbunga','Tiada kesan'],h:'Air diperlukan untuk mengangkut makanan dan menegakkan sel.',w:W},
      {t:'Bagaimana air dari akar sampai ke daun?',a:'Melalui batang',c:['Melalui batang','Melalui bunga','Melalui angin','Melalui buah'],h:'Batang mengandungi saluran pengangkut air.',w:W},
      {t:'Manakah tumbuhan yang membiak melalui biji benih?',a:'Durian',c:['Durian','Pisang','Halia','Setawar'],h:'Biji dalam buah durian boleh tumbuh menjadi pokok baharu.'},
      {t:'Kenapa petani menanam biji benih dengan jarak?',a:'Setiap pokok perlu ruang, air dan cahaya',c:['Setiap pokok perlu ruang, air dan cahaya','Supaya kemas','Supaya senang jalan','Supaya nampak cantik'],h:'Pokok yang terlalu rapat berebut sumber dan tumbuh kecil.',w:W},
      {t:'Serangga membantu tumbuhan dengan?',a:'Memindahkan debunga',c:['Memindahkan debunga','Memakan daun','Menggali tanah','Membawa air'],h:'Pendebungaan diperlukan sebelum buah terbentuk.',w:W},
      {t:'Biji benih disebarkan oleh angin biasanya?',a:'Ringan dan bersayap',c:['Ringan dan bersayap','Berat dan keras','Berduri','Berair'],h:'Struktur ringan membolehkan biji terbang jauh.',w:W},
      {t:'Biji kelapa disebarkan melalui?',a:'Air',c:['Air','Angin','Api','Tanah'],h:'Kelapa terapung dan hanyut ke pantai lain.'},
      {t:'Biji berduri melekat pada bulu haiwan untuk?',a:'Disebarkan ke tempat lain',c:['Disebarkan ke tempat lain','Menyakiti haiwan','Menyerap air','Membuat makanan'],h:'Haiwan membawa biji jauh dari pokok induk.',w:W},
      {t:'Kenapa daun kebanyakan tumbuhan LEBAR dan NIPIS?',a:'Menerima lebih banyak cahaya',c:['Menerima lebih banyak cahaya','Supaya ringan','Supaya cantik','Supaya mudah gugur'],h:'Permukaan luas menangkap lebih banyak cahaya matahari.',w:W},
      {t:'Apa persamaan antara tumbuhan dan haiwan?',a:'Kedua-duanya benda hidup yang membesar',c:['Kedua-duanya benda hidup yang membesar','Kedua-duanya bergerak','Kedua-duanya bernafas dengan peparu','Kedua-duanya makan daging'],h:'Kedua-duanya membesar, membiak dan perlukan air dan udara.',w:W},
      {t:'Kenapa tumbuhan penting kepada manusia?',a:'Membekalkan makanan dan oksigen',c:['Membekalkan makanan dan oksigen','Untuk hiasan sahaja','Untuk teduhan sahaja','Tiada kepentingan'],h:'Tanpa tumbuhan, tiada oksigen dan tiada makanan.',w:W},
      {t:'Baja diberi kepada tumbuhan untuk?',a:'Menambah zat dalam tanah',c:['Menambah zat dalam tanah','Menambah air','Menambah cahaya','Membunuh serangga'],h:'Baja membekalkan garam mineral yang kurang dalam tanah.',w:W},
      {t:'Manakah BUKAN keperluan tumbuhan?',a:'Bunyi muzik',c:['Bunyi muzik','Air','Cahaya','Udara'],h:'Keperluan asas ialah air, cahaya, udara dan zat tanah.'}
    ],
    susah:[
      {t:'Kenapa tumbuhan dikatakan pengeluar dalam rantai makanan?',a:'Ia membuat makanan sendiri',c:['Ia membuat makanan sendiri','Ia paling besar','Ia paling banyak','Ia hijau'],h:'Hanya tumbuhan boleh menghasilkan makanan daripada cahaya; yang lain bergantung padanya.',w:W},
      {t:'Apa berlaku kepada semua hidupan jika tumbuhan pupus?',a:'Semua akan kehilangan makanan dan oksigen',c:['Semua akan kehilangan makanan dan oksigen','Hanya herbivor terjejas','Tiada kesan','Haiwan jadi kuat'],h:'Tumbuhan ialah asas kepada semua rantai makanan.',w:W},
      {t:'Kenapa pokok bakau ada akar yang keluar dari tanah?',a:'Untuk mendapatkan udara di tanah berair',c:['Untuk mendapatkan udara di tanah berair','Untuk cantik','Untuk menahan panas','Untuk menangkap ikan'],h:'Tanah becak kekurangan udara, jadi akar naik ke atas untuk bernafas.',w:W},
      {t:'Kenapa kaktus mempunyai daun berbentuk duri?',a:'Mengurangkan kehilangan air',c:['Mengurangkan kehilangan air','Untuk pertahanan sahaja','Untuk menangkap cahaya','Untuk menyerap air'],h:'Daun kecil mengurangkan penyejatan di kawasan panas kering.',w:W},
      {t:'Dua pokok sama, satu disiram satu tidak. Ini contoh?',a:'Penyiasatan yang adil',c:['Penyiasatan yang adil','Kesilapan','Pembaziran','Ramalan'],h:'Hanya satu pemboleh ubah diubah supaya perbandingan sah.',w:W},
      {t:'Kenapa biji benih tidak bercambah dalam tanah yang terlalu kering?',a:'Tiada air untuk melembutkan biji',c:['Tiada air untuk melembutkan biji','Terlalu banyak udara','Tanah terlalu keras','Tiada cahaya'],h:'Air ialah pencetus percambahan.',w:W},
      {t:'Kenapa biji benih boleh bercambah dalam gelap tetapi anak pokok mati kemudian?',a:'Biji ada simpanan makanan, tetapi daun perlukan cahaya',c:['Biji ada simpanan makanan, tetapi daun perlukan cahaya','Biji tidak perlu air','Gelap membunuh biji','Biji tidak bercambah langsung'],h:'Selepas simpanan habis, pokok mesti buat makanan sendiri guna cahaya.',w:W},
      {t:'Apa kelebihan biji disebarkan JAUH dari pokok induk?',a:'Kurang berebut cahaya dan air',c:['Kurang berebut cahaya dan air','Supaya nampak banyak','Supaya cepat besar','Tiada kelebihan'],h:'Anak pokok berhampiran induk akan terlindung dan kekurangan sumber.',w:W},
      {t:'Manakah menunjukkan tumbuhan BERGERAK BALAS kepada rangsangan?',a:'Pokok condong ke arah tingkap',c:['Pokok condong ke arah tingkap','Daun bertukar hijau','Batang bertambah tebal','Akar mati'],h:'Tumbuhan bergerak balas kepada cahaya walaupun tidak berpindah tempat.',w:W},
      {t:'Kenapa daun pokok di bahagian bawah selalunya lebih kecil?',a:'Ia kurang menerima cahaya',c:['Ia kurang menerima cahaya','Ia lebih tua','Ia kurang air','Ia dimakan serangga'],h:'Daun atas melindungi daun bawah daripada cahaya.',w:W},
      {t:'Apa persamaan akar dan mulut haiwan?',a:'Kedua-duanya mengambil bahan untuk hidup',c:['Kedua-duanya mengambil bahan untuk hidup','Kedua-duanya bergerak','Kedua-duanya di bawah','Kedua-duanya keras'],h:'Akar mengambil air dan mineral; mulut mengambil makanan.',w:W},
      {t:'Kenapa hutan penting untuk mengurangkan banjir?',a:'Akar pokok memegang tanah dan menyerap air',c:['Akar pokok memegang tanah dan menyerap air','Pokok menyerap awan','Daun menahan hujan','Pokok menolak air'],h:'Tanpa akar, air mengalir laju dan tanah terhakis.',w:W},
      {t:'Manakah pembiakan TANPA biji benih?',a:'Keratan batang',c:['Keratan batang','Biji durian','Biji jagung','Biji padi'],h:'Keratan batang tumbuh menjadi pokok baharu tanpa biji.',w:W},
      {t:'Kenapa petani guna keratan batang dan bukan biji untuk sesetengah pokok?',a:'Pokok baharu tumbuh lebih cepat dan sama sifat',c:['Pokok baharu tumbuh lebih cepat dan sama sifat','Lebih murah sahaja','Biji tidak wujud','Supaya senang'],h:'Keratan menghasilkan pokok serupa induk dan lebih cepat berbuah.',w:W},
      {t:'Apa hubungan antara bunga, buah dan biji?',a:'Bunga jadi buah, buah mengandungi biji',c:['Bunga jadi buah, buah mengandungi biji','Buah jadi bunga','Biji jadi bunga terus','Tiada hubungan'],h:'Selepas pendebungaan bunga membentuk buah yang melindungi biji.',w:W},
      {t:'Kenapa tumbuhan tidak perlu bergerak mencari makanan?',a:'Ia membuat makanan sendiri di tempatnya',c:['Ia membuat makanan sendiri di tempatnya','Ia tidak lapar','Ia terlalu berat','Akarnya terikat'],h:'Cahaya, air dan udara sampai kepadanya, jadi tidak perlu berpindah.',w:W}
    ]
  };
})();
