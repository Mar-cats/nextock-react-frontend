import {
  ArticleAccodion,
  ArticleAccodionRoot
} from "@/components/common/ArticleAccordion";
import { SubTitle } from "@/components/common/Title";
import { SECTORS } from "@/constants/sector";
import { Tabs, VStack } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";

const Scrollable = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    padding: 0 20px;
  }
`;

export default function () {
  const [selectedSector, setSelectedSector] = useState("ecommerce");
  return (
    <VStack align={"start"} spacing={4}>
      <Tabs.Root
        value={selectedSector}
        onValueChange={(e) => setSelectedSector(e.value)}
        w={"100%"}
        overflow={"hidden"}
      >
        <SubTitle style={{ marginLeft: 20 }}>산업별 뉴스</SubTitle>
        <Scrollable>
          <Tabs.List w={"max-content"}>
            {SECTORS.map((sector) => (
              <Tabs.Trigger
                key={sector.key}
                value={sector.key}
                whiteSpace={"nowrap"}
                fontWeight={selectedSector === sector.key ? "600" : "400"}
              >
                {sector.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Scrollable>
        {SECTORS.map((sector) => (
          <Tabs.Content key={sector.key} value={sector.key} px={5}>
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
