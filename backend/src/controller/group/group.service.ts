import { Injectable } from '@nestjs/common';
import { createGroupDto } from '../dto/group.dto';
import { Group, GroupMissionDate, GroupMissionDateList, MissionCategory, User, UserGroup } from '../../database/entities';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GroupService {
  constructor(
    private connection: Connection,

    @InjectRepository(Group)
    private groupRepository: Repository<Group>,

    @InjectRepository(UserGroup)
    private userGroupRepository: Repository<UserGroup>,

    @InjectRepository(GroupMissionDate)
    private groupMissionDateRepository: Repository<GroupMissionDate>,

    @InjectRepository(GroupMissionDateList)
    private groupMissionDateListRepository: Repository<GroupMissionDateList>,

    @InjectRepository(MissionCategory)
    private missionCategoryRepository: Repository<MissionCategory>,
    
  ) {}

  async createGroup(user: User, data: createGroupDto): Promise<Group> {
    
    const group = new Group();
    group.title = data.groupTitle;
    group.content = data.groupContent;
    group.startDate = data.startDate;
    group.endDate = data.endDate;
    const createdGroup = await this.groupRepository.save(group);
    
    const userGroup = new UserGroup();
    userGroup.Group = createdGroup;
    userGroup.User = [user];
    userGroup.isAdmin = true;
    const createdUserGroup = await this.userGroupRepository.save(userGroup);

    const groupMission = new GroupMissionDateList();
    groupMission.title = data.missionTitle;
    groupMission.content = data.missionContent;
    const createdMission = await this.groupMissionDateListRepository.save(groupMission);
    
    //check createdUserGroup and createdMission is valid before return then ->
    return createdGroup;


    // const getGroup = await this.groupRepository
    //   .createQueryBuilder('group')
    //   .where('group.id=:id', { id: 1 })
    //   .getOne();

    // await this.groupRepository.softDelete({ id: 2 });

    return createdGroup;
  }



  async getJoinedGroupList(user: User): Promise<{ group: Promise<Group>; isAdmin: boolean; }[]> {
    const userGroupList = await this.userGroupRepository
      .createQueryBuilder('user_group')
      .where('user_group.User=:user', { user: user })
      .getMany();
    const groupList = await Promise.all(
      userGroupList.map((userGroup) => {
        const group = this.groupRepository
          .createQueryBuilder('group')
          .where('group.UserGroup=:userGroup', { userGroup: userGroup })
          .getOne()
        return {
          group: group, 
          isAdmin: userGroup.isAdmin,
        };
      })
    )
    return groupList;
  }

  async getGroup(groupId: number): Promise<Group> {
    const group = await this.groupRepository
      .createQueryBuilder('group')
      .where('group.id=:id', { id: groupId })
      .getOne();
    return group;
  }


  async getDatePage(group: )


  async select참여도(groupId: number) {
    // 참여도 통계 보기
    return null;
  }
}
