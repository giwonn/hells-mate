import { HTMLAttributes, useState } from "react";
import Profile from "components/common/Profile";
import BottomSheetResultSelectorItem from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector/BottomSheetResultSelectorItem";
import {
  SelectorContainer,
  SelectorItemContainer,
} from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector/styles";
import { Member } from "types/api";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: Member;
}

function BottomSheetResultSelector({ member, ...props }: Props) {
  const [checkStatus, setCheckStatus] = useState([false, false, false]);

  return (
    <SelectorContainer>
      <Profile member={member} />
      <SelectorItemContainer>
        <BottomSheetResultSelectorItem
          score={5}
          content="완수보다 더 수행했어요!"
          isChecked={checkStatus[0]}
          onClick={() => {
            setCheckStatus([true, false, false]);
          }}
        />
        <BottomSheetResultSelectorItem
          score={3}
          content="미션을 완수했어요. "
          isChecked={checkStatus[1]}
          onClick={() => {
            setCheckStatus([false, true, false]);
          }}
        />
        <BottomSheetResultSelectorItem
          score={1}
          content="죄송해요, 다음엔 꼭 할게요"
          isChecked={checkStatus[2]}
          onClick={() => {
            setCheckStatus([false, false, true]);
          }}
        />
      </SelectorItemContainer>
    </SelectorContainer>
  );
}

export default BottomSheetResultSelector;
