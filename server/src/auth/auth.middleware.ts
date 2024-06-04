import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import globalConsts from '../const'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers['authorization']
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1]
      if (token) {
        try {
          const decoded = jwt.verify(token, globalConsts.AUTH_SECRET)
          req['caller'] = decoded['id']
        } catch (err) {
          //
        }
      }
    }

    next()
  }
}
