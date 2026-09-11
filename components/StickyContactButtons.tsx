import { siteConfig, whatsappHref } from "@/data/site";

export function StickyContactButtons() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/20 bg-white p-2 shadow-[0_-10px_30px_rgba(18,24,63,0.12)] md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Telefon
      </a>
      <a
        href={whatsappHref("Merhaba, ürünleriniz hakkında teklif almak istiyorum.")}
        className="ml-2 rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-slate-950"
      >
        WhatsApp
      </a>
    </div>
  );
}
