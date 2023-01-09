import QueryResponseMany from "../QueryResponseMany";
import { Keyword } from "./KeywordQuery";

type KeywordsQuery = QueryResponseMany<"keywords", Keyword>;

export default KeywordsQuery;
