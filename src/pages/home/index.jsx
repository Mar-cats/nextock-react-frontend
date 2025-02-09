import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import { Flex } from "@chakra-ui/react";
import LayoutContainer from "@/components/layout/LayoutContainer";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import HotTrend from "@/pages/home/components/HotTrend";
import News from "@/pages/home/components/News";

export default function () {
  return (
    <LayoutContainer>
      <GlobalNavigationBar />
      <Flex flex={1} direction={"column"} px={"20px"} gap={"60px"}>
        <HotTrend />
        <News />
      </Flex>
      <BottomNavigationBar />
    </LayoutContainer>
  );
}
