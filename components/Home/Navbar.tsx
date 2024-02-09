import * as React from 'react';
import { AppBar, Avatar, Box, Toolbar, Typography, Container, Button, Tooltip, IconButton, Menu, MenuItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import ActiveLinkHomeMenu from '@/components/Utils/ActiveLinkHomeMenu';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useLogoutMutation, useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { StyledBadge, StyledLinear, StyledStackLoading } from '@/assets/styles/auth';
import { deleteCookie } from 'cookies-next';
import Logo from "@/assets/images/outstrip-seo.png"
import { toast } from 'react-toastify';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: "#F7F7FB",
    boxShadow: "0px 0px 8px #00000008",
    height: "100px",
    display: "flex",
    justifyContent: "center"
}));
const LoginButton = styled(Button)(({ theme }) => ({
    width: "120px",
    height: "50px",
    textTransform: "none",
    borderRadius: "10px",
    color: "#9372F1",
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "DM Sans",
    "&:hover": { background: "#F7F7FB" },
}));
const SignUpButton = styled(Button)(({ theme }) => ({
    width: "200px",
    height: "50px",
    background: "#9372F1",
    textTransform: "none",
    borderRadius: "10px",
    color: "#FFF",
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "DM Sans",
    "&:hover": { background: "#9372F1" }
}));
const LoginButtonResp = styled(Button)(({ theme }) => ({
    background: "#F7F7FB",
    textTransform: "none",
    borderRadius: "10px",
    color: "#9372F1",
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "DM Sans",
    "&:hover": { background: "#F3F4F6", color: "#000" },
}));
const SignUpButtonResp = styled(Button)(({ theme }) => ({
    background: "#9372F1",
    textTransform: "none",
    borderRadius: "10px",
    color: "var(--White, #FFF)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "DM Sans",
    "&:hover": { background: "rgba(47, 69, 197, 0.90)", color: "var(--White, #FFF)" }
}));
const ImgLogo = {
    width: "180px",
    height: "auto",
}
const ImgLogoResp = {
    width: "150px",
    height: "auto",
}
const MenuItemTextResp = styled(Typography)(({ theme }) => ({
    color: "#18242B",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "DM Sans",
    lineHeight: "normal",
    letterSpacing: "0.2px",
}));
const UserEmail = styled(Typography)(({ theme }) => ({
    color: "#212832",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    fontFamily: "DM Sans",
    lineHeight: "normal",
    letterSpacing: "0.2px",
}));
const UserName = styled(Typography)(({ theme }) => ({
    color: "#212832",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    fontFamily: "DM Sans",
    lineHeight: "normal",
    letterSpacing: "0.2px",
}));


export default function Navbar() {

    const { data: user } = useRetrieveUserQuery();
    const [logout] = useLogoutMutation();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [anchorElUserResp, setAnchorElUserResp] = React.useState<null | HTMLElement>(null);
    const handleOpenUserRespMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUserResp(event.currentTarget);
    };
    const handleCloseUserRespMenu = () => {
        setAnchorElUserResp(null);
    };

    const [isLoading, setLoading] = React.useState(false);

    const reload = () => window.location.reload();

    const handleLogout = async () => {

        setLoading(true);

        try {
            await logout({})
                .then(() => {
                    deleteCookie("tokenSEO");
                    reload()
                })

        } catch (e: any) {
            toast.error(e);
        }
    };



    return (
        <StyledAppBar position="static">
            {isLoading && (
                <StyledStackLoading sx={{ width: '100%' }}>
                    <StyledLinear color="secondary" />
                </StyledStackLoading>
            )}
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ display: { xs: "none", md: "flex" } }} >
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                                style={ImgLogo}
                            />
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* <Tooltip title="Ouvrir le menu">
                           
                        </Tooltip> */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "#9372F1" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link href="#">
                                <MenuItem>
                                    <MenuItemTextResp textAlign="center">Tarification</MenuItemTextResp>
                                </MenuItem>
                            </Link>

                            <Link href="/tools">
                                <MenuItem>
                                    <MenuItemTextResp textAlign="center">Outils</MenuItemTextResp>
                                </MenuItem>
                            </Link>

                            <Link href="#">
                                <MenuItem>
                                    <MenuItemTextResp textAlign="center">Blog</MenuItemTextResp>
                                </MenuItem>
                            </Link>

                            <br />

                            {user ?
                                null :
                                <>
                                    <Link href="/auth/sign-in">
                                        <MenuItem>
                                            <LoginButtonResp>Connexion</LoginButtonResp>
                                        </MenuItem>
                                    </Link>

                                    <Link href="https://outstrip.tech/contactez-nous/">
                                        <MenuItem>
                                            <SignUpButtonResp>Contactez-nous</SignUpButtonResp>
                                        </MenuItem>
                                    </Link>
                                </>
                            }

                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "center", alignItems: "center" }}>
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                                style={ImgLogoResp}
                            />
                        </Link>
                        {user ?
                            <>
                                <Box sx={{ ml: 5 }}>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                        onClick={handleOpenUserRespMenu}
                                    >
                                        <Avatar alt={user.email} src={user.google_picture} />
                                    </StyledBadge>
                                </Box>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElUserResp}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElUserResp)}
                                    onClose={handleCloseUserRespMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >

                                    <MenuItem>
                                        <UserEmail textAlign="center">{user.email}</UserEmail>
                                    </MenuItem>
                                    <MenuItem>
                                        <UserName textAlign="center">{user.first_name} {user.last_name}</UserName>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleLogout}>
                                        <MenuItemTextResp textAlign="center">Déconnexion</MenuItemTextResp>
                                    </MenuItem>
                                </Menu>
                            </>
                            :
                            null}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 6 }}>
                        <ActiveLinkHomeMenu href="#">
                            Tarification
                        </ActiveLinkHomeMenu>
                        <ActiveLinkHomeMenu href="/tools">
                            Outils
                        </ActiveLinkHomeMenu>
                        <ActiveLinkHomeMenu href="#">
                            Blog
                        </ActiveLinkHomeMenu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                        {user ?
                            <>
                                <Box>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                        onClick={handleOpenUserMenu}
                                    >
                                        <Avatar alt={user.email} src={user.google_picture} />
                                    </StyledBadge>
                                </Box>
                                <Menu
                                    id="menu-user"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >

                                    <MenuItem>
                                        <UserEmail textAlign="center">{user.email}</UserEmail>
                                    </MenuItem>
                                    <MenuItem>
                                        <UserName textAlign="center">{user.first_name} {user.last_name}</UserName>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleLogout}>
                                        <MenuItemTextResp textAlign="center">Déconnexion</MenuItemTextResp>
                                    </MenuItem>
                                </Menu>

                            </>
                            :
                            <Box>
                                <Link href="/auth/sign-in">
                                    <LoginButton>
                                        Connexion
                                    </LoginButton>
                                </Link>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Link href="https://outstrip.tech/contactez-nous/">
                                    <SignUpButton>
                                        Contactez-nous
                                    </SignUpButton>
                                </Link>
                            </Box>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar >
    )
}
