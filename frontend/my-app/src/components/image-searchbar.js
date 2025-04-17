"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
// import sky from '../assets/skyimage.jpeg'
import sunrise from '../assets/air.png'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './image-searchbar.css'
const UpperPart = ({setUsedData}) => {
 
  const [cityName, setCityName] = useState("");
  const[dummyCity,setDummyCity]=useState("");

  function searchHandler() {
    console.log("searching");
  }



   
  

  const handleChange = (event) => {
   
    // console.log(cityName)
    setCityName(event.target.value)
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(cityName,"hellow")
  //  api hit karo and data lekr aao
      const weateherDetails=await fetch("http://localhost:8080/api/v1/city", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({cityName:cityName})
      })
      const data= await weateherDetails.json()
      console.log(data,"isk basis pe update karo frontend ko");
      setUsedData(data)
      setDummyCity(cityName);
  };


  return (
    <Box component="section" sx={{
      border: "1px solid black",

      backgroundImage: "url('sky.jpg')",
      backgroundRepeat: "no-repeat",
      height: "70vh",
      width: "100%",
      className:"imagebox"

     
    }}>

      <Box component="section" sx={{ p: 2, marginTop: '2%', display: 'flex', justifyContent: 'space-between' }}>
        {/* city name */}
        <Box marginLeft={2}  >
          <Typography paddingTop={2} fontWeight={700} fontSize={32}>{dummyCity}</Typography>
        </Box>


        {/* search bar */}
        <Box display={'flex'} >
        
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter city name"
              name="cityName"
              value={cityName}
              onChange={handleChange}
              variant='standard'

              margin="normal"
            />
            <Button type="submit"color='black'  >
            <SearchSharpIcon height={13}></SearchSharpIcon>
            </Button>
          </form>
        </Box>


      </Box>


    </Box>
  )
}

export default UpperPart;
