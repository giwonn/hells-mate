import { Injectable } from '@nestjs/common';
import { createGroupDto, MissionDto } from '../dto/mission.dto';
import { Group } from '../../database/entities';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GroupService {
  constructor(
    private connection: Connection,
    private jwtService: JwtService,
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async createGroup(userId: number, data: createGroupDto): Promise<Group> {
    // getMany();
    const getGroup = await this.groupRepository
      .createQueryBuilder('group')
      .where('group.id=:id', { id: 1 })
      .getOne();

    const group = new Group();
    group.title = data.title;
    group.content = data.description;
    const createdGroup = await this.groupRepository.save(group);

    await this.groupRepository.softDelete({ id: 2 });

    return createdGroup;
  }

  async createGroupMission(user: any, groupId: number, missionDto: MissionDto) {
    // 그룹의 미션 생성
    return null;
  }

  async select참여도(groupId: number) {
    // 참여도 통계 보기
    return null;
  }

  async createInviteUrl(groupId: number) {
    const group = await this.groupRepository.findOne({
      where: { id: groupId },
    });

    const payload = {
      token: group.token,
    };

    const token = await this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
    });

    return token;
  }
}
