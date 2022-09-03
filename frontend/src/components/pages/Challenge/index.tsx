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
import { Member } from "types/api";
import { totalmem } from "os";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: Member[];
}

function Challenge({ title, description, members, ...props }: Props) {
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
          <ChallengeTitleText>{title}</ChallengeTitleText>
          <ChallengeDescriptionText>{description}</ChallengeDescriptionText>
          <ChallengeProfile members={members} />
        </FlexContentInfoColumn>
        <FlexLastColumn>
          <Link href="#" passHref>
            <a>
              <Image src={navigateNextIcon} />
            </a>
          </Link>

          <Image src={foodIcon} />
        </FlexLastColumn>
      </FlexContentColumn>
    </StyledChallenge>
  );
}

export default Challenge;
