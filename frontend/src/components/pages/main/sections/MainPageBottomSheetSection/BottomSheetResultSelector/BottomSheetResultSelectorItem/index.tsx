import { HTMLAttributes } from "react";
import Image from "next/image";
import {
  CheckBoxIconFlexConatiner,
  ContentFlexContainer,
  SelectorScoreText,
  SelectorText,
  StyledBottomSheetResultSelectorItem,
  TextFlexContainer,
} from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector/BottomSheetResultSelectorItem/styles";

import checkedIcon from "/public/icons/check_icon_checked.svg";
import uncheckedIcon from "/public/icons/check_icon_unchecked.svg";

interface Props extends HTMLAttributes<HTMLDivElement> {
  score: number;
  content: string;
  isChecked: boolean;
}

function BottomSheetResultSelectorItem({ score, content, isChecked, ...props }: Props) {
  return (
    <StyledBottomSheetResultSelectorItem isChecked={isChecked} {...props}>
      <ContentFlexContainer>
        <TextFlexContainer>
          <SelectorScoreText isChecked={isChecked}>+ {score} </SelectorScoreText>
          <SelectorText isChecked={isChecked}>{content}</SelectorText>
        </TextFlexContainer>
        <CheckBoxIconFlexConatiner>
          <Image
            alt="checkbox"
            src={isChecked ? checkedIcon.src : uncheckedIcon.src}
            width={16}
            height={16}
          />
        </CheckBoxIconFlexConatiner>
      </ContentFlexContainer>
    </StyledBottomSheetResultSelectorItem>
  );
}

export default BottomSheetResultSelectorItem;
