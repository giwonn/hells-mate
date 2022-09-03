import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { KakaoApi } from '@/api';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/kakao/callback')
  @Redirect()
  async getKakaoCode(@Query() data) {
    const response = await KakaoApi.login(data.code);
    console.log(response);
    return { url: process.env.KAKAO_LOGIN_REDIRECT_URI };
  }
}
