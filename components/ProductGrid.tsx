import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-ink">Ürün bulunamadı</h2>
        <p className="mt-2 text-sm text-slate-600">
          Arama kriterinizi değiştirerek tekrar deneyebilir veya doğrudan teklif için bizimle iletişime geçebilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
