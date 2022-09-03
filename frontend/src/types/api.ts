export interface Member {
  memberName: string;
  profilesrc: string | null;
}

export interface Challenges {
  title: string;
  description: string;
  members: Member[];
}
