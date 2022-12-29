import { Button } from "library";

const items = [
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
];

export default function NavigationMenu() {
  return (
    <>
      <div className="d-none d-lg-flex">
        {items.map((item) => (
          <Button key={item.name} color="light" fontWeight="normal">
            {item.name}
          </Button>
        ))}
      </div>

      <div className="d-none d-sm-flex d-lg-none ">
        <Button color="light" fontWeight="semibold" size="md">
          Browse
        </Button>
      </div>

      <div className="d-flex d-sm-none">
        <Button color="light" fontWeight="semibold" size="sm">
          Browse
        </Button>
      </div>
    </>
  );
}
