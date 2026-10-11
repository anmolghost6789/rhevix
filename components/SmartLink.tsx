import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Next.js <Link> for app routes; a plain <a> for static files such as /story.html,
 * so they always load as full pages.
 */
export default function Link(props: ComponentProps<typeof NextLink>) {
  const href = typeof props.href === "string" ? props.href : "";
  if (/\.(html|pdf)(#|\?|$)/.test(href)) {
    const { href: _h, prefetch: _p, replace: _r, scroll: _s, ...rest } = props as ComponentProps<typeof NextLink> & Record<string, unknown>;
    return <a href={href} {...(rest as ComponentProps<"a">)} />;
  }
  return <NextLink {...props} />;
}
