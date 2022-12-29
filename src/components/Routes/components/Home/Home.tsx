import { Typography } from "library";
import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./components/FeaturedMedia/FeaturedMedia";

const carousel1 = [
  {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
  },
  {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXDSP0fO1t4u1QQ-VoOo2G7eG1mtiaBYzns9kwznAi91iOWleTFb5eEc7aBrPiI4iUABIzV9TotIrwVUMd9oQ4-qMerkHCF1kmg1WUUG30JN_Bk9QJcjBKH80BubryGAG8M4.jpg?r=061",
  },
  {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYXc_Em_eCLOZ1vogowGbqnOp1F4Cpyzgo1tyMDYT_J8ECOEemkdnLETjsL_c2y5nig39opJRPY7f0Uvbrva4ReeS5gs9vXgsbTJ1M8S5H7n5mmuqTDqJSSVEWfZ81CTu2fq.jpg?r=c53",
  },
  {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWHCW6xDItLlbOBUS-7s837Opyb1bKURQ-R7sL19AyFN4bhjFXXIyuFGkX0AxQ6zSIA4J3wQSYcWViWAv4RpP8akFXhd5RlBD7wBEuE8Af0_khj6f2u5zpFq6Csb79UjQcY-.jpg?r=a9f",
  },
  {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW5II7fDZ4A6lK5MHFwmos1aFDeWhuubtpHpoXyQhprlcVrpo5gWIojZs_wMtSkTg6ho4TQM9IQo0yj0wnHMMc7TKLN90i-Y5DJuu51N7XwczXgcD2ESSn67Rdg6MJHwKpPH.jpg?r=063",
  },
];

export default function Home() {
  return (
    <>
      <div className="d-none d-md-block">
        <FeaturedMediaHorizontal />
      </div>

      <div className="d-md-none d-block">
        <FeaturedMediaVertical />
      </div>

      <div
        style={{
          minHeight: "500px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <Typography
            color="light"
            variant="subtitle"
            fontWeight="semibold"
            component="h2"
          >
            Documentaries
          </Typography>
          <div style={{ display: "flex" }}>
            {carousel1.map((item) => {
              return (
                <div key={item.image} style={{ marginRight: "0.5rem" }}>
                  <img alt="" src={item.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
