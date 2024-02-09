import SignUpContainer from '@/components/Auth/SignUp'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Inscription"
}

export default function SignUp() {
  return (
      <SignUpContainer />
  )
}
