/* eslint-disable @next/next/no-img-element */
/**
 * Rhevix logo. Files live in /public/brand:
 *   rhevix-logo.png        full-colour, for light backgrounds
 *   rhevix-logo-white.png  white wordmark, for dark backgrounds
 *   rhevix-mark.png        the R mark on its own
 * Replace them with SVG versions from your designer for the sharpest result.
 */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return <img src={inverted ? "/brand/rhevix-logo-white.png" : "/brand/rhevix-logo.png"} alt="Rhevix" width={362} height={66} />;
}
