'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import cloud from '../assets/clouds.png'
import humidity from '../assets/humidity.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import wind from '../assets/air.png'
import pressure from '../assets/barometer.png'
import './display-data.css'


const DisplayData = ({ usedData }) => {
   console.log("isk basis pe update karo sbko", usedData)
   const given_seconds = usedData.weather?.sunrise

   const dateObj = new Date(given_seconds * 1000);
   console.log(dateObj,"this is dateobj")
   const hours = dateObj.getUTCHours();
   const minutes = dateObj.getUTCMinutes();
   const seconds = dateObj.getSeconds();
    const timeString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');





   return (
      <Box component="section" sx={{ p: 2, display: 'flex', justifyContent: 'space-around',className:'lower-img' }}>
         {/* first box */}
         <Box display={'flex'}>
            <Box >
               <Image src={cloud} height={180} width={160} className='img' alt='image' />
               <Typography fontWeight={700} fontSize={32} marginLeft={3}>Cloudy</Typography>
            </Box>


         </Box>

         {/* second box */}
         <Box marginTop={4} >
            <Box display={'flex'} >
               {/* humidity */}
               <Box display={'flex'}>
                  <Box>
                     <Image src={humidity} height={60} width={60} alt='image' className='img' />
                     <Typography>Humidity</Typography>
                  </Box>
                  <Typography paddingTop={2} marginLeft={2} fontSize={30} fontWeight={800}>{usedData.weather?.Humidity}%</Typography>

               </Box>

               {/* wind velocity */}
               <Box marginLeft={30} display={'flex'}>
                  <Box >
                     <Image src={wind} height={60} width={60} alt='image' className='img' />
                     <Typography>Velocity</Typography>
                  </Box>
                  <Typography paddingTop={2} marginLeft={2} fontSize={30} fontWeight={800}>{usedData.weather?.windSpeed}</Typography>

               </Box>
            </Box>
            <Box display={'flex'} marginTop={'4%'} >
               {/* humidity */}
               <Box display={'flex'}>
                  <Box>
                     <Image src={pressure} height={60} alt='image' width={60} className='img' />
                     <Typography>Pressure</Typography>
                  </Box>
                  <Typography paddingTop={2} marginLeft={2} fontSize={30} fontWeight={800}>{usedData.weather?.Pressure}</Typography>


               </Box>
               {/*sun rise */}
               <Box marginLeft={30} display={'flex'}>
                  <Box>
                     <Image src={sunrise} height={60} width={60} alt='image' className='img' />
                     <Typography>sunrise</Typography>
                  </Box>
                  <Typography paddingTop={2} marginLeft={2} fontSize={30} fontWeight={800}>{usedData.weather?.
                     sunrise
                  }</Typography>

               </Box>
            </Box>
         </Box>
         {/* third box */}
         <Box display={'flex'}>
            <Box paddingTop={9}>
               <Image src={sunset} height={80} width={80} alt='image' className='img' />
               <Typography paddingLeft={3}>sunset</Typography>
            </Box>
            <Typography paddingTop={12} marginLeft={2} fontSize={30} fontWeight={700}>{usedData.weather?.sunset}</Typography>

         </Box>

      </Box>
   )
}

export default DisplayData
