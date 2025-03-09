import SubTitle from "@/components/common/SubTitle";
import { HStack, VStack, Button } from "@chakra-ui/react";
import PillTags from "@/components/common/Pilltags";
import { useSearchStore } from "@/store/search";
import { useEffect } from "react";

export default function () {
  const { searches, getRecentSearches, removeSearch, removeAllSearch } =
    useSearchStore();
  useEffect(() => {
    getRecentSearches();
  }, []);
  return (
    <VStack gap={"10px"} align={"flex-start"}>
      <HStack justify={"space-between"} w={"100%"}>
        <SubTitle>최근 검색어</SubTitle>
        <Button
          size="2xs"
          variant={"ghost"}
          color={"var(--color-gray-700)"}
          onClick={removeAllSearch}
        >
          전체 삭제
        </Button>
      </HStack>
      <PillTags tags={searches} onClose={(tag) => removeSearch(tag)} />
    </VStack>
  );
}
