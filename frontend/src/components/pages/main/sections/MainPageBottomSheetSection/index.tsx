import { HTMLAttributes } from "react";
import BottomSheetResultSelector from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector";
import { MOCKUP_CHALLENGES } from "mockups/challenges";
import { Member } from "types/api";

import { FlexColumnContainer } from "./styles";
import BottomSheetChallenge from "./BottomSheetChallenge/index";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: Member;
}

function MainPageBottomSheetSection({ member, ...props }: Props) {
  return (
    <FlexColumnContainer>
      <BottomSheetChallenge {...MOCKUP_CHALLENGES[0]} onAreaClick={() => {}} />
      <BottomSheetResultSelector member={member} />
    </FlexColumnContainer>
  );
}

export default MainPageBottomSheetSection;
