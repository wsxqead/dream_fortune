import { Injectable } from '@nestjs/common'
import { CreateWalletDto } from './dto/create-wallet.dto'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { Wallet } from './entities/wallet.entity'

@Injectable()
export class WalletService {
  async create(createWalletDto: CreateWalletDto) {
    const { memberId, redCoin, blueCoin, goldCoin } = createWalletDto
    const insertData = {
      memberId,
      redCoin,
      blueCoin,
      goldCoin
    }
    const wallet = await Wallet.query().insert(insertData)
    return {
      memberId: wallet.memberId,
      redCoin: wallet.redCoin,
      blueCoin: wallet.blueCoin,
      goldCoin: wallet.goldCoin
    }
  }

  async findOne({ caller }) {
    if (!caller) return null
    const wallet = await Wallet.query().findOne({ memberId: caller })
    if (!wallet) return null
    return {
      redCoin: wallet.redCoin,
      blueCoin: wallet.blueCoin,
      goldCoin: wallet.goldCoin
    }
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    console.log('updateWalletDto', updateWalletDto)
    return `This action updates a #${id} wallet`
  }
}
