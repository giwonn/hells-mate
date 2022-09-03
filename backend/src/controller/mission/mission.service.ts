import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Group, MissionCategory } from '../../database/entities';

@Injectable()
export class MissionService {
  constructor(
    private connection: Connection,

    @InjectRepository(MissionCategory)
    private missionCategoryRepository: Repository<MissionCategory>,
  ) {}

  async selectMissionCategory(): Promise<any> {
    const result = await this.missionCategoryRepository.find();
    return result;
  }

  async selectMissionList() {
    // 날짜별 미션 불러오기
    return null;
  }

  async selectMissionDetail(date: any) {
    return null;
  }
}
