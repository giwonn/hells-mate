import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async create(email:string, password:string) {


    return true;
  }

  async validateUser(email: string, password: string): Promise<any> {
    
  }
}
