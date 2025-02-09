import { Flex } from "@chakra-ui/react";

export default function ContentContainer({ children, ...props }) {
  return (
    <Flex
      flex={1}
      direction={"column"}
      px={"20px"}
      gap={"60px"}
      overflow={"auto"}
      {...props}
    >
      {children}
    </Flex>
  );
}
