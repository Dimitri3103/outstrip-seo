import NotificationToast from '@/components/Common/Notification';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, styled } from '@mui/material';
import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { TitleDialog } from './Report';
import Link from 'next/link';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        width: "80%",
        borderRadius: "10px",
    },
    [theme.breakpoints.up('sm')]: {
        "& .MuiDialog-paper": {
            width: "25%",
            borderRadius: "10px",
        }
    },
}));
export const CloseButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: "0%",
    top: "2.5%",
    [theme.breakpoints.up('md')]: {
        right: "2%",
        top: "5.7%",
    }
}));
const Text = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontWeight: 500,
    fontSize: "14px",
    color: "#72777A",
    lineHeight: "32px",
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
        fontSize: "16px",
    }
}));

const NoButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    fontSize: "14px",
    fontFamily: "DM Sans",
    background: "#FFF",
    borderRadius: "10px",
    fontWeight: 600,
    color: "#9372F1",
    width: "100px",
    height: "40px",
    border: "1px solid #9372F1",
    "&:hover": { background: "#FFF" },

}));
const YesButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    fontSize: "14px",
    fontFamily: "DM Sans",
    background: "#9372F1",
    borderRadius: "10px",
    fontWeight: 600,
    color: "#FFF",
    width: "100px",
    height: "40px",
    "&:hover": { background: "#9372F1" },

}));

export default function Notice(props: any) {

    const { handleClose, open } = props;

    return (
        <StyledDialog open={open} onClose={handleClose}>
            <DialogTitle>
                <TitleDialog>Rapport généré !</TitleDialog>
                <CloseButton onClick={handleClose}>
                    <CancelOutlinedIcon style={{ color: "#6B4EFF" }} />
                </CloseButton>
            </DialogTitle>
            <NotificationToast />

            <DialogContent>
                <Text>Créez un compte pour télécharger votre rapport</Text>
            </DialogContent>

            <DialogActions sx={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <Box>
                    <NoButton onClick={handleClose}>Non</NoButton>
                    &nbsp;
                    &nbsp;
                    <Link href="/auth/sign-up">
                        <YesButton>Oui</YesButton>
                    </Link>
                </Box>
            </DialogActions>
        </StyledDialog>
    )
}
