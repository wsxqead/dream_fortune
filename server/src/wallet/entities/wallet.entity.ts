import Model from '../../db/BaseModel'
export class Wallet extends Model {
  static tableName = 'wallet'

  id: number
  memberId: number
  redCoin: number
  blueCoin: number
  goldCoin: number
  createdAt: Date
}
