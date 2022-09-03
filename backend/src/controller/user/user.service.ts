import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection,

    @InjectRepository(User)
    private creditCardRepository: Repository<User>,
  ) {}

  async validateUser(email: string, password: string) {
    return true;
  }
  async test(req: any) {
    const subs = await this.creditCardRepository.createQueryBuilder().getOne();
    return true;
  }
}
