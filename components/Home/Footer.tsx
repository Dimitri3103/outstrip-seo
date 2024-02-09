import React from 'react'
import { Box, Grid, Icon, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/images/outstrip-seo.png"
import Link from "next/link";
import { styled } from '@mui/material/styles';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

const StyledFooterGrid = styled(Grid)(({ theme }) => ({
    background: "#F7F7FB",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10),
    },
}));
const BoxLogo = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(8),
        justifyContent: "start",
        alignItems: "start",
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(23),
    },
}));
const BoxLogoText = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(8),
        justifyContent: "start",
        alignItems: "start",
        marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(23),
        paddingRight: theme.spacing(23),
    },
}));
const StyledFooterLogoText = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 600,
    color: "#212832",
    fontFamily: "DM Sans",
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "16px",
        textAlign: "left",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
    },
}));
const StyledImgLogo = {
    width: "200px",
    height: "auto"
}
const StyledFooterTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: "#212832",
    fontFamily: "DM Sans",
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "18px",
        textAlign: "left",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "22px",
    },
}));
const StyledTextFooter = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#18242B",
    fontFamily: "DM Sans",
    marginTop: theme.spacing(2),
    textAlign: "center",
    "&:hover": { color: "#9372F1" },
    [theme.breakpoints.up('sm')]: {
        fontSize: "16px",
        textAlign: "left",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    },
}));
const CopyrightText = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    color: "#18242B",
    fontFamily: "DM Sans",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
    },
}));
const CopyrightGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(8),
    },
}));
const SMBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(8),
        justifyContent: "start",
        alignItems: "start",
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(23),
    },
}));
export const OutstripLink = styled('span')(({ theme }) => ({
    color: "#9372F1",
    fontWeight: 700,
}));

export default function Footer() {
    const { data: user } = useRetrieveUserQuery();
    return (
        <StyledFooterGrid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <BoxLogo>
                    <Image
                        alt="Logo"
                        src={Logo}
                        style={StyledImgLogo}
                    />
                </BoxLogo>

                <BoxLogoText>
                    <StyledFooterLogoText>
                        SEO, surveillance et automatisation de sites Web simplifiés.
                    </StyledFooterLogoText>
                </BoxLogoText>

                <SMBox>
                    <Link href="https://www.facebook.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <path d="M25 5.0498C13.5417 5.0498 4.16666 14.404 4.16666 25.9248C4.16666 36.3415 11.7917 44.9873 21.75 46.5498V31.9665H16.4583V25.9248H21.75V21.3206C21.75 16.0915 24.8542 13.2165 29.625 13.2165C31.8958 13.2165 34.2708 13.6123 34.2708 13.6123V18.7581H31.6458C29.0625 18.7581 28.25 20.3623 28.25 22.0081V25.9248H34.0417L33.1042 31.9665H28.25V46.5498C33.1592 45.7745 37.6296 43.2696 40.854 39.4874C44.0784 35.7052 45.8445 30.8949 45.8333 25.9248C45.8333 14.404 36.4583 5.0498 25 5.0498Z" fill="#212832" />
                        </svg>
                    </Link>
                    <Link href="https://www.linkedin.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <path d="M39.5833 7.0498C40.6884 7.0498 41.7482 7.48879 42.5296 8.27019C43.311 9.05159 43.75 10.1114 43.75 11.2165V40.3831C43.75 41.4882 43.311 42.548 42.5296 43.3294C41.7482 44.1108 40.6884 44.5498 39.5833 44.5498H10.4167C9.3116 44.5498 8.25179 44.1108 7.47039 43.3294C6.68899 42.548 6.25 41.4882 6.25 40.3831V11.2165C6.25 10.1114 6.68899 9.05159 7.47039 8.27019C8.25179 7.48879 9.3116 7.0498 10.4167 7.0498H39.5833ZM38.5417 39.3415V28.2998C38.5417 26.4985 37.8261 24.7711 36.5524 23.4974C35.2787 22.2237 33.5513 21.5081 31.75 21.5081C29.9792 21.5081 27.9167 22.5915 26.9167 24.2165V21.904H21.1042V39.3415H26.9167V29.0706C26.9167 27.4665 28.2083 26.154 29.8125 26.154C30.586 26.154 31.3279 26.4613 31.8749 27.0082C32.4219 27.5552 32.7292 28.2971 32.7292 29.0706V39.3415H38.5417ZM14.3333 18.6331C15.2616 18.6331 16.1518 18.2644 16.8082 17.608C17.4646 16.9516 17.8333 16.0614 17.8333 15.1331C17.8333 13.1956 16.2708 11.6123 14.3333 11.6123C13.3996 11.6123 12.504 11.9832 11.8437 12.6435C11.1834 13.3038 10.8125 14.1994 10.8125 15.1331C10.8125 17.0706 12.3958 18.6331 14.3333 18.6331ZM17.2292 39.3415V21.904H11.4583V39.3415H17.2292Z" fill="#212832" />
                        </svg>
                    </Link>

                </SMBox>
            </Grid>
            <Grid item xs={12} sm={7} container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <StyledFooterTitle>Produit</StyledFooterTitle>
                    <Link href="/">
                        <StyledTextFooter>
                            Tarification
                        </StyledTextFooter>
                    </Link>

                    <Link href="/tools">
                        <StyledTextFooter>
                            Outils
                        </StyledTextFooter>
                    </Link>

                    <Link href="/">
                        <StyledTextFooter>
                            Blog
                        </StyledTextFooter>
                    </Link>

                    {user ? null :
                        <Link href="/auth/sign-in/">
                            <StyledTextFooter>
                                Connexion
                            </StyledTextFooter>
                        </Link>}
                    {user ? null : <Link href="/auth/sign-up/">
                        <StyledTextFooter>
                            Inscription
                        </StyledTextFooter>
                    </Link>}

                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledFooterTitle>Entreprise</StyledFooterTitle>
                    <Link href="https://outstrip.tech/a-propos/">
                        <StyledTextFooter>
                            A propos
                        </StyledTextFooter>
                    </Link>

                    <Link href="https://outstrip.tech/contactez-nous/">
                        <StyledTextFooter>
                            Contact
                        </StyledTextFooter>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledFooterTitle>Mentions légales</StyledFooterTitle>
                    <Link href="/terms-of-service">
                        <StyledTextFooter>
                            Conditions d&apos;utilisation
                        </StyledTextFooter>
                    </Link>

                    <Link href="/privacy-policy">
                        <StyledTextFooter>
                            Politique de confidentialité
                        </StyledTextFooter>
                    </Link>

                </Grid>
            </Grid>

            <CopyrightGrid item xs={12} container justifyContent="center" alignItems="center">
                <CopyrightText>© 2024 Outstrip SEO powered by <Link href="https://outstrip.tech/"><OutstripLink>outstrip</OutstripLink></Link></CopyrightText>
                <Icon sx={{ marginTop: 1 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <g clipPath="url(#clip0_18_70)">
                            <path d="M5.00001 8.3335C4.11596 8.3335 3.26811 7.98231 2.64299 7.35719C2.01787 6.73206 1.66668 5.88422 1.66668 5.00016C1.66668 4.11611 2.01787 3.26826 2.64299 2.64314C3.26811 2.01802 4.11596 1.66683 5.00001 1.66683C5.88407 1.66683 6.73191 2.01802 7.35703 2.64314C7.98215 3.26826 8.33334 4.11611 8.33334 5.00016C8.33334 5.88422 7.98215 6.73206 7.35703 7.35719C6.73191 7.98231 5.88407 8.3335 5.00001 8.3335ZM5.00001 0.833496C4.45284 0.833496 3.91102 0.94127 3.4055 1.15066C2.89997 1.36006 2.44064 1.66697 2.05373 2.05388C1.27233 2.83529 0.833344 3.89509 0.833344 5.00016C0.833344 6.10523 1.27233 7.16504 2.05373 7.94644C2.44064 8.33335 2.89997 8.64027 3.4055 8.84966C3.91102 9.05906 4.45284 9.16683 5.00001 9.16683C6.10508 9.16683 7.16489 8.72784 7.94629 7.94644C8.72769 7.16504 9.16668 6.10523 9.16668 5.00016C9.16668 4.45299 9.0589 3.91117 8.84951 3.40565C8.64011 2.90013 8.3332 2.4408 7.94629 2.05388C7.55938 1.66697 7.10005 1.36006 6.59452 1.15066C6.089 0.94127 5.54718 0.833496 5.00001 0.833496Z" fill="#9372F1" />
                        </g>
                        <defs>
                            <clipPath id="clip0_18_70">
                                <rect width="10" height="10" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Icon>
                <CopyrightText>All rights reserved</CopyrightText>
            </CopyrightGrid>

        </StyledFooterGrid>
    )
}
