import React from "react";

import CardNew from "../NewCard/CardNew.component";

const CardNews = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <CardNew />
      ))}
    </div>
  );
};

export default CardNews;
