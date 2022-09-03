import {
  ProfileNameText,
  ProfilePictureBase,
  StyledProfile,
} from "components/common/Profile/styles";
import React from "react";
import Image from "next/image";
import defaultProfilePicture from "/public/images/default_profile_icon.svg";

function Profile() {
  return (
    <StyledProfile>
      <ProfilePictureBase>
        <Image src={defaultProfilePicture} />
      </ProfilePictureBase>
      <ProfileNameText>김민주</ProfileNameText>
    </StyledProfile>
  );
}

export default Profile;
