import ConfirmPasswordContainer from '@/components/Auth/ConfirmPassword'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Confirmation du mot de passe"
}

export default function ConfirmPassword() {

  return (
      <ConfirmPasswordContainer />
  )
}
