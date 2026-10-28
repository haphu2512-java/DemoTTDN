"use client";

import { usePathname } from "next/navigation";

export default function FooterView({ contentHtml }: { contentHtml: string }) {
  const pathname = usePathname();
  if (pathname === "/ve-web366") return null;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: contentHtml,
      }}
    />
  );
}
