import Link from "next/link";
import { IItem } from "../pages/index";

/**
 * The item used on the home view to render all the articles
 */
const ArticleItem: React.FC<{ item: IItem, index: number }> = ({ item, index }) => (
  <div>
    <Link href={`/stories/${index}`}>
      <a>
        <h2>{item.name}</h2>
      </a>
    </Link>
    <p>{item.summary}</p>
  </div>
);

export default ArticleItem;