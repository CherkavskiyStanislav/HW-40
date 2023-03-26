import React from "react";

function ArticleBody({show, lang, isRead}) {
  const articleBodyClass = isRead ? 'article__body read' : 'article__body';

  return (
    <div className={articleBodyClass}>
      <h3 className="article__description">
        {!show && lang.description }
      </h3>
      <p className="article__text">
        {show ? lang.content : lang.preview }
      </p>
    </div>
  )
}
export default ArticleBody;