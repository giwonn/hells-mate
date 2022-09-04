import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CalendarMonthSelectorContainer = styled(motion.div)`
  display: flex;
  column-gap: 10px;
  margin-bottom: 16px;
`;

export const StyledCalendar = styled(motion.div)`
  display: flex;
  column-gap: 10px;
  padding: 2px; //스크롤바 때문에 잘리는 현상 대응.
  overflow-x: scroll;
`;

export const CalendarMonthSelectorMonthText = styled(motion.div)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black900};
`;
