import {
  ArticleAccodion,
  ArticleAccodionRoot
} from "@/components/common/ArticleAccordion";
import { VStack } from "@chakra-ui/react";

export default function SearchedList() {
  return (
    <>
      <VStack align={"start"} spacing={4}>
        {new Array(20).fill(0).map((_, idx) => (
          <ArticleAccodionRoot key={idx}>
            <ArticleAccodion
              title={'아'}
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
    </>
  )
}
