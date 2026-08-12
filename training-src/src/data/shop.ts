// Produk kedai Shopee LCM Supplies.
// Untuk tambah produk baharu: tambah satu entri di sini (gambar dalam
// training/images/shop/) dan build semula.

export const SHOP_URL = 'https://shopee.com.my/lcmsupplies'
export const SHOP_NAME = 'LCM Supplies'

export interface ShopProduct {
  name: string
  description: string
  image: string
  imageAlt: string
  url: string
}

const IMG = 'images/shop/'

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    name: 'Double Tape',
    description:
      'Pita pelekat dua muka — kemas dan kuat untuk tampal acrylic, kayu dan hasil potongan laser.',
    image: `${IMG}double-tape.svg`,
    imageAlt: 'Gulung double tape',
    url: SHOP_URL,
  },
  {
    name: 'Lanyard',
    description:
      'Lanyard berkualiti untuk tag nama, event dan pas pekerja — sesuai digandingkan dengan tag potongan laser.',
    image: `${IMG}lanyard.svg`,
    imageAlt: 'Lanyard dengan klip dan tag nama',
    url: SHOP_URL,
  },
]
