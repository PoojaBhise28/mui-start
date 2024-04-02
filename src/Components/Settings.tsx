import React from 'react'
import SideNav from './SideNav'
import { Box, Typography } from '@mui/material'
import Navbar from './Navbar'

export default function Settings() {
    return (
        <>
           <Navbar/>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <div>Home</div>
            </Box>




        </>
    )
}
