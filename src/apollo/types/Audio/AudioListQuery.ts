import QueryResponseMany from '../QueryResponseMany'
import { Audio } from './AudioQuery'

type AudioListQuery = QueryResponseMany<'audio', Audio>

export default AudioListQuery
