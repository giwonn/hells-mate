import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group, User } from '../../database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [MissionController],
  providers: [MissionService],
})
export class MissionModule {}
