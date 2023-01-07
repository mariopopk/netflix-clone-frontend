import { AspectRatioBox } from "@mariopopk/react-lightning";
import { CSSProperties, useEffect, useState } from "react";
import { Show } from "../../../../../../dummyData";
import styles from "./MediaCarousel.module.css";
import { MediaCarouselItemOverlay } from "./MediaCarouselItemOverlay";

export interface MediaCarouselData
  extends Omit<
    Show,
    | "description"
    | "releaseYear"
    | "maturityLevel"
    | "keywords"
    | "starring"
    | "cast"
    | "audio"
    | "subtitles"
    | "genres"
  > {}

export interface MediaCarouselItemProps extends MediaCarouselData {
  isFocusable: boolean;
  style?: CSSProperties;
}

export default function MediaCarouselItem({
  id,
  images,
  style,
  isFocusable,
  name,
}: MediaCarouselItemProps) {
  const [error, setError] = useState<{ tall: boolean; wide: boolean }>({
    tall: false,
    wide: false,
  });
  const tabIndex = isFocusable ? 0 : -1;
  const placeholder =
    "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRnfEBXpcJ74jyyz7MAdd6_jB5O3RPBzOEKhWUrI7nTXfN5c-JC7Da2NbFHiXOLCk5XvpCsOZzXj7haod8rletqu5dqp6rv2uo45.jpg?r=88a";

  const setTallImageError = () =>
    setError(({ wide }) => ({ wide, tall: true }));
  const setWideImageError = () =>
    setError(({ tall }) => ({ tall, wide: true }));

  useEffect(() => {
    if (!images?.tallThumbnail) {
      setTallImageError();
    }

    if (!images?.wideThumbnail) {
      setWideImageError();
    }
  }, [images]);

  return (
    <div className={styles["MediaCarousel-item"]} style={style}>
      <div className="d-none d-md-block" tabIndex={tabIndex}>
        <AspectRatioBox aspectRatio={{ w: 16, h: 9 }}>
          <div style={{ margin: "0.2rem" }}>
            <img
              onError={setWideImageError}
              alt={name}
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
              src={!error.wide ? images?.wideThumbnail : placeholder}
            />
          </div>
          {error.wide && <MediaCarouselItemOverlay children={name} />}
        </AspectRatioBox>
      </div>

      <div className="d-block d-md-none " tabIndex={0}>
        <AspectRatioBox aspectRatio={{ w: 47, h: 66 }}>
          <div style={{ padding: "0.2rem", height: "100%" }}>
            <img
              onError={setTallImageError}
              alt={name}
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
              src={!error.tall ? images?.tallThumbnail : placeholder}
            />
          </div>
          {error.tall && <MediaCarouselItemOverlay children={name} />}
        </AspectRatioBox>
      </div>
    </div>
  );
}
