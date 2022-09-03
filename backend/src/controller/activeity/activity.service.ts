import { Activity } from '@/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointsDateRangeDto } from '../dto/activity.dto';
import { CompleteMissionDto } from '../dto/mission.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    
  ) {}
  async completeMission(userId: number, groupId: number, date: string) {
    const activity = await this.activityRepository
      .createQueryBuilder('activity')
      .where('activity.user')
      .andWhere
    return null;
  }

  async getPointsDateRange(userId: number, groupId: number, startDate: string, endDate: string) {
    return null;
  }
}
