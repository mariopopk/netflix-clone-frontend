import { ShowImages, ShowMaturityLevel } from '../../../types/Show'
import AudioListQuery from '../Audio/AudioListQuery'
import CastListQuery from '../Cast/CastListQuery'
import GenresQuery from '../Genre/GenresQuery'

import KeywordsQuery from '../Keyword/KeywordsQuery'
import QueryResponseOne from '../QueryResponseOne'
import StarringListQuery from '../Starring/StarringListQuery'

import SubtitlesQuery from '../Subtitles/SubtitlesQuery'

export interface Show
  extends KeywordsQuery,
    AudioListQuery,
    SubtitlesQuery,
    CastListQuery,
    StarringListQuery,
    GenresQuery {
  name?: string
  description?: string
  releaseYear?: string
  maturityLevel?: ShowMaturityLevel
  images?: ShowImages
}

type ShowQuery = QueryResponseOne<'show', Show>

export default ShowQuery
