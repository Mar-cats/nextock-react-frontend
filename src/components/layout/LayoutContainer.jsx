import { Flex } from "@chakra-ui/react";

export default function LayoutContainer({ children }) {
  return (
    <Flex h={"100dvh"} direction='column' overflow={"hidden"}>
      {children}
    </Flex>
  );
}
