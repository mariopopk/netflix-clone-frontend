import QueryResponseMany from "../QueryResponseMany";
import { Show } from "./ShowQuery";

type ShowsQuery = QueryResponseMany<"shows", Show>;

export default ShowsQuery;
