import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group, GroupMissionDate, GroupMissionDateList, User, UserGroup } from '../../database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupMissionDate, GroupMissionDateList, User, UserGroup])],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
