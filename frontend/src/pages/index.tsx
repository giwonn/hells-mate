import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import BottomSheet from "components/common/ButtomSheet";
import Calendar from "components/pages/main/Calendar";
import Challenge from "components/pages/main/Challenge";
import MainPageBottomSheetSection from "components/pages/main/sections/MainPageBottomSheetSection";
import {
  MainPageCalendarContaier,
  MainPageChallengesContainer,
  MainPageTopRowContainer,
  StyledMainPageContainer,
} from "components/pages/main/styles";
import { MOCKUP_CHALLENGES } from "mockups/challenges";
import { MOCKUP_MEMBERS } from "mockups/members";

import rankingIcon from "/public/icons/ranking_icon.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}
const Home: NextPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <BottomSheet
        isShowing={isShowing}
        onClose={() => {
          setIsShowing(false);
        }}
      >
        <MainPageBottomSheetSection
          member={MOCKUP_MEMBERS[0]}
          currentUser={MOCKUP_MEMBERS[0]}
          checkStatusInfo={[false, false, true]}
        />
      </BottomSheet>
      <StyledMainPageContainer>
        {/* <AddChallengeButton /> */}
        <MainPageTopRowContainer>
          <Image alt="ranking icon" src={rankingIcon.src} width={20} height={27} />
        </MainPageTopRowContainer>
        <MainPageCalendarContaier>
          <Calendar onDateChange={setSelectedDate} selectedDate={selectedDate} />
        </MainPageCalendarContaier>
        <MainPageChallengesContainer>
          {MOCKUP_CHALLENGES.map((challenge, index) => (
            <Challenge
              onAreaClick={() => {
                setIsShowing(true);
              }}
              key={index}
              {...challenge}
            />
          ))}
        </MainPageChallengesContainer>
      </StyledMainPageContainer>
    </>
  );
};

export default Home;
