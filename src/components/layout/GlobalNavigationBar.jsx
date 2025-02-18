import { Flex, IconButton, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES_PATH_HOME, ROUTES_PATH_SEARCH } from "@/constants/routes";
import { LuSearch } from "react-icons/lu";
import { GoChevronLeft } from "react-icons/go";
import styled from "styled-components";
import SearchInput from "@/components/common/SearchInput";
import LogoSVG from "@/assets/icons/icon_30.svg";

const NavTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: var(--color-gray-900);
  flex: 1;
`;

const GlobalNavigationBar = ({
  logo = true,
  back = false,
  title = "",
  searchInput = false,
  search = true
}) => {
  return (
    <Flex justify="space-between" align="center" p={4}>
      {logo && (
        <Link to={ROUTES_PATH_HOME}>
          <IconButton variant={"ghost"} aria-label="Home">
            <Image src={LogoSVG} alt="Logo" />
          </IconButton>
        </Link>
      )}
      {back && (
        <Link to={ROUTES_PATH_HOME}>
          <IconButton
            variant={"ghost"}
            aria-label="Search"
            color={"var(--color-gray-900)"}
          >
            <GoChevronLeft />
          </IconButton>
        </Link>
      )}
      {title && <NavTitle>{title}</NavTitle>}
      {searchInput && <SearchInput />}
      {search && (
        <Link to={ROUTES_PATH_SEARCH}>
          <IconButton
            variant={"ghost"}
            aria-label="Search"
            color={"var(--color-gray-900)"}
          >
            <LuSearch />
          </IconButton>
        </Link>
      )}
    </Flex>
  );
};

export default GlobalNavigationBar;
