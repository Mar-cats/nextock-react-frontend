import {
  ArticleAccodion,
  ArticleAccodionRoot
} from "@/components/common/ArticleArccordion";

export default function () {
  return (
    <ArticleAccodionRoot>
      <ArticleAccodion
        title={"제목"}
        text={"blablablabla"}
        tags={["태그1", "태그2", "태그3", "태그4", "태그5"]}
      />
    </ArticleAccodionRoot>
  );
}
