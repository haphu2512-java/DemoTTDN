import * as cheerio from "cheerio";
import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractAboutContent(html: string) {
  if (!html) return "";
  const $ = cheerio.load(html);
  return $("#page-pricing-content").prop("outerHTML") || "";
}

export default async function Page() {
  "use cache";

  const page = await getPageHtml("bang-gia");
  const aboutContent = extractAboutContent(page.fullHtml);

  return (
    <div>
      <TitlePageSection title={page.title} />

      <div
        dangerouslySetInnerHTML={{
          __html: transformHtml(aboutContent),
        }}
      />
    </div>
  );
}
