import styled from "@emotion/styled";
import { BoxStyle } from "../components/common/BlueBox";
import MobileLayout from "../components/common/Layout/MobileLayout";
import fighting from "../../images/fighting.svg";
import Image from "next/image";
import Link from "next/link";
import { Title, SubDescript } from "../components/common/Description/";
import { defaultFadeInVariants, staggerOne } from "styles/motions";
import { motion } from "framer-motion";

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 24px;
  top: 57px;
`;

export default function Congratulation() {
  return (
    <>
      <motion.form variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
        <Title variants={defaultFadeInVariants}>축하합니다!</Title>
        <SubDescript variants={defaultFadeInVariants}>
          전체 미션을 모두
          <br />
          달성하셨어요!
        </SubDescript>
        <ImageContainer variants={defaultFadeInVariants}>
          <Image src={fighting} objectFit="scale-down" variants={defaultFadeInVariants} />
        </ImageContainer>
        <Link href="/home" passHref>
          <a>
            <BoxStyle variants={defaultFadeInVariants}>홈으로</BoxStyle>
          </a>
        </Link>
      </motion.form>
    </>
  );
}
