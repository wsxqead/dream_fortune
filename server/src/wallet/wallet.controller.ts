import { Controller, Get, Post, Body, Patch, Param, Request } from '@nestjs/common'
import { WalletService } from './wallet.service'
import { CreateWalletDto } from './dto/create-wallet.dto'
import { UpdateWalletDto } from './dto/update-wallet.dto'

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto)
  }

  @Get()
  findOne(@Request() req) {
    const caller = req.caller
    return this.walletService.findOne({ caller })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletService.update(+id, updateWalletDto)
  }
}
