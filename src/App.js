import React, { useState, useEffect } from "react";
import DataFetch from "./components/customHooks/DataFetch";
import Err from "./components/customHooks/Err";
import Header from "./components/Header";
import "./App.scss";
import JsonCrawl from "./JsonCrawl";

function App() {
  const [url, setUrl] = useState("");
  return (
    <div className="App">
      <Header>
        <input
          placeholder="Api Url"
          defaultValue={url}
          onChange={e => setUrl(e.target.value)}
        />
      </Header>
      <JsonCrawl url={url} />
    </div>
  );
}

export default App;
