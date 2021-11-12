import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const personalKey = "";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: personalKey,
    });
  }, []);
  return (
    <div>
      <h1>elisee</h1>
    </div>
  );
};
export default App;
