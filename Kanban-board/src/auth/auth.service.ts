import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';

export enum Provider
{
  GOOGLE = 'google'
}

@Injectable()
export class AuthService {
  // 수정 필요
  private readonly JWT_SECRET_KEY = 'VERY1SECRET1KEY';
  validateOAuthLogin(id: string, provider: Provider): string | PromiseLike<string> {
      try
      {
        const payload = {
            id,
            provider
        }
  
        const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
        return jwt;
      }
      catch (err)
      {
        throw new Error("Method not implemented.");
      }
  }
  constructor(
    private readonly jwtService: JwtService,
  ) { }
  googleLogin(req: { user: any; }) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
