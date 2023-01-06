import { Typography } from "@mariopopk/react-lightning";
import shows from "../../../../dummyData";
import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./components/FeaturedMedia/FeaturedMedia";
import MediaCarousel from "./components/MediaCarousel/MediaCarousel";

function useShowData() {
  const random = Math.round(Math.random() * shows.length);
  const featured = shows[random];

  return {
    featured,
  };
}

export default function Home() {
  const { featured } = useShowData();
  return (
    <>
      <div className="d-none d-md-block">
        <FeaturedMediaHorizontal item={featured} />
      </div>

      <div className="d-md-none d-block">
        <FeaturedMediaVertical item={featured} />
      </div>

      <div
        style={{
          minHeight: "1000px",
        }}
      >
        <div style={{ margin: "0 4%", marginTop: "1.25rem" }}>
          <Typography
            style={{ marginBottom: "0.5rem" }}
            color="light"
            variant="subtitle"
            fontWeight="semibold"
            component="h2"
          >
            My List
          </Typography>
        </div>
        <MediaCarousel items={shows.slice(0, 12)} />

        <div style={{ margin: "0 4%", marginTop: "1.25rem" }}>
          <Typography
            style={{ marginBottom: "0.5rem" }}
            color="light"
            variant="subtitle"
            fontWeight="semibold"
            component="h2"
          >
            Popular
          </Typography>
        </div>
        <MediaCarousel items={shows.slice(12, 24)} />

        <div style={{ margin: "0 4%", marginTop: "1.25rem" }}>
          <Typography
            style={{ marginBottom: "0.5rem" }}
            color="light"
            variant="subtitle"
            fontWeight="semibold"
            component="h2"
          >
            Documentaries
          </Typography>
        </div>
        <MediaCarousel items={shows.slice(24)} />
      </div>
    </>
  );
}
