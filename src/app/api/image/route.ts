export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  let path = searchParams.get("path");

  if (!path) {
    return new Response("Missing path", { status: 400 });
  }

  path = path.replace(/^\/+/, "");

  const base = (
    process.env.NEXT_PUBLIC_MEDIA_ENDPOINT ||
    "https://tbay.vn/wp-content/uploads/"
  ).replace(/\/+$/, "");

  const imageUrl = `${base}/${path}`;

  return fetch(imageUrl);
}
