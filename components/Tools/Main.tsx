import { Box, Grid } from '@mui/material';
import React from 'react'
import { SubTitleLoading, TitleLoading } from '../Home/Main';
import { ReactTyped } from 'react-typed';
import Link from 'next/link';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export default function ToolsMain() {
    const { data: user } = useRetrieveUserQuery();
    return (
        <Grid item xs={12} justifyContent="center" alignItems="center">
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <TitleLoading><ReactTyped strings={["Certains de nos outils de référencement"]} typeSpeed={40} loop /></TitleLoading>
                {user ?
                    <SubTitleLoading>
                        Tous les outils au même endroit
                    </SubTitleLoading> :
                    <SubTitleLoading>
                        Vous voulez tous les outils au même endroit ?
                        <Link href="/auth/sign-up"> <span style={{ color: "#9372F1" }}>Commencez</span></Link>
                    </SubTitleLoading>}

                <br />
            </Box>
        </Grid>
    )
}
