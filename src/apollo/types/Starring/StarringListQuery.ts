import QueryResponseMany from '../QueryResponseMany'
import { Starring } from './StarringQuery'

type StarringListQuery = QueryResponseMany<'starring', Starring>

export default StarringListQuery
