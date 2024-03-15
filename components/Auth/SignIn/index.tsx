"use client"

import { Checkbox, FormControlLabel, FormGroup, Grid, IconButton, styled } from '@mui/material'
import Image from 'next/image'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link';
import { AuthContent, AuthImgStyle, AuthWrapper, BlueButtonAuth, BottomText, BoxCheck, BoxLogo, BoxLogoResp, BoxPassword, ForgotPasswordText, GoogleButtonAuth, LinkTextStyle, Space1, Space2, StyledImgLogo, StyledImgLogoResp, StyledLinear, StyledStackLoading, StyledTextfield, Title } from '@/assets/styles/auth';
import { useGoogleMutation, useLoginMutation } from '@/redux/features/authApiSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { setCookie } from 'cookies-next';
import NotificationToast from '@/components/Common/Notification';
import AUthImg from "@/assets/images/SEO_banner.gif";
import Logo from "@/assets/images/outstrip-seo.png"
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

export const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: "30px",
    width: "22px",
    height: "22px",
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#9372F1' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

export const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#9372F1',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: "22px",
        height: "22px",
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#9372F1',
    },
});

export default function AuthContainer() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [isLoading, setLoading] = useState(false);

    const router = useRouter();

    const [login] = useLoginMutation();
    const [google] = useGoogleMutation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const passwordLength = password.length;
        const emailLength = email.length;
        const caseRegEmail = /\S+@\S+\.\S+/;

        if (emailLength === 0 || passwordLength === 0) {
            toast.warn("Remplissez tous les champs, s'il vous plaît!");
            return
        }
        else if (!caseRegEmail.test(email)) {
            toast.warn("L'adresse email ne semble pas valide !");
            return
        }

        setLoading(true);

        try {
            await login({ email, password }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setCookie('tokenSEO', user.data.token, { maxAge: user.data.expired_in });
                            toast.success("Connexion réussie");
                            router.push("/")
                        }
                        else {
                            toast.error("L'e-mail ou le mot de passe n'est pas valide !");
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

                        console.log(res.data.family_name, res.data.given_name, res.data.email, res.data.picture,)
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
                        <Space1 />
                        <Title>Se connecter</Title>
                        <Space1 />
                        <Space2 />
                        <GoogleButtonAuth onClick={() => loginGoogle()}>
                            <FcGoogle />
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            Connectez-vous avec Google
                        </GoogleButtonAuth>
                        <Space2 />
                        <BottomText>
                            OU
                        </BottomText>
                        <Space2 />
                        <StyledTextfield
                            label="Adresse e-mail"
                            type="text"
                            id="email"
                            name="email"
                            onChange={onChange}
                        />
                        <Space2 />
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
                        <Space2 />
                        <BoxCheck>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            defaultChecked
                                            checkedIcon={<BpCheckedIcon />}
                                            icon={<BpIcon />}
                                        />}
                                    label="Rester connecté"
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
                            <Link href="/auth/reset-password">
                                <ForgotPasswordText>
                                    Mot de passe oublié ?
                                </ForgotPasswordText>
                            </Link>


                        </BoxCheck>
                        <Space1 />
                        <BlueButtonAuth type="submit">
                            Se connecter
                        </BlueButtonAuth>
                        <Space2 />
                        <BottomText>
                            Vous n&apos;êtes pas encore inscrit ? <Link href="/auth/sign-up"><LinkTextStyle>Commencez.</LinkTextStyle></Link>
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

            </AuthWrapper>
        </>

    )
}
