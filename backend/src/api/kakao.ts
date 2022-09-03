import axios from 'axios';

export class KakaoApi {
  private static kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${ process.env.KAKAO_LOGIN_KEY }&redirect_uri=${ process.env.KAKAO_LOGIN_REDIRECT_URL }&response_type=code`;

  public static async login() {
    const response = await axios(this.kakaoUrl);
    return response;
  }
}
