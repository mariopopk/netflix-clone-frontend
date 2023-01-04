import { useEffect, useState, RefObject } from "react";

export interface useSlideMediaCarouselProps {
  inScreenItems: number;
  totalItems: number;
  MediaCarouselRef: RefObject<HTMLDivElement>;
}

export default function useSlideMediaCarousel({
  inScreenItems,
  totalItems,
  MediaCarouselRef,
}: useSlideMediaCarouselProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [positionX, setPositionX] = useState(0);

  // Assumes each item is the same width
  const totalWidth = (containerWidth / inScreenItems) * totalItems;
  const offScreenItemsWidth = totalWidth - containerWidth;
  const itemWidth = (totalWidth / totalItems) | 1;
  const currentItem = Math.abs(Math.round(positionX / itemWidth));

  // Resizing
  useEffect(() => {
    // TODO: Throttle for performance
    const getMediaCarouselWidth = () => {
      setContainerWidth(MediaCarouselRef.current?.clientWidth || 0);
      setPositionX(0);
    };
    getMediaCarouselWidth();
    window.addEventListener("resize", getMediaCarouselWidth);
    return () => {
      window.removeEventListener("resize", getMediaCarouselWidth);
    };
  }, [MediaCarouselRef]);

  // Prevent navigation beyond or below the amount of items in the carousel
  const enforceBounds = (x: number) => {
    const lowerBound = 0;
    const upperBound = -offScreenItemsWidth;

    // Bounds
    if (x < upperBound) x = upperBound;
    if (x > lowerBound) x = lowerBound;

    return x;
  };

  function move(direction: "left" | "right", multiplier: number = 1) {
    setPositionX((positionX) => {
      const moveDirection = direction === "left" ? 1 : -1;
      let currentItem = Math.round(positionX / itemWidth);

      currentItem += moveDirection * multiplier;
      return enforceBounds(currentItem * itemWidth);
    });
  }

  return {
    positionX,
    move,
    currentItem,
  };
}
