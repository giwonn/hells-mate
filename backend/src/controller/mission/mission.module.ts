import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group, MissionCategory, User } from '../../database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Group, MissionCategory])],
  controllers: [MissionController],
  providers: [MissionService],
})
export class MissionModule {}
