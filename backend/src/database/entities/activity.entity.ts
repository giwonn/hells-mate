import { Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { GroupMissionDateList } from './group_mission_date_list.entity';
import { User } from './user.entity';

@Entity('activity', { schema: 'hellthmate' })
export class Activity extends BaseEntity {
  @ManyToOne(() => User, (user) => user.Activity)
  User: User;

  @ManyToOne(() => Group, (group) => group.Activity)
  Group: Group;

  @Column({ type: 'int', name: 'point', comment: '포인트' })
  point: number;

  @ManyToOne(
    () => GroupMissionDateList,
    (groupMissionDayList) => groupMissionDayList.Activity,
  )
  GroupMissionDateList: GroupMissionDateList;
}
