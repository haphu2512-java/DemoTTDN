import * as cheerio from "cheerio";

import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractContent(html: string) {
  if (!html) return "";

  const $ = cheerio.load(html);

  return $("page-about-content").html() || html;
}

export default async function ContactPage() {
  "use cache";
  const page = await getPageHtml("lien-he");

  if (!page) return null;

  const content = extractContent(page.customHtml);

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
