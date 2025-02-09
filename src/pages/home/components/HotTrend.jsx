import { Box, Flex, VStack } from "@chakra-ui/react";
import Select from "@/components/common/Select";
import Title from "@/components/common/Title";

export default function () {
  return (
    <VStack gap={"8px"}>
      <Flex justify={"space-between"} w={"100%"}>
        <Title>Hot Trend</Title>
        <Select />
      </Flex>
      <Box w={"100%"} h={"455px"} background={"#213482"} />
    </VStack>
  );
}
