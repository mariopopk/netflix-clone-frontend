import { ShowImages, ShowMaturityLevel } from "../../../types/Show";
import KeywordsResponse from "../Keyword/KeywordsResponse";
import QueryResponseMany from "../QueryResponseMany";

export interface ShowResponse extends KeywordsResponse {
  name: string;
  description: string;
  releaseYear: string;
  maturityLevel: ShowMaturityLevel;
  images: ShowImages;
}

type QueryResponseShows = QueryResponseMany<"shows", ShowResponse>;

export default QueryResponseShows;
