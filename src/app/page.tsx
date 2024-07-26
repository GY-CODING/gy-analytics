'use client'
import { Box, Container, Grid, } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home(): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    router.push("/dashboard")
  }, [])

  return (
    <main className="w-screen h-screen bg-red-200 flex flex-col items-center justify-center">

    </main >
  );
}
