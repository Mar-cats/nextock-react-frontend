import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Flex } from "@chakra-ui/react";
import PillTags from "@/components/common/PillTags";

export default function () {
  return (
    <LayoutContainer>
      <GlobalNavigationBar />
      <Flex flex={1} direction={"column"} px={"20px"} gap={"20px"}>
        <PillTags tags={["태그1", "태그2", "태그3", "태그4", "태그5"]} />
        <PillTags
          tags={["태그1", "태그2", "태그3", "태그4", "태그5"]}
          onClose={() => {}}
        />
      </Flex>
    </LayoutContainer>
  );
}
