import { Module } from '@nestjs/common';
import { UserService } from '@/controller/user/user.service';
import { UserController } from '@/controller/user/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
