import styled from "@emotion/styled";

export const BoxStyle = styled.button`
  border-radius: 10px;
  border: none;
  background-color: ${({theme}) => theme.color.primary700 };
  color: #FFFFFF;
  width: 328px;
  height: 56px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 12%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: #2d3a7c
  } 
`;

