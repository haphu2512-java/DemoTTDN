import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về TBAY - Giải pháp Chuyển đổi số",
  description:
    "Về TBAY - Đơn vị thiết kế website và cung cấp giải pháp số cho doanh nghiệp.",
};

export default function VeWeb366Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/uploads/elementor/css/post-5069.css?ver=1791327480"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInDown.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/widget-divider.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/plugins/elementor/assets/css/widget-nested-accordion.min.css?ver=4.1.3"
      />
      <link
        rel="stylesheet"
        href="https://tbay.vn/wp-content/uploads/elementor/css/post-7550.css?ver=1791349655"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CRoboto+Slab:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CInter:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap"
      />
      <div className="elementor-default elementor-kit-5069 elementor-page elementor-page-7550">
        {children}
      </div>
    </>
  );
}
