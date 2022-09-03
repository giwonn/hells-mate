import Image from "next/image";
import letter from '../../images/letter.svg'
import lPolygon from '../../images/lPolygon.svg'
import {BoxStyle} from '../components/common/BlueBox'
import MobileLayout from "../components/common/Layout/MobileLayout";
import styled from "@emotion/styled";
import {Title} from '../components/common/Description/'
import Link from "next/link";
import { ImageContainer, MoveContainer } from "components/common/Container";

const Goback = styled.a`
font-size: 20px;
`
export default function InvitePage() {
  
  const onClick = (e:any) => {
  }

  return (<>
    <MobileLayout>
    <MoveContainer>
          <Link href='/groupInfo' passHref>
              <Goback><Image src={lPolygon}/></Goback>
          </Link>
          <span><b>3</b> / 3</span>
        </MoveContainer>
    <Title>그룹에 대한<br/>정보를 알려주세요.</Title>
    <ImageContainer>
      <Image src={letter} objectFit='scale-down' />
    </ImageContainer>
      <BoxStyle onClick={onClick}>
        <p>초대 링크 보내기</p>
      </BoxStyle>
    </MobileLayout>
  </>)

}