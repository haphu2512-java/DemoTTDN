import * as cheerio from "cheerio";

import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractContent(html: string) {
  if (!html) return "";
  const $ = cheerio.load(html);
  return $("#page-checkout-content").html() || html;
}

export default async function CheckoutPage() {
  "use cache";
  const page = await getPageHtml("thanh-toan");

  if (!page) return null;

  const content = extractContent(page.fullHtml);

  return (
    <div>
      <TitlePageSection title={page.title} />

      <div
        dangerouslySetInnerHTML={{
          __html: transformHtml(content),
        }}
      />
    </div>
  );
}
