import { useRef, CSSProperties } from "react";
import styles from "./MediaCarousel.module.css";
import cx from "classnames";
import { AspectRatioBox, useWindowSize } from "library";
import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";
import useSlideMediaCarousel from "./useSlideMediaCarousel";

export interface MediaCarouselProps {
  items: MediaCarouselItemProps[];
  inScreenItems?: number;
}

export interface MediaCarouselItemProps {
  id: string;
  link?: string;
  img: MediaCarouselItemImages;
  style?: CSSProperties;
}

interface MediaCarouselItemImages {
  tall?: string;
  wide?: string;
}

function debounce<A = unknown, R = void>(fn: (args: A) => R, timeout = 500) {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (args: A) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(null, args);
    }, timeout);
  };
}

// function throttle<A = unknown, R = void>(fn: (args: A) => R, interval = 300) {
//   let enableCall = true;

//   return function (args: A) {
//     if (!enableCall) return;

//     enableCall = false;
//     fn.call(null, args);
//     setTimeout(() => (enableCall = true), interval);
//   };
// }

function throttle<A = unknown, R = void>(fn: (args: A) => R, timeout = 1000) {
  let wait = false;

  return (args: A) => {
    if (wait) return;

    fn.call(null, args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, timeout);
  };
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
    width > 992 ? inScreenItems.large : inScreenItems.small;

  const { positionX, move, currentItem } = useSlideMediaCarousel({
    MediaCarouselRef,
    inScreenItems: currentInScreenItems,
    totalItems: items.length,
  });

  console.log(currentItem, items.length - currentInScreenItems);
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
          transform: width > 768 ? `translate(${positionX}px, 0px)` : "none",
        }}
      >
        {items.map(({ id, link, img }: MediaCarouselItemProps) => {
          return (
            <MediaCarouselItem
              key={id}
              img={img}
              link={link}
              id={id}
              style={{
                width: `${100 / currentInScreenItems}%`,
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

function MediaCarouselItem({ img, style }: MediaCarouselItemProps) {
  return (
    <div className={styles["MediaCarousel-item"]} style={style} tabIndex={0}>
      <div className="d-none d-md-block">
        <AspectRatioBox aspectRatio={{ w: 16, h: 9 }}>
          <div style={{ margin: "0.1rem" }}>
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

      <div className="d-block d-md-none">
        <AspectRatioBox aspectRatio={{ w: 8, h: 11 }}>
          <div style={{ margin: "0.2rem" }}>
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
