import React from 'react'
import { Box, Grid, Typography, styled } from "@mui/material";
import { motion } from 'framer-motion';

const TitleMain = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "20px",
    fontWeight: 600,
    color: "#FFF",
    textAlign: "center",
    // marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        fontSize: "30px",
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "40px",
        // marginTop: theme.spacing(10),
    },
}));
const Number = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "30px",
    fontWeight: 700,
    color: "#FFF",
    textAlign: "center",
    // marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        fontSize: "40px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "54px",
        // marginTop: theme.spacing(10),
    },
}));
const JoinText = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "16px",
    fontWeight: 500,
    color: "#FFF",
    textAlign: "center",
    // marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
        // marginTop: theme.spacing(10),
    },
}));
export const StyledGridJoin = styled(Grid)(({ theme }) => ({
    background: "#9372F1",
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(8),
    },
}));

const joinList = [
    {
        id: 1,
        number: "25.5M+",
        text: "URL uniques enregistrées sur 11 ans",
    },
    {
        id: 2,
        number: "85,000+",
        text: "Des clients satisfaits partout dans le monde",
    },
    {
        id: 3,
        number: "120+",
        text: "Pays desservis avec de meilleurs services de référencement",
    },
]


export default function Join() {
    return (

        <StyledGridJoin container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <TitleMain>
                Transmettre la confiance par des chiffres est notre façon de faire des affaires. Est-ce le vôtre aussi ?
                </TitleMain>
            </Grid>

            <Grid item xs={9} container justifyContent="center" alignItems="center" spacing={6}>
                {joinList.map((join) => (
                    <Grid item xs={12} sm={6} md={4} key={join.id}>
                        <motion.div
                            whileHover={
                                {
                                    position: "relative",
                                    zIndex: 1,
                                    scale: 1.1,
                                    transition: {
                                        durantion: .2
                                    }
                                }
                            }
                        >
                            <Box>
                                <Number>{join.number}</Number>
                                <JoinText>{join.text}</JoinText>
                            </Box>
                        </motion.div>

                    </Grid>
                ))}
            </Grid>

        </StyledGridJoin>
    )
}
