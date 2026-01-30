import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from '@/context/authProvider';

export const metadata: Metadata = {
  title: 'Shoe Shop',
  description: "India's most famous shoe shop with 10+ year of experience and trust" ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <AuthProvider>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className="font-body antialiased">
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
