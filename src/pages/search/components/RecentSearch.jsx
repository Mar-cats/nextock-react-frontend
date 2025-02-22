import SubTitle from "@/components/common/SubTitle";
import { VStack } from "@chakra-ui/react";
import PillTags from "@/components/common/Pilltags";
import { useSearchStore } from "@/store/search";
import { useEffect } from "react";

export default function () {
  const { searches, getRecentSearches, removeSearch } = useSearchStore();
  useEffect(() => {
    getRecentSearches();
  }, []);
  return (
    <VStack gap={"10px"} align={"flex-start"}>
      <SubTitle>최근 검색어</SubTitle>
      <PillTags tags={searches} onClose={(tag) => removeSearch(tag)} />
    </VStack>
  );
}
