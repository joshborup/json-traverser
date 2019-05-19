import React, { useState, useEffect } from "react";
import DataFetch from "./components/customHooks/DataFetch";
import Err from "./components/customHooks/Err";
import Header from "./components/Header";
import "./App.scss";
import JsonCrawl from "./JsonCrawl";

function App() {
  const [url, setUrl] = useState("");
  const [download, setDownload] = useState(null);
  return (
    <div className="App">
      <Header>
        <div className="api-url-badge">API URL</div>
        <input defaultValue={url} onChange={e => setUrl(e.target.value)} />
      </Header>
      <JsonCrawl download={download} setDownload={setDownload} url={url} />
    </div>
  );
}

export default App;
