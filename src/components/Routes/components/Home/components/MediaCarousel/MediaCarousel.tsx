import { useRef } from "react";
import styles from "./MediaCarousel.module.css";
import cx from "classnames";
import { useWindowSize } from "@mariopopk/react-lightning";
import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";
import useSlideMediaCarousel from "./useSlideMediaCarousel";
import MediaCarouselItem, { MediaCarouselData } from "./MediaCarouselItem";

export interface MediaCarouselProps {
  items?: MediaCarouselData[];
  inScreenItems?: number;
}

export default function MediaCarousel({ items }: MediaCarouselProps) {
  // State
  const { width } = useWindowSize();
  const MediaCarouselRef = useRef<HTMLDivElement>(null);

  const totalItems = items?.length || 0;

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
    totalItems: items?.length,
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
        {items?.map(({ id, images, name }, i: number) => {
          const isFocusable =
            i >= currentItem && i < currentItem + currentInScreenItems;
          return (
            <MediaCarouselItem
              isFocusable={isFocusable}
              key={id}
              name={name}
              images={images}
              style={{
                width: `${screenSize / currentInScreenItems}%`,
              }}
            />
          );
        })}
      </div>

      <button
        disabled={currentItem === totalItems - currentInScreenItems}
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
