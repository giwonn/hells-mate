export interface Member {
  memberName: string;
  profilesrc: string | null;
}

export interface ChallengeType {
  challengeTitle: string;
  description: string;
  category: "food" | "exercise";
  members: Member[];
}
