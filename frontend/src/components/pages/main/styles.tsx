import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledMainPageContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.background};
  padding: 50px 16px 16px;
  height: 640px;
  overflow-y: scroll;
  position: relative;
`;

export const MainPageTopRowContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
`;

export const MainPageCalendarContaier = styled(motion.div)`
  margin-bottom: 48px;
`;

export const MainPageChallengesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
