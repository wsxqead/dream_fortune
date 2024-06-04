import { Injectable } from '@nestjs/common'
import AuthUtil from '../utils/auth'
import { User } from 'src/users/entities/user.entity'
import * as jwt from 'jsonwebtoken'
import globalConsts from '../const'

@Injectable()
export class AuthService {
  async login(loginId: string, password: string): Promise<{ errCode: number; errMessage: string } | string> {
    const member = await User.query().findOne({ loginId })
    if (!member) {
      return { errCode: 404, errMessage: '사용자를 찾을 수 없습니다.' }
    }

    const passwordMatch = await AuthUtil.compareWithHash(password, member.password)
    if (!passwordMatch) {
      return { errCode: 401, errMessage: '패스워드가 일치하지 않습니다.' }
    }

    const memberData = {
      id: member.id,
      loginId: member.loginId
    }

    const accessToken = jwt.sign(memberData, globalConsts.AUTH_SECRET, { expiresIn: '1d' })
    return accessToken
  }

  async loginIdDuplicateCheck(loginId: string): Promise<{ errCode: number; errMessage: string } | string> {
    const member = await User.query().findOne({ loginId })
    if (member) {
      return { errCode: 404, errMessage: '이미 사용중입니다.' }
    }

    return 'ok'
  }

  async NicknameDuplicateCheck(nickname: string): Promise<{ errCode: number; errMessage: string } | string> {
    const member = await User.query().findOne({ nickname })
    if (member) {
      return { errCode: 404, errMessage: '이미 사용중입니다.' }
    }

    return 'ok'
  }
}
