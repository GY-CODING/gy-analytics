import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GY Analytics",
  description: "GY Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex flex-row justify-center items-center gap-4`}>
        {children}
      </body>
    </html>
  );
}
