import { useState } from "react";
import axios from "axios";
import { PlanetsResponse } from "./planets";

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<Array<PlanetsResponse>>([]);
  let url = "https://swapi.dev/api/planets?search=";

  const fetchData = async (searchItem: string) => {
    try {
      url += searchItem;
      axios.get(url).then((response) => {
        setApiData(response.data.results);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, apiData, fetchData };
};
