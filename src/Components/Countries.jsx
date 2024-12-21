import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Country from "./Country";

const Countries = () => {
  const data = useLoaderData();
  const [searchValue,setSearchValue]=useState("")
  console.log(data);
  const handleSearch = (event)=>{
    const val = event.target.value
    console.log(val)
    setSearchValue(val)
  }
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 space-y-3">
      <input onChange={handleSearch}
        type="text"
      
        placeholder="Type here"
        name="searchbar"
        className="input input-bordered w-full max-w-xs"
      />
      { data.filter(country=>{
        return (searchValue.toLocaleLowerCase()===""?country:
          country.countryName.toLocaleLowerCase().includes(searchValue)
        )
      }).map((country,idx) => (
        <Country key={idx} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
