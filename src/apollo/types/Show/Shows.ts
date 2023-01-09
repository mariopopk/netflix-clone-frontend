import QueryResponseMany from "../QueryResponseMany";
import { ShowResponse } from "./Show";

type QueryResponseShows = QueryResponseMany<"shows", ShowResponse>;

export default QueryResponseShows;
