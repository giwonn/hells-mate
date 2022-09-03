import { Challenges } from "types/api";
import profile1 from "/public/images/mockUpProfileImage/profile1.jpg";

export const MOCKUP_CHALLENGES: Challenges = {
  title: "맥주 안 마시기",
  description: "30일 후에 중요 약속 있다면서 살빼야지 맥주 왜 마시냐",
  members: [
    {
      memberName: "김민주",
      profilesrc: profile1.src,
    },
    {
      memberName: "서희창",
      profilesrc: null,
    },
  ],
};
