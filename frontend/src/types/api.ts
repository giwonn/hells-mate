export interface Member {
  id: number;
  memberName: string;
  profilesrc: string | null;
}

export interface ChallengeType {
  challengeTitle: string;
  description: string;
  category: "food" | "exercise";
  members: Member[];
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface LoginResponse {}

export interface User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  nickname: string;
  profile: string;
  token: string;
}
