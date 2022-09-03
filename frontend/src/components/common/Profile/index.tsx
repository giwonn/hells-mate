import {
  ProfileImage,
  ProfileNameText,
  ProfilePictureBase,
  StyledProfile,
} from "components/common/Profile/styles";
import React, { HTMLAttributes, useLayoutEffect } from "react";

import defaultProfilePicture from "/public/images/default_profile_icon.svg";
import { Member } from "types/api";
import Link from "next/link";
import { resetAnchorStyle } from "styles/utils/anchor";
import reset from "emotion-reset";
import { css } from "@emotion/react";
import { resetButtonStyle } from "styles/utils/button";
import { useIsomorphicLayoutEffect } from "hooks/useIsomorphicLayoutEffect";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: Member;
}

function Profile({ member, ...props }: Props) {
  return (
    <StyledProfile {...props}>
      <button
        css={css`
          ${resetButtonStyle};
          height: 40px; // TODO: 알 수 없는 이유로 높이 지정 안하면 이미지보다 큰 버튼이 생성됨.
        `}
      >
        {member.profilesrc ? (
          <ProfileImage src={member.profilesrc} width={40} height={40} />
        ) : (
          <ProfilePictureBase>
            <ProfileImage src={defaultProfilePicture} />
          </ProfilePictureBase>
        )}
      </button>

      <ProfileNameText>{member.memberName}</ProfileNameText>
    </StyledProfile>
  );
}

export default Profile;
