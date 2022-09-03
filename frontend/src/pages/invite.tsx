import Image from "next/image";
import letter from "../../images/letter.svg";
import lPolygon from "../../images/lPolygon.svg";
import { BoxStyle } from "../components/common/BlueBox";
import MobileLayout from "../components/common/Layout/MobileLayout";
import styled from "@emotion/styled";
import { Title } from "../components/common/Description/";
import Link from "next/link";
import { ImageContainer, MoveContainer } from "components/common/Container";
import { defaultFadeInVariants, staggerOne } from "styles/motions";
import { motion } from "framer-motion";

const Goback = styled(motion.a)`
  font-size: 20px;
`;

const BlueBox = styled(BoxStyle)`
  position: static;
`;
const ConfirmBox = styled(BoxStyle)`
  position: static;
  border: 1px solid ${({ theme }) => theme.color.primary700};
  color: ${({ theme }) => theme.color.primary700};
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    background-color: ${({ theme }) => theme.color.primary200};
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  float: left;
  position: relative;
  bottom: 10%;
  position: absolute;
`;

export default function InvitePage() {
  const onClick = (e: any) => {};

  return (
    <>
      <motion.form variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
        <MoveContainer>
          <Link href="/groupInfo" passHref>
            <Goback variants={defaultFadeInVariants}>
              <Image src={lPolygon} />
            </Goback>
          </Link>
          <motion.span variants={defaultFadeInVariants}>
            <b>4</b> / 4
          </motion.span>
        </MoveContainer>
        <Title variants={defaultFadeInVariants}>
          그룹에 대한
          <br />
          정보를 알려주세요.
        </Title>
        <ImageContainer variants={defaultFadeInVariants}>
          <Image src={letter} objectFit="scale-down" />
        </ImageContainer>
        <BoxContainer variants={defaultFadeInVariants}>
          <BlueBox onClick={onClick} variants={defaultFadeInVariants}>
            <p>초대 링크 보내기</p>
          </BlueBox>
          <ConfirmBox variants={defaultFadeInVariants}>
            <p>확인</p>
          </ConfirmBox>
        </BoxContainer>
      </motion.form>
    </>
  );
}
