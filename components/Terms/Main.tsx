import { Box, Grid } from '@mui/material'
import React from 'react'
import { TitleLoading } from '../Home/Main'
import { ReactTyped } from 'react-typed';

export default function TermsMain() {
    return (
        <Grid item xs={12} justifyContent="center" alignItems="center">
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <TitleLoading><ReactTyped strings={["Conditions d'utilisation"]} typeSpeed={40} loop /></TitleLoading>
                <br />
                <br />
                <br />
                <br />
            </Box>
        </Grid>
    )
}
