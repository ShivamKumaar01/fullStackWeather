'use client'
import React from 'react'
import Box from '@mui/material/Box';
import UpperPart from '../components/image-searchbar';
import DisplayData from '../components/display-data';
import { useState } from 'react';
const LandingPage = () => {
    const [usedData,setUsedData]=useState([]);
   console.log(usedData ,"ewkufi")
    return (
        <Box component="section" sx={{ }}>
           <UpperPart setUsedData={setUsedData}></UpperPart>
           <DisplayData usedData={usedData} ></DisplayData>
           
        </Box>
    )
}

export default LandingPage