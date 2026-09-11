export const siteConfig = {
  name: "BİDÜNYA REKLAM",
  legalName: "BİDÜNYA REKLAM",
  logoSrc: "/images/logo-kare-1200.webp",
  logoAlt: "BİDÜNYA Reklam logosu",
  description:
    "Plaket, madalya, ödül kupası, yaka isimliği, rozet ve özel tasarım reklam ürünleri için kurumsal katalog ve hızlı teklif merkezi.",
  url: "https://www.bidunyareklam.com.tr",
  phone: "0538 983 14 90",
  phoneHref: "tel:+905389831490",
  whatsapp: "0538 983 14 90",
  whatsappNumber: "905389831490",
  email: "info@bidunyareklam.com",
  emailHref: "mailto:info@bidunyareklam.com",
  address: "Halkalı Merkez, Maslak Çeşme Cd. NO:231/A, 34295 Küçükçekmece/İstanbul",
  workingHours: "Pazartesi - Cumartesi 09:00 - 18:30",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export function whatsappHref(text: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function quoteText(subject: string) {
  return `Merhaba, ${subject} hakkında teklif almak istiyorum.`;
}
