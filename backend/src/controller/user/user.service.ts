import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async validateUser(email: string, password: string) {
    return true;
  }
  async test(req: any) {
    return true;
  }
}
