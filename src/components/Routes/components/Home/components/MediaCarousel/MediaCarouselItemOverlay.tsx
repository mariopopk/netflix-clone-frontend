import { ReactNode } from "react";
import styles from "./MediaCarousel.module.css";

export interface MediaCarouselItemOverlayProps {
  children: ReactNode;
}

export function MediaCarouselItemOverlay({
  children,
}: MediaCarouselItemOverlayProps) {
  return <div className={styles["MediaCarousel-item-overlay"]}>{children}</div>;
}
