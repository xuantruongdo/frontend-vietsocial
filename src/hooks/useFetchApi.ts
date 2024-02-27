import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import axios from "../config/axios.customize";

interface ApiResponse<T> {
  data: T | null;
  fetchData: any;
  loading: boolean;
  error: string | null;
}

function useFetchApi<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<T> = await axios.get(`/api/v1/${url}`);
      setData(response.data);
    } catch (error) {
      setError("Error fetching data from the API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, fetchData, loading, error };
}

export default useFetchApi;
