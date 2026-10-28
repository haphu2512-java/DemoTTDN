export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const path = searchParams.get("path");

  if (!path) {
    return new Response("Missing path", { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_MEDIA_ENDPOINT;

  const imageUrl = url + path;

  return fetch(imageUrl);
}
