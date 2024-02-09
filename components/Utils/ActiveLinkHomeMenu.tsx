
"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Button } from '@mui/material';

const ActiveLinkHomeMenu = ({ href, children }: any) => {
    const currentRoute = usePathname();

    const MenuButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        "&:hover": { background: "#F7F7FB", color: "#9372F1" },
        color: currentRoute === `${href}` ? "#9372F1" : "#18242B",
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "normal",
        fontFamily:"DM Sans"
    }));
    
    return (

        <Link href={href}>
            <MenuButton
                sx={{ mr: 6, display: 'block' }}>
                {children}
            </MenuButton>
        </Link>
    );
};

export default ActiveLinkHomeMenu;