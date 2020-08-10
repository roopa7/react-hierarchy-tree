import React from "react";
import styled from "styled-components";
import CompanyMember from "./CompanyMember";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const DesignationHierarchyTree = ({ bstTree, level = 0 }) => {
  const hasChildren = (member) => {
    return member.children && member.children.length;
  };
  return (
    <StyledWrapper level={level}>
      {bstTree &&
        bstTree.map((member, i) => {
          !member.children.length && delete member.children;
          return (
            <div key={`level-${level}-${i}`}>
              <CompanyMember member={member} level={level} />
              {hasChildren(member) && (
                <DesignationHierarchyTree
                  bstTree={member.children}
                  level={level + 1}
                />
              )}
            </div>
          );
        })}
    </StyledWrapper>
  );
};
export default DesignationHierarchyTree;
