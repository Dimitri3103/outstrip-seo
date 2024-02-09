"use client"

import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import ToolsMain from './Main'
import ToolsList from './List'


export default function ToolsContainer() {
    return (
        <>
            <Navbar />
            <ToolsMain />
            <ToolsList />
            <Footer />
        </>

    )
}
