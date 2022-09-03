import { Column, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { Group } from './group.entity';

export class User extends BaseEntity {
  @Column({ type: 'varchar', name: 'auth_type', comment: '인증 방법' })
  authType: string;

  @Column({ type: 'varchar', name: 'name', comment: '이름' })
  name: string;

  @Column({ type: 'varchar', name: 'token', comment: '토큰' })
  token: string;

  @Column('varchar', { name: 'password', select: false })
  password: string;

  @OneToMany(() => Group, (group) => group.User)
  Group: Group[];
}
