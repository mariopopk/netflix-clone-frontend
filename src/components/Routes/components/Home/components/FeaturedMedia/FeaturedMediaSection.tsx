import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./FeaturedMedia";
import useGetShow from "./hooks/useGetShow";

export default function FeaturedMediaSection() {
  const { data } = useGetShow("80232926");

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
