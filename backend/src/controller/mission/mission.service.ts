import { Injectable } from '@nestjs/common';
import { createGroupDto } from './dto/mission.dto';
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
}
