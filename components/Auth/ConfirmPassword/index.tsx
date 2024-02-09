"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AuthContent, AuthImgStyle, AuthWrapper, BlueButtonAuth, BoxLogo, BoxPassword, Space1, Space2, StyledImgLogo, StyledLinear, StyledStackLoading, StyledTextfield, SubTitle, Title } from '@/assets/styles/auth';
import { Box, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useResetPasswordMutation } from '@/redux/features/authApiSlice';
import NotificationToast from '@/components/Common/Notification';
import { toast } from 'react-toastify';
import AuthImg from "@/assets/images/SEO_banner.gif";
import Logo from "@/assets/images/outstrip-seo.png"


export default function ConfirmPasswordContainer() {
    const [isLoading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const router = useRouter();
    const [resetPassword] = useResetPasswordMutation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        otp: "",
    });

    const { email, password, confirmPassword, otp } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailLength = email.length;
        const caseRegEmail = /\S+@\S+\.\S+/;
        const passwordLength = password.length;
        const otpLength = otp.length;
        const password2Length = confirmPassword.length;

        if (emailLength === 0 || otpLength === 0 || passwordLength === 0 || password2Length === 0) {
            toast.warn("Remplissez tous les champs, s'il vous plaît!");
            return
        }
        else if (!caseRegEmail.test(email)) {
            toast.warn("L'adresse email ne semble pas valide !");
            return
        }
        else if (password !== confirmPassword) {
            toast.warn("Les mots de passe ne correspondent pas!");
            return

        }
        setLoading(true);

        try {
            await resetPassword({ email, password, confirmPassword, otp }).
                then(
                    (user: any) => {
                        if (user.data.detail == "password reset successfuly") {
                            toast.success("Réinitialisation du mot de passe réussie")
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
                        </Link>
                        <Space1 />
                        <Title>Réinitialisation du mot de passe</Title>
                        <Space1 />
                        <SubTitle>Saisissez l&apos;OTP que vous avez reçu par email et votre nouveau mot de passe et confirmez-le.</SubTitle>
                        <Space2 />
                        <StyledTextfield
                            label="Adresse e-mail"
                            type="text"
                            id="email"
                            name="email"
                            onChange={onChange}
                        />
                        <Space2 />
                        <StyledTextfield
                            label="OTP"
                            type="text"
                            id="otp"
                            name="otp"
                            onChange={onChange}
                        />
                        <Space2 />
                        <BoxPassword>
                            <StyledTextfield
                                label="Nouveau mot de passe"
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
                                sx={{ position: "absolute", top: "15%", right: "5%" }}
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
                        <BoxPassword>
                            <StyledTextfield
                                label="Confirmer le nouveau mot de passe"
                                type={showPassword2 ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={onChange}
                            />
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword2}
                                edge="end"
                                sx={{ position: "absolute", top: "15%", right: "5%" }}
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
                        <Space1 />
                        <BlueButtonAuth type="submit">
                            Réinitialiser le mot de passe
                        </BlueButtonAuth>


                    </form>
                </AuthContent>

                <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image
                        alt="auth_img"
                        src={AuthImg}
                        style={AuthImgStyle}
                    />
                </Grid>

            </AuthWrapper>

        </>

    )
}
