import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import TrendChart from "@/pages/sector/components/TrendChart";
import ContentContainer from "@/components/layout/ContentContainer";
import { useParams } from "react-router-dom";
import { SECTORS } from "@/constants/sector";

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
        <TrendChart />
      </ContentContainer>
      <BottomNavigationBar />
    </LayoutContainer>
  );
}
