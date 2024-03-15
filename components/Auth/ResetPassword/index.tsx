"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AuthContent, AuthImgStyle, AuthWrapper, BlueButtonAuth, BottomText, BoxLogo, BoxLogoResp, LinkTextStyle, Space1, Space2, StyledImgLogo, StyledImgLogoResp, StyledLinear, StyledStackLoading, StyledTextfield, SubTitle, Title } from '@/assets/styles/auth';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import NotificationToast from '@/components/Common/Notification';
import { useResetPasswordEmailMutation } from '@/redux/features/authApiSlice';
import AUthImg from "@/assets/images/SEO_banner.gif";
import Logo from "@/assets/images/outstrip-seo.png"

export default function ResetPasswordContainer() {
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const [resetPasswordEmail] = useResetPasswordEmailMutation();

    const [formData, setFormData] = useState({
        email: "",
    });

    const { email } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailLength = email.length;
        const caseRegEmail = /\S+@\S+\.\S+/;

        if (emailLength === 0) {
            toast.warn("Remplissez tous les champs, s'il vous plaît!");
            return
        }
        else if (!caseRegEmail.test(email)) {
            toast.warn("L'adresse email ne semble pas valide !");
            return
        }

        setLoading(true);

        try {
            await resetPasswordEmail({ email }).
                then(
                    (user: any) => {
                        if (user.data.msg == "Password Reset link send. Please check your Email") {
                            toast.success("Envoi du lien de réinitialisation du mot de passe réussi. Veuillez vérifier vos e-mails");
                            router.push("/auth/confirm-password/")
                        }
                        else {
                            toast.error("Une erreur est survenue! Essayer à nouveau.");
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
                            <BoxLogoResp>
                                <Image
                                    alt="Logo"
                                    src={Logo}
                                    style={StyledImgLogoResp}
                                />
                            </BoxLogoResp>
                        </Link>
                        <Space1 />
                        <Title>Mot de passe oublié</Title>
                        <Space1 />
                        <SubTitle>Entrez l&apos;e-mail associé à votre compte et nous vous enverrons un e-mail avec des instructions pour réinitialiser votre mot de passe.</SubTitle>
                        <Space2 />
                        <StyledTextfield
                            label="Adresse e-mail"
                            type="text"
                            id="email"
                            name="email"
                            onChange={onChange} />
                        <Space1 />
                        <BlueButtonAuth type="submit">
                            Envoyer un e-mail de récupération
                        </BlueButtonAuth>
                        <Space2 />
                        <BottomText>
                            Est-ce que je me souviens de mon mot de passe ? <Link href="/auth/sign-in"><LinkTextStyle>Se connecter.</LinkTextStyle></Link>
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
