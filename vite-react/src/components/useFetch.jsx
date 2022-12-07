import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState();

  const heavyWork = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const initData = response.data;
      callback(initData);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(`${e}`);
    }
  };

  useEffect(() => {
    heavyWork();
  }, []);

  return loading;
};

export default useFetch;
