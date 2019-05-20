import React, { useState, useEffect } from "react";
import DataFetch from "./components/customHooks/DataFetch";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/1337.css";
import Instructions from "./components/customHooks/Instructions";
import arrow from "./components/customHooks/arrow.png";
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
      // setSearch(JSON.stringify(arrayLen));
      setExample(arrayLen);
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
      {/* <Instructions
        instKey="test"
        image={arrow}
        instructions="test instructions"
        angle={125}
      /> */}
      {/* <Instructions
        image={arrow}
        instructions="doasdfklsdajflkjhfjhalkshdflkahsdfkha this!"
        angle={40}
      />
      <Instructions image={arrow} instructions="do jdjsdja this!" angle={0} />
      <Instructions image={arrow} instructions="do this!" angle={275} /> */}
      <span style={{ color: "red" }}>{err}</span>
      <div className="input-area-container">
        <div>
          <div>
            <label htmlFor="propname">Propety name on JSON to inspect</label>
            <input
              id="propname"
              value={propName}
              placeholder={`Example: ${(Object.keys(custom)[0] !== "0" &&
                Object.keys(custom)[0]) ||
                "vehicles"}`}
              onChange={e => {
                setCustom(e.target.value);
                setPropName(e.target.value);
              }}
            />
          </div>

          {toggleIterable && (
            <div>
              <label htmlFor="iterable">
                Properties to keep in objects being iterated over
              </label>
              <textarea
                id="iterable"
                placeholder="Properties to keep in objects being iterated over"
                value={search}
                onChange={e => searching(e)}
              />
            </div>
          )}

          <button onClick={reset}>Reset Filter</button>
        </div>

        <div>
          {search && Array.isArray(custom) ? (
            <button className="download-button">
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
            <button className="download-button">
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
      </div>
      <div className="json-area">
        <div>
          {toggleIterable ? (
            <span>
              This item can be iterated over, here are the possible properties
            </span>
          ) : null}
          <JSONPretty id="json-pretty" data={example} />
          {!toggleIterable &&
          !jsObj.includes("<!DOCTYPE html>") &&
          !jsObj.includes("<!doctype html>") ? (
            <JSONPretty data={jsObj} />
          ) : null}
        </div>
        <div>
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
            <>
              {!jsObj.includes("<!DOCTYPE html>") &&
                !jsObj.includes("<!doctype html>") && (
                  <JSONPretty data={jsObj} />
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
