import { BlogAside } from "@/app/blog/components/BlogAside";
import { TitlePageSection } from "@/components/shared/TitlePageSection";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: Props) {
  "use cache";
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp/v2/posts?slug=${slug}&_embed`,
  );

  const data = await response.json();

  const post = data[0];

  if (!post) {
    return <div>Không tìm thấy bài viết</div>;
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

  const viewCount = post.meta?.views;

  return (
    <main>
      <TitlePageSection title={post.title.rendered} />
      <section className="container flex py-20 px-20 gap-10">
        <article className="w-2/3">
          {/* Featured Image */}
          {featuredImage && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-8 text-sm">
            <div>
              <div className="text-xs uppercase text-orange-500">Danh mục</div>

              <div className="font-medium">
                {category || "Thiết kế website"}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase text-orange-500">Xem</div>

              <div className="font-medium">{viewCount}</div>
            </div>

            <div>
              <div className="text-xs uppercase text-orange-500">Ngày đăng</div>

              <div className="font-medium">
                {new Date(post.date).toLocaleDateString("vi-VN")}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg
                max-w-none
                prose-img:rounded-lg
                "
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </article>

        {/* Sidebar */}
        <BlogAside />
      </section>
    </main>
  );
}
