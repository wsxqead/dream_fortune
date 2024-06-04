import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { AuthMiddleware } from '../auth/auth.middleware'
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*')
  }
}
