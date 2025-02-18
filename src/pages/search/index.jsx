import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ContentContainer from "@/components/layout/ContentContainer";
import RecentSearch from "@/pages/search/components/RecentSearch";
import PopularSearch from "@/pages/search/components/PopularSearch";

export default function () {
  return (
    <LayoutContainer>
      <GlobalNavigationBar
        logo={false}
        back={true}
        search={false}
        searchInput={true}
        themeChanger={false}
      />
      <ContentContainer p={"6px 20px 0"} gap={"56px"}>
        <RecentSearch />
        <PopularSearch />
      </ContentContainer>
    </LayoutContainer>
  );
}
