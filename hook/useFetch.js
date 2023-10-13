import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "24ecee0f4fmshabf348560b9ef11p10d572jsnc020a9d01709",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    fetchData();
  };
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
