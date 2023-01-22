import QueryResponseMany from '../QueryResponseMany'
import { Cast } from './CastQuery'

type CastListQuery = QueryResponseMany<'cast', Cast>

export default CastListQuery
