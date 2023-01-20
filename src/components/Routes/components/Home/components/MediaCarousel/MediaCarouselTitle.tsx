import { Typography } from "@mariopopk/react-lightning";

interface MediaCarouselTitleProps {
  title?: string;
}

export default function MediaCarouselTitle({
  title = "Title",
}: MediaCarouselTitleProps) {
  return (
    <div style={{ margin: "0 4%", marginTop: "1.25rem" }}>
      <Typography
        style={{ marginBottom: "0.5rem" }}
        color="light"
        variant="subtitle"
        fontWeight="semibold"
        component="h2"
      >
        {title}
      </Typography>
    </div>
  );
}
