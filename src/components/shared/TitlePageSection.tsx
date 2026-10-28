type PageTitleAreaProps = {
  title: string;
  template?: string;
};

export function TitlePageSection({ title, template }: PageTitleAreaProps) {
  return (
    <section className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <h1>{title}</h1>
        </div>

        {/* {template === "page-domain.php" && (
          <DomainSearch />
        )} */}
      </div>

      <div className="shape2">
        <img src="/images/shape2.png" alt="shape" />
      </div>

      <div className="shape3">
        <img src="/images/shape3.png" alt="shape" />
      </div>

      <div className="shape5">
        <img src="/images/shape5.png" alt="shape" />
      </div>

      <div className="shape6">
        <img src="/images/shape6.png" alt="shape" />
      </div>

      <div className="shape7">
        <img src="/images/shape7.png" alt="shape" />
      </div>

      <div className="shape8">
        <img src="/images/shape8.png" alt="shape" />
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
}
