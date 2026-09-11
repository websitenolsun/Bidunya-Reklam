export type CategorySlug =
  | "madalyalar"
  | "kupalar"
  | "plaketler"
  | "plaketler/album"
  | "plaketler/ahsap"
  | "plaketler/cam"
  | "tabaklar"
  | "tabaklar/cini"
  | "tabaklar/islemeli"
  | "isimlik"
  | "masa-isimlik"
  | "yaka-isimlik"
  | "rozetler"
  | "bayraklar";

export type Category = {
  slug: CategorySlug;
  title: string;
  menuTitle?: string;
  parent: string;
  description: string;
  bottomDescription: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  aggregate?: boolean;
};

export type NavigationItem = {
  slug: string;
  title: string;
  children?: Array<{ slug: CategorySlug; title: string }>;
};

export type NavigationGroup = {
  slug: string;
  title: string;
  items: Array<{ slug: CategorySlug; title: string }>;
};

const makeCategory = (
  slug: CategorySlug,
  title: string,
  parent: string,
  description: string,
  image: string,
  featured = false,
  aggregate = false,
): Category => ({
  slug,
  title,
  parent,
  description,
  bottomDescription: `${title}; kurumsal törenler, etkinlikler ve özel sunumlar için logo, isim ve mesaj uygulamalarıyla hazırlanabilir. Ürün kodunu paylaşarak adet ve teslim tarihi için hızlı teklif alabilirsiniz.`,
  seoTitle: `${title} Modelleri | BİDÜNYA REKLAM`,
  seoDescription: `${title} modellerini inceleyin. Kurumsal ve toplu siparişler için ürün koduyla hızlı teklif alın.`,
  image,
  imageAlt: `${title} ürün örneği`,
  featured,
  aggregate,
});

export const categories: Category[] = [
  makeCategory(
    "madalyalar",
    "Madalyalar",
    "madalyalar",
    "Spor turnuvaları, okul etkinlikleri ve kurumsal organizasyonlar için madalya modelleri.",
    "/images/catalog/madalyalar/5.webp",
    true,
  ),
  makeCategory(
    "kupalar",
    "Kupalar",
    "kupalar",
    "Turnuva, okul ve kurumsal ödül törenleri için farklı boy ve tasarımlarda kupa modelleri.",
    "/images/catalog/kupalar/4.webp",
    true,
  ),
  makeCategory(
    "plaketler",
    "Plaketler",
    "plaketler",
    "Albüm, ahşap ve cam plaket koleksiyonlarının tamamını bir arada inceleyin.",
    "/images/catalog/plaketler/album/1.webp",
    true,
    true,
  ),
  makeCategory(
    "plaketler/album",
    "Albüm Plaketler",
    "plaketler",
    "Resmî takdimler ve kurumsal sunumlar için albüm formunda plaket modelleri.",
    "/images/catalog/plaketler/album/1.webp",
  ),
  makeCategory(
    "plaketler/ahsap",
    "Ahşap Plaketler",
    "plaketler",
    "Klasik ve kurumsal sunumlar için farklı formlarda ahşap plaket modelleri.",
    "/images/catalog/plaketler/ahsap/1.webp",
  ),
  makeCategory(
    "plaketler/cam",
    "Cam Plaketler",
    "plaketler",
    "Başarı, teşekkür ve anma törenleri için modern cam plaket modelleri.",
    "/images/catalog/plaketler/cam/1.webp",
  ),
  makeCategory(
    "tabaklar",
    "Tabaklar",
    "tabaklar",
    "Çini ve işlemeli dekoratif ödül tabaklarının tamamını bir arada inceleyin.",
    "/images/catalog/tabaklar/islemeli/11.webp",
    true,
    true,
  ),
  makeCategory(
    "tabaklar/cini",
    "Çini Tabaklar",
    "tabaklar",
    "Geleneksel desenleri kurumsal sunumlarla buluşturan çini tabak modelleri.",
    "/images/catalog/tabaklar/cini/1.webp",
  ),
  makeCategory(
    "tabaklar/islemeli",
    "İşlemeli Tabaklar",
    "tabaklar",
    "Dekoratif detaylara sahip işlemeli ödül ve sunum tabağı modelleri.",
    "/images/catalog/tabaklar/islemeli/1.webp",
  ),
  makeCategory(
    "isimlik",
    "İsimlik",
    "isimlik",
    "Masa ve yaka isimlik modellerinin tamamını bir arada inceleyin.",
    "/images/catalog/masa-isimlik/1.webp",
    true,
    true,
  ),
  makeCategory(
    "masa-isimlik",
    "Masa İsimlik",
    "isimlik",
    "Ofis, resepsiyon ve toplantı alanları için masa üstü isimlik modelleri.",
    "/images/catalog/masa-isimlik/1.webp",
  ),
  makeCategory(
    "yaka-isimlik",
    "Yaka İsimlik",
    "isimlik",
    "Personel, etkinlik ve kurumsal organizasyonlar için yaka isimlik modelleri.",
    "/images/catalog/yaka-isimlik/1.webp",
  ),
  makeCategory(
    "rozetler",
    "Rozetler",
    "rozetler",
    "Kurum, dernek ve etkinlikler için farklı formlarda yaka rozeti modelleri.",
    "/images/catalog/rozetler/3.webp",
    true,
  ),
  makeCategory(
    "bayraklar",
    "Bayraklar",
    "bayraklar",
    "Ofis, makam ve kurumsal çalışma alanları için Türk bayraklı masa isimliği modelleri.",
    "/images/catalog/bayraklar/1.jpg",
    true,
  ),
];

export const navigationItems: NavigationItem[] = [
  { slug: "madalyalar", title: "Madalyalar" },
  { slug: "kupalar", title: "Kupalar" },
  {
    slug: "plaketler",
    title: "Plaketler",
    children: [
      { slug: "plaketler/album", title: "Albüm Plaketler" },
      { slug: "plaketler/ahsap", title: "Ahşap Plaketler" },
      { slug: "plaketler/cam", title: "Cam Plaketler" },
    ],
  },
  {
    slug: "tabaklar",
    title: "Tabaklar",
    children: [
      { slug: "tabaklar/cini", title: "Çini Tabaklar" },
      { slug: "tabaklar/islemeli", title: "İşlemeli Tabaklar" },
    ],
  },
  {
    slug: "isimlik",
    title: "İsimlik",
    children: [
      { slug: "masa-isimlik", title: "Masa İsimlik" },
      { slug: "yaka-isimlik", title: "Yaka İsimlik" },
    ],
  },
  { slug: "rozetler", title: "Rozetler" },
  { slug: "bayraklar", title: "Bayraklar" },
];

export const navigationGroups: NavigationGroup[] = navigationItems.map((item) => ({
  slug: item.slug,
  title: item.title,
  items: item.children ?? [{ slug: item.slug as CategorySlug, title: item.title }],
}));

export const corporateLinks = [
  { slug: "hakkimizda", title: "Hakkımızda" },
  { slug: "referanslar", title: "Referanslar" },
  { slug: "iletisim", title: "İletişim" },
];

export function getCategoryBySlug(slug: string) {
  const normalizedSlug = slug.replace(/^\/|\/$/g, "");
  return categories.find((category) => category.slug === normalizedSlug);
}

export function getFeaturedCategories() {
  return categories.filter((category) => category.featured);
}
