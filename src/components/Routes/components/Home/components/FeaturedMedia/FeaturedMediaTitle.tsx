interface MediaTitleProps {
  title: string;
  titleImage: string;
}

export function FeaturedMediaTitle({ title, titleImage }: MediaTitleProps) {
  return (
    <>
      <div className="d-none d-xl-block">
        <img
          style={{ maxWidth: "100%", minWidth: "60%" }}
          alt={title}
          src={titleImage}
        />
      </div>

      <div className="d-xl-none d-xl-none">
        <img
          style={{ maxHeight: "7rem", maxWidth: "100%" }}
          alt={title}
          src={titleImage}
        />
      </div>
    </>
  );
}
