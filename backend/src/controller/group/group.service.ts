import { Injectable } from '@nestjs/common';
import { createGroupDto } from '../dto/group.dto';
import {
  Group,
  GroupMissionDate,
  GroupMissionDateList,
  MissionCategory,
  User,
  UserGroup,
} from '../../database/entities';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GroupService {
  constructor(
    private connection: Connection,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Group)
    private groupRepository: Repository<Group>,

    @InjectRepository(UserGroup)
    private userGroupRepository: Repository<UserGroup>,

    @InjectRepository(GroupMissionDateList)
    private groupMissionDateListRepository: Repository<GroupMissionDateList>, // @InjectRepository(User) // private groupMissionDateListRepository: Repository<GroupMissionDateList>,
  ) {}

  async getUserById(userId: number): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id=:id', { id: userId })
      .getOne();
    return user;
  }

  async createGroup(userId: number, data: createGroupDto): Promise<any> {
    const group = new Group();
    group.title = data.title;
    group.content = data.content;
    group.startDate = new Date(data.startDate);
    group.endDate = new Date(data.endDate);
    const createdGroup = await this.groupRepository.save(group);

    const userGroup = new UserGroup();
    userGroup.Group = group;
    userGroup.User = await this.getUserById(userId);
    userGroup.isAdmin = true;
    const createdUserGroup = await this.userGroupRepository.save(userGroup);

    const groupMission = new GroupMissionDateList();
    groupMission.Group = group;
    groupMission.title = data.missionTitle;
    groupMission.content = data.missionContent;
    const createdMission = await this.groupMissionDateListRepository.save(
      groupMission,
    );

    //check createdUserGroup and createdMission is valid before return then ->
    return createdGroup;

    // const getGroup = await this.groupRepository
    //   .createQueryBuilder('group')
    //   .where('group.id=:id', { id: 1 })
    //   .getOne();

    // await this.groupRepository.softDelete({ id: 2 });

    return createdGroup;
  }

  async getJoinedGroupList(userId: number): Promise<any> {
    const userGroupList = await this.userGroupRepository
      .createQueryBuilder('user_group')
      .leftJoinAndSelect('user_group.User', 'user')
      .where('user_group.id=:userId', { user: userId })
      .getMany();
    console.log(userGroupList);
    const groupList = await Promise.all(
      userGroupList.map((userGroup) => {
        const group = this.groupRepository
          .createQueryBuilder('group')
          .where('group.UserGroup=:userGroup', { userGroup: userGroup })
          .getOne();
        return {
          group: group,
          isAdmin: userGroup.isAdmin,
        };
      }),
    );
    return groupList;
  }

  async getGroupById(groupId: number): Promise<Group> {
    const group = await this.groupRepository
      .createQueryBuilder('group')
      .where('group.id=:id', { id: groupId })
      .getOne();
    return group;
  }
}
