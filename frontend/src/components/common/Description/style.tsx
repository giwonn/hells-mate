import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.color.black900};
  margin-top: 92px; 
  margin-left: 16px; 
`;

export const SubDescript = styled.p`
  color: ${({theme}) => theme.color.black500};
  font-size: 16px;
  margin-left: 16px;
  margin-top: 25px; 
`;