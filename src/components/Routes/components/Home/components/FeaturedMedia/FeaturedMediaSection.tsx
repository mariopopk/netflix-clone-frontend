import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./FeaturedMedia";
import useGetFeaturedMedia from "./hooks/useGetFeaturedMedia";

export default function FeaturedMediaSection() {
  const { data, loading, error } = useGetFeaturedMedia();
  return (
    <>
      <>
        <div className="d-none d-md-block">
          <FeaturedMediaHorizontal item={data?.show?.data?.attributes} />
        </div>
        <div className="d-md-none d-block">
          <FeaturedMediaVertical item={data?.show?.data?.attributes} />
        </div>
      </>
    </>
  );
}
