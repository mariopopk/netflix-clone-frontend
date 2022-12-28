import { Button, Typography } from "library";
import { UilPlay, UilInfoCircle } from "@iconscout/react-unicons";
import { ReactNode } from "react";

export default function Jumbotron() {
  return (
    <div style={{ marginTop: "-4.5rem" }}>
      <AspectRatioBox aspectRatio={{ w: 16, h: 8 }}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
                  url("https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTRoz3p-wPSLvOBzh1WOF67lLaGOVEP_eX4vPq69G2N0O1cdH0kpxWHZehVhdpnb0357igpDD2t9bjSuWgWTy4YxCuCYYhx45NrZ.webp?r=ba2")`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className="mx-auto px-4"
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              maxWidth: "1720px",
            }}
          >
            <div style={{ maxWidth: "36%" }}>
              <img
                style={{ width: "100%" }}
                alt="Invisible City"
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRTzDXKy2kDi4Qqcf6OuSYsJg9d8Fi1Aoh89XlCxJVcGBFEAi5Ez-LkyYiLS1D360CyRvTfR68uaNbGtjJZAw9aZZHLT-jirIoZxJqSVSYDNpNq1qys1myspzoVOa6fIc4Pz2RdwcsViqNS5gOnXgZsi-YQUzweS_Os1I3CJrieXm6y3nCO9mA.webp?r=dd1"
              />
              <Typography variant="subtitle" color="light" fontWeight="normal">
                After a family tragedy, a man discovers mythical creatures
                living among humans — and soon realizes they hold the key to his
                mysterious past.
              </Typography>

              <div className="d-flex">
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
                  icon={<UilInfoCircle />}
                >
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AspectRatioBox>
    </div>
  );
}

interface AspectRatioBoxProps {
  children?: ReactNode;
  aspectRatio: {
    w: number;
    h: number;
  };
}

export function AspectRatioBox({ children, aspectRatio }: AspectRatioBoxProps) {
  return (
    <div
      style={{
        paddingTop: `calc(${aspectRatio.h} / ${aspectRatio.w} * 100%)`,
        height: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
