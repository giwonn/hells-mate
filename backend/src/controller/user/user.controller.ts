import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { OptionalJwtAuthGuard } from '../../auth/optional-jwt-auth.guard';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @UseGuards(OptionalJwtAuthGuard)
  @Get()
  create(@Req() req: any) {
    return this.userService.test(req.user);
  }
}
