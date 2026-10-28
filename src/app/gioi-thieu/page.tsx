import * as cheerio from "cheerio";
import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractAboutContent(html: string) {
  if (!html) return "";
  const $ = cheerio.load(html);
  return $("#page-about-content").prop("outerHTML") || "";
}

export default async function Page() {
  "use cache";

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const page = await getPageHtml("gioi-thieu");

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
