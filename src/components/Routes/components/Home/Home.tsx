import { Typography } from "library";
import {
  FeaturedMediaHorizontal,
  FeaturedMediaVertical,
} from "./components/FeaturedMedia/FeaturedMedia";
import MediaCarousel from "./components/MediaCarousel/MediaCarousel";

const slides = [
  {
    id: "1",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "2",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "3",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "4",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },
  {
    id: "5",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "6",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },
  {
    id: "7",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },
  {
    id: "8",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "9",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "10",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "11",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "12",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },
  {
    id: "13",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },

  {
    id: "14",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },
  {
    id: "15",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
  },
  {
    id: "16",
    link: "/",
    img: {
      tall: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTr0ZBpFrDwPCifsuSZC388Hj8ZJkdOz0T9dfz4QBhFA6HOX3dO4_JYRpOXbWKV31MyAUt08XP8XKwWxIuK4QS9dqGEjSUTthcAmKR8eHdRCh0DEkU5goLx0XKgUYFRbPdhjWQ.jpg?r=a04",
      wide: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXihq-IaBKb4Y1BTm7FMDIME4dN_hPAnp0kKvnx1DR_Xsfxc-_Ee4ekvX81Y1vwE46h3CoziJ8JR1Y-IB1BsaaHRoN7MTGTJOjXKM1wmzYyDgYuKhNlvyA37qh_TGSaJtVgn.jpg?r=280",
    },
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
          // position: "relative",
          // overflow: "hidden",
        }}
      >
        <div style={{ margin: "0 5%" }}>
          <Typography
            color="light"
            variant="subtitle"
            fontWeight="semibold"
            component="h2"
          >
            Documentaries
          </Typography>
        </div>
        <MediaCarousel
          items={slides}
          //  inScreenItems={6}
        />
      </div>
    </>
  );
}
