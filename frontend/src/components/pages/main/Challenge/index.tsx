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
} from "components/pages/main/Challenge/styles";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import forkKinfeIcon from "/public/images/forkKnifeIcon.svg";
import dumbbellIcon from "/public/images/dumbbellIcon.svg";
import bigDumbbellIcon from "/public/images/ep_exercise_icon.svg";
import navigateNextIcon from "/public/images/navigateNext.svg";
import foodIcon from "/public/images/ep_food_icon.svg";
import ChallengeProfile from "components/pages/main/Challenge/ChallengeProfile";
import { Member, ChallengeType } from "types/api";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLDivElement>, ChallengeType {}

function Challenge({ challengeTitle, description, members, category, ...props }: Props) {
  return (
    <StyledChallenge {...props}>
      <FlexRibbonColumn>
        <ChallengeRibbon category={category} />
      </FlexRibbonColumn>
      <FlexContentColumn>
        <FlexContentIconColumn>
          <Image src={category === "food" ? forkKinfeIcon : dumbbellIcon} />
        </FlexContentIconColumn>
        <FlexContentInfoColumn>
          <ChallengeTitleText>{challengeTitle}</ChallengeTitleText>
          <ChallengeDescriptionText>{description}</ChallengeDescriptionText>
          <ChallengeProfile members={members} />
        </FlexContentInfoColumn>
        <FlexLastColumn>
          <Link href="#" passHref>
            <a>
              <Image src={navigateNextIcon} />
            </a>
          </Link>

          <Image src={category === "food" ? foodIcon : bigDumbbellIcon} width={90} height={90} />
        </FlexLastColumn>
      </FlexContentColumn>
    </StyledChallenge>
  );
}

export default Challenge;
