import type { CategorySlug } from "@/data/categories";

export type Product = {
  id: string;
  code: string;
  title: string;
  category: CategorySlug;
  parentCategory: string;
  image: string;
  imageAlt: string;
  specs: {
    height: string | null;
    color: string | null;
    material: string | null;
    size: string | null;
  };
  shortDescription: string;
  whatsappText: string;
  featured?: boolean;
  bestSeller?: boolean;
};

type CatalogDefinition = {
  slug: CategorySlug;
  title: string;
  codePrefix: string;
  imageCount: number;
  parentCategory?: string;
  imageExtension?: "jpg" | "jpeg" | "webp";
  imageFiles?: string[];
};

// Yeni görseller eklendiğinde ilgili klasöre sıralı .webp dosyalarını koyup
// yalnızca imageCount değerini güncellemek yeterlidir.
export const catalogDefinitions: CatalogDefinition[] = [
  { slug: "madalyalar", title: "Madalya", codePrefix: "MAD", imageCount: 10 },
  { slug: "kupalar", title: "Kupa", codePrefix: "KUP", imageCount: 23 },
  {
    slug: "plaketler/album",
    title: "Albüm Plaket",
    codePrefix: "ALB",
    imageCount: 3,
    parentCategory: "plaketler",
    imageFiles: ["1.webp", "3.webp", "4.webp"],
  },
  { slug: "plaketler/ahsap", title: "Ahşap Plaket", codePrefix: "AHS", imageCount: 7, parentCategory: "plaketler" },
  { slug: "plaketler/cam", title: "Cam Plaket", codePrefix: "CAM", imageCount: 9, parentCategory: "plaketler" },
  { slug: "tabaklar/cini", title: "Çini Tabak", codePrefix: "CIN", imageCount: 12, parentCategory: "tabaklar" },
  { slug: "tabaklar/islemeli", title: "İşlemeli Tabak", codePrefix: "ISL", imageCount: 14, parentCategory: "tabaklar" },
  { slug: "masa-isimlik", title: "Masa İsimlik", codePrefix: "MSI", imageCount: 7, parentCategory: "isimlik" },
  { slug: "yaka-isimlik", title: "Yaka İsimlik", codePrefix: "YIS", imageCount: 2, parentCategory: "isimlik" },
  { slug: "rozetler", title: "Yaka Rozeti", codePrefix: "ROZ", imageCount: 10 },
  { slug: "bayraklar", title: "Türk Bayraklı Masa İsimliği", codePrefix: "BYR", imageCount: 5, imageExtension: "jpg" },
];

const productImageOverrides: Record<string, string> = {
  "KUP-007": "/images/catalog/kupalar/7-revize.webp",
  "KUP-009": "/images/catalog/kupalar/9-revize.webp",
  "MSI-005": "/images/catalog/masa-isimlik/5.jpeg",
  "MSI-006": "/images/catalog/masa-isimlik/6.jpeg",
  "MSI-007": "/images/catalog/masa-isimlik/7.jpeg",
};

export const products: Product[] = catalogDefinitions.flatMap((catalog) =>
  Array.from({ length: catalog.imageCount }, (_, index) => {
    const number = index + 1;
    const code = `${catalog.codePrefix}-${String(number).padStart(3, "0")}`;
    const image =
      productImageOverrides[code] ??
      `/images/catalog/${catalog.slug}/${
        catalog.imageFiles?.[index] ?? `${number}.${catalog.imageExtension ?? "webp"}`
      }`;

    return {
      id: `${catalog.slug.replaceAll("/", "-")}-${number}`,
      code,
      title: `${catalog.title} Modeli ${number}`,
      category: catalog.slug,
      parentCategory: catalog.parentCategory ?? catalog.slug,
      image,
      imageAlt: `${code} kodlu ${catalog.title.toLocaleLowerCase("tr-TR")} modeli`,
      specs: {
        height: null,
        color: null,
        material: null,
        size: null,
      },
      shortDescription: `${catalog.title} koleksiyonunda yer alan ${code} kodlu ürün modeli.`,
      whatsappText: `Merhaba, ${code} ürün kodlu ${catalog.title.toLocaleLowerCase("tr-TR")} hakkında bilgi ve fiyat almak istiyorum.`,
      featured: number <= 2,
      bestSeller: catalog.slug === "kupalar" && number === 1,
    };
  }),
);

export function getProductsByCategory(slug: string) {
  const normalizedSlug = slug.replace(/^\/|\/$/g, "");

  return products.filter(
    (product) =>
      product.category === normalizedSlug ||
      product.category.startsWith(`${normalizedSlug}/`) ||
      product.parentCategory === normalizedSlug,
  );
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((product) => product.featured).slice(0, limit);
}

export function getProductByCode(code: string) {
  return products.find((product) => product.code === code);
}

export function getBestSellerProduct() {
  return products.find((product) => product.bestSeller) ?? products[0];
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLocaleLowerCase("tr-TR");

  if (!normalized) {
    return [];
  }

  return products.filter((product) => {
    const haystack = [
      product.code,
      product.title,
      product.category,
      product.parentCategory,
      product.shortDescription,
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    return haystack.includes(normalized);
  });
}
