import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/Layout";
import ArticleList from "../components/ArticleList";
import Data from "../public/static/stories.json";
import ArticleItem from "../components/ArticleItem";

const IndexPage: NextPage<{}> = () => {
  return (
    <Layout title="Home">
      <ArticleList data={Data} RenderItem={ArticleItem} keyExtractor={(i) => i.id} />
    </Layout>
  );
};

export interface IItem {
  name: string;
  summary: string;
  article: string;
  id: string;
};

export default IndexPage;

