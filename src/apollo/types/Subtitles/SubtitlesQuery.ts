import QueryResponseMany from '../QueryResponseMany'
import { Subtitle } from './SubtitleQuery'

type SubtitlesQuery = QueryResponseMany<'subtitles', Subtitle>

export default SubtitlesQuery
