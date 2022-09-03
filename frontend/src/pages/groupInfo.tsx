import MobileLayout from "components/common/Layout/MobileLayout";
import styled from "@emotion/styled";
import Link from "next/link";
import { BlueGt } from "components/common/BlueGt";
import { Title, SubDescript  } from "components/common/Description";
const MoveContainer = styled.div`
  
`

const Input = styled.input`
  color: #F5F6FA;
`

const MoveFirst = styled.div`
  
`
export default function GroupInfo() {
  return (
    <>
      <MobileLayout>
        <MoveContainer>
          <Link href='/firstPage'>
            <MoveFirst>&lt;</MoveFirst>
          </Link>
          

        </MoveContainer>
        <Title>그룹에 대한<br/>정보를 알려주세요.</Title>
        <SubDescript>그룹의 이름을 입력해주세요.</SubDescript>
        <Input placeholder="그룹의 이름을 입력해주세요"/>
        <SubDescript>그룹에 대해 설명해주세요.</SubDescript>
        <Input placeholder="그룹에 대해 설명해주세요"/>

        <Link href='/'>
          <BlueGt>&gt;</BlueGt>
        </Link>

      </MobileLayout>
    </>
  )
}