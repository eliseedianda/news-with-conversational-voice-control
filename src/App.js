import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import CardNews from "./Component/CardNews/CardNews.component";

const personalKey =
  "e3d99073dec9a0811d0136f67428af902e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: personalKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>elisee</h1>
      <CardNews articles={newsArticles} />
    </div>
  );
};
export default App;
