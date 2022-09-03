import { Column, OneToMany, ManyToOne, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { GroupMissionDayList } from './group_mission_day_list.entity';


export class MissionCategory extends BaseEntity {
  @Column({ type: 'varchar', name: 'name', comment: '미션 종류' })
  name: string;
  
  @OneToOne(() => GroupMissionDayList, (mission) => mission.category)
  mission: GroupMissionDayList;
}
