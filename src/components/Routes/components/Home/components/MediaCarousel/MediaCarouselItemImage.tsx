import React, { useState } from "react";
// import styles from "./MediaCarouselItemImage.css";
import { MediaCarouselItemOverlay } from "./MediaCarouselItemOverlay";

interface MediaCarouselItemImageProps {
  image?: string;
  alt?: string;
}

export default function MediaCarouselItemImage({
  alt,
  image,
}: MediaCarouselItemImageProps) {
  const [error, setError] = useState<boolean>(false);

  const placeholder =
    "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRnfEBXpcJ74jyyz7MAdd6_jB5O3RPBzOEKhWUrI7nTXfN5c-JC7Da2NbFHiXOLCk5XvpCsOZzXj7haod8rletqu5dqp6rv2uo45.jpg?r=88a";

  const setWideImageError = () => setError(true);

  return (
    <>
      <img
        onError={setWideImageError}
        alt={alt}
        src={!error ? image : placeholder}
      />
      {error && <MediaCarouselItemOverlay children={alt} />}
    </>
  );
}
