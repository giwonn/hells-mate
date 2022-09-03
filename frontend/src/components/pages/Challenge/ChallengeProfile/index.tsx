import Profile from "components/common/Profile";
import { StyledChallengeProfile } from "components/pages/Challenge/ChallengeProfile/styles";
import React from "react";

function ChallengeProfile() {
  return (
    <StyledChallengeProfile>
      <Profile />
      <Profile />
      <Profile />
    </StyledChallengeProfile>
  );
}

export default ChallengeProfile;
