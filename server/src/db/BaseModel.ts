import { Model } from 'objection'
import conn from './connection'

Model.knex(conn)

export default Model
