import Link from "next/link";
import { toImageProxy } from "@/libs/helper/urlProxy";

export const BlogAside = () => {
  return (
    <aside className="widget-area" id="secondary">
      {/* 1. Hướng dẫn */}
      <section
        id="w366_side_recent_news-3"
        className="widget-odd widget-first widget-1 widget w366_side_recent_news"
      >
        <h3 className="widget-title">Hướng dẫn</h3>
        <section className="blog-list widget_dibiz_posts_thumb">
          <article className="item">
            <Link
              href="/huong-dan-cach-chen-ma-nhung-chat-facebook-messenger-moi-nhat"
              className="thumb"
            >
              <span
                style={{
                  backgroundImage: `url(${toImageProxy(
                    "https://tbay.vn/wp-content/uploads/2021/01/chat-fb-16.png",
                  )})`,
                }}
                className="fullimage cover"
                role="img"
              />
            </Link>
            <div className="info">
              <span>30/01/2021</span>
              <h4 className="title usmall">
                <Link href="/huong-dan-cach-chen-ma-nhung-chat-facebook-messenger-moi-nhat">
                  Hướng dẫn cách chèn mã nhúng Chat Facebook Messenger mới nhất
                </Link>
              </h4>
            </div>
            <div className="clear" />
          </article>

          <article className="item">
            <Link
              href="/huong-dan-cach-chen-ban-do-google-map-vao-website"
              className="thumb"
            >
              <span
                style={{
                  backgroundImage: `url(${toImageProxy(
                    "https://tbay.vn/wp-content/uploads/2021/01/gg-map.png",
                  )})`,
                }}
                className="fullimage cover"
                role="img"
              />
            </Link>
            <div className="info">
              <span>27/01/2021</span>
              <h4 className="title usmall">
                <Link href="/huong-dan-cach-chen-ban-do-google-map-vao-website">
                  Hướng dẫn cách chèn bản đồ google map vào website
                </Link>
              </h4>
            </div>
            <div className="clear" />
          </article>
        </section>
      </section>

      {/* 2. Blog mới */}
      <section
        id="w366_side_recent_news-2"
        className="widget-even widget-2 widget w366_side_recent_news"
      >
        <h3 className="widget-title">Blog mới</h3>
        <section className="blog-list widget_dibiz_posts_thumb">
          <article className="item">
            <Link
              href="/dich-vu-thiet-ke-website-chuyen-nghiep-la-gi"
              className="thumb"
            >
              <span
                style={{
                  backgroundImage: `url(${toImageProxy(
                    "https://tbay.vn/wp-content/uploads/2022/01/tbay-scaled.jpg",
                  )})`,
                }}
                className="fullimage cover"
                role="img"
              />
            </Link>
            <div className="info">
              <span>24/05/2022</span>
              <h4 className="title usmall">
                <Link href="/dich-vu-thiet-ke-website-chuyen-nghiep-la-gi">
                  Dịch vụ Thiết Kế Website Chuyên Nghiệp là gì?
                </Link>
              </h4>
            </div>
            <div className="clear" />
          </article>

          <article className="item">
            <Link
              href="/huong-dan-cach-chen-ma-nhung-chat-facebook-messenger-moi-nhat"
              className="thumb"
            >
              <span
                style={{
                  backgroundImage: `url(${toImageProxy(
                    "https://tbay.vn/wp-content/uploads/2021/01/chat-fb-16.png",
                  )})`,
                }}
                className="fullimage cover"
                role="img"
              />
            </Link>
            <div className="info">
              <span>30/01/2021</span>
              <h4 className="title usmall">
                <Link href="/huong-dan-cach-chen-ma-nhung-chat-facebook-messenger-moi-nhat">
                  Hướng dẫn cách chèn mã nhúng Chat Facebook Messenger mới nhất
                </Link>
              </h4>
            </div>
            <div className="clear" />
          </article>

          <article className="item">
            <Link
              href="/huong-dan-cach-chen-ban-do-google-map-vao-website"
              className="thumb"
            >
              <span
                style={{
                  backgroundImage: `url(${toImageProxy(
                    "https://tbay.vn/wp-content/uploads/2021/01/gg-map.png",
                  )})`,
                }}
                className="fullimage cover"
                role="img"
              />
            </Link>
            <div className="info">
              <span>27/01/2021</span>
              <h4 className="title usmall">
                <Link href="/huong-dan-cach-chen-ban-do-google-map-vao-website">
                  Hướng dẫn cách chèn bản đồ google map vào website
                </Link>
              </h4>
            </div>
            <div className="clear" />
          </article>
        </section>
      </section>

      {/* 3. Categories */}
      <section
        id="categories-2"
        className="widget-odd widget-3 widget widget_categories"
      >
        <h3 className="widget-title">Categories</h3>
        <ul>
          <li className="cat-item cat-item-1">
            <Link href="/blog">Chưa phân loại</Link>
          </li>
          <li className="cat-item cat-item-6">
            <Link href="/blog">Hướng dẫn</Link>
          </li>
          <li className="cat-item cat-item-9">
            <Link href="/blog">Thiết kế website</Link>
          </li>
        </ul>
      </section>

      {/* 4. Tags */}
      <section
        id="tag_cloud-2"
        className="widget-even widget-last widget-4 widget widget_tag_cloud"
      >
        <h3 className="widget-title">Tags</h3>
        <div className="tagcloud">
          <Link href="/blog" className="tag-cloud-link">
            bản đồ<span className="tag-link-count"> (1)</span>
          </Link>
          <Link href="/blog" className="tag-cloud-link">
            google map<span className="tag-link-count"> (1)</span>
          </Link>
          <Link href="/blog" className="tag-cloud-link">
            web chuyên nghiệp<span className="tag-link-count"> (1)</span>
          </Link>
        </div>
      </section>
    </aside>
  );
};
