// Kandungan diambil daripada SOP Weekly Maintenance Operator Laser Machine
// (Version 1, 9.1.2025) dan SOP Yearly Maintenance Laser (Version 1, 20.3.2025).

export interface MaintenancePhoto {
  path: string
  alt: string
  caption?: string
}

export interface MaintenanceStep {
  title: string
  points: string[]
  photos?: MaintenancePhoto[]
  takePicture?: string
}

export interface MaintenanceGuideData {
  id: 'weekly' | 'yearly'
  badge: string
  title: string
  intro: string
  accentVar: string
  meta: { label: string; value: string }[]
  steps: MaintenanceStep[]
  finalTitle: string
  finalPoints: string[]
}

const IMG = 'images/maintenance/'

export const WEEKLY_GUIDE: MaintenanceGuideData = {
  id: 'weekly',
  badge: 'Setiap Sabtu',
  title: 'Weekly Maintenance',
  intro:
    'Senarai semak mingguan supaya mesin laser tahan lama. Hanya 5 minit setiap Sabtu — siapkan 3 gambar untuk report.',
  accentVar: 'var(--color-screw-3)',
  meta: [
    { label: 'Bila', value: 'Setiap Sabtu' },
    { label: 'Masa', value: '±5 minit' },
    { label: 'Siapa', value: 'Production Team' },
  ],
  steps: [
    {
      title: 'Water Chiller — bersihkan filter',
      points: [
        'Buka penutup dan bersihkan filter penapis udara chiller.',
        'Pastikan habuk dibuang sepenuhnya sebelum pasang semula.',
      ],
      photos: [
        { path: `${IMG}chiller.jpg`, alt: 'Water chiller CW-5000' },
        {
          path: `${IMG}chiller-filter.jpg`,
          alt: 'Filter chiller sedang dibersihkan',
          caption: 'Contoh: Pic 1 — filter chiller',
        },
      ],
      takePicture: 'Pic 1 — gambar filter chiller',
    },
    {
      title: 'Extractor Udara — bersihkan kipas',
      points: [
        'Buka dan bersihkan kipas extractor.',
        'Buka kipas berhati-hati supaya blade tidak rosak.',
      ],
      photos: [{ path: `${IMG}extractor-fan.jpg`, alt: 'Kipas extractor udara' }],
    },
    {
      title: 'Compressor — buang air',
      points: ['Buang air dalam tangki compressor sehingga habis.'],
      photos: [{ path: `${IMG}compressor.jpg`, alt: 'Compressor udara' }],
    },
    {
      title: 'Compressor — semak / tukar minyak',
      points: [
        'Tukar minyak compressor 2 kali sebulan.',
        'Semak paras minyak pada tingkap penglihat (sight glass).',
      ],
      photos: [
        {
          path: `${IMG}oil-level.jpg`,
          alt: 'Tingkap paras minyak compressor',
          caption: 'Contoh: Pic 2 — oil level',
        },
      ],
      takePicture: 'Pic 2 — gambar oil level',
    },
    {
      title: 'Sapu / vacuum kawasan kerja',
      points: ['Sapu atau vacuum lantai office dan kawasan mesin.'],
      photos: [
        {
          path: `${IMG}workplace.jpg`,
          alt: 'Kawasan kerja yang telah dibersihkan',
          caption: 'Contoh: Pic 3 — workplace',
        },
      ],
      takePicture: 'Pic 3 — gambar workplace',
    },
  ],
  finalTitle: 'Hantar Report ke WhatsApp Boss',
  finalPoints: [
    'Pic 1 — filter chiller yang telah dibersihkan',
    'Pic 2 — paras minyak (oil level) compressor',
    'Pic 3 — kawasan kerja (workplace) yang telah disapu',
  ],
}

export const YEARLY_GUIDE: MaintenanceGuideData = {
  id: 'yearly',
  badge: 'Ikut Jadual Kalendar',
  title: 'Yearly Maintenance',
  intro:
    'Penyelenggaraan berkala untuk jangka hayat mesin yang lebih lama. Dijadualkan dalam Google Calendar — peruntukkan 1 jam untuk setiap mesin.',
  accentVar: 'var(--color-near)',
  meta: [
    { label: 'Bila', value: 'Ikut jadual Google Calendar' },
    { label: 'Masa', value: '1 jam / 1 mesin' },
    { label: 'Siapa', value: 'Production Team' },
  ],
  steps: [
    {
      title: 'Power Supply Laser Tube',
      points: [
        'Buka casing dan bersihkan bahagian dalam.',
        'Guna berus plastik + vacuum.',
        'Ubah terminal negatif dengan memasang connector block (TB 1503) supaya mudah maintenance akan datang.',
      ],
      photos: [
        { path: `${IMG}psu-laser-tube.jpg`, alt: 'Power supply laser tube' },
        {
          path: `${IMG}tb1503.jpg`,
          alt: 'Connector block TB 1503',
          caption: 'Connector block TB 1503',
        },
      ],
    },
    {
      title: 'Power Supply 24V / 36V',
      points: ['Buka casing dan bersihkan bahagian dalam.', 'Guna berus plastik + vacuum.'],
      photos: [{ path: `${IMG}psu-24v.jpg`, alt: 'Power supply 24V/36V' }],
    },
    {
      title: 'Chiller — tukar air',
      points: ['Buang air sehingga habis.', 'Isi dengan air baru.'],
      photos: [{ path: `${IMG}chiller.jpg`, alt: 'Water chiller' }],
    },
    {
      title: 'Laser Tube — cuci lens',
      points: ['Cuci lens pada laser tube dengan berhati-hati.'],
      photos: [{ path: `${IMG}laser-tube.jpg`, alt: 'Laser tube' }],
    },
    {
      title: 'Mesin Laser — vacuum wayar',
      points: ['Vacuum di bahagian wayar untuk kurangkan habuk.'],
      photos: [
        {
          path: `${IMG}brush.jpg`,
          alt: 'Berus plastik',
          caption: 'Guna berus plastik bersama vacuum',
        },
      ],
    },
  ],
  finalTitle: 'Selesai — rekod dalam kalendar',
  finalPoints: [
    'Tandakan tarikh siap dalam Google Calendar.',
    'Set peringatan untuk sesi maintenance berikutnya.',
  ],
}
