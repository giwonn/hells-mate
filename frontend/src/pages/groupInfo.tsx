import MobileLayout from "components/common/Layout/MobileLayout";
import styled from "@emotion/styled";
import Link from "next/link";
import { BlueGt } from "components/common/BlueGt";
import { Title, SubDescript  } from "components/common/Description";
import { StyledInput  } from "components/common/Input/styles";
import Image from "next/image";
import rPolygon from '../../images/rPolygon.svg'
import lPolygon from '../../images/lPolygon.svg'
import { useState } from "react";
import { useRouter } from "next/router";

const MoveContainer = styled.div`
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
`

const IntroduceGroup = styled(StyledInput)`
  height: 213px;
  resize: none;
`

const GroupDescript = styled(SubDescript) `
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 0;
`

export default function GroupInfo() {
  const [name, setName] = useState('')
  const [groupDes, setGroupDes] = useState('');

  const onSubmit = (e:any) => {
    const router = useRouter();
    router.push({
      pathname: '/',
      query: {
        name,
        groupDes,
      },
    })

  }
  const aboutName = (e:any) => {
    const value = e.target.value;
    setName(value);
    console.log(name);

  }

  const aboutGroup = (e:any) => {
    const value = e.target.value;
    setGroupDes(value);
  }

  const Goback = styled.a`
    font-size: 20px;
  `
  return (
    <>
      <MobileLayout>
        <MoveContainer>
          <Link href='/firstPage' passHref>
            <Goback><Image src={lPolygon}/></Goback>
          </Link>
          <span><b>2</b> / 3</span>
        </MoveContainer>
        <Title>그룹에 대한<br/>정보를 알려주세요.</Title>
        <form>
          <GroupDescript >그룹의 이름을 입력해주세요.</GroupDescript>
          <StyledInput onChange={aboutName} value={name} placeholder="그룹의 이름을 입력해주세요"/>
          <GroupDescript>그룹에 대해 설명해주세요.</GroupDescript>
          <IntroduceGroup value={groupDes} onChange={(aboutGroup)} as='textarea' placeholder="그룹에 대해 설명해주세요"/>
          {/* <Link href='/thirdPage' passHref> */}
            <BlueGt onSubmit={onSubmit}>
              <a><Image src={rPolygon}/></a>
            </BlueGt>
          {/* </Link> */}
        </form>
      </MobileLayout>
    </>
  )
}