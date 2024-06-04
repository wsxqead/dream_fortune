import { Controller, Post, Req, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import globalConsts from '../const'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async login(@Req() req, @Res() res) {
    const { loginId, password } = req.body
    if (!loginId || !password) {
      res.status(200).json({ errCode: 400, errMessage: '잘못된 요청입니다.' })
    }
    const result = await this.authService.login(loginId, password)
    if (typeof result === 'string') {
      res.cookie(globalConsts.ACCESS_COOKIE_KEY, result, { ...globalConsts.COOKIE_CONFIG, httpOnly: false, maxAge: globalConsts.accessToken_expire * 1000 })
      res.status(200).json({ message: '로그인 성공' })
    } else {
      res.status(200).json({ errCode: result.errCode, errMessage: result.errMessage })
    }
  }

  @Post('sign-out')
  async logOut(@Req() req, @Res() res) {
    res.cookie(globalConsts.ACCESS_COOKIE_KEY, '', { ...globalConsts.COOKIE_CONFIG, httpOnly: false, maxAge: 0 })
    res.status(200).json({ message: '로그아웃 성공' })
  }

  @Post('id-check')
  async idDupCheck(@Req() req, @Res() res) {
    const { loginId } = req.body
    if (!loginId) {
      res.status(200).json({ errCode: 400, errMessage: '잘못된 요청입니다.' })
    }

    const result = await this.authService.loginIdDuplicateCheck(loginId)
    if (typeof result === 'string') {
      res.status(200).json({ message: '성공' })
    } else {
      res.status(200).json({ errCode: result.errCode, errMessage: result.errMessage })
    }
  }

  @Post('nickname-check')
  async nicknameCheck(@Req() req, @Res() res) {
    const { nickname } = req.body
    if (!nickname) {
      res.status(200).json({ errCode: 400, errMessage: '잘못된 요청입니다.' })
    }

    const result = await this.authService.NicknameDuplicateCheck(nickname)
    if (typeof result === 'string') {
      res.status(200).json({ message: '성공' })
    } else {
      res.status(200).json({ errCode: result.errCode, errMessage: result.errMessage })
    }
  }
}
