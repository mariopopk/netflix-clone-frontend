import { ReactNode } from "react";

export interface MediaCarouselItemOverlayProps {
  children: ReactNode;
}

export function MediaCarouselItemOverlay({
  children,
}: MediaCarouselItemOverlayProps) {
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
