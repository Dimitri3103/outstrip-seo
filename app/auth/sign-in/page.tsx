import AuthContainer from '@/components/Auth/SignIn'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Connexion"
}

export default function SignIn() {
  return (
      <AuthContainer />
  )
}
