export default function Loading() {
  return (
    <>
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded-full bg-line" />
          <div className="mt-6">
            <div className="h-3 w-32 animate-pulse rounded-full bg-line" />
            <div className="mt-4 h-10 w-72 max-w-full animate-pulse rounded-xl bg-line" />
            <div className="mt-5 h-4 w-full max-w-3xl animate-pulse rounded-full bg-line" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-4 w-40 animate-pulse rounded-full bg-line" />
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