import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';
import { User } from './user.entity';

export class Group extends BaseEntity {
  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.Group)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  User: User[];

  @Column({ type: 'varchar', name: 'title', comment: '그룹 타이틀' })
  title: string;

  @Column({ type: 'text', name: 'content', comment: '내용' })
  content: string;
}
