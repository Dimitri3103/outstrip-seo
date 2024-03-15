"use client"

import { AuthContent, AuthImgStyle, AuthWrapper, BlueButtonAuth, BottomText, BoxLogo, BoxLogoResp, BoxPassword, GoogleButtonAuth, LinkTextStyle, Space1, Space2, StyledImgLogo, StyledImgLogoResp, StyledLinear, StyledStackLoading, StyledTextfield, Title } from '@/assets/styles/auth'
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, TextField, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import 'react-international-phone/style.css';
import { useGoogleMutation, useRegisterMutation } from '@/redux/features/authApiSlice'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import NotificationToast from '@/components/Common/Notification'
import { BpCheckedIcon, BpIcon } from '../SignIn'
import AUthImg from "@/assets/images/SEO_banner.gif";
import Logo from "@/assets/images/outstrip-seo.png"
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { FcGoogle } from 'react-icons/fc'

const SpaceInputs2 = styled('span')(({ theme }) => ({
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));
const BoxImg = styled(Box)(({ theme }) => ({
    position: "absolute",
    display: "none",
    [theme.breakpoints.up('md')]: {
        display: "block",
    },
}));
const BoxInputs = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "340px",
    [theme.breakpoints.up('sm')]: {
        width: "600px",
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: "row",
    },
}));
const BoxCheck = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "Left",
    width: "340px",
    [theme.breakpoints.up('sm')]: {
        width: "600px",
    },
}));
const StyledTextfield2 = styled(TextField)(({ theme }) => ({
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
        width: "340px",
        height: "50px",
        [theme.breakpoints.up('sm')]: {
            width: "600px",
            fontSize: "18px",
        },
        [theme.breakpoints.up('md')]: {
            width: "290px",
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

export default function SignUpContainer() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    const [register] = useRegisterMutation();
    const [google] = useGoogleMutation();

    const [formData, setFormData] = useState({
        email: "",
        last_name: "",
        first_name: "",
        password: "",
        confirm_password: "",
    });

    const { email, last_name, first_name, password, confirm_password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const passwordLength = password.length;
        const confirmPasswordLength = confirm_password.length;
        const emailLength = email.length;
        const lastNameLength = last_name.length;
        const firstNameLength = first_name.length;

        const caseRegEmail = /\S+@\S+\.\S+/;

        if (emailLength === 0 || passwordLength === 0 || confirmPasswordLength === 0 || lastNameLength === 0 || firstNameLength === 0) {
            toast.warn("Remplissez tous les champs, s'il vous plaît!");
            return
        }
        else if (!caseRegEmail.test(email)) {
            toast.warn("L'adresse email ne semble pas valide !");
            return
        }
        else if (password !== confirm_password) {
            toast.warn("Les mots de passe ne correspondent pas!");
            return
        }

        setLoading(true);

        try {
            await register({ email, last_name, first_name, password, confirm_password }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            toast.success("Inscription réussie");
                            router.push("/auth/sign-in/")
                        }
                        else {
                            toast.error("Une erreur est survenue! Veuillez réessayer.");
                        }
                    }
                ).catch((err: any) => {
                    toast.error(err);
                });
        } catch (e: any) {
            toast.error(e);
        }

        setLoading(false);
    }

    const loginGoogle = useGoogleLogin({
        onSuccess: (codeResponse: any) => {

            if (codeResponse) {
                axios
                    .get(
                        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                        {
                            headers: {
                                Authorization: `Bearer ${codeResponse.access_token}`,
                                Accept: "application/json",
                            },
                        }
                    )
                    .then((res) => {
                        google({
                            last_name: res.data.family_name,
                            first_name: res.data.given_name,
                            email: res.data.email,
                            google_picture: res.data.picture,
                        }).
                            then(
                                (user: any) => {
                                    if (user.data != null) {
                                        setCookie('tokenSEO', user.data.detail.token, { maxAge: user.data.detail.expired_in });
                                        toast.success("Connexion réussie");
                                        router.push("/")
                                    }
                                    else {
                                        toast.error("Cette adresse email est déjà inscrite avec un mot de passe");
                                    }
                                }
                            ).catch((err: any) => {
                                toast.error(err);
                            });
                    })
                    .catch((err) => console.log(err));
            }
        },
        onError: (error) => console.log("La connexion a échoué:", error)
    });


    return (
        <>
            {isLoading && (
                <StyledStackLoading sx={{ width: '100%' }}>
                    <StyledLinear color="secondary" />
                </StyledStackLoading>
            )}
            <AuthWrapper>
                <AuthContent>
                    <NotificationToast />
                    <form
                        onSubmit={onSubmit}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}>
                        <Link href="/">
                            <BoxLogo>
                                <Image
                                    alt="Logo"
                                    src={Logo}
                                    style={StyledImgLogo}
                                />
                            </BoxLogo>
                            <BoxLogoResp>
                                <Image
                                    alt="Logo"
                                    src={Logo}
                                    style={StyledImgLogoResp}
                                />
                            </BoxLogoResp>
                        </Link>
                        <SpaceInputs2 />
                        <Title>S&apos;inscrire</Title>
                        <SpaceInputs2 />
                        <GoogleButtonAuth onClick={() => loginGoogle()}>
                            <FcGoogle />
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            Connectez-vous avec Google
                        </GoogleButtonAuth>
                        <SpaceInputs2 />
                        <BottomText>
                            OU
                        </BottomText>
                        <Space2 />
                        <BoxInputs>
                            <StyledTextfield2
                                label="Prénom"
                                type="text"
                                id="first_name"
                                name="first_name"
                                onChange={onChange} />
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <SpaceInputs2 />
                            </Box>
                            <StyledTextfield2
                                label="Nom"
                                type="text"
                                id="last_name"
                                name="last_name"
                                onChange={onChange} />
                        </BoxInputs>

                        <SpaceInputs2 />

                        <StyledTextfield
                            label="Adresse e-mail"
                            type="text"
                            id="email"
                            name="email"
                            onChange={onChange} />

                        <SpaceInputs2 />

                        <BoxPassword>
                            <StyledTextfield
                                label="Mot de passe"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                onChange={onChange}
                            />
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx={{ position: "absolute", top: "10%", right: "5%" }}
                            >
                                {showPassword ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.47 14.53L2 22" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 2L14.53 9.47" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>}
                            </IconButton>
                        </BoxPassword>
                        <SpaceInputs2 />

                        <BoxPassword>
                            <StyledTextfield
                                label="Confirmer le mot de passe"
                                type={showPassword ? 'text' : 'password'}
                                id="confirm_password"
                                name="confirm_password"
                                onChange={onChange}
                            />
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx={{ position: "absolute", top: "10%", right: "5%" }}
                            >
                                {showPassword ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.47 14.53L2 22" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 2L14.53 9.47" stroke="#9372F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>}
                            </IconButton>
                        </BoxPassword>

                        <SpaceInputs2 />

                        <BoxCheck>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            defaultChecked
                                            checkedIcon={<BpCheckedIcon />}
                                            icon={<BpIcon />}
                                        />}
                                    label="J'ai lu et accepté les conditions d'utilisation"
                                    sx={{
                                        '& .MuiFormControlLabel-label': {
                                            fontSize: { xs: "12px", sm: "14px", md: "16px" },
                                            fontFamily: 'Product Sans',
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            color: '#18242B',
                                        },
                                    }}
                                />
                            </FormGroup>
                        </BoxCheck>

                        <SpaceInputs2 />
                        <BlueButtonAuth type="submit">
                            S&apos;inscire
                        </BlueButtonAuth>
                        <SpaceInputs2 />
                        <BottomText sx={{ marginBottom: 5 }}>
                            Vous avez déjà un compte ? <Link href="/auth/sign-in"><LinkTextStyle>Se connecter.</LinkTextStyle></Link>
                        </BottomText>
                    </form>

                </AuthContent>

                <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image
                        alt="auth_img"
                        src={AUthImg}
                        style={AuthImgStyle}
                    />
                </Grid>

            </AuthWrapper >
        </>


    )
}
