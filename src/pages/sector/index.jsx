import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import TrendChart from "@/pages/sector/components/TrendChart";
import ContentContainer from "@/components/layout/ContentContainer";
import { useParams } from "react-router-dom";
import { SECTORS } from "@/constants/sector";
import { Tabs } from "@chakra-ui/react";
import NewsWordCloud from "@/pages/sector/components/NewsWordCloud";
import NewsList from "@/pages/sector/components/NewsList";

export default function () {
  const { sector } = useParams();
  return (
    <LayoutContainer>
      <GlobalNavigationBar
        themeChanger={false}
        back={true}
        logo={false}
        title={SECTORS.find((s) => s.key === sector).name}
      />
      <ContentContainer>
        <Tabs.Root defaultValue="news" fitted>
          <Tabs.List>
            <Tabs.Trigger value={"news"}>뉴스 탐색</Tabs.Trigger>
            <Tabs.Trigger value={"trend"}>트렌드 분석</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={"news"} px={5}>
            <NewsWordCloud />
            <NewsList />
          </Tabs.Content>
          <Tabs.Content value={"trend"} px={5}>
            <TrendChart />
          </Tabs.Content>
        </Tabs.Root>
        <TrendChart />
      </ContentContainer>
      <BottomNavigationBar />
    </LayoutContainer>
  );
}
