import SubTitle from "@/components/common/SubTitle";
import { VStack } from "@chakra-ui/react";
import PillTags from "@/components/common/Pilltags";

export default function () {
  return (
    <VStack gap={"10px"} align={"flex-start"}>
      <SubTitle>인기 검색어</SubTitle>
      <PillTags
        tags={["태그1", "태그2", "태그3", "태그4", "태그5"]}
        colorPalette={"blue"}
        variant={"subtle"}
      />
    </VStack>
  );
}
