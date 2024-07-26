'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { BarChart, LineChart } from '@mui/x-charts'
import { convertToDataSet } from '@/app/utils/utils';
import { BarComponentLinesProps } from '@/domain/Intefaces';

export function KpiComponentLines({ title, colors, datasetA, datasetB }: BarComponentLinesProps): JSX.Element {

    const valueFormatter = (value: number | null) => `${value} characters`;

    const chartDataStory = convertToDataSet(datasetA);
    const chartDataGame = convertToDataSet(datasetB!);

    const combinedDataset = chartDataGame.map((gameData, index) => ({
        world: gameData.world,
        storyCount: chartDataStory[index].count,
        gameCount: gameData.count,
    }));

    return (
        <Box sx={{
            filter: "drop-shadow(0px 0px 10px #09090b)",
        }}>
            <Typography variant="h6" sx={{ textAlign: 'left', marginLeft: '2%', fontFamily: 'lexend', color: '#e5e5e5' }}>{title}</Typography>
            <LineChart
                xAxis={[{ scaleType: 'band', data: combinedDataset.map((data) => data.world), tickFontSize: 10 }]}
                series={[
                    { dataKey: 'storyCount', valueFormatter },
                    { dataKey: 'gameCount', valueFormatter }
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
                viewBox={{ x: 33, y: 15, width: 400, height: 280 }} />
        </Box>
    )
}

