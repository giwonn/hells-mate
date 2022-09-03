import { ChallengeType } from "types/api";

import profile1 from "/public/images/mockUpProfileImage/profile1.jpg";

export const MOCKUP_CHALLENGES: ChallengeType[] = [
  {
    challengeTitle: "맥주 안 마시기",
    description: "30일 후에 중요 약속 있다면서 살빼야지 맥주 왜 마시냐",
    category: "food",
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
  },
  {
    challengeTitle: "계단 20층 3번 오르기",
    description: "우선 실전 운동부터 해보며 기초 체력 증진해보자",
    category: "exercise",
    members: [
      {
        memberName: "김민주",
        profilesrc: profile1.src,
      },
      {
        memberName: "서희창",
        profilesrc: null,
      },
      {
        memberName: "이진명",
        profilesrc: null,
      },
      {
        memberName: "박주형",
        profilesrc: null,
      },
    ],
  },
  {
    challengeTitle: "매일 채소 200g 먹기",
    description: "맛잇는채소채소채",
    category: "food",
    members: [
      {
        memberName: "김민주",
        profilesrc: profile1.src,
      },
      {
        memberName: "서희창",
        profilesrc: null,
      },
      {
        memberName: "이진명",
        profilesrc: null,
      },
      {
        memberName: "박주형",
        profilesrc: null,
      },
    ],
  },
];
