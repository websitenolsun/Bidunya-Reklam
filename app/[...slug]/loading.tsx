export default function Loading() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#f7fafc,#ffffff)] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-44 animate-pulse rounded-full bg-line" />
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="h-3 w-36 animate-pulse rounded-full bg-line" />
              <div className="mt-4 h-10 w-72 max-w-full animate-pulse rounded-xl bg-line" />
              <div className="mt-5 h-4 w-full max-w-3xl animate-pulse rounded-full bg-line" />
              <div className="mt-3 h-4 w-2/3 max-w-3xl animate-pulse rounded-full bg-line" />
            </div>
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="h-3 w-32 animate-pulse rounded-full bg-line" />
              <div className="mt-3 h-9 w-16 animate-pulse rounded-xl bg-line" />
              <div className="mt-3 h-3 w-full animate-pulse rounded-full bg-line" />
              <div className="mt-2 h-3 w-11/12 animate-pulse rounded-full bg-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="rounded-xl border border-line bg-mist p-5">
                <div className="aspect-square animate-pulse rounded-lg bg-line" />
                <div className="mt-4 h-3 w-1/3 animate-pulse rounded-full bg-line" />
                <div className="mt-3 h-5 w-3/4 animate-pulse rounded-full bg-line" />
                <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-line" />
                <div className="mt-8 h-10 w-full animate-pulse rounded-full bg-line" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}