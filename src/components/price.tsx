import { formatPrice } from "@/lib/products";

export function Price({
  price,
  compareAtPrice,
  size = "small",
}: {
  price: number;
  compareAtPrice?: number;
  size?: "small" | "large";
}) {
  const priceClass = size === "large" ? "text-lg text-paper" : "text-sm text-paper";

  if (!compareAtPrice) {
    return <span className={priceClass}>{formatPrice(price)}</span>;
  }

  const percentOff = Math.round((1 - price / compareAtPrice) * 100);

  return (
    <span className="inline-flex flex-wrap items-baseline justify-end gap-x-2 gap-y-1">
      <span className={priceClass}>{formatPrice(price)}</span>
      <s className="text-xs text-paper-dim" aria-label={`was ${formatPrice(compareAtPrice)}`}>
        {formatPrice(compareAtPrice)}
      </s>
      {percentOff > 0 && (
        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-ink">
          -{percentOff}%
        </span>
      )}
    </span>
  );
}
