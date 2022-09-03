import { StyledInput } from "components/common/Input/styles";
import { BlueGt } from "components/common/BlueGt";
import Image from "next/image";
import run from "../../images/run.svg";
import food from "../../images/food.svg";
import { Title } from "components/common/Description";
import { SubDescript } from "components/common/Description";
import styled from "@emotion/styled";
import MobileLayout from "components/common/Layout/MobileLayout";
import { MoveContainer } from "components/common/Container";
import lPolygon from "../../images/lPolygon.svg";
import rPolygon from "../../images/rPolygon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/radio.module.css";

const Goback = styled.a`
  font-size: 20px;
`;

const GroupDescript = styled(SubDescript)`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 0;
`;

const IntroduceMisson = styled(StyledInput)`
  height: 213px;
  resize: none;
`;

const RadioContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin-top: 20px;
`;

export default function Mission() {
  const [mission, setMission] = useState("");
  const [aboutMission, setAboutMission] = useState("");

  const onMission = (e: any) => {
    setMission(e.currentTarget.value);
  };
  const onAboutMission = (e: any) => {
    setAboutMission(e.currentTarget.value);
  };

  const [val, setVal] = useState("");
  return (
    <>
      <MobileLayout>
        <MoveContainer>
          <Link href="/" passHref>
            <Goback>
              <Image src={lPolygon} />
            </Goback>
          </Link>
          <span>
            <b>3</b> / 4
          </span>
        </MoveContainer>
        <Title>
          미션에 대한
          <br />
          정보를 알려주세요.
        </Title>

        <RadioContainer>
          <input
            className={styles.radio}
            type="radio"
            id="food"
            value="food"
            name="mission"
            onChange={() => setVal("food")}
          />
          <label htmlFor="food">
            <Image src={food} alt="food" />
            식이 조절
          </label>
          <input
            className={styles.radio}
            type="radio"
            id="work"
            value="work"
            name="mission"
            onChange={() => setVal("work")}
          />
          <label htmlFor="work">
            <Image src={run} alt="run" />
            일상 운동
          </label>
        </RadioContainer>

        <form>
          <GroupDescript>미션의 제목을 입력해주세요.</GroupDescript>
          <StyledInput
            onChange={onMission}
            value={mission}
            placeholder=">미션의 제목을 입력해주세요."
          />
          <GroupDescript>미션의 내용을 입력해주세요.</GroupDescript>
          <IntroduceMisson
            value={aboutMission}
            onChange={onAboutMission}
            as="textarea"
            placeholder="미션의 내용을 입력해주세요."
          />
          {/* <Link href='/thirdPage' passHref> */}
          <Link
            href={{
              pathname: "/invite",
              query: { selectMisson: val, mission, aboutMission },
            }}
            passHref
          >
            <BlueGt>
              <a>
                <Image src={rPolygon} />
              </a>
            </BlueGt>
          </Link>

          {/* </Link> */}
        </form>
      </MobileLayout>
    </>
  );
}
