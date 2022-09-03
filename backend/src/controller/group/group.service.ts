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
import moment from 'moment';

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
    private groupMissionDateListRepository: Repository<GroupMissionDateList>,

    @InjectRepository(GroupMissionDate)
    private groupMissionDateRepository: Repository<GroupMissionDate>,
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
    group.startDate = '20220901';
    group.endDate = '20220907';
    const createdGroup = await this.groupRepository.save(group);

    const userGroup = new UserGroup();
    userGroup.Group = group;
    const user = new User();
    user.id = userId;
    userGroup.User = user;
    userGroup.isAdmin = true;
    await this.userGroupRepository.save(userGroup);

    const arr = [];

    let date = 20220901;
    for (let i = 0; i < 7; i++) {
      const groupMissionDate = new GroupMissionDate();
      // groupMissionDate.date = moment(data.startDate).format('YYYY-MM-DD')
      groupMissionDate.date = String(date);
      groupMissionDate.Group = group;
      arr.push(groupMissionDate);
      date++;
    }
    console.log(arr);
    await this.groupMissionDateRepository.save(arr);

    return createdGroup;
  }

  async getGroupList(userId = 1): Promise<any> {
    const result: any = {};

    const cnt = Math.ceil((Math.random()*3))

    const userGroupList = await this.groupRepository
      .createQueryBuilder('group')
      .limit(cnt)
      .orderBy('group.id', 'DESC')
      .getMany();

    const nameList = ['김민주','박주형','김미소','이윤정','강소리','이우형','윈터','헬린이','이진형','이진명','서하서하','임기원','성용','건우']
    const obj: any = [
      {
        name: ['김민주', '박주형', '이진명'],
      },
      { name: ['참가자', '권모술수', '이진형'] },
      { name: ['윈터', '운동싫어'] },
    ];
    const groupCategoryId: any = [1, 2, 1, 1];
    result.group = userGroupList.map((x: any, i) => {
      const cnt = Math.ceil(Math.random() * 4);
      let name = [];
      for (let j = 0; j < cnt; j++) {
        const cnt2 = Math.ceil(Math.ceil(Math.random() * 14));
        name.push(nameList[cnt2]);
      }
      x.name = name;
      name = [];
      x.User = obj[i];
      x.categoryId = groupCategoryId[i];
      return x;
    });
    return result;
    // const groupList = await Promise.all(
    //   userGroupList.map((userGroup) => {
    //     const group = this.groupRepository
    //       .createQueryBuilder('group')
    //       .where('group.UserGroup=:userGroup', { userGroup: userGroup })
    //       .getOne();
    //     return {
    //       group: group,
    //       isAdmin: userGroup.isAdmin,
    //     };
    //   }),
    // );
    // return groupList;
  }

  async getGroupById(groupId: number): Promise<Group> {
    const group = await this.groupRepository
      .createQueryBuilder('group')
      .where('group.id=:id', { id: groupId })
      .getOne();
    return group;
  }
}
