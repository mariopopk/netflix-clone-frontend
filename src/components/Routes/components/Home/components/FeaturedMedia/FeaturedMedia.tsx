import { Button, Typography, AspectRatioBox, Jumbotron, Card } from "library";
import { UilPlay, UilInfoCircle } from "@iconscout/react-unicons";
import { CSSProperties } from "react";

interface JumbotronProps {
  style?: CSSProperties;
}

const featuredCard = {
  title: "Invisible City",
  keywords: ["Suspenseful", "Mystery", "Intriguing"],
  description:
    "After a family tragedy, a man discovers mythical creatures living among humans — and soon realizes they hold the key to his mysterious past.",
  titleImage:
    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRTzDXKy2kDi4Qqcf6OuSYsJg9d8Fi1Aoh89XlCxJVcGBFEAi5Ez-LkyYiLS1D360CyRvTfR68uaNbGtjJZAw9aZZHLT-jirIoZxJqSVSYDNpNq1qys1myspzoVOa6fIc4Pz2RdwcsViqNS5gOnXgZsi-YQUzweS_Os1I3CJrieXm6y3nCO9mA.webp?r=dd1",
  horizontalImage:
    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTRoz3p-wPSLvOBzh1WOF67lLaGOVEP_eX4vPq69G2N0O1cdH0kpxWHZehVhdpnb0357igpDD2t9bjSuWgWTy4YxCuCYYhx45NrZ.webp?r=ba2",
  verticalImage:
    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdbyaIho7w8lDofejtQkmCl6Gj0DTlJrVIWfHeFfe_yfLmnAe8sN96CYDt9V7sPZ-cqgFMOK90gASbnKwc_Ks33eyFkXB8jTeFY4.jpg?r=07d",
};

export function FeaturedMediaHorizontal({ style }: JumbotronProps) {
  return (
    <div style={style}>
      <AspectRatioBox aspectRatio={{ w: 16, h: 7 }}>
        <Card
          imageBackground={featuredCard.horizontalImage}
          style={{ width: "100%", height: "100%", borderWidth: "0" }}
        >
          <div className="container" style={{ height: "100%" }}>
            <Jumbotron
              horizontalAlignment="left"
              verticalAlignment="middle"
              innerWidth="35%"
            >
              <MediaTitle />
              <MediaText />
              <MediaButtonGroup />
            </Jumbotron>
          </div>
        </Card>
      </AspectRatioBox>
    </div>
  );
}

export function FeaturedMediaVertical({ style }: JumbotronProps) {
  return (
    <>
      <div>
        <AspectRatioBox aspectRatio={{ w: 5, h: 6 }}>
          <Card
            imageBackground={featuredCard.verticalImage}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              borderWidth: "0",
            }}
          >
            <div
              className="d-flex flex-column"
              style={{
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "auto",
                padding: "1rem 5%",
              }}
            >
              <MediaTitle />
              <MediaText />
              <MediaButtonGroup />
            </div>
          </Card>
        </AspectRatioBox>
      </div>
    </>
  );
}

function MediaTitle() {
  return (
    <img
      style={{ width: "85%" }}
      alt={featuredCard.title}
      src={featuredCard.titleImage}
    />
  );
}

function MediaText() {
  return (
    <>
      <div className="d-none d-xl-block">
        <Typography variant="subtitle" color="light" fontWeight="normal">
          {featuredCard.description}
        </Typography>
      </div>

      <div className="d-xl-none d-xl-none">
        <Typography variant="base" color="light" fontWeight="normal">
          {featuredCard.keywords.map((keyword, i) => {
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
    <div className="d-flex flex-wrap ">
      <Button
        style={{ marginRight: "1rem" }}
        backgroundColor="light"
        size="lg"
        icon={<UilPlay />}
      >
        Play
      </Button>

      <Button
        backgroundColor="secondary"
        size="lg"
        color="light"
        icon={<UilInfoCircle />}
      >
        More Info
      </Button>
    </div>
  );
}
