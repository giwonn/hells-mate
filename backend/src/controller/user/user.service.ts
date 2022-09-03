import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, password: string) {
    return true;
  }
  async test(req: any) {
    const subs = await this.userRepository.createQueryBuilder().getOne();
    return true;
  }
  async getUserById(userId: number) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id=:id', { id: userId })
      .getOne();
      
    return user;
  }
}
