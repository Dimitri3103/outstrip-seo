import type { Metadata } from "next";
import "./globals.css";
import Provider from '@/redux/provider';
import { GoogleOAuthProvider } from "@react-oauth/google";


export const metadata: Metadata = {
  title: {
    default: 'Outstrip SEO : Tests et Surveillance des performances des sites Web',
    template: "%s - Outstrip SEO : Tests et Surveillance des performances des sites Web"
  },
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet" />
        <link rel="shortcut icon" href="/seo-logo.png" />
      </head>
      <body>
        <GoogleOAuthProvider clientId="1068600712637-djrlb6u4heef43bou9do0bkvemtg21vt.apps.googleusercontent.com">
          <Provider>
            {children}
          </Provider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
