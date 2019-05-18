import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch(url, prop) {
  const [propName, setPropName] = useState(prop);
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);
  const [givenUrl, setGivenUrl] = useState(url);

  // useEffect(() => {
  //   setGivenUrl(url);
  // }, [url]);

  useEffect(() => {
    let current = true;
    setErr("");
    console.log("lsjkdfhakh");
    axios
      .get(url)
      .then(response => {
        if (Array.isArray(response.data) && !propName) {
          if (current) setData(response.data);
        } else {
          let { data } = response;
          if (current) iterator(data, propName, setData, iterator);
        }
        return () => (current = false);
      })
      .catch(err => setErr(err.message));
  }, [url, propName, givenUrl]);

  return [data, err, setPropName];
}

function iterator(obj, prop, setter, recurse) {
  for (let key in obj) {
    if (
      (prop && key === prop) ||
      (Array.isArray(obj[key]) && prop === key) ||
      (typeof obj[key] === "object" && prop === key) ||
      !prop
    ) {
      if (prop) {
        return setter(obj[key]);
      } else {
        return setter(obj);
      }
    } else {
      if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
        for (let propertName in obj[key]) {
          if (propertName === prop && typeof obj[key] !== "string") {
            setter(obj[key][propertName]);
          } else {
            iterator(obj[key][propertName], prop, setter, recurse);
          }
        }
      }
    }
  }
}
