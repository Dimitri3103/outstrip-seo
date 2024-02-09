"use client";

import { Badge, Box, Button, LinearProgress, Stack, TextField, Typography, styled } from '@mui/material'


export const AuthWrapper = styled('div')(({ theme }) => ({
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));
export const AuthContent = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));
export const AuthImgStyle = {
    width: "100%",
    height: "100vh",
}
export const StyledImgLogo = {
    width: "200px",
    height: "auto"
}
export const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "30px",
    fontWeight: 700,
    color: "#212832",
    textAlign: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        fontSize: "40px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "50px",
    },
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "14px",
    fontWeight: 400,
    color: "#18242B",
    textAlign: "center",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
    },
}));
export const StyledTextfield = styled(TextField)(({ theme }) => ({
    '& label': {
        color: '#878787',
        fontStyle: "normal",
        fontFamily: 'DM Sans',
        fontWeight: 400,
        fontSize: "16px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "18px",
        },
    },
    '& label.Mui-focused': {
        color: '#9372F1',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        color: "#18242B",
        fontFamily: "DM Sans",
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "0.25px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "18px",
        },
        width: "340px",
        [theme.breakpoints.up('sm')]: {
            width: "600px",
        },
        '& fieldset': {
            border: "1px solid #0000001A",
            borderRadius: "10px",
        },
        '&:hover fieldset': {
            borderColor: '#9372F1',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#9372F1',
        },
    },
}));
export const BlueButtonAuth = styled(Button)(({ theme }) => ({
    textTransform: "none",
    width: "340px",
    height: "50px",
    fontSize: "14px",
    background: "#9372F1",
    borderRadius: "10px",
    fontWeight: 700,
    color: "var(--White, #FFF)",
    fontFamily: 'DM Sans',
    "&:hover": { background: "#9372F1", color: "var(--White, #FFF)" },
    [theme.breakpoints.up('sm')]: {
        width: "600px",
        fontSize: "16px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    },
}));
export const GoogleButtonAuth = styled(Button)(({ theme }) => ({
    textTransform: "none",
    width: "340px",
    height: "50px",
    fontSize: "14px",
    background: "#FFF",
    borderRadius: "10px",
    fontWeight: 700,
    color: "#000",
    border: "1px solid #0000001A",
    fontFamily: 'DM Sans',
    "&:hover": { background: "#FFF", color: "#000" },
    [theme.breakpoints.up('sm')]: {
        width: "600px",
        fontSize: "16px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    },
}));
export const BoxPassword = styled(Box)(({ theme }) => ({
    position: "relative"
}));
export const BoxLogo = styled(Box)(({ theme }) => ({
    width: "150px",
    [theme.breakpoints.up('sm')]: {
        width: "200px",
    },
}));
export const BoxCheck = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "340px",
    [theme.breakpoints.up('sm')]: {
        width: "600px",
    },
}));
export const BottomText = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontFamily: 'DM Sans',
    fontWeight: 400,
    color: '#18242B',
    [theme.breakpoints.up('sm')]: {
        fontSize: "14px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "16px",
    },
}));
export const ForgotPasswordText = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontFamily: 'DM Sans',
    fontWeight: 400,
    color: '#9372F1',
    '&:hover': {
        textDecoration: "underline"
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "14px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "16px",
    },
}));
export const LinkTextStyle = styled('span')(({ theme }) => ({
    fontWeight: 500,
    color: '#9372F1',
    '&:hover': {
        textDecoration: "underline"
    },
}));
export const Space1 = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBootom: theme.spacing(4),
}));
export const Space2 = styled('span')(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBootom: theme.spacing(3),
}));
export const StyledLinear = styled(LinearProgress)(({ theme }) => ({
    '& .MuiLinearProgress-barColorSecondary': {
        backgroundColor: '#9372F1'
    },
    '&.MuiLinearProgress-colorSecondary': {
        backgroundColor: '#E3E5E5'
    }
}));
export const StyledStackLoading = styled(Stack)(({ theme }) => ({
    position: "fixed",
    top: 0,
    width: "-webkit-fill-available",
    zIndex: 3
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
    cursor: "pointer",
    '& .MuiBadge-badge': {
        backgroundColor: '#9372F1',
        color: '#9372F1',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));