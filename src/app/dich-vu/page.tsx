import type { Metadata } from "next";
import * as cheerio from "cheerio";
import { getPageHtml } from "@/libs/api/services/layout.service";
import { transformHtml } from "@/libs/helper/urlProxy";

export const metadata: Metadata = {
  title: "Các dịch vụ chính của thiết kế website chuyên nghiệp TBAY",
  description: "Các dịch vụ chính của thiết kế website chuyên nghiệp TBAY",
};

function extractContent(html: string) {
  if (!html) return "";
  const $ = cheerio.load(html);
  $("script").remove();
  $(".hotline").remove();
  $(".aio-fixed-bt-mb").remove();
  $(".zalo-chat-widget").remove();
  return $("main").html() || html;
}

export default async function DichVuPage() {
  const page = await getPageHtml("dich-vu");
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
