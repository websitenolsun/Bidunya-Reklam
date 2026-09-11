import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryContentBlocks } from "@/components/CategoryContentBlocks";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import { tr } from "@/lib/turkish";

type CategoryPageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug.split("/") }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug.join("/"));

  if (!category) {
    return {};
  }

  return {
    title: tr(category.seoTitle),
    description: tr(category.seoDescription),
    alternates: { canonical: `/${category.slug}` },
    openGraph: {
      title: tr(category.seoTitle),
      description: tr(category.seoDescription),
      url: absoluteUrl(`/${category.slug}`),
      type: "website",
      images: [
        {
          url: absoluteUrl(category.image),
          width: 1200,
          height: 1200,
          alt: tr(category.imageAlt),
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categorySlug = slug.join("/");
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);
  const parentCategory =
    category.parent !== category.slug ? getCategoryBySlug(category.parent) : null;
  const breadcrumbItems = [
    ...(parentCategory
      ? [{ label: tr(parentCategory.title), href: `/${parentCategory.slug}` }]
      : []),
    { label: tr(category.title) },
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url,
      },
      ...(parentCategory
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: tr(parentCategory.title),
              item: absoluteUrl(`/${parentCategory.slug}`),
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: parentCategory ? 3 : 2,
        name: tr(category.title),
        item: absoluteUrl(`/${category.slug}`),
      },
    ],
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: tr(category.title),
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: tr(product.title),
        sku: product.code,
        image: absoluteUrl(product.image),
        description: tr(product.shortDescription),
        category: tr(category.title),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="bg-[linear-gradient(180deg,#f7fafc,#ffffff)] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-skybrand">Kategori Kataloğu</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{tr(category.title)}</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{tr(category.description)}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Listelenen ürün sayısı</p>
              <p className="mt-1 text-4xl font-semibold text-ink">{products.length}</p>
              <p className="mt-2 text-sm text-slate-600">
                Ürün kodunu WhatsApp üzerinden paylaşarak hızlı teklif alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{tr(category.title)} hakkında</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{tr(category.bottomDescription)}</p>
        </div>
      </section>

      <CategoryContentBlocks category={category} productCount={products.length} />

      <CTASection
        title={`${tr(category.title)} için hızlı teklif alın`}
        whatsappText={`Merhaba, ${tr(category.title)} kategorisindeki ürünler hakkında teklif almak istiyorum.`}
      />
    </>
  );
}
