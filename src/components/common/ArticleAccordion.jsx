import { Box, Flex, VStack, Text, Image, HStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot
} from "@/components/ui/accordion";
import Hashtags from "@/components/common/Hashtags";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubTitle = styled.h2`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: var(--color-gray-800);
`;

const Title = styled.h1`
  display: block;
  max-width: 100%;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: var(--color-color-black);
  align-items: center;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ArticleAccodionRoot = ({ children }) => {
  return (
    <AccordionRoot spaceY="4" collapsible defaultValue={["b"]}>
      {children}
    </AccordionRoot>
  );
};

const AccordionItemTriggerStyled = styled(AccordionItemTrigger)`
  & > div {
    overflow: hidden;
  }
`;

const LinkButton = styled(Link)`
  color: var(--color-gray-800);
  background-color: var(--color-gray-100);
  border-radius: 4px;
  font-size: 10px;
  font-weight: 400;
  padding: 4px 10px 6px;
  line-height: 1.2;
  text-decoration: underline;
  text-underline-position: under;
`;

const ArticleAccodion = ({ value, title, text, tags, link }) => {
  return (
    <>
      <AccordionItem key={value} value={value}>
        <Box position="relative" overflow={"hidden"}>
          <AccordionItemTriggerStyled indicatorPlacement="start">
            <VStack align="start" spacing="4" w={"100%"} maxW={"100%"}>
              <HStack
                gap={"10px"}
                justify="space-between"
                alignItems={"center"}
                w={"100%"}
                h={"60px"}
              >
                <VStack
                  flex={1}
                  h={"full"}
                  gap={3}
                  overflow={"hidden"}
                  align={"start"}
                >
                  <SubTitle>Bloombergㆍ2일전</SubTitle>
                  <Title>{title}</Title>
                </VStack>
                <Image src="https://placehold.co/70x60" w={"70px"} h={"60px"} />
              </HStack>
              <Hashtags tags={tags} />
            </VStack>
          </AccordionItemTriggerStyled>
        </Box>
        <AccordionItemContent>
          <VStack ps={"30px"} align="start" spacing="4">
            <Text
              fontSize="12px"
              lineHeight={"16px"}
              fontWeight={"300"}
              letterSpacing={"-0.18px"}
            >
              {text}
            </Text>
            <LinkButton to={link}>원문 보기</LinkButton>
          </VStack>
        </AccordionItemContent>
      </AccordionItem>
    </>
  );
};

export { ArticleAccodion, ArticleAccodionRoot };
