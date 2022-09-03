import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/database/entities';
import { UserService } from '@/controller/user/user.service';

export interface UserInfo {
  id: number;
  connected_at: string;
  properties?: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile_image_needs_agreement: boolean;
    profile?: {
      nickname?: string;
      thumbnail_image_url?: string;
      profile_image_url?: string;
      is_default_image?: boolean;
    };
  };
}

@Injectable()
export class AuthService {
  constructor(
    private connection: Connection,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userService: UserService,
  ) {}

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

      return this.userService.getAccessToken(userInfo);
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

  async register(data: UserInfo) {
    const user = new User();
    user.token = data.id.toString();
    if (data.properties) {
      user.profile = data.properties?.profile_image ?? '';
      user.nickname = data.properties?.nickname ?? '';
    }

    const createdUser = await this.userRepository.save(user);

    return createdUser;
  }

  async validateUser(email: string, password: string) {
    return true;
  }
}
