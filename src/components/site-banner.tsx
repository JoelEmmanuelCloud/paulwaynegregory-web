import Link from "next/link";
import { fetchSiteBanner } from "@/lib/shopify";

export async function SiteBanner() {
  const banner = await fetchSiteBanner();
  if (!banner) return null;

  return (
    <section className="border-y border-accent/40 bg-ink px-6 py-14 text-center sm:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        {banner.heading && (
          <p className="tracked-label text-xs text-paper">{banner.heading}</p>
        )}
        <p className="tracked-display text-xl text-accent sm:text-2xl">
          {banner.message}
        </p>
        {banner.buttonLabel && (
          <Link
            href={banner.buttonLink}
            className="tracked-label mt-2 flex h-[46px] items-center justify-center rounded-full bg-paper px-8 text-xs text-ink transition-colors hover:bg-accent hover:text-accent-ink"
          >
            {banner.buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
