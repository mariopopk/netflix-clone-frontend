import { AspectRatioBox, Jumbotron, Card } from "@mariopopk/react-lightning";
import { CSSProperties } from "react";
import { Show } from "../../../../../../types/Show";
import FeaturedMediaButtonGroup from "./FeaturedMediaButtonGroup";
import FeaturedMediaText from "./FeaturedMediaText";
import { FeaturedMediaTitle } from "./FeaturedMediaTitle";

interface FeaturedMediaProps {
  style?: CSSProperties;
  item?: Show;
}

export function FeaturedMediaHorizontal({ style, item }: FeaturedMediaProps) {
  return (
    <div style={style}>
      <AspectRatioBox aspectRatio={{ w: 16, h: 7 }}>
        <Card
          imageBackground={item?.images?.wideBanner}
          style={{ width: "100%", height: "100%", borderWidth: "0" }}
        >
          <div style={{ padding: "0 4%", width: "100%", height: "100%" }}>
            <Jumbotron
              horizontalAlignment="left"
              verticalAlignment="bottom"
              innerWidth="35%"
            >
              <div style={{ marginBottom: "12.5%" }}>
                <FeaturedMediaTitle
                  title={item?.name}
                  titleImage={item?.images?.logo}
                />
                <FeaturedMediaText
                  description={item?.description}
                  keywords={item?.keywords}
                />
                <FeaturedMediaButtonGroup />
              </div>
            </Jumbotron>
          </div>
        </Card>
      </AspectRatioBox>
    </div>
  );
}

export function FeaturedMediaVertical({ item }: FeaturedMediaProps) {
  return (
    <>
      <div>
        <AspectRatioBox aspectRatio={{ w: 5, h: 7.1 }}>
          <Card
            imageBackground={item?.images?.tallBanner}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              border: 0,
              borderRadius: 0,
            }}
          >
            <div
              className="d-flex flex-column"
              style={{
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "auto",
                padding: "7% 4%",
                width: "100%",
              }}
            >
              <FeaturedMediaTitle
                title={item?.name}
                titleImage={item?.images?.logo}
              />
              <FeaturedMediaText
                description={item?.description}
                keywords={item?.keywords}
              />
              <FeaturedMediaButtonGroup />
            </div>
          </Card>
        </AspectRatioBox>
      </div>
    </>
  );
}
