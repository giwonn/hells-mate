import MobileLayout from "components/common/Layout/MobileLayout";
import styled from "@emotion/styled";
import Link from "next/link";
import { BlueGt } from "components/common/BlueGt";
import { Title, SubDescript  } from "components/common/Description";
import { StyledInput  } from "components/common/Input/styles";
const MoveContainer = styled.div`
  
`
const MoveFirst = styled.div`
  
`

const IntroduceGroup = styled(StyledInput)`
  height: 213px;
`

const GroupDescript = styled(SubDescript) `
  font-size: 14px;
  font-weight: bold;
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
        <GroupDescript>그룹의 이름을 입력해주세요.</GroupDescript>
        <StyledInput placeholder="그룹의 이름을 입력해주세요"/>
        <GroupDescript>그룹에 대해 설명해주세요.</GroupDescript>
        <IntroduceGroup as='textarea' placeholder="그룹에 대해 설명해주세요"/>
        <Link href='/thirdPage'>
          <BlueGt>&gt;</BlueGt>
        </Link>
      </MobileLayout>
    </>
  )
}