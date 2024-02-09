import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import { CustomWidthTooltip, T2, T3, T4, TitleHeader } from './Metadata';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Performance(props: any) {
    const { performance } = props;

    return (
        <Grid container sx={{ p: 3 }}>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
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
                <Grid item xs={12} md={4}>
                    <T2>Test de minification CSS</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.minified_css.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {performance.minified_css.length} fichier(s) CSS minifié(s).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {performance.minified_css.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun fichier CSS minifié!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.minified_css.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Les fichiers réduits réduisent la taille de la page et le temps de chargement global.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de non-minification CSS</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.css_not_minified.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {performance.css_not_minified.length} fichier(s) CSS non minifié(s).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {performance.css_not_minified.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun fichier CSS non minifié!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.css_not_minified.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Les fichiers réduits réduisent la taille de la page et le temps de chargement global.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de minification Javascript</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.minified_js.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {performance.minified_js.length} fichier(s) Javascript minifié(s).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {performance.minified_js.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun fichier Javascript minifié!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.minified_js.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Les fichiers réduits réduisent la taille de la page et le temps de chargement global.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de non-minification Javascript</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.js_not_minified.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {performance.js_not_minified.length} fichier(s) Javascript non minifié(s).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {performance.js_not_minified.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun fichier Javascript non minifié!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.js_not_minified.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Les fichiers réduits réduisent la taille de la page et le temps de chargement global.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Éléments délivrés par CDN</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.elements_delivered_by_cdn.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {performance.elements_delivered_by_cdn.length} élément(s) délivré(s) par CDN (Content Delivery Networks).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {performance.elements_delivered_by_cdn.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun élément délivré par CDN (Content Delivery Networks)!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.elements_delivered_by_cdn.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Un CDN (Content Delivery Network) est un réseau de serveurs distribués dans le monde entier qui permet de diffuser du contenu Web plus rapidement et de manière plus fiable.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Éléments non délivrés par CDN</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.elements_not_delivered_by_cdn.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {performance.elements_not_delivered_by_cdn.length} élément(s) non délivré(s) par CDN (Content Delivery Networks).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {performance.elements_not_delivered_by_cdn.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun élément non délivré par CDN (Content Delivery Networks)!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.elements_not_delivered_by_cdn.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Un CDN (Content Delivery Network) est un réseau de serveurs distribués dans le monde entier qui permet de diffuser du contenu Web plus rapidement et de manière plus fiable.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de balises HTML obsolètes</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        performance.old_tags != "no issues" ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web utilise des balises HTML obsolètes.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <T3>{performance.old_tags}</T3>
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web n&apos;utilise pas de balises HTML obsolètes.</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.old_tags == "no issues" ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Ces balises finiront par perdre la prise en charge du navigateur et vos pages Web risquent de s'afficher de manière incorrecte à mesure que les navigateurs abandonnent la prise en charge de ces balises.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de vitesse de chargement du site</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <T3>{performance.load_time}</T3>
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {performance.load_time < 5 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    {performance.load_time < 5 ?
                        <CustomWidthTooltip title={`Le temps de chargement de cette page Web est d'environ ${performance.load_time} secondes, ce qui est inférieur à la vitesse de chargement moyenne qui est de 5 secondes.`}>
                            <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                        </CustomWidthTooltip> :
                        <CustomWidthTooltip title={`Le temps de chargement de cette page Web est d'environ ${performance.load_time} secondes, ce qui dépasse la vitesse de chargement moyenne qui est de 5 secondes.`}>
                            <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                        </CustomWidthTooltip>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
