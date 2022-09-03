import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ImageContainer = styled(motion.div)`
  width: 85%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 24px;
  top: 150px;
`;

export const MoveContainer = styled.div`
  position: absolute;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  top: 7%;

  span {
    margin-left: 10px;
    line-height: 30px;

    b {
      font-weight: bold;
    }
  }
`;
