import styled from "styled-components";

const StyledOldLevelWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // color: #002ab3;
  font-family: "Times New Roman";
`;
const StyledEvenLevelWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // color: #002ab3;
  font-family: "Times New Roman";
`;

const StyledEvenLevelAvatar = styled.div`
  min-width: 20px;
  border: 1px solid;
  // background-color: #ccd8ff;
  color: red;
  border-radius: 50%;
`;
const StyledOddLevelAvatar = styled.div`
  min-width: 20px;
  border: 1px solid;
  background-color: #80ff80;
  color: #004d00;
  border-radius: 50%;
`;
const StyledArrow = styled.div`
  font-size: 50px;
  color: black;
`;
const StyledText = styled.div`
  // color: #00061a;
  font-size: 24px;
`;

export {
  StyledArrow,
  StyledEvenLevelAvatar,
  StyledOddLevelAvatar,
  StyledEvenLevelWrapper,
  StyledOldLevelWrapper,
  StyledText,
};
