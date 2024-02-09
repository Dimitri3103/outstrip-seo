"use client"

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'
import Features from './Features'
import Join from './Join'

export default function HomeContainer() {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <Join />
      <Footer />
    </div>
  )
}
