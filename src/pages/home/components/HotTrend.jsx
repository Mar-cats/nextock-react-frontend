import { Flex, VStack } from "@chakra-ui/react";
import Select from "@/components/common/Select";
import Title from "@/components/common/Title";
import WordCloud from "@/components/common/WordCloud";
import { useState } from "react";
import { unitToString } from "@/utils/string";

export default function () {
  const words = [
    {
      name: "이커머스",
      percent: "25%",
      changePercent: "+14%"
    },
    {
      name: "클라우드",
      percent: "20%",
      changePercent: "+10%"
    },
    {
      name: "소프트웨어",
      percent: "15%",
      changePercent: "+5%"
    },
    {
      name: "소셜미디어",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "하드웨어",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "AI",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "사이버보안",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "전기차",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "AR/VR",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "반도체",
      percent: "10%",
      changePercent: "+3%"
    }
  ];
  const [unit, setUnit] = useState(["day"]);
  return (
    <VStack gap={"8px"} px={5}>
      <Flex justify={"space-between"} w={"100%"}>
        <Title>{unitToString(unit[0])}간 트렌드</Title>
        <Select value={unit} setValue={setUnit} />
      </Flex>
      <WordCloud words={words} />
    </VStack>
  );
}
