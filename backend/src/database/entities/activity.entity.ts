import { Column, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { GroupMissionDayList } from './group_mission_day_list.entity';
import { User } from './user.entity';


export class Activity extends BaseEntity {
  @ManyToOne(() => User, (user) => user.activityId)
  userId: User;

  @ManyToOne(() => Group, (group) => group.activityId)
  groupId: Group;

  @Column({ type: 'varchar', name: 'point', comment: '포인트' })
  point: number;

  @ManyToOne(() => GroupMissionDayList, (mission) => mission.activityId)
  missionId: GroupMissionDayList;
}
