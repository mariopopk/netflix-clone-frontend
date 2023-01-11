import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./FeaturedMedia";
import useGetShow from "./hooks/useGetShow";

export default function FeaturedMediaSection() {
  // Hardcoded for now. Will not be in V2
  const { data } = useGetShow("80117470");

  return (
    <>
      <div className="d-none d-md-block">
        <FeaturedMediaHorizontal item={data?.show?.data?.attributes} />
      </div>
      <div className="d-md-none d-block">
        <FeaturedMediaVertical item={data?.show?.data?.attributes} />
      </div>
    </>
  );
}
