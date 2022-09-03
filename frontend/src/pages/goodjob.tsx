import styled from "@emotion/styled";
import { BoxStyle } from "../components/common/BlueBox";
import MobileLayout from "../components/common/Layout/MobileLayout";
import flag from "../../images/flag.svg";
import Image from "next/image";
import Link from "next/link";
import { Title, SubDescript } from "../components/common/Description/";
import { ImageContainer } from "components/common/Container";
import { defaultFadeInVariants, staggerOne } from "styles/motions";
import { motion } from "framer-motion";

const FlagContainer = styled(ImageContainer)`
  top: 100px;
`;

export default function Congratulation() {
  return (
    <>
      <motion.form variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
        <Title variants={defaultFadeInVariants}>수고하셨어요!</Title>
        <SubDescript variants={defaultFadeInVariants}>
          미션 하나를 달성하셨어요!
          <br />
          이대로 계속 달성해볼까요?
        </SubDescript>
        <FlagContainer variants={defaultFadeInVariants}>
          <Image src={flag} objectFit="scale-down" />
        </FlagContainer>
        <Link href="/home" passHref>
          <a>
            <BoxStyle variants={defaultFadeInVariants}>홈으로</BoxStyle>
          </a>
        </Link>
      </motion.form>
    </>
  );
}
