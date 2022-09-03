import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { User } from './user.entity';

@Entity('user_group', { schema: 'hellthmate' })
export class UserGroup extends BaseEntity {
  @ManyToOne(() => Group, (group) => group.UserGroup)
  Group: Group;

  @ManyToMany(() => User, (user) => user.UserGroup)
  User: User[];

  @Column({ type: 'boolean', name: 'is_admin', comment: '팀장 권한 체크' })
  isAdmin: boolean;
}
