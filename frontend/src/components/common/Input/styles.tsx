import styled from "@emotion/styled";
import { boxStyle } from "components/common/Box";
import { motion } from "framer-motion";

export const InputContainer = styled.div`
  min-width: 100px;
  width: 100%;
`;

export const StyledInput = styled(motion.input)`
  // 공통부분 (박스 테두리)
  ${boxStyle}

  width: 100%;
  padding: 17px;
  color: ${({ theme }) => theme.color.black900};
  font-family: inherit; //html form element 라서 font-family 별도 지정 필요
  font-weight: 400;
  font-size: 14px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.primary700};
  }

  // placeholder 글자 색상만 다르게.
  &::placeholder {
    color: #c9cee3;
  }
`;
