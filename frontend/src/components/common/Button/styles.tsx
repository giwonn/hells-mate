import styled from "@emotion/styled";
import { resetButtonStyle } from "../../../styles/utils/button";

export const StyledButton = styled.button`
  ${resetButtonStyle}
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary700};
  border-radius: 5px;
`;
