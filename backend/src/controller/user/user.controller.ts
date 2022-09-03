import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.userService.validateUser(createAuthDto.email, createAuthDto.password);
  }
}
