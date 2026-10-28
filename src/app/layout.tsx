import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import InitPlugins from "@/components/layout/InitPlugins";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/boxicons.min.css";
import "@/assets/css/flaticon.css";
import "@/assets/css/meanmenu.min.css";
import "@/assets/css/nice-select.min.css";
import "@/assets/css/magnific-popup.min.css";
import "@/assets/css/odometer.min.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive_theme.css";
import "@/assets/css/custom.css";
import "@/assets/css/responsive.css";
import "@/assets/css/aio_ct_button.css";
import Script from "next/script";
import { Suspense } from "react";
import Test from "@/components/layout/test";

export const metadata: Metadata = {
  title: "TBAY – Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
      </head>
      <body>
        <Header />
        {/* <Test /> */}
        <Suspense fallback={<p>Loading posts...</p>}>{children}</Suspense>
        <Footer />
        <FloatingWidgets />
        <InitPlugins />
        {/* 1. jQuery */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />

        {/* 2. Tất cả plugin local - đúng thứ tự */}
        <Script src="/assets/js/appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/sticky-sidebar.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/meanmenu.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/nice-select.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ajaxchimp.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/form-validator.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
        <Script src="/assets/js/aio_ct_button.js" strategy="afterInteractive" />

        {/* 3. Plugin CDN */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* 4. main.js - luôn cuối cùng */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
