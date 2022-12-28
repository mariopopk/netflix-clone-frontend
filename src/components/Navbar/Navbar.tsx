import { Button, Logo } from "library";
import { UilBell } from "@iconscout/react-unicons";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Search from "./components/Search/Search";
import { relative } from "path";

export default function NavBar() {
  return (
    <>
      <div
        className="d-flex mx-4"
        style={{ zIndex: 1, position: "relative", height: "4.5rem" }}
      >
        <div style={{ maxWidth: "125px", paddingRight: "1rem" }}>
          <Logo type="full" />
        </div>

        <NavigationMenu />

        <div
          className="d-flex align-items-center justify-content-end"
          style={{ width: "100%" }}
        >
          <Search />
          <Button>
            <UilBell color="white" />
          </Button>

          <ProfileMenu />
        </div>
      </div>
    </>
  );
}
