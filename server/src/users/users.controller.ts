import { Controller, Get, Post, Body, Patch, Param, Request } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get('/profile')
  profile(@Request() req) {
    const caller = req.caller
    return this.usersService.profile({ caller })
  }

  @Get('/nick-check')
  findNicknameCheck(@Request() req, @Param('nickname') nickname: string) {
    const caller = req.caller
    return this.usersService.findNicknameCheck({ memberId: caller, nickname })
  }

  @Patch('/update-nickname')
  updateNickname(@Request() req, @Body('nickname') nickname: string) {
    const caller = req.caller
    return this.usersService.updateNickname({ memberId: caller, nickname })
  }

  @Patch('/update-password')
  updatePassword(@Request() req, @Body('password') password: string) {
    const caller = req.caller
    return this.usersService.updatePassword({ memberId: caller, password })
  }

  @Patch('/update-thumbUrl')
  async updateUserProfile(@Request() req, @Body('thumbUrl') thumbUrl: string) {
    const caller = req.caller
    await this.usersService.updateUserProfile(caller, thumbUrl)
    return { message: 'Profile updated successfully' }
  }
}
