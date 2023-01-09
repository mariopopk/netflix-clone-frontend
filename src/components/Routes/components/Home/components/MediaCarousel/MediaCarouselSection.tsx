import { Typography } from "@mariopopk/react-lightning";
import useGetCarouselData from "./hooks/useGetCarouselData";
import MediaCarousel from "./MediaCarousel";

interface MediaCarouselSectionProps {
  category: string;
}

export default function MediaCarouselSection({
  category,
}: MediaCarouselSectionProps) {
  const { data } = useGetCarouselData(category);
  return (
    <>
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
              {data.genre?.data?.attributes?.name}
            </Typography>
          </div>
          <MediaCarousel shows={data.genre?.data?.attributes?.shows} />
        </>
      )}
    </>
  );
}
