import QueryResponseOne from '../QueryResponseOne'

export interface Starring {
  name?: string
  id?: string
}

type StarringQuery = QueryResponseOne<'starring', Starring>

export default StarringQuery
