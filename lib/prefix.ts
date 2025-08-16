// /lib/prefix.ts
/** Base path for GitHub Pages; keep empty locally */
export const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();

const isExternal = (u: string) => /^https?:\/\//i.test(u);

/** Strip any '/public' or leading './', ensure it starts with a single '/' */
const normalizeLocal = (p: string) => {
  const cleaned = p.replace(/^\.?\/?public\//, "").replace(/^\.\//, "");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

/** Adds basePath for local assets; leaves full URLs alone */
export const withBasePath = (p: string) =>
  isExternal(p) ? p : `${prefix}${normalizeLocal(p)}`;
