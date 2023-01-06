import {
  Button,
  Typography,
  AspectRatioBox,
  Jumbotron,
  Card,
} from "@mariopopk/react-lightning";
import { UilPlay, UilInfoCircle, UilPlus } from "@iconscout/react-unicons";
import { CSSProperties } from "react";
import { Show } from "../../../../../../dummyData";

interface FeaturedMediaProps {
  style?: CSSProperties;
  item: Show;
}

export function FeaturedMediaHorizontal({ style, item }: FeaturedMediaProps) {
  return (
    <div style={style}>
      <AspectRatioBox aspectRatio={{ w: 16, h: 7 }}>
        <Card
          imageBackground={item.images?.wideBanner}
          style={{ width: "100%", height: "100%", borderWidth: "0" }}
        >
          <div style={{ padding: "0 4%", width: "100%", height: "100%" }}>
            <Jumbotron
              horizontalAlignment="left"
              verticalAlignment="bottom"
              innerWidth="35%"
            >
              <div style={{ marginBottom: "11.5%" }}>
                <MediaTitle
                  title={item?.name}
                  titleImage={item?.images?.logo}
                />
                <MediaText
                  description={item?.description}
                  keywords={item?.keywords}
                />
                <MediaButtonGroup />
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
            imageBackground={item.images?.tallBanner}
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
              <MediaTitle title={item?.name} titleImage={item?.images?.logo} />
              <MediaText
                description={item?.description}
                keywords={item?.keywords}
              />
              <MediaButtonGroup />
            </div>
          </Card>
        </AspectRatioBox>
      </div>
    </>
  );
}

interface MediaTitleProps {
  title: string;
  titleImage: string;
}

function MediaTitle({ title, titleImage }: MediaTitleProps) {
  return (
    <>
      <div className="d-none d-xl-block">
        <img
          style={{ maxWidth: "100%", minWidth: "60%" }}
          alt={title}
          src={titleImage}
        />
      </div>

      <div className="d-xl-none d-xl-none">
        <img
          style={{ maxHeight: "7rem", maxWidth: "100%" }}
          alt={title}
          src={titleImage}
        />
      </div>
    </>
  );
}

interface MediaTextProps {
  description: string;
  keywords: string;
}

function MediaText({ description, keywords }: MediaTextProps) {
  return (
    <>
      <div className="d-none d-xl-block">
        <Typography variant="subtitle" color="light" fontWeight="normal">
          {description}
        </Typography>
      </div>

      <div className="d-xl-none d-xl-none">
        <Typography variant="base" color="light" fontWeight="normal">
          {keywords.split(",").map((keyword, i) => {
            if (i === 0) return <span key={keyword}>{keyword}</span>;
            return <span key={keyword}> • {keyword}</span>;
          })}
        </Typography>
      </div>
    </>
  );
}

function MediaButtonGroup() {
  return (
    <>
      <div className="d-none d-xl-block">
        <div className="d-flex flex-wrap ">
          <Button
            style={{ marginRight: "0.5rem", maxWidth: "45%" }}
            backgroundColor="light"
            size="lg"
            icon={<UilPlay />}
          >
            Play
          </Button>

          <Button
            style={{ maxWidth: "45%" }}
            backgroundColor="secondary"
            size="lg"
            color="light"
            icon={<UilInfoCircle />}
          >
            More Info
          </Button>
        </div>
      </div>

      <div className="d-xl-none d-xl-none">
        <div className="d-flex flex-wrap " style={{ minWidth: "250px" }}>
          <Button
            style={{ marginRight: "2%", width: "49%" }}
            backgroundColor="light"
            size="md"
            icon={<UilPlay />}
          >
            Play
          </Button>

          <Button
            style={{ width: "49%" }}
            backgroundColor="secondary"
            size="md"
            color="light"
            icon={<UilPlus />}
          >
            My List
          </Button>
        </div>
      </div>
    </>
  );
}
