import { css } from "@emotion/react";
import {
  DateCardContentText,
  DateCardTitleText,
  DateCardTodayDot,
  StyledDateCard,
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
    <StyledDateCard isSelected={isSelected} {...props}>
      <DateCardTitleText isSelected={isSelected} isToday={isToday}>
        {dateCardTitle}
      </DateCardTitleText>
      <DateCardContentText isSelected={isSelected}>{dateCardContent}</DateCardContentText>
    </StyledDateCard>
  );
}

export default DateCard;
