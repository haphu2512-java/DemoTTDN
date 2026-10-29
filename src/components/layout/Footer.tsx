import { Suspense } from "react";
import { getFooter } from "@/libs/api/services/layout.service";
import * as cheerio from "cheerio";
import { transformHtml } from "@/libs/helper/urlProxy";
import FooterView from "./FooterView";

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
    <Suspense fallback={null}>
      <FooterView contentHtml={transformHtml(content)} />
    </Suspense>
  );
}
