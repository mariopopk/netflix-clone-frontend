import { ShowImages, ShowMaturityLevel } from "../../../types/Show";
import KeywordsQuery from "../Keyword/KeywordsQuery";
import QueryResponseOne from "../QueryResponseOne";

export interface Show extends KeywordsQuery {
  name?: string;
  description?: string;
  releaseYear?: string;
  maturityLevel?: ShowMaturityLevel;
  images?: ShowImages;
}

type ShowQuery = QueryResponseOne<"show", Show>;

export default ShowQuery;
