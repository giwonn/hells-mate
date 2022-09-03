import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupService {
  async validateUser(email:string, password:string) {
    return true;
  }
}
