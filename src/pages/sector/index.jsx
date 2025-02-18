import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import TrendChart from "@/pages/sector/components/TrendChart";
import ContentContainer from "@/components/layout/ContentContainer";

export default function () {
  return (
    <LayoutContainer>
      <GlobalNavigationBar themeChanger={false} />
      <ContentContainer>
        <TrendChart />
      </ContentContainer>
      <BottomNavigationBar />
    </LayoutContainer>
  );
}
