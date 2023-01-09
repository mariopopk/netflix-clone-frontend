export interface Show {
  id?: string;
  name?: string;
  description?: string;
  releaseYear?: string;
  maturityLevel?: ShowMaturityLevel;
  keywords?: string | undefined[];
  genres?: string[];
  starring?: string[];
  cast?: string[];
  audio?: string[];
  subtitles?: string[];
  images?: ShowImages;
}

export interface ShowImages {
  tallBanner?: string;
  wideBanner?: string;
  tallThumbnail?: string;
  wideThumbnail?: string;
  logo?: string;
}

export type ShowMaturityLevel =
  | "TV-Y"
  | "TV-Y7"
  | "G"
  | "TV-G"
  | "PG"
  | "TV-PG"
  | "PG-13"
  | "TV-14"
  | "R"
  | "TV-MA"
  | "NC-17";
