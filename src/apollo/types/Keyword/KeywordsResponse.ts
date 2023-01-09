import QueryResponseMany from "../QueryResponseMany";
import { KeywordResponse } from "./KeywordResponse";

type KeywordsResponse = QueryResponseMany<"keywords", KeywordResponse>;

export default KeywordsResponse;
