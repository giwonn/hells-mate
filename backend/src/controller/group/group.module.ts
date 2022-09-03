import { Module } from '@nestjs/common';
import { GroupController } from '@/controller/group/group.controller'
import { GroupService } from '@/controller/group/group.service';

@Module({
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
