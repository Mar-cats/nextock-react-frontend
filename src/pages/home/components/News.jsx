import {
  ArticleAccodion,
  ArticleAccodionRoot
} from "@/components/common/ArticleAccordion";
import Title from "@/components/common/Title";
import { SECTORS } from "@/constants/sector";
import { Tabs, VStack } from "@chakra-ui/react";
import styled from "styled-components";

const Scrollable = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function () {
  return (
    <VStack align={"start"} spacing={4}>
      <Tabs.Root defaultValue="ecommerce" w={"100%"} overflow={"hidden"}>
        <Title>산업별 뉴스</Title>
        <Scrollable>
          <Tabs.List w={"max-content"}>
            {SECTORS.map((sector) => (
              <Tabs.Trigger
                key={sector.key}
                value={sector.key}
                whiteSpace={"nowrap"}
              >
                {sector.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Scrollable>
        {SECTORS.map((sector) => (
          <Tabs.Content key={sector.key} value={sector.key}>
            {new Array(20).fill(0).map((_, idx) => (
              <ArticleAccodionRoot key={idx}>
                <ArticleAccodion
                  title={sector.name}
                  text={"blablablabla"}
                  tags={[
                    "해당기사",
                    "키워드",
                    "표시하면",
                    "최대",
                    "6개까지",
                    "가능하겠다"
                  ]}
                />
              </ArticleAccodionRoot>
            ))}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </VStack>
  );
}
