import { BlogAside } from "@/app/blog/components/BlogAside";
import { TitlePageSection } from "@/components/shared/TitlePageSection";
import { getPosts } from "@/libs/api/services/post.service";
import { toImageProxy } from "@/libs/helper/urlProxy";
import Link from "next/link";

export default async function Page() {
  "use cache";
  const data: any = await getPosts();

  return (
    <main>
      {/* Blog Hero */}
      <TitlePageSection title="Blog" />

      {/* Blog Content */}
      <section id="page-blog-content" className="blog-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="row">
            {/* Blog List */}
            <div className="col-lg-8 col-md-12">
              <div className="row list-post">
                {data?.posts?.nodes?.map((post: any) => {
                  const image = toImageProxy(
                    post.featuredImage?.node?.sourceUrl,
                  );

                  return (
                    <div key={post.id} className="col-lg-6 col-md-6">
                      <div className="single-blog-post">
                        <div className="image">
                          <Link href={`/${post.slug}`} className="d-block">
                            {image && (
                              <img
                                src={image}
                                alt={
                                  post.featuredImage?.node?.altText ||
                                  post.title
                                }
                              />
                            )}
                          </Link>
                        </div>

                        <div className="content">
                          <h3>
                            <Link
                              href={`/${post.slug}`}
                              dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                          </h3>

                          <div
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Aside Blog */}
            <div className="col-lg-4 col-md-12">
              <BlogAside />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
