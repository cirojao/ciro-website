const DEFAULT_SITE_URL = "https://ciro-profile-b0117.firebaseapp.com";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL;

  return normalizeSiteUrl(configuredUrl);
}

export function getSiteOrigin() {
  return new URL(getSiteUrl());
}

export function getCanonicalPath(path: string) {
  if (path === "/") {
    return "/";
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`;
}
