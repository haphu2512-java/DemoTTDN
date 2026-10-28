import * as cheerio from "cheerio";

import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractContent(html: string) {
  if (!html) return "";
  const $ = cheerio.load(html);
  $("script").remove();
  $(".hotline").remove();
  $(".aio-fixed-bt-mb").remove();
  $(".zalo-chat-widget").remove();
  return $("main").html() || html;
}

export default async function ContactPage() {
  "use cache";
  const page = await getPageHtml("lien-he");

  if (!page) return null;

  const content = extractContent(page.fullHtml);

  return (
    <main>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: transformHtml(content),
        }}
      />
    </main>
  );
}
