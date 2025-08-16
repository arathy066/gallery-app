// /lib/prefix.ts
/** Base path for GitHub Pages; empty locally */
export const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();

const isExternal = (u: string) => /^https?:\/\//i.test(u);

/** Strip accidental '/public' or leading './', ensure single leading slash */
const normalizeLocal = (p: string) => {
  const cleaned = p.replace(/^\.?\/?public\//, "").replace(/^\.\//, "");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

/** Add basePath ONLY to local assets; NEVER touch full URLs */
export const withBasePath = (p: string) =>
  isExternal(p) ? p : `${prefix}${normalizeLocal(p)}`;
