import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  Redirect,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { OptionalJwtAuthGuard } from '../../auth/optional-jwt-auth.guard';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  create(@Req() req: any) {
    return this.userService.test(req.user);
  }

  @Get('/kakao/callback')
  @Redirect()
  async kakaoLogin(@Query('code') code, @Res({ passthrough: true }) res) {
    const accessToken = await this.userService.getAccessToken(code);

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
