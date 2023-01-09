import QueryResponseMany from "../QueryResponseMany";
import { Genre } from "./GenreQuery";

type Genres = QueryResponseMany<"genres", Genre>;

export default Genres;
