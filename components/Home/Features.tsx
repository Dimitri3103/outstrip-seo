import React from 'react'
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Image from 'next/image';
import I1 from "@/assets/images/i1.svg"
import I2 from "@/assets/images/i2.svg"
import I3 from "@/assets/images/i3.svg"
import I4 from "@/assets/images/i4.svg"
import I5 from "@/assets/images/i5.svg"
import I6 from "@/assets/images/i6.svg"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export const StyledGrid = styled(Grid)(({ theme }) => ({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderBottom: "1px solid rgba(155, 171, 197, 0.38)",
    background: "#E8EAF6",
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}));
export const TitleH1 = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: "20px",
    color: "#212832",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "30px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "40px",
    },
}));
export const SubTitleH2 = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: "16px",
    color: "#18242B",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "20px",
        paddingLeft: theme.spacing(15),
        paddingRight: theme.spacing(15),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "24px",
    },
}));
export const StyledGrid2 = styled(Grid)(({ theme }) => ({
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
    },
}));
const FeatureImgStyle = {
    width: "100px",
    height: "100px",
}
const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: "18px",
    color: "#18242B",
    textAlign: "center",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
    },
}));
const FeatureText = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    color: "#18242B",
    textAlign: "justify",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "15px",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
}));
const FeatureBoxContainer = styled(Box)(({ theme }) => ({
    width: "85%",
    height: "330px",
    borderRadius: "15px",
    background: "var(--White, #FFF)",
    boxShadow: "0px 4px 25px 0px rgba(47, 69, 197, 0.20)",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        height: "420px",
    },
    [theme.breakpoints.up('md')]: {
        height: "450px",
    },

}));
const StartNowButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    width: "50%",
    height: "58px",
    fontSize: "16px",
    background: "#9372F1",
    borderRadius: "10px",
    fontWeight: 400,
    color: "var(--White, #FFF)",
    fontFamily: 'DM Sans',
    "&:hover": { background: "#9372F1", color: "var(--White, #FFF)" },
    [theme.breakpoints.up('sm')]: {
        width: "200px",
        fontSize: "20px",
    },
    [theme.breakpoints.up('md')]: {
        width: "230px",
        fontSize: "24px",
    },
}));
const ButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(8),
    },
}));

export const FeatureBox = (props: any) => {
    const { image, title, f1 } = props;
    return (
        <FeatureBoxContainer>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <Image
                    alt="feauture_img"
                    src={image}
                    style={FeatureImgStyle}
                />
            </Box>

            <FeatureTitle>{title}</FeatureTitle>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <FeatureText>{f1}</FeatureText>
            </Box>
        </FeatureBoxContainer>
    )
}

const featuresList = [
    {
        id: 1,
        image: I1,
        title: "Analysez instantanément vos problématiques SEO",
        f1: "Exécutez des analyses illimitées sur nos serveurs les plus puissants. Les rapports stockés facilitent la visualisation des progrès et des travaux antérieurs.",
    },
    {
        id: 2,
        image: I2,
        title: "Outils de surveillance SEO professionnels",
        f1: "Suivez automatiquement les changements hebdomadaires dans plus de 30 variables SEO. Recevez des notifications si votre score SEO change.",
    },
    {
        id: 3,
        image: I3,
        title: "Comprendre le profil SEO de vos concurrents",
        f1: "Comparaisons SEO côte à côte de jusqu'à 5 concurrents. Découvrez comment votre référencement peut s'améliorer par rapport à la concurrence.",
    },
    {
        id: 4,
        image: I4,
        title: "Gagnez des heures avec les rapports SEO en marque blanche",
        f1: "Créez rapidement des rapports SEO modifiables pour vos clients ou sites Web partenaires.",
    },
    {
        id: 5,
        image: I5,
        title: "Des rapports SEO que vous pouvez comprendre et sur lesquels vous pouvez agir",
        f1: "Le référencement est expliqué en langage simple, avec des définitions claires et des tutoriels « comment résoudre » pour chaque problème.",
    },
    {
        id: 6,
        image: I6,
        title: "Essai gratuit",
        f1: "Commencez dès maintenant en vous inscrivant ci-dessous.",
    },
]

export default function Features() {
    const { data: user } = useRetrieveUserQuery();
    return (
        <StyledGrid container justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={12}>
                <TitleH1>Présentation de notre boîte à outils SEO</TitleH1>
                <SubTitleH2>Des tonnes de fonctionnalités intéressantes</SubTitleH2>
            </Grid>

            <StyledGrid2 item xs={9} container justifyContent="center" alignItems="center" spacing={6}>
                {featuresList.map((feature) => (
                    <Grid item xs={12} sm={6} md={4} key={feature.id}>
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
                            <FeatureBox
                                image={feature.image}
                                title={feature.title}
                                f1={feature.f1}
                            />
                        </motion.div>

                    </Grid>
                ))}

                <ButtonBox>
                    {user ? null : <Link href="/auth/sign-up/">
                        <StartNowButton>
                            Commencer
                        </StartNowButton>
                    </Link>}

                </ButtonBox>


            </StyledGrid2>
        </StyledGrid>
    )
}
