import Layout from "../../components/Layout";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Data from "../../public/static/stories.json";
import { IItem } from "..";
import WebArticleRenderer from "../../components/WebArticleRenderer";

const ArticleView: NextPage<IItem> = ({ article, name }) => {
  return (
    <Layout title={name}>
      <h1>{name}</h1>
      <WebArticleRenderer article={article} name="newStory" />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Data.map((s) => ({
      params: {
        id: s.id
      },
    })),
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: Data[Number(params?.id || 0)],
  };
}

export default ArticleView;