'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { PieChart } from '@mui/x-charts'

export function KpiComponentCircle({ title, colors, datasetA, datasetB }: BarComponentLinesProps): JSX.Element {

    const valueFormatter = (value: number | null) => `${value} characters`;

    const chartDataStory = Object.entries(datasetA).map(([world, count]) => ({
        world,
        count,
    }));
    const chartDataGame = Object.entries(datasetB!).map(([world, count]) => ({
        world,
        count,
    }));

    const combinedDataset = chartDataGame.map((gameData, index) => ({
        world: gameData.world,
        storyCount: chartDataStory[index].count,
        gameCount: gameData.count,
    }));


    const data = [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
    ];

    return (
        <Box sx={{
            filter: "drop-shadow(0px 0px 10px #09090b)",
        }}>
            <Typography variant="h6" sx={{ textAlign: 'left', marginLeft: '2%', fontFamily: 'lexend', color: '#e5e5e5' }}>{title}</Typography>
            <PieChart

                xAxis={[{ scaleType: 'band', data: combinedDataset.map((data) => data.world), tickFontSize: 10 }]}
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                sx={{
                    'tspan': {
                        fill: 'transparent',
                        userSelect: 'none',
                        pointerEvents: 'none'
                    },
                    '& .MuiChartsAxis-line': { stroke: 'transparent', display: 'none' },
                    '& .MuiChartsAxis-tick': { stroke: 'transparent', display: 'none' },
                    backgroundColor: '#262626', borderRadius: '10px',
                }}
                colors={colors}
                width={470}
                dataset={combinedDataset.map((data) => ({ world: data.world as string, storyCount: data.storyCount, gameCount: data.gameCount }))}
                height={320}
                viewBox={{ x: -50, y: -30, width: 500, height: 380 }} />
        </Box>
    )
}

interface BarComponentLinesProps {
    title: string;
    colors: string[];
    datasetA: Record<string, number>;
    datasetB?: Record<string, number>;
    dataKey: string[];
}