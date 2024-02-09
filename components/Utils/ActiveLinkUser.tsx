"use client";

import { usePathname } from 'next/navigation';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ActiveLinkUser({ parent, children, open }: any) {
    const currentRoute = usePathname();

    const [isCurrentPath, setIsCurrentPath] = useState(false);

    const setActive = () => {
        if (currentRoute.includes(parent)) {
            setIsCurrentPath(true);
        } else {
            setIsCurrentPath(currentRoute === parent);
        }
    }

    useEffect(() => {
        setActive();
    });

    const ActiveBox = styled(Box)(({ theme }) => ({
        background: isCurrentPath ? open ? "none" : "#E8EAF6" : "none",
        width: open ? "100%" : "50px",
        height: open ? "auto" : "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px"
    }));


    return (

        <ActiveBox>
            {children}
        </ActiveBox>

    )
}
