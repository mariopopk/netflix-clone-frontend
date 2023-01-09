import FeaturedMediaSection from "./components/FeaturedMedia/FeaturedMediaSection";
import MediaCarouselSection from "./components/MediaCarousel/MediaCarouselSection";

export default function Home() {
  return (
    <>
      <FeaturedMediaSection />
      <div
        style={{
          minHeight: "1000px",
        }}
      >
        {/* Categories are hardcoded for now */}
        {[
          "12211", // TV Mysteries
          "12217", // TV Thrillers
          "12240", // Nature & Ecology Documentaries
          "12213", // Fantasy TV Shows
          "12214", //  Teen TV Shows
          "12238", // Docuseries
          "12212", // Crime TV Shows
          "12239", // Science & Nature Docs
        ].map((name) => {
          return <MediaCarouselSection key={name} category={name} />;
        })}
      </div>
    </>
  );
}
