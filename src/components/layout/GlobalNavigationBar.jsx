import { Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES_PATH_HOME, ROUTES_PATH_SEARCH } from "@/constants/routes";
import { LuSearch } from "react-icons/lu";
import { BiLogoBaidu } from "react-icons/bi";

const GlobalNavigationBar = () => {
  return (
    <Flex justify='space-between' align='center' p={4}>
      <Link to={ROUTES_PATH_HOME}>
        <IconButton variant={"ghost"} aria-label='Home'>
          <BiLogoBaidu />
        </IconButton>
      </Link>
      <Link to={ROUTES_PATH_SEARCH}>
        <IconButton variant={"ghost"} aria-label='Search'>
          <LuSearch />
        </IconButton>
      </Link>
    </Flex>
  );
};

export default GlobalNavigationBar;
