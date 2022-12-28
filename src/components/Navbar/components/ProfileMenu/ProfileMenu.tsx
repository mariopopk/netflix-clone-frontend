import { useState } from "react";
import { Menu, MenuItem, Button } from "library";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";

const items = [
  {
    name: "Home",
  },
  {
    name: "TV Shows",
  },
  {
    name: "Movies",
  },
  {
    name: "New & Popular",
  },
  {
    name: "My List",
  },
  {
    name: "Browse By Languages",
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
            <UilAngleUp color="white" />
          ) : (
            <UilAngleDown color="white" />
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
                <button>{item.name}</button>
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </>
  );
}
