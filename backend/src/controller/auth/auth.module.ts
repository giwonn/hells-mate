import { Module } from '@nestjs/common';
import { AuthController } from '@/controller/auth/auth.controller';
import { AuthService } from '@/controller/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/database/entities';
import { UserModule } from '@/controller/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
