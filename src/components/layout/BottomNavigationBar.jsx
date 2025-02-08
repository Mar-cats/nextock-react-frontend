import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES_PATH_HOME } from "@/constants/routes";

const BottomNavigationBar = () => {
  return (
    <Flex justify='center' align='center' p={4}>
      <Link to={ROUTES_PATH_HOME}>Home</Link>
    </Flex>
  );
};

export default BottomNavigationBar;
