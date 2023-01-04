import { Button, Logo, Navbar } from "@mariopopk/react-lightning";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Search from "./components/Search/Search";

export default function NavBar() {
  return (
    <>
      <Navbar>
        <div className="d-flex container justify-content-between ">
          <div className="d-inline-flex">
            <div className="d-none d-xl-block">
              <Button style={{ maxWidth: "125px", marginRight: "1rem" }}>
                <Logo type="full" />
              </Button>
            </div>

            <div className="d-xl-none">
              <Button style={{ width: "20px" }}>
                <Logo type="square" />
              </Button>
            </div>

            <NavigationMenu />
          </div>

          <div className="d-inline-flex align-items-center justify-content-end">
            <Search />
            <ProfileMenu />
          </div>
        </div>
      </Navbar>
    </>
  );
}
