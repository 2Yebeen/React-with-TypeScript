import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { VerifyCallback, Strategy } from "passport-google-oauth20";
import { AuthService, Provider } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,  // 1
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }
  async validate( accessToken: string, refreshToken: string, profile: any, done: VerifyCallback,): Promise<any> 
  {
    try
    {
        console.log(profile);
        const { name, emails } = profile;
        const user = {
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
        accessToken,
        refreshToken,
        };
        const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);

        
        done(null, user);
    }
    catch(err)
    {
      console.log(err)
      done(null, false);
    }
  }
}