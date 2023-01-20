import useGetCarouselData from "./hooks/useGetCarouselData";
import MediaCarousel from "./MediaCarousel";
import MediaCarouselTitle from "./MediaCarouselTitle";

interface MediaCarouselSectionProps {
  category: string;
}

export default function MediaCarouselSection({
  category,
}: MediaCarouselSectionProps) {
  const { data, loading } = useGetCarouselData(category);
  return (
    <>
      {data && (
        <>
          <MediaCarouselTitle title={data.genre?.data?.attributes?.name} />
          <MediaCarousel shows={data.genre?.data?.attributes?.shows} />
        </>
      )}

      {loading && (
        <>
          <MediaCarouselTitle title="‎" />
          <MediaCarousel loading={true} />
        </>
      )}
    </>
  );
}
