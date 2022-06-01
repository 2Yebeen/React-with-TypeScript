import { Controller, UseGuards, Post, Req, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard("google"))
  @Get("google")
  async signInWithGoogle() {}

  @UseGuards(AuthGuard("google"))
  @Get("google/callback")
  async signInWithGoogleRedirect(@Req() req:any) {
    return this.authService.googleLogin(req);
  }
}