import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
  async getAccessToken(@Query('code') code, @Res({ passthrough: true }) res) {
    const accessToken = await this.userService.getAccessToken(code);

    return {
      code: 200,
      message: 'OK',
      date: { accessToken },
    };
  }

  @ApiOperation({
    summary: '로그인 api',
  })
  @Get('login')
  login(@Req() req: any) {
    const accessToken = req.headers.accesstoken;
    return this.userService.login(accessToken);
  }
}
