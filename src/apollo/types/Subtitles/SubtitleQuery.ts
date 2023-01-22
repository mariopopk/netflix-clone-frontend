import QueryResponseOne from '../QueryResponseOne'

export interface Subtitle {
  name?: string
  id?: string
}

type SubtitleQuery = QueryResponseOne<'subtitle', Subtitle>

export default SubtitleQuery
