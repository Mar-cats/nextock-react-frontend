import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import HotTrend from "@/pages/home/components/HotTrend";
import News from "@/pages/home/components/News";
import ContentContainer from "@/components/layout/ContentContainer";

export default function () {
  return (
    <LayoutContainer>
      <GlobalNavigationBar />
      <ContentContainer>
        <HotTrend />
        <News />
      </ContentContainer>
      <BottomNavigationBar />
    </LayoutContainer>
  );
}
