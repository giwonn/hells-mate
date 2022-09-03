import { Controller, Get, Query, Redirect, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/kakao/callback')
  @Redirect()
  async kakaoLogin(@Query('code') code, @Res({ passthrough: true }) res) {
    const accessToken = await this.authService.getAccessToken(code);

    console.log('-----');
    console.log(accessToken);
    console.log('-----');
    return true;
    // await axios.post(
    //   `${process.env.FRONTEND_URL}/login`,
    //   {},
    //   {
    //     headers: {
    //       Authorization: accessToken,
    //     },
    //   },
    // );

    // const userInfo = await this.authService.getUserInfo(accessToken);
    //
    // const checkUser = await this.authService.search(userInfo.id.toString());
    // if (!checkUser) {
    //   const user = await this.authService.register(userInfo);
    //   console.log(user);
    // }
    //
    // // console.log(user);
    //
    // return { url: process.env.KAKAO_LOGIN_REDIRECT_URI };
    return { url: 'http://localhost:3000' };
  }
}
