import SubTitle from "@/components/common/SubTitle";
import { VStack } from "@chakra-ui/react";
import PillTags from "@/components/common/PillTags";

export default function () {
  return (
    <VStack gap={"10px"} align={"flex-start"}>
      <SubTitle>최근 검색어</SubTitle>
      <PillTags
        tags={[
          "최근 검색어",
          "이렇게",
          "하는 건",
          "어때?",
          "NVIDIA",
          "길게 넘어가면 어떻게 되냐"
        ]}
        onClose={() => {}}
      />
    </VStack>
  );
}
