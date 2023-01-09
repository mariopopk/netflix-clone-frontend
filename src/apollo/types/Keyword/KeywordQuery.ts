import QueryResponseOne from "../QueryResponseOne";

export interface Keyword {
  name?: string;
  id?: string;
}

type KeywordQuery = QueryResponseOne<"keyword", Keyword>;

export default KeywordQuery;
