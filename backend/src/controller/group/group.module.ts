import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Group,
  GroupMissionDate,
  GroupMissionDateList,
  User,
  UserGroup,
} from '../../database/entities';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Group,
      User,
      UserGroup,
      GroupMissionDate,
      GroupMissionDateList,
    ]),
  ],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
