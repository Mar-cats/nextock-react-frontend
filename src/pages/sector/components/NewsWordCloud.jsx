import { useParams } from "react-router-dom";
import { SECTORS } from "@/constants/sector";
import { Flex, VStack } from "@chakra-ui/react";
import WordCloud from "@/components/common/WordCloud";
import { SubTitle } from "@/components/common/Title";

export default function () {
  const { sector } = useParams();
  const words = [
    {
      name: "Trump",
      percent: "623회"
    },
    {
      name: "Chaina",
      percent: "521회"
    },
    {
      name: "Deepseek",
      percent: "488회"
    },
    {
      name: "OpenAI",
      percent: "324회"
    },
    {
      name: "NVDIA",
      percent: "324회"
    },
    {
      name: "Google",
      percent: "324회"
    },
    {
      name: "Apple",
      percent: "324회"
    }
  ];
  return (
    <VStack gap={"8px"} mb={"58px"}>
      <Flex justify={"space-between"} w={"100%"}>
        <SubTitle>
          {SECTORS.find((s) => s.key === sector)?.name}에서 집중하는 키워드
        </SubTitle>
      </Flex>
      <WordCloud words={words} color='gray' />
    </VStack>
  );
}
