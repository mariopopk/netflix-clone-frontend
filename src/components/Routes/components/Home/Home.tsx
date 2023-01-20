import FeaturedMediaSection from "./components/FeaturedMedia/FeaturedMediaSection";
import useGetHomeCategoryIds from "./components/MediaCarousel/hooks/useGetHomeCategoryIds";
import MediaCarouselSection from "./components/MediaCarousel/MediaCarouselSection";

export default function Home() {
  const { data } = useGetHomeCategoryIds();

  return (
    <>
      <FeaturedMediaSection />
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        {data?.genres?.data?.map(({ id }) => {
          return <MediaCarouselSection key={id} category={id!} />;
        })}
      </div>
    </>
  );
}
