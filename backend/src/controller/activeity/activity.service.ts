import { Injectable } from '@nestjs/common';
import { CompleteMissionDto, MissionDto } from '../dto/mission.dto';

@Injectable()
export class ActivityService {
  async completeMission(userId: number, missionDto: CompleteMissionDto) {
    // 미션 인증하기
    return null;
  }
}
