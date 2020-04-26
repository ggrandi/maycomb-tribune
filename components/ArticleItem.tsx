import { IItem } from "../pages/index";
import StaticLink from "./StaticLink";

/**
 * The item used on the home view to render all the articles
 */
const ArticleItem: React.FC<{ item: IItem, index: number }> = ({ item, index }) => (
  <div>
    <StaticLink href={`/stories/${index}`}>
      <a>
        <h2>{item.name}</h2>
      </a>
    </StaticLink>
    <p>{item.summary}</p>
  </div>
);

export default ArticleItem;