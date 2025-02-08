import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES_PATH_SEARCH } from "@/constants/routes";

const GlobalNavigationBar = () => {
  return (
    <Flex justify='space-between' align='center' p={4}>
      <h1>Logo</h1>
      <Link to={ROUTES_PATH_SEARCH}>Search</Link>
    </Flex>
  );
};

export default GlobalNavigationBar;
