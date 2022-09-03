import { Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { GroupMissionDayList } from './group_mission_day_list.entity';
import { User } from './user.entity';

@Entity('activity', { schema: 'hellthmate' })
export class Activity extends BaseEntity {
  @ManyToOne(() => User, (user) => user.userActivityId)
  userId: User;

  @ManyToOne(() => Group, (group) => group.userActivityId)
  groupId: Group;

  @Column({ type: 'varchar', name: 'point', comment: '포인트' })
  point: number;

  @ManyToOne(() => GroupMissionDayList, (mission) => mission.userActivityId)
  missionId: GroupMissionDayList;
}
