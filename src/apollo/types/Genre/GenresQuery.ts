import QueryResponseMany from "../QueryResponseMany";
import { Genre } from "./GenreQuery";

type GenresQuery = QueryResponseMany<"genres", Genre>;

export default GenresQuery;
