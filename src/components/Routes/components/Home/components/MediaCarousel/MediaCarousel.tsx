import { useRef, CSSProperties, useState, useEffect, ReactNode } from "react";
import styles from "./MediaCarousel.module.css";
import cx from "classnames";
import { AspectRatioBox, useWindowSize } from "@mariopopk/react-lightning";
import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";
import useSlideMediaCarousel from "./useSlideMediaCarousel";
import { Show } from "../../../../../../dummyData";

export interface MediaCarouselProps {
  items: MediaCarouselItem[];
  inScreenItems?: number;
}

// id: string;
//   name: string;
//   description: string;
//   releaseYear: string;
//   maturityLevel: MaturityLevel;
//   keywords: string;
//   starring: string[];
//   cast: string[];
//   audio: string[];
//   subtitles?: string[];
//   images: ShowImages;

export interface MediaCarouselItem
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
  > {
  style?: CSSProperties;
}

export interface MediaCarouselItemProps extends MediaCarouselItem {
  isFocusable: boolean;
}

export default function MediaCarousel({ items }: MediaCarouselProps) {
  // State
  const { width } = useWindowSize();
  const MediaCarouselRef = useRef<HTMLDivElement>(null);

  const inScreenItems = {
    // breakpoint -> inScreenItem
    large: 6,
    small: 3,
  };

  const currentInScreenItems =
    width >= 992 ? inScreenItems.large : inScreenItems.small;

  const screenSize = width >= 992 ? 100 : 90;

  const { positionX, move, currentItem } = useSlideMediaCarousel({
    MediaCarouselRef,
    inScreenItems: currentInScreenItems,
    totalItems: items.length,
  });

  return (
    <div className={styles["MediaCarousel"]}>
      <button
        className={cx(styles["MediaCarousel-button"], styles.left)}
        onClick={() => {
          move("left", currentInScreenItems);
        }}
      >
        <UilAngleLeftB color="white" />
      </button>

      <div
        className={styles["MediaCarousel-inner"]}
        ref={MediaCarouselRef}
        style={{
          transform: width >= 768 ? `translate(${positionX}px, 0px)` : "none",
          transition: width >= 768 ? `ease-out 0.75s` : "none",
        }}
      >
        {items.map(({ id, images, name }: MediaCarouselItem, i: number) => {
          const isFocusable =
            i >= currentItem && i < currentItem + currentInScreenItems;

          return (
            <CarouselItem
              isFocusable={isFocusable}
              key={id}
              name={name}
              images={images}
              id={id}
              style={{
                width: `${screenSize / currentInScreenItems}%`,
              }}
            />
          );
        })}
      </div>

      <button
        disabled={currentItem === items.length - currentInScreenItems}
        className={cx(styles["MediaCarousel-button"], styles.right)}
        onClick={() => {
          move("right", currentInScreenItems);
        }}
      >
        <UilAngleRightB color="white" />
      </button>
    </div>
  );
}

function CarouselItem({
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
          {error.wide && <CarouselItemOverlay>{name}</CarouselItemOverlay>}
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

          {error.tall && <CarouselItemOverlay>{name}</CarouselItemOverlay>}
        </AspectRatioBox>
      </div>
    </div>
  );
}

function CarouselItemOverlay({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "normal",
        padding: "0.25rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
