import { Typography } from "@mariopopk/react-lightning";
import useGetShow from "./hooks/useGetCarouselData";
import MediaCarousel from "./MediaCarousel";

export default function MediaCarouselSection() {
  const { data, loading, error } = useGetShow("TV Mysteries");

  return (
    <>
      {loading && "Loading..."}
      {error && error.message}

      {data && (
        <>
          <div style={{ margin: "0 4%", marginTop: "1.25rem" }}>
            <Typography
              style={{ marginBottom: "0.5rem" }}
              color="light"
              variant="subtitle"
              fontWeight="semibold"
              component="h2"
            >
              {data.name}
            </Typography>
          </div>
          <MediaCarousel items={data.shows} />
        </>
      )}
    </>
  );
}
