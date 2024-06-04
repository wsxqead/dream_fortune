import { IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  readonly loginId: string

  @IsString()
  readonly password: string

  @IsString()
  readonly nickname: string

  @IsString()
  readonly birthDate: string

  @IsString()
  readonly gender: string
}
