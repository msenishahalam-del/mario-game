import { ArrowLeft, ExternalLink, ShoppingBag } from 'lucide-react'
import { SHOP_NAME, SHOP_PRODUCTS, SHOP_URL } from '../data/shop'

export const ShopPage = () => (
  <div className="min-h-screen bg-canvas">
    <div className="mx-auto flex w-full max-w-[560px] flex-col gap-4 px-4 py-5 sm:py-8">
      <a
        href="#/"
        className="inline-flex w-fit min-h-11 items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-muted transition-colors hover:bg-white hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Utama
      </a>

      <header className="card flex items-center gap-4 p-4 sm:p-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fdf3e8]">
          <ShoppingBag className="h-7 w-7 text-[#e07514]" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h1 className="text-lg font-bold text-ink sm:text-xl">
            Kedai {SHOP_NAME}
          </h1>
          <p className="text-sm text-muted">
            Barang keperluan kerja laser — klik untuk beli di Shopee.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {SHOP_PRODUCTS.map((product) => (
          <a
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col gap-3 p-3 transition-transform hover:-translate-y-0.5 sm:p-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}${product.image}`}
              alt={product.imageAlt}
              loading="lazy"
              className="aspect-square w-full rounded-xl border border-line bg-white object-cover"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-bold text-ink sm:text-base">
                {product.name}
              </h2>
              <p className="mt-0.5 text-xs text-muted sm:text-sm">
                {product.description}
              </p>
            </div>
            <span className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-[#e07514] px-3 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-[#c76409] sm:text-sm">
              Beli di Shopee
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>

      <a
        href={SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-2xl border border-[#f6ddc0] bg-[#fdf3e8] p-4 text-sm font-semibold text-[#a3540b] transition-colors hover:bg-[#fbe9d4]"
      >
        <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        Lawati kedai penuh kami di Shopee
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>

      <p className="pb-4 text-center text-xs text-muted">
        Link akan membuka kedai Shopee {SHOP_NAME} dalam tab baharu.
      </p>
    </div>
  </div>
)
