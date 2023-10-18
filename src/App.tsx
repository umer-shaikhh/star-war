import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { useFetchData } from "./usePlanet";
import { TextField, Autocomplete } from "@mui/material";
// import './App.css'

export default function App() {
  const [searchItem, setSearchItem] = useState<string>("");
  const debounce = useDebounce();
  const { isLoading, apiData, fetchData } = useFetchData();

  const handleSearchInput = (e) => {
    const { value } = e.target;
    console.log(value);

    debounce(() => setSearchItem(value));
  };

  useEffect(() => {
    if (searchItem.length < 2) fetchData("");
    else fetchData(searchItem);
  }, [searchItem]);

  if (isLoading) return "Loading...";

  return (
    <div className="App">
      <Autocomplete
        id="autocomplete"
        options={apiData.map((data) => data.name)}
        onChange={handleSearchInput}
        onInput={handleSearchInput}
        renderInput={(params) => <TextField {...params} label="Planets" />}
      />
      <ul>
        {apiData.map((data, index) => (
          <li key={index}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}
