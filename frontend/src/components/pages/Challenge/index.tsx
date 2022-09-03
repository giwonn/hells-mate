import { css } from "@emotion/react";
import {
  ChallengeDescriptionText,
  ChallengeRibbon,
  ChallengeTitleText,
  FlexColumn,
  FlexContentColumn,
  FlexContentIconColumn,
  FlexContentInfoColumn,
  FlexLastColumn,
  FlexRibbonColumn,
  StyledChallenge,
} from "components/pages/Challenge/styles";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import forkKinfeIcon from "/public/images/forkKnifeIcon.svg";
import navigateNextIcon from "/public/images/navigateNext.svg";
import foodIcon from "/public/images/ep_food_icon.svg";
import ChallengeProfile from "components/pages/Challenge/ChallengeProfile";

interface Member {
  name: string;
  profilesrc: string | null;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  member: Member;
}

function Challenge({ ...props }: Props) {
  return (
    <StyledChallenge {...props}>
      <FlexRibbonColumn>
        <ChallengeRibbon />
      </FlexRibbonColumn>
      <FlexContentColumn>
        <FlexContentIconColumn>
          <Image src={forkKinfeIcon} />
        </FlexContentIconColumn>
        <FlexContentInfoColumn>
          <ChallengeTitleText>맥주 안마시기</ChallengeTitleText>
          <ChallengeDescriptionText>
            30일후에 중요 약속 있다면서 살빼야지 맥주 왜 마시나
          </ChallengeDescriptionText>
          <ChallengeProfile />
        </FlexContentInfoColumn>
        <FlexLastColumn>
          <Image src={navigateNextIcon} />
          <Image src={foodIcon} />
        </FlexLastColumn>
      </FlexContentColumn>
    </StyledChallenge>
  );
}

export default Challenge;
