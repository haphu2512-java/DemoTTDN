export function toImageProxy(url?: string | null) {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    // chỉ xử lý ảnh từ wp-content/uploads
    if (!parsed.pathname.includes("/wp-content/uploads/")) {
      return url;
    }

    const path = parsed.pathname.split("/wp-content/uploads/")[1];

    return `/api/image?path=${encodeURIComponent(path)}`;
  } catch {
    return url || "";
  }
}

export function transformHtml(html: string) {
  return html
    .replaceAll("https://tbay.vn/wp-content/uploads/", "/api/image?path=/")
    .replaceAll("<img ", '<img loading="lazy" ');
}
