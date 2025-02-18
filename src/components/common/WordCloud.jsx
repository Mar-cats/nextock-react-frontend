import { Grid, GridItem, VStack, HStack } from "@chakra-ui/react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { IconButton } from "@chakra-ui/react";
import { GRID_LAYOUTS } from "@/constants/gridLayouts";
import { useState } from "react";
import styled from "styled-components";

const Container = styled(VStack)`
  width: 100%;
`;

const WordContainer = styled(Grid)`
  width: 100%;
  gap: 4px;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(30, 10px);
  transition: 0.2s;
  overflow: hidden;
`;

const WordItem = styled(GridItem)`
  font-size: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  color: var(--color-purple-50);
  &:nth-last-child(3),
  &:nth-last-child(2),
  &:nth-last-child(1) {
    color: var(--color-purple-1000);
  }
`;

const WordTitle = styled.div`
  width: 100%;
  font-weight: bold;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WordDescription = styled.div`
  font-size: 12px;
  line-height: 16px;
`;

const WordCloud = ({ words }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container gap={1}>
      <WordContainer h={isOpen ? "416px" : "360px"}>
        {GRID_LAYOUTS[new Date().getDate() % 6].map((layout) => (
          <WordItem
            key={layout.idx}
            colSpan={layout.w}
            rowSpan={layout.h}
            background={`var(--color-purple-${10 - layout.idx}00)`}
          >
            <WordTitle style={{ fontSize: `${layout.w > 4 ? 16 : 12}px` }}>
              {words[layout.idx].name}
            </WordTitle>
            <WordDescription>
              {words[layout.idx].percent} ({words[layout.idx].changePercent})
            </WordDescription>
          </WordItem>
        ))}
      </WordContainer>
      <IconButton
        w={"100%"}
        aria-label={isOpen ? "Close" : "Open"}
        onClick={() => setIsOpen(!isOpen)}
        backgroundColor={"var(--color-gray-100)"}
        color={"var(--color-gray-900)"}
      >
        <HStack justify={"center"} align={"center"} gap={0}>
          {isOpen ? (
            <>
              접기 <GoChevronUp width={24} height={24} />
            </>
          ) : (
            <>
              더보기 <GoChevronDown width={24} height={24} />
            </>
          )}
        </HStack>
      </IconButton>
    </Container>
  );
};

export default WordCloud;
