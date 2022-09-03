import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '@/auth/optional-jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  create(@Req() req: any) {
    return this.userService.test(req);
  }
}
