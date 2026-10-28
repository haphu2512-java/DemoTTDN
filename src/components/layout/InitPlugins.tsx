"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InitPlugins() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      const $ = (window as any).$;
      if (!$ || !$.fn) return;

      // Testimonials Slides
      if ($.fn.owlCarousel) {
        $(".testimonials-slides, .feedback-slides").each(function (this: any) {
          if (!$(this).hasClass("owl-loaded")) {
            $(this).owlCarousel({
              loop: true,
              nav: false,
              dots: true,
              autoplayHoverPause: true,
              autoplay: true,
              animateOut: "fadeOut",
              animateIn: "fadeIn",
              items: 1,
              navText: [
                "<i class='flaticon-back'></i>",
                "<i class='flaticon-chevron'></i>",
              ],
            });
          }
        });

        $(".partner-slides").each(function (this: any) {
          if (!$(this).hasClass("owl-loaded")) {
            $(this).owlCarousel({
              loop: true,
              nav: false,
              dots: false,
              autoplayHoverPause: true,
              autoplay: true,
              margin: 30,
              responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                1200: { items: 6 },
              },
            });
          }
        });
      }
    };

    init();
    const t1 = setTimeout(init, 300);
    const t2 = setTimeout(init, 1000);
    const t3 = setTimeout(init, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
}
