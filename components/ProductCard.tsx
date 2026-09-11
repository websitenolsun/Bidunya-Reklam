import type { Product } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { whatsappHref } from "@/data/site";
import { formatSpec } from "@/lib/utils";
import { tr } from "@/lib/turkish";

export function ProductCard({ product }: { product: Product }) {
  const specs = [
    formatSpec("Ölçü", product.specs.height ?? product.specs.size),
    formatSpec("Renk", product.specs.color),
    formatSpec("Malzeme", product.specs.material),
  ].filter(Boolean);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)]">
      <div className="relative aspect-square bg-gradient-to-br from-[#fbfaf6] to-[#f4ead2] p-6">
        <ProductImage
          src={product.image}
          alt={tr(product.imageAlt)}
          code={product.code}
          fit={product.category === "bayraklar" ? "contain" : "cover"}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 pb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Ürün kodu: {product.code}</p>
        <h3 className="mt-3 font-display text-xl font-medium leading-snug text-slate-950">{tr(product.title)}</h3>
        <p className="mt-3 line-clamp-3 text-sm font-light leading-6 text-slate-600">{tr(product.shortDescription)}</p>

        <dl className="mb-3 mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
          {specs.map((spec) => (
            <div key={spec} className="rounded-sm bg-[#f8f5ee] px-3 py-2 ring-1 ring-[#eee2c8]">
              {tr(spec)}
            </div>
          ))}
        </dl>

        <a
          href={whatsappHref(tr(product.whatsappText))}
          className="mt-auto block rounded-md bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          WhatsApp ile Teklif Al
        </a>
      </div>
    </article>
  );
}
