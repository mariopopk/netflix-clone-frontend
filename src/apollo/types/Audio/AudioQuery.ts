import QueryResponseOne from '../QueryResponseOne'

export interface Audio {
  name?: string
  id?: string
}

type AudioQuery = QueryResponseOne<'audio', Audio>

export default AudioQuery
