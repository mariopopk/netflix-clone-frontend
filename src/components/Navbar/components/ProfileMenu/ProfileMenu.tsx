import { useState, cloneElement } from "react";
import { Menu, MenuItem, Button } from "@mariopopk/react-lightning";
import {
  UilAngleDown,
  UilAngleUp,
  UilUser,
  UilSignOutAlt,
  UilEdit,
} from "@iconscout/react-unicons";

const items = [
  {
    name: "Mario",
    image:
      "http://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcmyl274RQm11_SjfAFgApXNOAFjhuSpRzDJNq9AGpX5OzXIax0H9xeGJJ6WmnCIQVgpbRvV_U-VYeZWrAoOz86Wpq2ee3s.png?r=72e",
  },
  {
    name: "Jacob",
    image:
      "http://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZsvIkEugjfDnctVI6wQkLWjht2WtHHm0yhVMbHcKEfU8I1El1xT0xuL76DvfghNXZH8ZVAPox0Z3YbmycdQtTzl92ciRBg.png?r=f22",
  },
  {
    name: "Manage Profiles",
    icon: <UilEdit color="white" />,
  },
  {
    name: "Account Center",
    icon: <UilUser color="white" />,
  },
  {
    name: "Sign Out",
    icon: <UilSignOutAlt color="white" />,
  },
];

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnPress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <Button
          onPress={handleOnPress}
          style={{ padding: "0px", marginLeft: "4px" }}
        >
          <img
            src="http://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcmyl274RQm11_SjfAFgApXNOAFjhuSpRzDJNq9AGpX5OzXIax0H9xeGJJ6WmnCIQVgpbRvV_U-VYeZWrAoOz86Wpq2ee3s.png?r=72e"
            alt=""
          />

          {isOpen ? (
            <UilAngleUp className="d-none d-xl-block" color="white" />
          ) : (
            <UilAngleDown className="d-none d-xl-block" color="white" />
          )}
        </Button>

        <Menu
          position="right"
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          {items.map((item) => {
            return (
              <MenuItem key={item.name}>
                <div className="d-flex align-items-center ">
                  {item.image && (
                    <img
                      alt=""
                      style={{ marginRight: "0.5rem" }}
                      src={item.image}
                    />
                  )}

                  {item.icon
                    ? cloneElement(item.icon, {
                        style: { marginRight: "0.5rem" },
                      })
                    : null}
                  <a href="/"> {item.name}</a>
                </div>
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </>
  );
}
