import React from 'react'
import ResetPasswordContainer from '@/components/Auth/ResetPassword'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Réinitialisation du mot de passe"
}

export default function ResetPassword() {
  return (
      <ResetPasswordContainer />
  )
}
