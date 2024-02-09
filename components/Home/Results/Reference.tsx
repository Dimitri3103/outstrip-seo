import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import { CustomWidthTooltip, T2, T3, T4, TitleHeader } from './Metadata';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Reference(props: any) {
    const { reference } = props;
    return (
        <Grid container sx={{ p: 3 }}>
            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <TitleHeader>Catégories</TitleHeader>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TitleHeader>Results</TitleHeader>
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <TitleHeader sx={{ textAlign: { xs: "left", md: "center" } }}>Impact</TitleHeader>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test du plan du site</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        reference.sitemaps.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {reference.sitemaps.length} fichier(s) de plan de site.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {reference.sitemaps.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucun fichier de plan de site!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.sitemaps.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Un plan du site est important car il répertorie toutes les pages Web du site et permet aux robots des moteurs de recherche d'explorer le site Web plus intelligemment. Un plan du site fournit également des métadonnées précieuses pour chaque page Web.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test Robots.txt</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        reference.robot_txt.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Ce site Web utilise un fichier robots.txt.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <T3>{reference.robot_txt}</T3>
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Ce site Web n&apos;utilise pas de fichier robots.txt.</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.robot_txt.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Robots.txt indique à Googlebot et aux autres robots d'exploration ce qui peut et ne doit pas être exploré sur votre site.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test de page d&apos;erreur 404</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        reference.page_error != "No Error" ?
                            <T3>Aucune erreur détectée sur cette page.</T3>
                            :
                            <T3>Ce site Web utilise une page d&apos;erreur 404.</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.page_error == "No Error" ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`En créant une page d'erreur 404 personnalisée, vous pouvez améliorer l'expérience utilisateur de votre site Web en informant les utilisateurs que seule une page spécifique est manquante/cassé (et non l'intégralité de votre site), en leur fournissant des liens utiles, la possibilité de signaler des bogues et éventuellement de suivre. la source des liens brisés sur votre site.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Certificat SSL et test HTTPS</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {reference.ssl_certificate == "VALID SSL certificate!" ?
                        <T3>Ce site Web utilise avec succès HTTPS, un protocole de communication sécurisé sur Internet.</T3>
                        :
                        <T3>Ce site Web n&apos;utilise pas HTTPS, un protocole de communication sécurisé sur Internet..</T3>}
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.ssl_certificate == "VALID SSL certificate!" ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`HTTPS doit être utilisé par tout site qui collecte des données client sensibles telles que des informations de carte de crédit. Même pour les sites qui ne collectent pas de telles données, le passage au https aide les utilisateurs en améliorant la confidentialité et la sécurité globale.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test d&apos;image responsive</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        reference.responsive_images.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {reference.responsive_images.length} image(s) réactive(s).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {reference.responsive_images.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucune image réactive!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.responsive_images.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Idéalement, votre page ne doit pas diffuser d'images plus grandes que la version affichée sur l'écran de l'utilisateur. La diffusion d'une image plus grande que la fenêtre d'affichage de l'utilisateur entraîne une réduction de l'image, une utilisation de bande passante inutile et un temps de chargement de page plus lent.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test d&apos;image non responsive</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        reference.non_esponsive_images.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {reference.non_esponsive_images.length} image(s) non réactive(s).</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {reference.non_esponsive_images.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucune image non réactive!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.non_esponsive_images.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Idéalement, votre page ne doit pas diffuser d'images plus grandes que la version affichée sur l'écran de l'utilisateur. La diffusion d'une image plus grande que la fenêtre d'affichage de l'utilisateur entraîne une réduction de l'image, une utilisation de bande passante inutile et un temps de chargement de page plus lent.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

            <Grid item container xs={12} sx={{ p: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <T2>Test d&apos;attribut {"alt"} d&apos;image</T2>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        reference.image_alt_text_absent.length != 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <T3>Cette page Web contient {reference.image_alt_text_absent.length} image(s) avec l&apos;attribut {"alt"} requis.</T3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {reference.image_alt_text_absent.join(',').split(',').map((m: any, index: any) =>
                                        <Link href={m} key={index}><T4>{m}</T4></Link>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <T3>Cette page Web ne contient aucune image avec l&apos;attribut {"alt"} requis!</T3>
                    }
                </Grid>
                <Grid item xs={12} md={1.75}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, alignItems: "center" }}>
                        {reference.image_alt_text_absent.length != 0 ? <CheckCircleIcon sx={{ color: "rgb(52, 188, 110)" }} /> : <CancelIcon sx={{ color: "rgb(246, 56, 66)" }} />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <CustomWidthTooltip title={`Si une image ne peut pas être affichée (par exemple, en raison d'une source d'image cassée, d'une connexion Internet lente, etc.), l'attribut alt fournit des informations alternatives. L'utilisation de mots-clés et de texte pertinents dans l'attribut alt peut aider les utilisateurs et les moteurs de recherche à mieux interpréter le sujet d'une image.`}>
                        <InfoIcon sx={{ color: "rgba(0, 0, 0, 0.25)" }} />
                    </CustomWidthTooltip>
                </Grid>
            </Grid>

        </Grid>
    )
}
