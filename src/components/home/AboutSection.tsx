import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export const AboutSection = () => {
  return (
    <section>
      <div className="container mx-auto flex">
        <div className="w-1/2 relative">
          <Image
            src="/images/tbay-team-2.png"
            alt="Website - Marketing Online - Chuyển Đổi Số"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="w-1/2 py-30 pl-5">
          <span className="text-primary">
            TBAY THIẾT KẾ WEBSITE CHUYÊN NGHIỆP
          </span>
          <h2 className="text-3xl font-extrabold">
            Website - Marketing Online - Chuyển Đổi Số
          </h2>
          <p className="text-option mt-3 mb-4">
            Chúng tôi luôn sử dụng công nghệ mới nhất để giúp khách hàng có được
            Webiste Chuyên Nghiệp và Chuyển Đổi Số miễn phí. Website được thiết
            kế riêng theo phong cách mỗi Doanh Nghiệp, chuẩn seo, dễ quản trị và
            bảo hành trọn đời.
          </p>
          <ul className="flex flex-row">
            <li>1000</li>
            <li>500</li>
            <li>6</li>
          </ul>
          <Button>Xem thêm</Button>
        </div>
      </div>
    </section>
  );
};
