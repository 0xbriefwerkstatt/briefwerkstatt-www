/**
 * Returns the image src unchanged.
 *
 * The Netlify Image CDN rewriting of the original Vite version is not
 * applicable under Next.js — assets are served statically from /assets.
 * The signature (src, w) is kept so all existing call sites stay the same.
 */
export function img(src: string, w: number): string {
  return src;
}
