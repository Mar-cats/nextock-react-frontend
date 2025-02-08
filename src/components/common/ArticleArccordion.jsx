import { Box, Flex, Grid, GridItem, Stack, VStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot
} from "@/components/ui/Accordion";
import styled from "styled-components";
import Tags from "@/components/common/Tags";

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

const ArticleAccodion = ({ value, title, text, tags }) => {
  return (
    <>
      <AccordionItem key={value} value={value}>
        <Box position='relative'>
          <AccordionItemTrigger indicatorPlacement='start'>
            <Flex
              gap={"10px"}
              direction='row'
              justify='space-between'
              w={"100%"}
            >
              <Flex direction={"column"} gap={"4px"} flex={1}>
                <SubTitle>Bloomberg - 2 days ago</SubTitle>
                <Title>{title}</Title>
              </Flex>
              <img src='https://placehold.co/70x60' />
            </Flex>
          </AccordionItemTrigger>
          <Flex ps={"30px"}>
            <Tags tags={tags} />
          </Flex>
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
