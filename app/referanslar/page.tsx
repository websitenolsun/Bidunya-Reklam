import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Okullar, spor kulüpleri, dernekler, belediyeler ve kurumsal markalar için ödül ve plaket üretim referansları.",
};

const references = ["Okullar", "Spor kulupleri", "Belediyeler", "Dernekler", "Kurumsal markalar", "Etkinlik ajanslari"];

export default function ReferencesPage() {
  return (
    <>
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Referanslar" }]} />
          <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">Referanslar</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Farklı ölçekteki kurum ve organizasyonlar için kupa, madalya, plaket ve özel ödül tedariği planlanır.
          </p>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {references.map((reference) => (
            <div key={reference} className="rounded-xl border border-line bg-mist p-6 text-center text-lg font-extrabold text-ink">
              {reference}
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Etkinliginiz icin referansli cozumler alin" />
    </>
  );
}
