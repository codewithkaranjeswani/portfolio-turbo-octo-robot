"use client"
import "@/src/styles/globals.css"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import { ThemeProvider } from "next-themes"
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-stone-200 dark:bg-stone-800 flex flex-col min-h-screen">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
