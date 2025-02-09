import { Center, IconButton, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES_PATH_HOME } from "@/constants/routes";
import { HiMiniHome } from "react-icons/hi2";
import styled from "styled-components";

const MenuSpan = styled.span`
  font-size: 12px;
`;

const Container = styled(Center)`
  position: relative;
  padding: 8px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    border: 1px solid transparent;
    border-radius: 22px 22px 0 0;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(
        135deg,
        var(--color-color-black) 0%,
        var(--color-gray-600) 18%,
        var(--color-gray-900) 44%,
        var(--color-gray-500) 96%,
        var(--color-gray-700) 100%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`;

const BottomNavigationBar = () => {
  return (
    <Container>
      <Link to={ROUTES_PATH_HOME}>
        <IconButton variant={"ghost"} aria-label={"Home"}>
          <VStack justify={"center"} align={"center"} gap={0}>
            <HiMiniHome width={24} height={24} />
            <MenuSpan>Home</MenuSpan>
          </VStack>
        </IconButton>
      </Link>
    </Container>
  );
};

export default BottomNavigationBar;
