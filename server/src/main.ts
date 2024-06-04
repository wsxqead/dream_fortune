import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cors from 'cors'
import { ValidationPipe } from '@nestjs/common'
import * as dotenv from 'dotenv'

async function bootstrap() {
  dotenv.config()

  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )

  const corsOptions = {
    origin: ['http://localhost:4004', 'http://localhost:4040', 'http://fortune.dream-hubs.com', 'http://fortune-api.dream-hubs.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }

  app.use(cors(corsOptions))

  await app.listen(4040)
}
bootstrap()
