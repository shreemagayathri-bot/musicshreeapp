import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, dependencies) {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [dependencies]);

  return data;
}

export default useFetch;