import { ApolloError } from "@apollo/client";
import {
  AspectRatioBox,
  Jumbotron,
  Card,
  Skeleton,
} from "@mariopopk/react-lightning";
import { CSSProperties } from "react";
import { Show } from "../../../../../../apollo/types/Show/ShowQuery";
import FeaturedMediaButtonGroup from "./FeaturedMediaButtonGroup";
import FeaturedMediaText from "./FeaturedMediaText";
import { FeaturedMediaTitle } from "./FeaturedMediaTitle";

interface FeaturedMediaProps {
  style?: CSSProperties;
  item?: Show;
  loading?: boolean;
  error?: ApolloError;
}

export function FeaturedMediaHorizontal({
  style,
  item,
  loading,
  error,
}: FeaturedMediaProps) {
  return (
    <div style={style}>
      <AspectRatioBox aspectRatio={{ w: 16, h: 7 }}>
        {item && (
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
        )}
        {loading && <Skeleton />}

        {error && "Error"}
      </AspectRatioBox>
    </div>
  );
}

export function FeaturedMediaVertical({
  item,
  loading,
  error,
}: FeaturedMediaProps) {
  return (
    <>
      <div>
        <AspectRatioBox aspectRatio={{ w: 5, h: 7.1 }}>
          {item && (
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
          )}
          {loading && "Loading"}

          {error && "Error"}
        </AspectRatioBox>
      </div>
    </>
  );
}
