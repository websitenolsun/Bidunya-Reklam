type FeatureBoxProps = {
  title: string;
  description: string;
  index: number;
  large?: boolean;
};

export function FeatureBox({ title, description, index, large = false }: FeatureBoxProps) {
  return (
    <div
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] ${
        large ? "lg:p-9" : ""
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-2 -top-4 select-none font-display text-white [-webkit-text-stroke:1px_#f1ead2] ${
          large ? "text-[9rem]" : "text-7xl"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative">
        <div className="mb-5 h-1.5 w-10 rounded-full bg-gold" />
        <h3 className={`font-display font-medium text-ink ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}>{title}</h3>
        <p className={`mt-3 leading-6 text-slate-600 ${large ? "text-[15px] max-w-xs" : "text-sm"}`}>{description}</p>
      </div>
    </div>
  );
}
