import QueryResponseOne from '../QueryResponseOne'

export interface Cast {
  name?: string
  id?: string
}

type CastQuery = QueryResponseOne<'cast', Cast>

export default CastQuery
