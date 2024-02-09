import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Grid } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import { CustomWidthTooltip, T2, T3, TitleHeader } from './Metadata';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Advanced(props: any) {
    const { advance } = props;
    return (
        <Grid container sx={{ p: 3 }} >
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid xs={12} md={4}>
                    <TitleHeader>Catégories</TitleHeader>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TitleHeader>Résultats</TitleHeader>
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <TitleHeader sx={{ textAlign: { xs: "left", md: "center" } }}>Impact</TitleHeader>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid xs={12} md={4}>
                    <T2>Test de favicon</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {advance.favicon.length != 0 ?
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <T3>Ce site Web semble avoir une favicon.</T3>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    advance.favicon.substring(0, 5) == "https" ?
                                        <Avatar
                                            alt='favicon'
                                            src={advance.favicon}
                                        />
                                        :
                                        <T3>Impossible d&apos;afficher la favicon!</T3>
                                }

                            </AccordionDetails>
                        </Accordion>
                        :
                        <T3>Ce site Web ne semble pas avoir de favicon.</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {advance.favicon.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Les favicons sont de petites icônes qui apparaissent dans la barre de navigation URL de votre navigateur. Ils sont également enregistrés à côté du titre de votre URL lorsque votre page est ajoutée à vos favoris. Cela permet de marquer votre site et de permettre aux utilisateurs de naviguer facilement vers votre site parmi une liste de signets.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid xs={12} md={4}>
                    <T2>Test de balise canonique</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        advance.canonical_url == "NO" ?
                            <T3>Ce site Web ne semble pas avoir de balise de lien canonique.</T3> :
                            // <Accordion>
                            //     <AccordionSummary
                            //         expandIcon={<ExpandMoreIcon />}
                            //         aria-controls="panel1-content"
                            //         id="panel1-header"
                            //     >

                            //     </AccordionSummary>
                            //     <AccordionDetails>
                            //         <T3>{advance.canonical_url}</T3>
                            //     </AccordionDetails>
                            // </Accordion>
                            <T3>Ce site Web semble avoir une balise de lien canonique.</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {advance.canonical_url == "NO" ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`La balise de lien canonique est utilisée pour désigner une page principale lorsque vous avez plusieurs pages avec un contenu en double ou très similaire.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid xs={12} md={4}>
                    <T2>Test Google Analytics</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        advance.google_analytics_test != "Not connected to Google Analytics" ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Un script Google Analytics est détecté sur cette page.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <T3>{advance.google_analytics_test}</T3>
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Un script Google Analytics n&apos;est pas détecté sur cette page.</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {advance.google_analytics_test != "Not connected to Google Analytics" ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Bien qu'il existe plusieurs outils disponibles pour surveiller les visiteurs et les sources de trafic de votre site, Google Analytics est un programme gratuit et couramment recommandé pour aider à diagnostiquer les problèmes potentiels de référencement.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

        </Grid>
    )
}
