# 🎮 JALAN CERITA: "EDRIS WIRA PULAU PELANGI"
### Game platformer (genre macam Mario) — idea Edris (6 tahun) + tambahan AI

> **Nota penting untuk pembuat:** Semua watak & dunia adalah **ORIGINAL** (bukan Mario/Peach/Bowser Nintendo, bukan aset berhak cipta). Cuma *jenis permainan* (platformer 2D: lari, lompat, bos) yang macam Mario. Kekalkan ia original. Muzik mesti **chiptune ciptaan sendiri**, bukan lagu berhak cipta.
>
> Enjin rujukan: `marioterhebat.html` (platformer paling lengkap dalam repo ini).

---

## 🌈 PREMIS (Cerita Besar)
**Pulau Pelangi** aman dijaga oleh **4 Batu Ajaib** (Batu Api, Batu Air, Batu Hutan, Batu Pelangi). Suatu hari, penjahat besar **RAJA GERGASI** dan tentera raksasanya menyerbu — mereka **curi Batu Ajaib** dan **culik Enisa** (adik/kakak Edris) untuk memancing Edris keluar.

**Matlamat Edris:** merentasi **4 dunia**, kalahkan **bos penjaga** di setiap dunia, rampas balik Batu Ajaib, dan akhirnya **selamatkan Enisa** dari kubu Raja Gergasi.

*(Personalisasi: hero = **Edris**, yang diselamatkan = **Enisa** — nama dua anak.)*

---

## 👦 WATAK (semua original)
- **EDRIS** — hero, budak berani bertopi merah, ceria & tak putus asa.
- **ENISA** — adik Edris yang diculik. Ditemui dalam sangkar di kubu akhir.
- **RAJA GERGASI** — penjahat utama. Raksasa gergasi tamak. Bos akhir (Level 4).
- **SI COMEL** — dino comel kawan Edris; boleh **ditunggang** (Level 3).
- **3 Bos Penjaga:** Gergasi Api, Ular Laut, Raja Monyet.

---

## 🎬 CUTSCENE PEMBUKAAN
Kampung Pulau Pelangi ceria → raksasa Raja Gergasi menyerbu, rampas 4 Batu Ajaib → Raja Gergasi sambar **Enisa** ("TOLONG, EDRIS!") → Edris berazam: *"Aku akan selamatkan Enisa & Pulau Pelangi!"* → mula Level 1. *(Guna sistem cutscene sedia ada.)*

---

## 🔥 LEVEL 1 — DUNIA API
**Cerita:** Edris masuk tanah gunung berapi. Batu Api dicuri, tanah membara. Dijaga **Gergasi Api**.

**Gameplay:**
- 🔴 **Pipe menyembur bola api** berkala — lompat/elak *(idea Edris)*.
- 🌋 Kolam **lava** & lubang (pit) — lompat platform batu.
- 👹 Musuh: **Api Kecil** (raksasa kecil api) berjalan ke arah Edris *(idea Edris)*.
- ➕ *Tambahan AI:* **Bunga Ais** ❄️ power-up di sini — ais lawan api.

**BOS: GERGASI API** 🔥 — tembak bola api + lompat-hentak (gegaran + bola api tersebar). Mengganas separuh nyawa → 4-arah laju. Kalahkan: pijak kepala bila terdedah / balingan ais-api, 3-4 kali. → **BATU API** 🔴.

**Beat:** Api reda. Enisa dibawa ke **laut**.

---

## 🌊 LEVEL 2 — DUNIA LAUT (OMBAK/TSUNAMI)
**Cerita:** Edris sampai pantai. Raksasa laut kejutkan ombak besar.

**Gameplay:**
- 🌊 **TSUNAMI datang berkala** — dinding ombak masuk; lompat ke platform tinggi elak *(idea Edris — mekanik BAHARU)*.
- 🪨 Batu & platform terapung (lubang air = mati).
- 🐡 Musuh laut kecil.
- ➕ *Tambahan AI:* **tong terapung** untuk lompat tinggi; amaran "⚠️ OMBAK DATANG!" berkelip dulu.

**BOS: ULAR LAUT** 🐍🌊 — menyelam, timbul kepala (masa itu boleh pijak/baling), panggil ombak + bebola air. Mengganas → ombak kerap & laju. Kalahkan 4 kali. → **BATU AIR** 🔵.

**Beat:** Laut tenang. Menuju **hutan gelap**.

---

## 🌳 LEVEL 3 — DUNIA HUTAN
**Cerita:** Edris redah hutan tebal dijaga Raja Monyet nakal.

**Gameplay:**
- 🌲 **Pokok/kayu tumbang** — elak bila jatuh *(idea Edris — mekanik BAHARU: objek jatuh)*.
- 🐒 **Monyet baling pisang** *(idea Edris — musuh baling projektil)*.
- 🍌 *Tambahan AI:* **kulit pisang** licin (terpijak = tergelincir sekejap).
- 🦖 *Tambahan AI:* jumpa **Si Comel** (dino) — **tunggang** untuk lompat jauh & flutter *(mount sedia ada)*.

**BOS: RAJA MONYET** 🦍 — baling kelapa besar, goncang arena (kelapa jatuh), lompat-hentak. Mengganas → laju & banyak. Kalahkan 4 kali. → **BATU HUTAN** 🟢.
➕ *Twist manis:* Raja Monyet kalah jadi **kawan**, tunjuk jalan ke kubu. Edris jumpa **reben Enisa** — dia dekat!

**Beat:** "Raja Monyet jadi kawan! Kubu Raja Gergasi di depan — Enisa dekat!"

---

## 🌉 LEVEL 4 — KUBU AIR RAJA GERGASI (AKHIR)
**Cerita:** Edris tiba kubu paya Raja Gergasi. Enisa dikurung di hujung.

**Gameplay:**
- 🌉 **Banyak jambatan** merentas air gelap *(idea Edris — mekanik BAHARU)*.
- 🐟 **Ikan melompat keluar pipe** untuk tolak Edris jatuh *(idea Edris — variasi piranha melompat)*.
- 💧 Lubang air (jatuh = mati).
- ➕ *Tambahan AI:* 3 Batu Ajaib **bersinar** menunjuk jalan; sesetengah jambatan reput (lari cepat sebelum runtuh).

**BOS AKHIR: RAJA GERGASI** 👹👑 — berbilang fasa: tembak projektil, lompat-hentak (buat ikan melompat), runtuhkan jambatan. Mengganas teruk bila nyawa rendah. Kalahkan 5-7 kali dgn power-up. → **bebaskan ENISA** 🎉.

---

## 🎬 CUTSCENE PENAMAT
Sangkar pecah → Edris & Enisa berpelukan → 4 Batu Ajaib bersinar memulihkan Pulau Pelangi (api reda, laut tenang, hutan hijau, pelangi muncul) → sambutan → **"TAMAT — EDRIS WIRA PULAU PELANGI!"** 👑🌈

---

## ✨ POWER-UP (enjin sedia ada)
🍄 Buah Ajaib → besar · 🌻 Bunga Api → baling api · ❄️ Bunga Ais → baling ais (best di Dunia Api) · ⭐ Bintang → kebal · 🦖 Si Comel (tunggang, Hutan).

## 💬 BEAT ANTARA LEVEL (teks overlay masa "clear")
- Lepas L1: "Batu Api selamat! Enisa dibawa ke laut… 🌊"
- Lepas L2: "Ombak reda! Jejak menuju hutan gelap… 🌳"
- Lepas L3: "Raja Monyet jadi kawan! Kubu di depan — Enisa dekat! 🌉"

## 😊 NADA
Mesra 6 tahun: warna cerah, raksasa comel (tak menakutkan), matlamat jelas, penuh galakan. Setiap bos boleh dikalahkan dengan lompat + power-up.

---

## 🔧 NOTA LAKSANA (dari semakan enjin `marioterhebat.html`)
- **Guna semula terus:** lari/lompat, power-up (besar/api/ais/bintang), fireball, piranha-dari-pipe, lava+pit, enjin bos berbilang-fasa (mengganas), mount Si Comel (Yoshi), cutscene intro/ending + beat antara level, tema (day/ice/castle/yoshi jadi asas).
- **Adaptasi mudah:** pipe-tembak-api (guna `fireT` bos pada pipe), monyet-baling-pisang (musuh berjalan + pemasa baling), ikan-dari-pipe (variasi piranha + lompat graviti), 4 bos (data + art atas enjin sedia ada).
- **Baharu:** ombak/tsunami bergerak-naik (L2), objek jatuh — kayu/kelapa (L3), jambatan & tema/latar air (L2/L4).

---

## 🚀 CADANGAN NAIK TARAF (Improvement)

### 🎵 Audio & Muzik
- **Muzik latar (BGM)** — chiptune **ORIGINAL** (WebAudio sendiri, **bukan lagu berhak cipta**), satu tema setiap dunia (Api rancak, Laut tenang, Hutan ceria, Kubu menegangkan) + **tema lawan bos** lebih rancak. Butang senyap 🔊 sedia ada.
- **Jingle** original: menang level, dapat Batu Ajaib, game over, selamatkan Enisa.
- **Isyarat bunyi bahaya** — amaran sebelum tsunami, "desis" pipe sebelum tembak api, "krak" sebelum pokok tumbang.

### 🧒 Mesra 6 Tahun & Simpan Kemajuan (KEUTAMAAN)
- **Checkpoint** (bendera tengah level) — mati tak ulang dari mula.
- **Peta Dunia / pilih level** — tunjuk dunia siap + bintang.
- **Simpan kemajuan** (localStorage) — level terbuka, bintang terbaik, sambung semula.
- **Mod mudah** — Edris lebih hati ❤️, musuh perlahan sikit (boleh diselaras ikut anak).
- **Bintang penilaian** setiap level (1-3 ⭐) — boleh dilog ke **Laporan ibu bapa** (`laporan.html`).

### ✨ "Juice" / Polish
- Kesan zarah, kilauan coin, **kilat putih** bila bos kena, **confetti** habis level (skrin gegar sedia ada).
- **Ekspresi watak** — Edris gembira/terkejut/cedera.
- **Gelembung dialog** bos (cth *"Gergasi Api: Kamu takkan lepas!"*).
- **Combo/skor** pijak beberapa musuh berturut.

### 🏆 Ulang Main
- **Kumpul barang tersembunyi** (buah/permata) setiap level.
- **Pencapaian (badge)** — "Kalah semua bos", "Kumpul semua bintang", "Habis tanpa mati".
- **Kostum/topi** Edris buka kunci.

### 📚 Sentuhan Pendidikan
- Kira coin (nombor), kenal unsur & warna (api/air/hutan/pelangi), papan tanda perkataan BM di latar.
- (Pilihan) huruf tersembunyi eja **"E-D-R-I-S"** sepanjang 4 level.

> **Buat dulu (paling beri kesan untuk 6 tahun):** 🎵 Muzik latar · 🚩 Checkpoint · 💾 Simpan kemajuan · 😊 Mod mudah. Selebihnya bonus.

---
*Draf jalan cerita + cadangan. Boleh ubah nama/level/twist atau pilih improvement mana dulu — beritahu sahaja.*
