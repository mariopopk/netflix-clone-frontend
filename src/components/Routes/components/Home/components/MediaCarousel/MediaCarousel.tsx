import { useRef, CSSProperties } from "react";
import styles from "./MediaCarousel.module.css";
import cx from "classnames";
import { AspectRatioBox, useWindowSize } from "@mariopopk/react-lightning";
import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";
import useSlideMediaCarousel from "./useSlideMediaCarousel";

export interface MediaCarouselProps {
  items: MediaCarouselItem[];
  inScreenItems?: number;
}

export interface MediaCarouselItem {
  id: string;
  link?: string;
  img: MediaCarouselItemImages;
  style?: CSSProperties;
}

export interface MediaCarouselItemProps extends MediaCarouselItem {
  isFocusable: boolean;
}

interface MediaCarouselItemImages {
  tall?: string;
  wide?: string;
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
        {items.map(({ id, link, img }: MediaCarouselItem, i: number) => {
          const isFocusable =
            i >= currentItem && i < currentItem + currentInScreenItems;

          console.log(isFocusable, i);
          return (
            <CarouselItem
              isFocusable={isFocusable}
              key={id}
              img={img}
              link={link}
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

function CarouselItem({ img, style, isFocusable }: MediaCarouselItemProps) {
  const tabIndex = isFocusable ? 0 : -1;
  return (
    <div className={styles["MediaCarousel-item"]} style={style}>
      <div className="d-none d-md-block" tabIndex={tabIndex}>
        <AspectRatioBox aspectRatio={{ w: 16, h: 9 }}>
          <div style={{ margin: "0.2rem" }}>
            <img
              alt=""
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
              src={img.wide}
            />
          </div>
        </AspectRatioBox>
      </div>

      <div className="d-block d-md-none" tabIndex={0}>
        <AspectRatioBox aspectRatio={{ w: 47, h: 66 }}>
          <div style={{ padding: "0.2rem", height: "97%" }}>
            <img
              alt=""
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
              src={img.tall}
            />
          </div>
        </AspectRatioBox>
      </div>
    </div>
  );
}
