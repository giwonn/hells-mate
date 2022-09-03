const loginKey = process.env.NEXT_PUBLIC_KAKAO_LOGIN_KEY;
const redirectUri = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;

export const init = () => {
  const { Kakao } = window;

  if (loginKey && !Kakao?.isInitialized()) {
    Kakao?.init(loginKey);
  }

  return Kakao;
};

export default async function kakaoLogin() {
  await window.Kakao.Auth.authorize({ redirectUri });
}
