import { Injectable } from '@nestjs/common';
import { createGroupDto, MissionDto } from '../dto/mission.dto';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../../database/entities';

@Injectable()
export class MissionService {
  constructor(
    private connection: Connection,

    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async selectMissionCategory() {
    // 미션카테고리 불러오기
    return null;
  }

  async selectMissionList() {
    // 날짜별 미션 불러오기
    return null;
  }
}
