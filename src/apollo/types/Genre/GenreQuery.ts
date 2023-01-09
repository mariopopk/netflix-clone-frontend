import QueryResponseOne from "../QueryResponseOne";
import ShowsQuery from "../Show/ShowsQuery";

export interface Genre extends ShowsQuery {
  name?: string;
  id?: string;
}

type GenreQuery = QueryResponseOne<"genre", Genre>;

export default GenreQuery;
