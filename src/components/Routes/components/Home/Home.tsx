import FeaturedMediaSection from "./components/FeaturedMedia/FeaturedMediaSection";
import MediaCarouselSection from "./components/MediaCarousel/MediaCarouselSection";

export default function Home() {
  return (
    <>
      <FeaturedMediaSection />
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        {/* Categories are hardcoded for now */}
        {[
          "7", // TV Thrillers
          "30", // Nature & Ecology Documentaries
          "3", // Fantasy TV Shows
          "2", // Crime TV Shows
          "1", // TV Mysteries
          "4", //  Teen TV Shows
          "29", // Science & Nature Docs
          "8", // TV Dramas
        ].map((name) => {
          return <MediaCarouselSection key={name} category={name} />;
        })}
      </div>
    </>
  );
}
