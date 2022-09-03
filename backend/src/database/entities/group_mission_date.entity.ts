import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { GroupMissionDateList } from './group_mission_date_list.entity';

@Entity('group_mission_date', { schema: 'hellthmate' })
export class GroupMissionDate extends BaseEntity {
  @ManyToOne(() => Group, (group) => group.GroupMissionDate)
  Group: Group;

  @Column({ type: 'varchar', name: 'date', comment: '날짜' })
  date: Date;

  @OneToMany(
    () => GroupMissionDateList,
    (groupMissionDateList) => groupMissionDateList.GroupMissionDate,
  )
  GroupMissionDateList: GroupMissionDateList[];
}
