import styled from "@emotion/styled";
import {BoxStyle, BoxLabel } from '../components/common/BlueBox'
import MobileLayout from "components/common/Layout/MobileLayout";
import fighting from '../../images/fighting.svg'
import Image from "next/image";

const MainDescript = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #191f28;
  margin-top: 92.6px; 
  margin-left: 15.89px; 
`

const SubDescript = styled.p`
  color: #677a90;
  font-size: 16px;
  margin-left: 15.89px;
  margin-top: 25.04px; 
`

const ImageContainer = styled.div`
  width: 205.01px;
  margin: 0 auto;
  position: relative;
  top: 57.89px;
`

function Congratulation() {
  return (<>
    <MobileLayout>
    <MainDescript>축하합니다!</MainDescript>
    <SubDescript>전체 미션을 모두<br/>달성하셨어요!</SubDescript>
    <ImageContainer>
      <Image src={fighting} width='205.01px' height='131.27px' />
    </ImageContainer>
    <BoxStyle>
      <BoxLabel>홈으로</BoxLabel>
    </BoxStyle>
    </MobileLayout>

  </>)
}

export default Congratulation