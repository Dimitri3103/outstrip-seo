import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Box, Button, CircularProgress, CircularProgressProps, Grid, styled, Tab, Tabs, TextField, Typography, Skeleton, LinearProgress, Stack, linearProgressClasses, Avatar } from "@mui/material";
import Link from 'next/link';
import { ReactTyped } from "react-typed";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AUthImg from "@/assets/images/SEO_banner.gif";
import Image from 'next/image';
import Metadata from './Results/Metadata';
import { useGetAdvanceMutation, useGetMetadaMutation, useGetPerformanceMutation, useGetReferenceMutation, useGetScoreMutation, useGetScreenshotMutation, useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import NotificationToast from '../Common/Notification';
import Performance from './Results/Performance';
import Reference from './Results/Reference';
import Advanced from './Results/Advanced';
import Invoice from '../PDF/Invoice';
import Report from './Results/Report';
import Notice from './Results/Notice';

export const StyledGridMain = styled(Grid)(({ theme }) => ({
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(20),
    },
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(30),
    },
}));
const TitleMain = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "20px",
    fontWeight: 600,
    color: "#212832",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        fontSize: "30px",
        marginTop: theme.spacing(10),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "40px",
        marginTop: theme.spacing(15),

    },
}));
const TextMain = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    color: "#18242B",
    textAlign: "center",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        fontSize: "20px",
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "24px",
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
        fontStyle: "normal",
        fontWeight: 400,
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
const LinkBox = styled('form')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(6),
        flexDirection: "row",
    },
}));

const TitleReport = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "16px",
    fontWeight: 600,
    color: "rgb(193, 46, 42)",
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    },
}));

const URLink = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "22px",
    fontWeight: 600,
    color: "#000",
    [theme.breakpoints.up('sm')]: {
        fontSize: "24px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "32px",
    },
}));
const T3 = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "14px",
    fontWeight: 600,
    color: "rgba(0, 0, 0, 0.45)",
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "16px",
    },
}));
const T4 = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "18px",
    fontWeight: 600,
    color: "rgba(0, 0, 0, 0.45)",
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
    },
}));
const T5 = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "22px",
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "24px",
    },
}));

const PDFButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    width: "50%",
    height: "50px",
    fontSize: "12px",
    background: "#FFF",
    borderRadius: "10px",
    fontWeight: 500,
    color: "#000",
    fontFamily: 'DM Sans',
    border: "solid 1px #0000001A",
    "&:hover": { background: "#FFF", color: "#9372F1", border: "solid 1px #9372F1", },
    [theme.breakpoints.up('sm')]: {
        width: "80%",
    },
    [theme.breakpoints.up('md')]: {
    },
}));
export const HeaderGrid = styled(Grid)(({ theme }) => ({
    border: "solid 1px #0000001A",
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
}));
const BodyGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(3),
    border: "solid 1px #0000001A",
}));
const SEOTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'DM Sans',
    fontSize: '18px',
    fontWeight: 500,
    color: "#878787",
    borderRadius: "10px 0px 0px 10px",
    width: "100%",
    '&.Mui-selected': {
        color: '#9372F1',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "20px",
    },
    [theme.breakpoints.up('md')]: {
        width: "25%",
    },
    marginTop: theme.spacing(4)
}));

const SEOTabs = styled(Tabs)({
    borderBottom: '1px solid #0000001A',
    '& .MuiTabs-indicator': {
        backgroundColor: '#9372F1',
    },
});

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}
export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', mt: { xs: 2, md: 6 }, mb: { xs: 2, md: 5 } }}>
            <CircularProgress
                variant="determinate"
                {...props}
                sx={{
                    '& .MuiCircularProgress-circleDeterminate': {
                        color: '#57A01E',
                    },
                }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: "column",
                    justifyContent: 'center',
                }}
            >
                <T4>Score SEO</T4>
                <T5 variant="caption" color="#000">{`${Math.round(props.value)}/100`}</T5>
            </Box>
        </Box>
    );
}

export const TitleLoading = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontSize: "20px",
    fontWeight: 600,
    color: "#212832",
    textAlign: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        fontSize: "30px",
        marginTop: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "40px",
        marginTop: theme.spacing(12.5),

    },
}));
export const SubTitleLoading = styled(Typography)(({ theme }) => ({
    fontFamily: 'DM Sans',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    color: "#18242B",
    textAlign: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        fontSize: "20px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "24px",
    },
}));

const AuthImgStyle = {
    width: "60%",
    height: "auto"
}

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 16,
    width: "50%",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#E3E5E5",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#E3E5E5" ? '#9372F1' : '#9372F1',
    },
}));

export default function Main() {

    const [isLoading, setLoading] = useState(false);

    const [getMetadata] = useGetMetadaMutation();
    const [getAdvance] = useGetAdvanceMutation();
    const [getPerformance] = useGetPerformanceMutation();
    const [getReference] = useGetReferenceMutation();
    const [getScore] = useGetScoreMutation();
    const [getScreenshot] = useGetScreenshotMutation();

    const [step, setStep] = useState("");
    const [progressValue, setProgressValue] = useState(0);


    const [score, setScore] = useState(0);
    const [reference, setReference] = useState(null);
    const [metaData, setMetaData] = useState(null);
    const [advance, setAdvance] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [screenshot, setScreenshot] = useState<any>();


    const [formData, setFormData] = useState({
        url: "",
    });

    const { url } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const urlLength = url.length;

        if (urlLength === 0) {
            toast.warn("Veuillez entrer un lien!");
            return
        }

        setLoading(true);

        try {

            await getMetadata({ url }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setMetaData(user.data);
                            setStep("1 - Vérification des métadonnées");
                            setProgressValue(16);
                        }
                        else {
                            toast.error("Une erreur est survenue! Essayer à nouveau.");
                        }
                    }
                ).catch((err: any) => {
                    toast.error(err);
                });

            await getPerformance({ url }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setPerformance(user.data);
                            setStep("2 - Vérification de la performance");
                            setProgressValue(32);
                        }
                        else {
                            toast.error("Une erreur est survenue! Essayer à nouveau.");
                        }
                    }
                ).catch((err: any) => {
                    toast.error(err);
                });

            await getReference({ url }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setReference(user.data);
                            setStep("3 - Vérification des références");
                            setProgressValue(48);
                        }
                        else {
                            toast.error("Une erreur est survenue! Essayer à nouveau.");
                        }
                    }
                ).catch((err: any) => {
                    toast.error(err);
                });

            await getAdvance({ url }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setAdvance(user.data);
                            setStep("4 - Tests avancés");
                            setProgressValue(64);
                        }
                        else {
                            toast.error("Une erreur est survenue! Essayer à nouveau.");
                        }
                    }
                ).catch((err: any) => {
                    toast.error(err);
                });


            await getScore({ url }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setScore(user.data.score);
                            setStep("5 - Calcul du score");
                            setProgressValue(80);
                        }
                        else {
                            toast.error("Une erreur est survenue! Essayer à nouveau.");
                        }
                    }
                ).catch((err: any) => {
                    toast.error(err);
                });


            await getScreenshot({ url }).
                then(
                    (user: any) => {
                        if (user.data != null) {
                            setScreenshot(user.data);
                            setStep("6 - Capture d'écran de la page");
                            setProgressValue(100);
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpenReport = (user: any) => {
        setOpen(true);
    };

    const handleCloseReport = () => {
        setOpen(false);
    };

    const { data: user } = useRetrieveUserQuery();

    const [openNotice, setOpenNotice] = React.useState(false);

    const handleClickOpenNotice = (user: any) => {
        setOpenNotice(true);
    };

    const handleCloseNotice = () => {
        setOpenNotice(false);
    };

    return (
        <StyledGridMain container>
            <NotificationToast />

            {
                metaData == null || performance == null || reference == null || advance == null || score == 0 || screenshot == null ?

                    isLoading ?
                        <Grid item container xs={12} justifyContent="center" alignItems="center">
                            <Grid item xs={10} justifyContent="center" alignItems="center">

                                <TitleLoading><ReactTyped strings={["Analyse SEO du site en cours..."]} typeSpeed={40} loop /></TitleLoading>
                                <SubTitleLoading>{step}</SubTitleLoading>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 5 }}>
                                    <CustomLinearProgress variant="determinate" value={progressValue} />
                                </Box>

                            </Grid>
                            <Grid item container xs={12} justifyContent="center" alignItems="center">

                                <HeaderGrid item container xs={12} md={8} justifyContent="center" alignItems="center">
                                    <Grid item xs={12} md={10}>
                                        <TitleReport>Rapport SEO en cours de génération pour:</TitleReport>

                                        {/* <Skeleton variant="rectangular" animation="wave" width="300px" height={10} /> */}
                                        <Link href=""><URLink>{url}</URLink></Link>

                                        <T3>Votre score de contrôle SEO général</T3>

                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Skeleton variant="rectangular" animation="wave" width="80%" height="50px" />
                                    </Grid>

                                </HeaderGrid>

                                <BodyGrid item container xs={12} md={8} justifyContent="center" alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ display: { xs: "flex" }, justifyContent: "center", alignItems: "center" }}>
                                            <Skeleton variant="circular" animation="wave" width={250} height={250} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ display: { xs: "flex" }, justifyContent: "center", alignItems: "center" }}>
                                            <Skeleton variant="rectangular" animation="wave" width="60%" height={300} />
                                        </Box>
                                    </Grid>
                                </BodyGrid>

                                <Grid item container xs={12} md={8} justifyContent="center" alignItems="center">
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ display: "flex", justifyContent: 'center' }}>
                                            <SEOTabs
                                                value={value}
                                                onChange={handleChange}
                                                aria-label="SEO tabs"
                                                sx={{ display: { xs: "none", md: "flex", justifyContent: "space-between", width: "100%" } }}
                                            >
                                                <SEOTab label="Tests des métadonnées" {...a11yProps(0)} />
                                                <SEOTab label="Tests de performance" {...a11yProps(1)} />
                                                <SEOTab label="Tests de réference" {...a11yProps(2)} />
                                                <SEOTab label="Tests avancés" {...a11yProps(3)} />
                                            </SEOTabs>
                                            <Tabs
                                                orientation="vertical"
                                                value={value}
                                                onChange={handleChange}
                                                aria-label="SEO tabs"
                                                sx={{ display: { xs: "flex", md: "none" } }}
                                                TabIndicatorProps={{
                                                    style: { display: 'none' }
                                                }}
                                            >
                                                <SEOTab label="Tests des métadonnées" {...a11yProps(0)} />
                                                <SEOTab label="Tests de performance" {...a11yProps(1)} />
                                                <SEOTab label="Tests de réference" {...a11yProps(2)} />
                                                <SEOTab label="Tests avancés" {...a11yProps(3)} />
                                            </Tabs>
                                        </Box>
                                        <CustomTabPanel value={value} index={0}>

                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={1}>

                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={2}>

                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={3}>

                                        </CustomTabPanel>
                                    </Box>
                                </Grid>

                            </Grid>

                        </Grid>
                        :
                        <Grid item xs={12} justifyContent="center" alignItems="center">
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <TitleMain>
                                    <ReactTyped strings={["À quelle vitesse votre site Web se charge-t-il ? Découvrez-le avec notre boîte à outils SEO"]} typeSpeed={40} loop />
                                </TitleMain>

                                <TextMain>
                                    Découvrez les performances de votre site et découvrez des opportunités d&apos;optimisation.
                                </TextMain>
                            </Box>

                            <LinkBox onSubmit={onSubmit}>
                                <StyledTextfield
                                    label="Entrez l'URL du site à analyser"
                                    type="text"
                                    id="url"
                                    name="url"
                                    onChange={onChange}
                                />
                                &nbsp;
                                &nbsp;
                                <StartNowButton type='submit'>
                                    Testez votre site
                                </StartNowButton>
                            </LinkBox>
                        </Grid>

                    :
                    <Grid item container xs={12} justifyContent="center" alignItems="center">

                        <HeaderGrid item container xs={12} md={8} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={10}>
                                <TitleReport>Rapport généré pour:</TitleReport>

                                <Link href=""><URLink>{url}</URLink></Link>

                                <T3>Votre score de contrôle SEO général</T3>
                            </Grid>
                            <Grid item xs={12} md={2}>

                                {user ?
                                    <PDFButton onClick={handleClickOpenReport}>
                                        <FileDownloadIcon />
                                        &nbsp;
                                        Télécharger le PDF
                                    </PDFButton>
                                    :
                                    <PDFButton onClick={handleClickOpenNotice}>
                                        <FileDownloadIcon />
                                        &nbsp;
                                        Télécharger le PDF
                                    </PDFButton>
                                }


                                <Report
                                    url={url}
                                    isOpen={open}
                                    handleClose={handleCloseReport}
                                    metadata={metaData}
                                    reference={reference}
                                    performance={performance}
                                    advance={advance}
                                    score={score}
                                />
                                <Notice
                                    open={openNotice}
                                    handleClose={handleCloseNotice}
                                />

                            </Grid>

                        </HeaderGrid>

                        <BodyGrid item container xs={12} md={8} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: { xs: "flex" }, justifyContent: "center", alignItems: "center" }}>

                                    <CircularProgressWithLabel
                                        size={250}
                                        thickness={4}
                                        value={score}
                                    />

                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: { xs: "flex" }, justifyContent: "center", alignItems: "center" }}>
                                    <img
                                        alt="site_img"
                                        src="http://localhost:8005/media/screenshot.png"
                                        style={AuthImgStyle}
                                    />
                                </Box>
                            </Grid>
                        </BodyGrid>

                        <Grid item container xs={12} md={8} justifyContent="center" alignItems="center">
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ display: "flex", justifyContent: 'center' }}>
                                    <SEOTabs
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="SEO tabs"
                                        sx={{ display: { xs: "none", md: "flex", justifyContent: "space-between", width: "100%" } }}
                                    >
                                        <SEOTab label="Tests des métadonnées" {...a11yProps(0)} />
                                        <SEOTab label="Tests de performance" {...a11yProps(1)} />
                                        <SEOTab label="Tests de réference" {...a11yProps(2)} />
                                        <SEOTab label="Tests avancés" {...a11yProps(3)} />
                                    </SEOTabs>
                                    <Tabs
                                        orientation="vertical"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="SEO tabs"
                                        sx={{ display: { xs: "flex", md: "none" } }}
                                        TabIndicatorProps={{
                                            style: { display: 'none' }
                                        }}
                                    >
                                        <SEOTab label="Tests des métadonnées" {...a11yProps(0)} />
                                        <SEOTab label="Tests de performance" {...a11yProps(1)} />
                                        <SEOTab label="Tests de réference" {...a11yProps(2)} />
                                        <SEOTab label="Tests avancés" {...a11yProps(3)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <Metadata metaData={metaData} />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <Performance performance={performance} />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <Reference reference={reference} />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={3}>
                                    <Advanced advance={advance} />
                                </CustomTabPanel>
                            </Box>
                        </Grid>

                    </Grid>

            }


        </StyledGridMain >
    )
}
