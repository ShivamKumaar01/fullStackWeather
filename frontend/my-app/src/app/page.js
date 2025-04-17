"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Box from '@mui/material/Box';
import LandingPage from "@/components/landing-page";



export default function Home() {
  return (
    <Box component="section" sx={{ height:'100vh' }}>
     <LandingPage></LandingPage>
    </Box>
  );
}
