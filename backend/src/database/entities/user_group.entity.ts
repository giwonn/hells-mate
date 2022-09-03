import { Column, OneToMany, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { User } from './user.entity';

export class UserGroup extends BaseEntity {
  @OneToOne(() => Group, (group) => group.userGroupId)
  groupId: Group;

  @OneToMany(() => User, (user) => user.userGroupId)
  userId: User[];
}
