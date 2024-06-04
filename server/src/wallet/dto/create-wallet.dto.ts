import { IsNumber } from 'class-validator'

export class CreateWalletDto {
  @IsNumber()
  readonly memberId: number

  @IsNumber()
  readonly redCoin: number

  @IsNumber()
  readonly blueCoin: number

  @IsNumber()
  readonly goldCoin: number
}
