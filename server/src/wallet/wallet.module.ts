import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { WalletService } from './wallet.service'
import { WalletController } from './wallet.controller'
import { AuthMiddleware } from '../auth/auth.middleware'

@Module({
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService]
})
export class WalletModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*')
  }
}
