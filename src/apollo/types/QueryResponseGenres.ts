import QueryResponseMany from "./QueryResponseMany";
import QueryResponseShows from "./Show/Shows";

//  TODO: Switch all any types for appropriate types
interface GenreResponse extends QueryResponseShows {
  name?: string;
}

type Genres = QueryResponseMany<"genres", GenreResponse>;

export default Genres;
