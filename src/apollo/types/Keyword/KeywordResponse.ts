import QueryResponseOne from "../QueryResponseOne";

export interface KeywordResponse {
  name?: string;
}

type QueryResponseKeyword = QueryResponseOne<"keyword", KeywordResponse>;

export default QueryResponseKeyword;
