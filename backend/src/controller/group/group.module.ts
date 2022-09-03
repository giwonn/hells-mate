import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../../database/entities';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: {
        expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
      },
    }),
  ],
  controllers: [GroupController],
  providers: [GroupService, JwtStrategy],
})
export class GroupModule {}
