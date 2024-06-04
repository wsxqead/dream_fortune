import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'
import AuthUtil from '../utils/auth'
import { Wallet } from 'src/wallet/entities/wallet.entity'

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { loginId, nickname, password, birthDate, gender } = createUserDto
    const hashedPassword = await AuthUtil.createHashedPassword(password)
    const insertData = {
      loginId,
      nickname,
      password: hashedPassword,
      birthDate,
      gender
    }

    const members = await User.query().insert(insertData)

    await Wallet.query().insert({ memberId: members.id, redCoin: 1000 })

    return {
      id: members.id,
      loginId: members.loginId,
      nickname: members.nickname,
      thumbUrl: members.thumbUrl,
      birthDate: members.birthDate,
      gender: members.gender
    }
  }

  findAll() {
    console.log('Member')
    return User.query()
  }

  async profile({ caller }) {
    if (!caller) return null
    const members = await User.query().findById(caller)
    if (!members) return null
    return {
      id: members.id,
      loginId: members.loginId,
      nickname: members.nickname,
      thumbUrl: members.thumbUrl,
      birthDate: members.birthDate,
      gender: members.gender
    }
  }

  async findNicknameCheck({ memberId, nickname }) {
    if (!memberId) return null

    const dupCheck = await User.query().findOne({ nickname })
    if (dupCheck) {
      return { errCode: 401, errMessage: '이미 사용중인 닉네임입니다.' }
    }

    return 'ok'
  }

  async updateNickname({ memberId, nickname }) {
    if (!memberId) return null

    if (!nickname) return { errCode: 401, errMessage: '닉네임이 올바르지 않습니다.' }

    const dupCheck = await User.query().findOne({ nickname })
    if (dupCheck) {
      return { errCode: 401, errMessage: '이미 사용중인 닉네임입니다.' }
    }

    await User.query().where({ id: memberId }).update({ nickname })

    return 'ok'
  }

  async updatePassword({ memberId, password }) {
    if (!memberId) return null

    if (!password) return { errCode: 401, errMessage: '비밀번호가 올바르지 않습니다.' }

    const hashedPassword = await AuthUtil.createHashedPassword(password)
    await User.query().where({ id: memberId }).update({ password: hashedPassword })
    return 'ok'
  }

  async updateUserProfile(memberId: string, thumbUrl: string) {
    console.log(`Updating user ${memberId} profile with image URL ${thumbUrl}`)
    await User.query().where({ id: memberId }).update({ thumbUrl })
    return 'ok'
  }
}
