  import type React from "react"
  import type { Metadata } from "next"
  import { JetBrains_Mono } from "next/font/google"
  import "./globals.css"
  import NavBar from "@/components/NavBar"
  import Footer from "@/components/Footer"

  const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
  })

  export const metadata: Metadata = {
    title: "Ali D Coded",
    description: "Ali Afthab aka ali-d-coded's personal portfolio website",
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html lang="en">
        <body
          className={`${jetBrainsMono.variable} ${jetBrainsMono.className} antialiased grid grid-rows-[auto_1fr_auto] min-h-screen`}
          suppressHydrationWarning={true}
        >
          <NavBar />
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    )
  }