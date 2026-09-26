import { useState } from "react";

/** Existing record artwork only; missing assets do not leave an empty well. */
export function DbArtwork({
  icon,
  portraitAssetPath,
  size = "row"
}: {
  icon?: string;
  portraitAssetPath?: string;
  size?: "row" | "detail" | "ingredient";
}) {
  const src = portraitAssetPath || icon;
  const [failedSrc, setFailedSrc] = useState<string>();
  if (!src || src === failedSrc) return null;

  const dimensions = size === "ingredient" ? "h-6 w-6" : size === "row"
    ? "h-12 w-12 sm:h-16 sm:w-16"
    : portraitAssetPath
      ? "h-16 w-auto max-w-24 md:h-24 md:max-w-36 xl:h-32 xl:max-w-48"
      : "h-16 w-16 md:h-24 md:w-24 xl:h-32 xl:w-32";

  return (
    <img
      src={src}
      alt=""
      loading={size === "row" ? "lazy" : "eager"}
      onError={() => setFailedSrc(src)}
      className={`database-record-artwork shrink-0 object-contain ${dimensions}`}
    />
  );
}
