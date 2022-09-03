import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { GroupMissionDayList } from './group_mission_day_list.entity';

@Entity('group_mission_date', { schema: 'hellthmate' })
export class GroupMissionDate extends BaseEntity {
  @ManyToOne(() => Group, (group) => group.groupMissionDateId)
  groupId: string;

  @Column({ type: 'varchar', name: 'date', comment: '날짜' })
  date: Date;

  @OneToMany(
    () => GroupMissionDayList,
    (groupMissionDayList) => groupMissionDayList.groupMissionDateId,
  )
  missionId: GroupMissionDayList[];
}
