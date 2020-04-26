import React from "react";

interface IArticleRenderer {
  body: string;
  ImageRenderer: React.FC<{ url: string, caption: string }>;
  TextRenderer: React.FC<{ text: string }>;
  name?: string;
}

/**
 * Renders an article with images
 */
const ArticleRender: React.FC<IArticleRenderer> = ({ ImageRenderer, TextRenderer, body, name = "" }) => {
  const elems = body.split(/%%|\n/).map((el, i) => {
    if (/^\[("|')i(\1),\s?(\1.+\1),\s?(\1.+\1)\]$/.test(el)) {
      const [, url, caption] = JSON.parse(el.replace(/'/g, '"'));
      return <ImageRenderer url={url} caption={caption} key={`${name}${i}${url}`} />;
    }

    return <TextRenderer text={el} key={`${name}${i}${el.substr(0, 10)}`} />
  });

  return (
    <>
      {elems}
    </>
  );
}

export default ArticleRender;