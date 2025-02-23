import { SubTitle } from "@/components/common/Title";
import { VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  ArticleAccodion,
  ArticleAccodionRoot
} from "@/components/common/ArticleAccordion";
import { SECTORS } from "@/constants/sector";

export default function () {
  const { sector } = useParams();
  return (
    <VStack align={"start"} spacing={4}>
      <SubTitle>
        {SECTORS.find((s) => s.key === sector).name} 관련 뉴스
      </SubTitle>
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
    </VStack>
  );
}
