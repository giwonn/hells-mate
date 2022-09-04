import { HTMLAttributes } from "react";
import {
  DateCardContentText,
  DateCardTitleText,
  StyledDateCard,
} from "components/common/DateCard/styles";
import { motion } from "framer-motion";
import { defaultFadeInSlideToLeftVariants } from "styles/motions/motions";

interface Props extends HTMLAttributes<HTMLDivElement> {
  dateCardTitle: string;
  dateCardContent: string;
  isToday: boolean;
  isSelected: boolean;
}

function DateCard({ dateCardTitle, dateCardContent, isToday, isSelected, ...props }: Props) {
  return (
    <motion.div variants={defaultFadeInSlideToLeftVariants}>
      <StyledDateCard isSelected={isSelected} {...props}>
        <DateCardTitleText isSelected={isSelected} isToday={isToday}>
          {dateCardTitle}
        </DateCardTitleText>
        <DateCardContentText isSelected={isSelected}>{dateCardContent}</DateCardContentText>
      </StyledDateCard>
    </motion.div>
  );
}

export default DateCard;
