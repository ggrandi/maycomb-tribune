
import React from "react"
import { Separator } from "./Layout";


interface IArticleListProps<DataType extends any> {
  data: DataType[];
  keyExtractor: (item: DataType) => string;
  RenderItem: React.FC<{ item: DataType, index: number }>;
}

/**
 * A component to render a list in react similar to FlatList in react native
 */
const ArticleList: <DataType extends any>(p: IArticleListProps<DataType>) => React.ReactElement<IArticleListProps<DataType>> = ({ data, RenderItem, keyExtractor }) => {
  const listItems = data.flatMap((it, ind) => [<RenderItem item={it} index={ind} key={keyExtractor(it)} />, < Separator key={keyExtractor(it) + "separator"} />]);
  listItems.pop();
  return (
    <>
      {listItems}
    </>
  );
};


export default ArticleList;
