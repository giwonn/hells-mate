import { Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import BaseEntity from './base.entity';
import { GroupMissionDate } from './group_mission_date.entity';
import { MissionCategory } from './mission_category.entity';
import { Activity } from './activity.entity';


export class GroupMissionDayList extends BaseEntity {
  @ManyToOne(() => GroupMissionDate, (date) => date.missionId)
  groupMissionDateId: GroupMissionDate;

  @Column({ type: 'varchar', name: 'title', comment: '제목' })
  title: string;

  @Column({ type: 'varchar', name: 'content', comment: '내용' })
  content: string;

  @OneToOne(() => MissionCategory, (category) => category.missionId)
  @JoinColumn()
  categoryId: MissionCategory;

  @OneToMany(() => Activity, (activity) => activity.missionId)
  activityId: Activity;
}
