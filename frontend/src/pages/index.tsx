import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import AddChallengeButton from "components/pages/main/AddChallengeButton";
import Calendar from "components/pages/main/Calendar";
import Challenge from "components/pages/main/Challenge";
import {
  MainPageCalendarContaier,
  MainPageChallengesContainer,
  MainPageTopRowContainer,
  StyledMainPageContainer,
} from "components/pages/main/styles";
import { MOCKUP_CHALLENGES } from "mockups/challenges";

import rankingIcon from "/public/icons/ranking_icon.svg";

// declare global {
//   interface Window {
//     Kakao: any;
//   }
// }
const Home: NextPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log("SET", selectedDate);
  return (
    <StyledMainPageContainer>
      <AddChallengeButton />
      <MainPageTopRowContainer>
        <Image alt="ranking icon" src={rankingIcon.src} width={20} height={27} />
      </MainPageTopRowContainer>
      <MainPageCalendarContaier>
        <Calendar onDateChange={setSelectedDate} selectedDate={selectedDate} />
      </MainPageCalendarContaier>
      <MainPageChallengesContainer>
        {MOCKUP_CHALLENGES.map((challenge, index) => (
          <Challenge key={index} {...challenge} />
        ))}
      </MainPageChallengesContainer>
    </StyledMainPageContainer>
  );
};

export default Home;
