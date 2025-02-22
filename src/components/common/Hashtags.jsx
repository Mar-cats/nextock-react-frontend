import styled from "styled-components";

const StyledFlex = styled.span`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-gray-800);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = ({ tags }) => {
  return <StyledFlex>{tags.map((tag) => `#${tag}ㅤ`)}</StyledFlex>;
};

export default Tags;
