import React, { useState, useEffect } from "react";
import { iterator } from "../../utils/utils";
import axios from "axios";

export default function DataFetch(url, prop) {
  const [propName, setPropName] = useState(prop);
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);
  const [givenUrl, setGivenUrl] = useState(url);

  useEffect(() => {
    let current = true;
    setErr("");
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
      .catch(err => {
        console.dir(err);
        setData({});
        setErr(err.message);
      });
  }, [url, propName, givenUrl]);

  return [data, err, setPropName];
}
