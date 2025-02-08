import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-gray-800);
`;

const Tags = ({ tags }) => {
  return (
    <Flex direction='row' gap='10px'>
      {tags.map((tag, index) => (
        <Tag key={index}>#{tag}</Tag>
      ))}
    </Flex>
  );
};

export default Tags;
