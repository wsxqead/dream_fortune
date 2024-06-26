import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { GuestModule } from './guest/guest.module'
import { WalletModule } from './wallet/wallet.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ChatController } from './chat.controller'

@Module({
  imports: [UsersModule, GuestModule, WalletModule, AuthModule, ConfigModule.forRoot()],
  controllers: [AppController, ChatController],
  providers: [AppService]
})
export class AppModule {}
