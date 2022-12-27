import { Button } from "library";

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

export default function NavigationMenu() {
  return (
    <>
      <div className="d-flex">
        {items.map((item) => (
          <Button key={item.name} color="light" fontWeight="normal">
            {item.name}
          </Button>
        ))}
      </div>
    </>
  );
}
