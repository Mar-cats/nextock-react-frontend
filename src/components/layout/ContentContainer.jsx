import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

const ScrollContainer = styled(Flex)`
  position: relative;
  flex: 1;
  flex-direction: column;
  padding: 0px 20px;
  gap: 60px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function ContentContainer({ children, ...props }) {
  return <ScrollContainer {...props}>{children}</ScrollContainer>;
}
