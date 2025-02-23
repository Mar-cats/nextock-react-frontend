import { Box, Flex, VStack, Text } from "@chakra-ui/react";
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
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-gray-800);
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: var(--color-color-black);
`;

const ArticleAccodionRoot = ({ children }) => {
  return (
    <AccordionRoot spaceY='4' collapsible defaultValue={["b"]}>
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
        <Box position='relative' overflow={"hidden"}>
          <AccordionItemTriggerStyled indicatorPlacement='start'>
            <VStack align='start' spacing='4' w={"100%"} maxW={"100%"}>
              <Flex
                gap={"10px"}
                direction='row'
                justify='space-between'
                w={"100%"}
              >
                <Flex direction={"column"} gap={"4px"} flex={1}>
                  <SubTitle>Bloombergㆍ2일전</SubTitle>
                  <Title>{title}</Title>
                </Flex>
                <img src='https://placehold.co/70x60' />
              </Flex>
              <Hashtags tags={tags} />
            </VStack>
          </AccordionItemTriggerStyled>
        </Box>
        <AccordionItemContent>
          <VStack ps={"30px"} align='start' spacing='4'>
            <Text
              fontSize='12px'
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
