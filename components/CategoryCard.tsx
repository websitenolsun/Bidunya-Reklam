import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";
import { tr } from "@/lib/turkish";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-square bg-[linear-gradient(145deg,#ffffff,#f4f8fb)] p-3">
        <Image
          src={category.image}
          alt={tr(category.imageAlt)}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 28vw, 44vw"
          quality={70}
          className="object-contain p-2 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="mb-2 h-1 w-10 rounded-full bg-[linear-gradient(90deg,#d6a430,#1da7e8)]" />
        <h3 className="text-base font-semibold text-ink">{tr(category.menuTitle ?? category.title)}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{tr(category.description)}</p>
      </div>
    </Link>
  );
}
