import { useState, useEffect } from "react";

const useApi = (url) => {
    const [data, setData] = useState(null);
  
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
  
    useEffect(() => {fetchData()},[url]);
  
    return data;
};

export default useApi;