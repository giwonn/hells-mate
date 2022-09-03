import { Controller, Get, Query, Redirect, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/kakao/callback')
  @Redirect()
  async kakaoLogin(@Query('code') code, @Res({ passthrough: true }) res) {
    const accessToken = await this.authService.getAccessToken(code);
    res.cookie('Authentication', accessToken, {
      domain: 'localhost',
      path: '/',
      httpOnly: true,
    });

    const userInfo = await this.authService.getUserInfo(accessToken);

    const checkUser = await this.authService.search(userInfo.id.toString());
    if (!checkUser) {
      const user = await this.authService.register(userInfo);
      console.log(user);
    }

    // console.log(user);

    return { url: process.env.KAKAO_LOGIN_REDIRECT_URI };
  }
}
