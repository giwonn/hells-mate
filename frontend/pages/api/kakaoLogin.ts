const loginKey = process.env.NEXT_PUBLIC_KAKAO_LOGIN_KEY;
// const redirectUri = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;
const redirectUri = "http://localhost:3000/login";

const init = () => {
  const { Kakao } = window;
  if (loginKey && !Kakao?.isInitialized()) {
    Kakao?.init(loginKey);
  }

  return Kakao;
};

export default async () => {
  const kakao = init();
  await kakao.Auth.authorize({ redirectUri, isPopup: true });
};
