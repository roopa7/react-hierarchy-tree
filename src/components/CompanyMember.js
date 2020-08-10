import React from "react";
import { MdPerson } from "react-icons/md";
import {
  StyledEvenLevelWrapper,
  StyledEvenLevelAvatar,
  StyledOddLevelAvatar,
  StyledArrow,
  StyledOldLevelWrapper,
  StyledText,
} from "../styles/CompanyMemberStyles";

const CompanyMember = ({ member, level }) => {
  const avatar = <MdPerson style={{ fontSize: 50 }} />;
  const { name, designation, children } = member;
  const hasLeftChildren = (children) => {
    return children && children.length && children[0];
  };
  const hasRightChildren = (children) => {
    return children && children.length && children[1];
  };
  if (level % 2) {
    return (
      <StyledEvenLevelWrapper>
        <StyledEvenLevelAvatar>{avatar}</StyledEvenLevelAvatar>
        <StyledText>{designation}</StyledText>
        <span>{name}</span>
        <StyledArrow>
          {hasLeftChildren(children) && <>&#8601;</>}
          {hasRightChildren(children) && <>&#8600;</>}
        </StyledArrow>
      </StyledEvenLevelWrapper>
    );
  } else {
    return (
      <StyledOldLevelWrapper>
        <StyledOddLevelAvatar>{avatar}</StyledOddLevelAvatar>
        <StyledText>{designation}</StyledText>
        <span>{name}</span>
        <StyledArrow>
          {hasLeftChildren(children) && <>&#8601;</>}
          {hasRightChildren(children) && <>&#8600;</>}
        </StyledArrow>
      </StyledOldLevelWrapper>
    );
  }
};

export default CompanyMember;
