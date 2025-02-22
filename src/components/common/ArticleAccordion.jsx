import { Box, Flex, VStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot
} from "@/components/ui/accordion";
import Hashtags from "@/components/common/Hashtags";
import styled from "styled-components";

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

const ArticleAccodion = ({ value, title, text, tags }) => {
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
          <Flex direction='column' ps='30px' pt={"10px"}>
            {text}
          </Flex>
        </AccordionItemContent>
      </AccordionItem>
    </>
  );
};

export { ArticleAccodion, ArticleAccodionRoot };
