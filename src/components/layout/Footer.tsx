import { getFooter } from "@/libs/api/services/layout.service";
import * as cheerio from "cheerio";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractFooter(html: string) {
  if (!html) return "";

  const $ = cheerio.load(html);

  const footer = $("footer").first();

  return footer.length ? footer.prop("outerHTML") || html : html;
}

export default async function Footer() {
  "use cache";
  const footerHtml = await getFooter();

  if (!footerHtml) return null;

  const content = extractFooter(footerHtml);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: transformHtml(content),
      }}
    />
  );
}
