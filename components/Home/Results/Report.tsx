import React from 'react'
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography, styled } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Invoice from '@/components/PDF/Invoice';

const CloseButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: "3%",
    top: "2%",
}));
const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        width: "90%",
        borderRadius: "10px",
    },
    [theme.breakpoints.up('sm')]: {
        "& .MuiDialog-paper": {
            width: "40%",
            borderRadius: "10px",
        }
    },
}));
export const TitleDialog = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontSize: "16px",
    color: "#000",
    fontWeight:600,
    lineHeight: "32px",
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    }
}));

export default function Report(props: any) {
    const { isOpen, handleClose, url, metadata, reference, performance, advance, score } = props;
    return (
        <StyledDialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="id-card-dialog"
            aria-describedby="alert-dialog-description"
            maxWidth="lg"
        >
            <DialogTitle id="id-card-dialog">
                <TitleDialog>Rapport SEO</TitleDialog>
                <CloseButton onClick={handleClose}>
                    <CancelOutlinedIcon style={{ color: "#6B4EFF" }} />
                </CloseButton>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 5 }}>
                    <Invoice
                        url={url}
                        metadata={metadata}
                        reference={reference}
                        performance={performance}
                        advance={advance}
                        score={score}
                    />
                </Box>
            </DialogContent>
        </StyledDialog>
    )
}
