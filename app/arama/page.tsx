import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { searchProducts } from "@/data/products";

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export const metadata: Metadata = {
  title: "Ürün Arama",
  description:
    "Ürün adı, ürün kodu veya kategoriye göre madalya, kupa, plaket, kristal ödül, yaka isimlik ve etiket araması yapın.",
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params?.q?.trim() ?? "";
  const results = searchProducts(query);

  return (
    <>
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Arama" }]} />
          <div className="mt-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-skybrand">Katalog arama</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {query ? `"${query}" arama sonuçları` : "Ürün arama"}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Ürün kodu, ürün adı, kategori veya malzeme bilgisine göre katalog içinde arama yapabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {query ? (
            <p className="mb-6 text-sm font-semibold text-slate-600">{results.length} ürün bulundu.</p>
          ) : (
            <p className="mb-6 rounded-xl border border-line bg-mist p-5 text-sm font-semibold text-slate-600">
              Arama yapmak için üst menüdeki arama alanına ürün kodu veya kategori yazın.
            </p>
          )}
          <ProductGrid products={results} />
        </div>
      </section>

      <CTASection title="Aradığınız ürünü bulamadınız mı?" />
    </>
  );
}
