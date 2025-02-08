import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import { Flex } from "@chakra-ui/react";
import LayoutContainer from "@/components/layout/LayoutContainer";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import {
  ArticleAccodion,
  ArticleAccodionRoot
} from "@/components/common/ArticleArccordion";

export default function () {
  return (
    <LayoutContainer>
      <GlobalNavigationBar />
      <Flex flex={1} direction={"column"} px={"20px"} gap={"20px"}>
        <ArticleAccodionRoot>
          <ArticleAccodion
            title={"제목"}
            text={"blablablabla"}
            tags={["태그1", "태그2", "태그3", "태그4", "태그5"]}
          />
        </ArticleAccodionRoot>
      </Flex>
      <BottomNavigationBar />
    </LayoutContainer>
  );
}
