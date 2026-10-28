import * as cheerio from "cheerio";

import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

function extractContent(html: string) {
  if (!html) return "";
  const $ = cheerio.load(html);
  $("script").remove();
  $(".hotline").remove();
  $(".aio-fixed-bt-mb").remove();
  $(".zalo-chat-widget").remove();
  $(".page-title-area").remove();

  // Remove elementor-invisible so sections are not hidden with visibility: hidden
  $(".elementor-invisible").removeClass("elementor-invisible");

  const elementor = $(".elementor");
  if (elementor.length) {
    return elementor.prop("outerHTML") || "";
  }
  return $("main").html() || "";
}

export default async function VeWeb366Page() {
  const page = await getPageHtml("ve-web366");

  if (!page) return null;

  const content = extractContent(page.fullHtml);

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: transformHtml(content),
      }}
    />
  );
}
