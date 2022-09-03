import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  create(@Req() req: any) {
    return this.userService.test(req);
  }
}
