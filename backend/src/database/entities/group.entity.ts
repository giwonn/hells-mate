import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import BaseEntity from './base.entity';
import { User } from './user.entity';
import { GroupMissionDate } from './group_mission_date.entity';
import { Activity } from './activity.entity';
import { UserGroup } from './user_group.entity';

@Entity('group', { schema: 'hellthmate' })
export class Group extends BaseEntity {
  @Column({ type: 'varchar', name: 'title', comment: '그룹명' })
  title: string;

  @Column({ type: 'varchar', name: 'content', comment: '그룹 설명' })
  content: string;

  @Column({
    type: 'varchar',
    name: 'token',
    comment: '그룹 고유 토큰 - 초대용',
  })
  token: string;

  @OneToMany(() => UserGroup, (userGroup) => userGroup.groupId)
  userGroupId: UserGroup[];

  @OneToOne(() => User, (user) => user.groupId)
  @JoinColumn()
  adminId: User;

  @Column({ type: 'varchar', name: 'start_date', comment: '시작일' })
  startDate: Date;

  @Column({ type: 'varchar', name: 'end_date', comment: '종료일' })
  endDate: Date;

  @OneToMany(
    () => GroupMissionDate,
    (groupMissionDate) => groupMissionDate.groupId,
  )
  groupMissionDateId: GroupMissionDate[];

  @OneToMany(() => Activity, (activity) => activity.groupId)
  userActivityId: Activity[];
}
