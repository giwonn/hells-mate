import styled from "@emotion/styled";
import {BoxStyle } from '../components/common/BlueBox'
import MobileLayout from "../components/common/Layout/MobileLayout";
import fighting from '../../images/fighting.svg'
import Image from "next/image";
import Link from "next/link";
import { Title, SubDescript } from '../components/common/Description/'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 24px;
  top: 57px;
`

export default function Congratulation() {
  return (<>
    <MobileLayout>
    <Title>축하합니다!</Title>
    <SubDescript>전체 미션을 모두<br/>달성하셨어요!</SubDescript>
    <ImageContainer>
      <Image src={fighting} objectFit='scale-down' />
    </ImageContainer>
    <Link href='/home' passHref>
      <BoxStyle>
        <a>홈으로</a>
      </BoxStyle>
    </Link>
    </MobileLayout>
  </>)
}

