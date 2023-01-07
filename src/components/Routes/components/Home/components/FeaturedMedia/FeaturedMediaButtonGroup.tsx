import { Button } from "@mariopopk/react-lightning";
import { UilPlay, UilInfoCircle, UilPlus } from "@iconscout/react-unicons";

export default function FeaturedMediaButtonGroup() {
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
