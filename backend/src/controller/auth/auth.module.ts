import { Module } from '@nestjs/common';
import { AuthController } from '@/controller/auth/auth.controller';
import { AuthService } from '@/controller/auth/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class GroupModule {}
