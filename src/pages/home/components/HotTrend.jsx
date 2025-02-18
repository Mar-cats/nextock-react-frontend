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
      name: "테크",
      percent: "20%",
      changePercent: "+10%"
    },
    {
      name: "바이오",
      percent: "15%",
      changePercent: "+5%"
    },
    {
      name: "테슬라",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "패션",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "자동차",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "프리미엄",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "프리미엄",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "프리미엄",
      percent: "10%",
      changePercent: "+3%"
    },
    {
      name: "프리미엄",
      percent: "10%",
      changePercent: "+3%"
    }
  ];
  const [unit, setUnit] = useState(["day"]);
  return (
    <VStack gap={"8px"}>
      <Flex justify={"space-between"} w={"100%"}>
        <Title>{unitToString(unit[0])}간 트렌드</Title>
        <Select value={unit} setValue={setUnit} />
      </Flex>
      <WordCloud words={words} />
    </VStack>
  );
}
