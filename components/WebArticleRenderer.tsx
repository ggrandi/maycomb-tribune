import styles from "./WebArticleRenderer.module.css";
import ArticleRender from "./ArticleRenderer";

const assetPrefix = process.env.ASSET_PREFIX

const DisplayImage: React.FC<{ url: string, caption: string }> = ({ url, caption }) => (
  <div className={styles.imageContainer}>
    <img src={`${assetPrefix}${url}`} alt={caption} className={styles.image} />
    <p className={styles.caption}>{caption}</p>
  </div>
);

const DisplayText: React.FC<{ text: string }> = ({ text }) => (
  <p className={styles.text}>{text}</p>
);

/**Renders the articles for the web version */
const WebArticleRenderer: React.FC<{ article: string, name?: string }> = ({ article, name = "" }) => (
  <ArticleRender body={article} ImageRenderer={DisplayImage} TextRenderer={DisplayText} name={name} />
);

export default WebArticleRenderer;