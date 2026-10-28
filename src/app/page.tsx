import * as cheerio from "cheerio";

import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractContent(html: string) {
  if (!html) return "";

  const $ = cheerio.load(html);

  return $("main").html() || html;
}

export default async function HomePage() {
  "use cache";

  const page = await getPageHtml("/");
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
