import { Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Activity } from './activity.entity';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { UserGroup } from './user_group.entity';

export class User extends BaseEntity {
  @Column({ type: 'varchar', name: 'nickname', comment: '닉네임' })
  name: string;

  @Column({ type: 'varchar', name: 'profile', comment: '프로필' })
  profile: string;

  @Column({ type: 'varchar', name: 'token', comment: '카카오톡 OAuth 토큰' })
  token: string;

  @ManyToOne(() => UserGroup, (userGroup) => userGroup.userId)
  userGroupId: UserGroup;

  @OneToOne(() => Group, (group) => group.adminId)
  groupId: Group;

  @OneToMany(() => Activity, (activity) => activity.userId)
  userActivityId: Activity[];
}
