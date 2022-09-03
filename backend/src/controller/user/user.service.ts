import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Connection, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection,
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async test(user: any) {
    console.log(user);
    return true;
  }

  async validateUser(email: string, password: string) {
    return true;
  }

  async login(user: any) {
    const accessToken = await this.getAccessToken(user);

    return {
      result: true,
      code: null,
      data: {
        idx: user.id,
        nickname: user.nickname,
        accessToken: accessToken,
      },
    };
  }

  async getAccessToken(code: string): Promise<string> {
    const body = {
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_CLIENT_ID,
      code,
    };

    const response = await axios({
      method: 'POST',
      url: process.env.KAKAO_TOKEN_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      data: new URLSearchParams(body).toString(),
    });

    // console.log(response);

    if (response.status === 200) {
      const userInfo = await this.getUserInfo(response.data.access_token);
      console.log('---');
      console.log(userInfo);
      console.log('---');
      if (!userInfo) {
        return;
      }

      return this.getAccessToken(userInfo);
    }

    return;
  }

  async getUserInfo(accessToken: string) {
    const headerUserInfo = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Bearer ${accessToken}`,
    };

    const responseUserInfo = await axios({
      method: 'GET',
      url: process.env.KAKAO_USERINFO_URL,
      timeout: 30000,
      headers: headerUserInfo,
    });

    if (responseUserInfo.status === 200) {
      return responseUserInfo.data;
    }
  }

  search(token: string) {
    return this.userRepository.findOne({ token });
  }

  async register(data: any) {
    const user = new User();
    user.token = data.id.toString();
    if (data.properties) {
      user.profile = data.properties?.profile_image ?? '';
      user.nickname = data.properties?.nickname ?? '';
    }

    const createdUser = await this.userRepository.save(user);

    return createdUser;
  }
}
