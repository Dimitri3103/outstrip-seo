import ToolsContainer from '@/components/Tools'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Outils"
}


export default function ToolsPage() {
  return (
   <ToolsContainer />
  )
}
