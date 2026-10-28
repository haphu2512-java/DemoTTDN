import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto flex">
        {/* Content */}
        <div className="w-1/2 py-40 pl-36 pr-8">
          <span className="text-primary font-medium">
            TBAY luôn cập nhật công nghệ mới
          </span>

          <h1 className="mt-4 text-5xl font-bold text-[#8a33e6]">
            Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp
          </h1>

          <p className="mt-6 text-option leading-8">
            Tbay chuyên tư vấn và đồng hành vận hành doanh nghiệp trên môi
            trường online, tập trung xây dựng hệ thống website, marketing và quy
            trình kinh doanh, đồng thời ứng dụng công nghệ mới như AI để tối ưu
            hiệu suất và tăng trưởng doanh thu.
          </p>

          <button className="mt-8 rounded-lg bg-primary px-6 py-3 text-white transition hover:opacity-90">
            Tư vấn nhanh
          </button>
        </div>

        {/* Image */}
        <div className="w-1/2 relative">
          <Image
            src="/images/tbay-tap-the-2.png"
            alt="tbay tap the 2"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
