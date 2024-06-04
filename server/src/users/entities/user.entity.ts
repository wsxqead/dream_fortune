import Model from '../../db/BaseModel'
export class User extends Model {
  static tableName = 'members'

  id: number
  loginId: string
  password: string
  nickname: string
  thumbUrl: string
  birthDate: string
  gender: string
  regPath: number
  status: number
  createdAt: Date
  updatedAt?: Date
}
