import React, { useEffect, useState } from "react";
import { Button, Pagination, TextField } from "@mui/material";
import { Results } from "./Results";

export const SearchBar = () => {

    const [value, setValue] = useState('');
    const [results, setResults] = useState(null);

    const changeValue = (e, medication) => {    
      setValue(medication);
    }
  
    const search = async() => {

      const request = await fetch('https://api.fda.gov/drug/drugsfda.json?search=' +value +'&count=products.brand_name.exact', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
  
      const data = await request.json();
      setResults(data.results || []);

    }

  return (
    <>
      <div id="searchBar">
        <TextField
          id="searchField"
          label="Medication name or active ingredient"
          size="small"
          style={{ minWidth: '80%' }}
          value={value}
          onChange={(e) => changeValue(e, e.target.value)}
        />
        <Button id="searchButton" variant="outlined" color="secondary" onClick={search}>
          Search
        </Button>
      </div>
      <main>
        <Results results={results}/>
      </main>
    </>
  );
};



