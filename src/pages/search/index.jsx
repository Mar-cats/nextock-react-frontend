import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ContentContainer from "@/components/layout/ContentContainer";
import RecentSearch from "@/pages/search/components/RecentSearch";
import PopularSearch from "@/pages/search/components/PopularSearch";
import SearchedList from "./components/SearchedList";
import { useSearchFocusStore } from '@/store/search';

export default function () {
  const { isFocus } = useSearchFocusStore();
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
        {isFocus ? (
          <>
            <RecentSearch />
            <PopularSearch />
          </>
        ) : (<SearchedList />)}
      </ContentContainer>
    </LayoutContainer>
  );
}
