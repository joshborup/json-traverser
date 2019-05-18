import React, { useState, useEffect } from "react";
import DataFetch from "./components/customHooks/DataFetch";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/1337.css";
export default function JsonCrawler({ url }) {
  const [propName, setPropName] = useState("");
  const [custom, err, setCustom] = DataFetch(url);
  const [toggleIterable, setToggleIterable] = useState(false);
  const [search, setSearch] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const [example, setExample] = useState([{}]);
  function searching(ev) {
    setSearch(ev.target.value);
  }

  function reset() {
    setSearch("");
    setPropName("");
    setCustom("");
  }

  useEffect(() => {
    setCustom("");
    setSearch("");
    setPropName("");
  }, [url]);

  useEffect(() => {
    if (Array.isArray(custom)) {
      let arrayLen = [];
      let exampleObj = custom[0];
      for (let key in exampleObj) {
        arrayLen.push(key);
      }
      setToggleIterable(true);

      setExample(exampleObj);
      setInputCount(arrayLen.length);
    } else {
      setExample(null);
      setInputCount(0);
      setToggleIterable(false);
    }
  }, [custom, propName, search]);

  const jsObj = JSON.stringify(custom, undefined, 2);

  return (
    <div>
      <div className="input-area-container">
        <input
          value={propName}
          placeholder="Propety name with iterator"
          onChange={e => {
            setCustom(e.target.value);
            setPropName(e.target.value);
          }}
        />
        {toggleIterable && (
          <textarea
            placeholder="Properties to keep in iteratable objects"
            value={search}
            onChange={e => searching(e)}
          />
        )}
        <button onClick={reset}>Reset Filter</button>
        {search && Array.isArray(custom) ? (
          <button>
            <a
              href={`data:text/json;charset=utf-8,  ${encodeURIComponent(
                JSON.stringify(
                  custom.map(element => {
                    let filterdObj = {};

                    for (let key in element) {
                      if (search && search.includes(key)) {
                        filterdObj[key] = element[key];
                      }
                    }
                    return filterdObj;
                  }),
                  undefined,
                  2
                )
              )}`}
              download="data.json"
            >
              download JSON
            </a>
          </button>
        ) : (
          <button>
            <a
              href={`data:text/json;charset=utf-8,  ${encodeURIComponent(
                jsObj
              )}`}
              download="data.json"
            >
              download JSON
            </a>
          </button>
        )}
      </div>
      <div className="json-area">
        <div>
          <JSONPretty id="json-pretty" data={example} />
          {!toggleIterable && !jsObj.includes("<!DOCTYPE html>") ? (
            <JSONPretty data={jsObj} />
          ) : null}
        </div>
        <div>
          {toggleIterable ? <span>This item can be iterated over</span> : null}
          {toggleIterable ? (
            <>
              {search && Array.isArray(custom) && (
                <JSONPretty
                  id="json-pretty"
                  data={custom.map(element => {
                    let filterdObj = {};

                    for (let key in element) {
                      if (search && search.includes(key)) {
                        filterdObj[key] = element[key];
                      }
                    }
                    return filterdObj;
                  })}
                />
              )}
            </>
          ) : (
            <div />
          )}
        </div>
      </div>

      {err}
    </div>
  );
}
