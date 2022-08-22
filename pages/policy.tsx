import { GetStaticProps, NextPage } from "next";
import Container from "../components/Container";
import FlexCenter from "../components/FlexCenter";
import markdownToHtml, { getPolicyContent } from "../utils/markdown";

interface PolicyPageProps {
  content: string;
}

const Policy = ({ content }: PolicyPageProps) => {
  return (
    <Container>
      <FlexCenter>
        <article
          className="prose prose-gray mb-8"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </FlexCenter>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = getPolicyContent();
  const content = await markdownToHtml(post);

  return {
    props: {
      content,
    },
  };
};

export default Policy;
