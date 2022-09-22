import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/global-context";
import { getEstimatedRealValue, searchByNeighborhood } from "../utils/userServices";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select'
import "./filter.css";
import { FormControl, InputLabel } from "@mui/material";


export default function Filter( {setAggResults}) {
  const { neighborhoods, setNeighborhoods, setNeighborRes } = useContext(GlobalContext);
  
  const [querys, setQuerys] = useState({});

  useEffect(() => {
    gimmiBaseNeighborhood()
}, [neighborhoods])
  
const gimmiBaseNeighborhood = async () => {
   const result = await searchByNeighborhood(neighborhoods)
   setNeighborRes(result);
}

  const handleSubmit = async (querys) => {
    setAggResults(querys)
    setQuerys({
        constructionDate: null,
        maxPrice: null,
        minPrice: null,
        parking: null, 
        quality: null,
        rooms: null,
        size: null,
        type: null
      });
    console.log("DID IT GET THERE?", querys);
    const result = getEstimatedRealValue(querys)
    if (result.length === 0) {
      console.log(result);
    } else {
      console.log(result);
    }
  };

  return (
    <div class="filter-main">
      <form
        id="my-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(querys);
        }}
      >
        <div class="search-filters">
          <label >
            Price Range:
            <TextField
                   className="mt-2"
                  fullWidth
                  label="From"
                  id="fullWidth"
                  sx={{
                    color: "success.main",
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        color: "#93B5C6",
                      },
                  }}
                  type="number"
                  placeholder="From"
                  onChange={(e) => {
                    setQuerys({ ...querys, minPrice: e.target.value });
                  }}
                />
               <TextField
                  fullWidth
                  className="mt-2"
                  label="To"
                  id="fullWidth"
                  sx={{
                    color: "success.main",
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        color: "#93B5C6",
                      },
                  }}
                  type="text"
                  placeholder="To"
                  onChange={(e) => {
                    setQuerys({ ...querys, maxPrice: e.target.value });
                  }}
                />
          </label>
          <label>
            Minimum Property Size:
            <TextField
                  fullWidth
                  className="mt-2"
                  label="Size"
                  id="fullWidth"
                  sx={{
                    color: "success.main",
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        color: "#93B5C6",
                      },
                  }}
                  type="number"
                  placeholder="Size"
                  onChange={(e) => {
                    setQuerys({ ...querys, size: e.target.value });
                  }}
                />
          </label>
          <label>
            Number of Rooms
          <FormControl >
        <InputLabel htmlFor="filled-age-native-simple">Select Number Of Rooms</InputLabel>
        <Select
          native
          onChange={(e) => {
            setQuerys({ ...querys, rooms: e.target.value });
          }}
        > 
         <option disabled selected value=""></option>
          <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 and above</option>
        </Select>
      </FormControl>
      </label>
          <label>
            Parking
            <TextField
            className="mt-2"
                  fullWidth
                  label="Parking"
                  id="fullWidth"
                  sx={{
                    color: "success.main",
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        color: "#93B5C6",
                      },
                  }}
                  type="number"
                  placeholder="Parking"
                  onChange={(e) => {
                    setQuerys({ ...querys, parking: e.target.value });
                  }}
                />
          </label>
          <label>
            Type Of Property
          <FormControl className="mt-2">
        <Select
          native
          onChange={(e) => {
            setQuerys({ ...querys, type: e.target.value });
          }}
        > 
      <option disabled selected>
                Insert Type of Property
              </option>
              <option value="Two-family Conversion">
                Two-family Conversion
              </option>
              <option value="Duplex">Duplex</option>
              <option value="Townhouse End Unit">Townhouse End Unit</option>
              <option value="Townhouse Inside Unit">
                Townhouse Inside Unit
              </option>
        </Select>
      </FormControl>
      </label>
      <label>
           Quality
          <FormControl className="mt-2">
        <Select
          native
          onChange={(e) => {
            setQuerys({ ...querys, quality: e.target.value });
          }}>
       <option disabled selected>Construction Quality</option>
              <option value="Very Excellent">
              Very Excellent
              </option>
              <option value="Excellent">Excellent</option>
              <option value="Very Good">Very Good</option>
              <option value="Above Average">
              Above Average
              </option>
              <option value="Average">
              Average
              </option>
              <option value="Below Average">
              Below Average
              </option>
              <option value="Fair">
              Fair
              </option>
              <option value="Poor">
              Poor
              </option>
              <option value="Very Poor">
              Very Poor
              </option>
        </Select>
      </FormControl>
      </label>
          <label>
            {" "}
            Construction year:
            <TextField
                  fullWidth
                  className="mt-2"
                  label="Year"
                  id="fullWidth"
                  sx={{
                    color: "success.main",
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        color: "#93B5C6",
                      },
                  }}
                  type="text"
                  placeholder="Year"
                  onChange={(e) => {
                    setQuerys({ ...querys, constructionDate: e.target.value });
                  }}
                />
          </label>
        </div>
        <button
          className="search-button button-63"
          role="button"
          type="submit"
          form="my-form"
        >
          Search
        </button>
      </form>
    </div>
  );
}
