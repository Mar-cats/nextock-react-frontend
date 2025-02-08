import { Flex, IconButton, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES_PATH_HOME } from "@/constants/routes";
import { HiMiniHome } from "react-icons/hi2";
import styled from "styled-components";

const MenuSpan = styled.span`
  font-size: 12px;
`;

const BottomNavigationBar = () => {
  return (
    <Flex justify='center' align='center' p={4}>
      <Link to={ROUTES_PATH_HOME}>
        <IconButton variant={"ghost"} aria-label={"Home"}>
          <VStack justify={"center"} align={"center"} gap={0}>
            <HiMiniHome width={24} height={24} />
            <MenuSpan>Home</MenuSpan>
          </VStack>
        </IconButton>
      </Link>
    </Flex>
  );
};

export default BottomNavigationBar;
