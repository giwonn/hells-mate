import { css } from "@emotion/react";
import {
  DateCardContentText,
  DateCardTitleText,
  DateCardTodayDot,
  StyledDateCard,
  StyledDateCardContentContainer,
} from "components/common/DateCard/styles";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  dateCardTitle: string;
  dateCardContent: string;
  isToday: boolean;
  isSelected: boolean;
}

function DateCard({ dateCardTitle, dateCardContent, isToday, isSelected, ...props }: Props) {
  return (
    <StyledDateCard isSelected={isSelected}>
      <StyledDateCardContentContainer>
        <DateCardTitleText isSelected={isSelected}>{dateCardTitle}</DateCardTitleText>
        <DateCardContentText isSelected={isSelected}>{dateCardContent}</DateCardContentText>
      </StyledDateCardContentContainer>
    </StyledDateCard>
  );
}

export default DateCard;
