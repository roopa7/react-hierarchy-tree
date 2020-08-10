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
const MemberInfo = ({ designation, name, children }) => {
  const hasLeftChildren = (children) => {
    return children && children.length && children[0];
  };
  const hasRightChildren = (children) => {
    return children && children.length && children[1];
  };
  return (
    <>
      <StyledText>{designation}</StyledText>
      <span>{name}</span>
      <StyledArrow>
        {hasLeftChildren(children) && <>&#8601;</>}
        {hasRightChildren(children) && <>&#8600;</>}
      </StyledArrow>
    </>
  );
};

const CompanyMember = ({ member, level }) => {
  const avatar = <MdPerson style={{ fontSize: 50 }} />;
  const { name, designation, children } = member;

  if (level % 2) {
    return (
      <StyledEvenLevelWrapper>
        <StyledEvenLevelAvatar>{avatar}</StyledEvenLevelAvatar>
        <MemberInfo name={name} designation={designation} children={children} />
      </StyledEvenLevelWrapper>
    );
  } else {
    return (
      <StyledOldLevelWrapper>
        <StyledOddLevelAvatar>{avatar}</StyledOddLevelAvatar>
        <MemberInfo name={name} designation={designation} children={children} />
      </StyledOldLevelWrapper>
    );
  }
};

export default CompanyMember;
