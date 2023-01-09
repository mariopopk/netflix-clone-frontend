import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./components/FeaturedMedia/FeaturedMedia";
// import useGetShow from "./components/MediaCarousel/hooks/useGetCarouselData";
import MediaCarouselSection from "./components/MediaCarousel/MediaCarouselSection";
import useGetShow from "./hooks/useGetShow";

export default function Home() {
  const { data: show, loading, error } = useGetShow("80100172");

  return (
    <>
      <div className="d-none d-md-block">
        <FeaturedMediaHorizontal item={show} />
      </div>

      <div className="d-md-none d-block">
        <FeaturedMediaVertical item={show} />
      </div>

      <div
        style={{
          minHeight: "1000px",
        }}
      >
        <MediaCarouselSection />
      </div>
    </>
  );
}
