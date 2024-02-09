import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: "14px",
        border: '1px solid #dadde9',
        textAlign: "justify"
    },
});

export const TitleHeader = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "22px",
    fontWeight: 600,
    color: "rgb(34, 37, 37)",
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "24px",
    },
}));
export const T2 = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "20px",
    fontWeight: 500,
    color: "rgb(34, 37, 37)",
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "22px",
    },
}));
export const T3 = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "18px",
    fontWeight: 400,
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
    },
}));
export const T4 = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "16px",
    fontWeight: 400,
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    },
}));

export default function Metadata(props: any) {
    const { metaData } = props;

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
                    <T2>Test de méta-titre</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {metaData.title_length != 0 ? <T3>{metaData.title}</T3> : <T3>Cette page Web ne contient pas de balise de titre!</T3>}
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {metaData.title_length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Le méta-titre de votre page Web est une balise HTML qui définit le titre de votre page. Cette balise affiche le titre de votre page dans les résultats des moteurs de recherche, en haut du navigateur d'un utilisateur, ainsi que lorsque votre page est ajoutée à vos favoris. Une balise de titre concise et descriptive qui reflète fidèlement le sujet de votre page est importante pour un bon classement dans les moteurs de recherche.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Longueur du méta-titre</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {metaData.title_length != 0 ? <T3>{metaData.title_length} caractères.</T3> : <T3>Cette page Web ne contient pas de balise de titre!</T3>}
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {metaData.title_length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Bien qu'il n'y ait pas de nombre cible de caractères, les titres doivent être descriptifs et concis. Nous vous recommandons d'utiliser un titre d'une longueur comprise entre 20 et 60 caractères afin de correspondre aux résultats de recherche Google limités à 600 pixels.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de méta-description</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {metaData.meta_description_length != 0 ? <T3 sx={{ textAlign: "justify" }}>{metaData.meta_description}</T3> : <T3>Cette page Web ne contient pas de balise méta description!</T3>}
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {metaData.meta_description_length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`La méta description de votre page Web est une balise HTML destinée à fournir un résumé court et précis de votre page. Les moteurs de recherche utilisent des méta-descriptions pour aider à identifier le sujet d'une page. Ils peuvent également utiliser des méta-descriptions en les affichant directement dans les résultats des moteurs de recherche. Des méta descriptions précises et attrayantes peuvent aider à améliorer à la fois votre classement dans les moteurs de recherche et la probabilité qu'un utilisateur clique sur votre page.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Longueur de la méta description</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {metaData.meta_description_length != 0 ? <T3>{metaData.meta_description_length} caractères.</T3> : <T3>Cette page Web ne contient pas de balise méta description!</T3>}
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {metaData.meta_description_length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`La méta description de votre page Web est une balise HTML destinée à fournir un résumé court et précis de votre page. Les moteurs de recherche utilisent des méta-descriptions pour aider à identifier le sujet d'une page. Ils peuvent également utiliser des méta-descriptions en les affichant directement dans les résultats des moteurs de recherche. Des méta descriptions précises et attrayantes peuvent aider à améliorer à la fois votre classement dans les moteurs de recherche et la probabilité qu'un utilisateur clique sur votre page.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test des balises de titre H1</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        metaData.h1.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {metaData.h1.length} balises H1.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {metaData.h1.join(',').split(',').map((m: any, index: any) =>
                                        <T4 key={index}>- {m}</T4>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient pas de balises H1!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {metaData.h1.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Les titres H1 aident à indiquer les sujets importants de votre page aux moteurs de recherche. Bien que moins importants que de bons méta-titres et descriptions, les titres H1 peuvent néanmoins aider à définir le sujet de votre page pour les moteurs de recherche.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test des balises de titre H2</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        metaData.h2.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {metaData.h2.length} balises H2.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {metaData.h2.join(',').split(',').map((m: any, index: any) =>
                                        <T4 key={index}>- {m}</T4>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient pas de balises H2!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {metaData.h2 != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`À l’instar de la balise H1 HTML, la balise H2 revêt une importance cruciale pour le SEO. Mais, contrairement au titre principal de la page, elle peut être utilisée plusieurs fois pour structurer correctement le texte. Agissant comme des sous-titres, les balises H2 vont offrir un premier découpage du contenu.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

        </Grid>
    )
}
