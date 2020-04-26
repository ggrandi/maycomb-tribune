import { NextPage } from "next";
import Layout from "./Layout";
import WebArticleRenderer from "./WebArticleRenderer";

const story = 'Hello world \n\n wehrkljghbldkavbnkjasdncklj%%["i", "/static/tree.png", "this is a tree"]%% How are you? %%["i", "/static/tree2.png", "this is another tree"]%%';

const TestStory: NextPage<{}> = () => (
  <Layout>
    <WebArticleRenderer article={story} name="newStory" />
  </Layout>
);

export default TestStory;