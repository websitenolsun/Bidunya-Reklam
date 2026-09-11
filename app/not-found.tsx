import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-skybrand">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Sayfa bulunamadı</h1>
        <p className="mt-4 text-slate-600">Aradığınız sayfa taşınmış veya henüz yayında olmayabilir.</p>
        <Link href="/" className="mt-8 inline-flex rounded-xl bg-ink px-6 py-4 text-sm font-extrabold text-white">
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
