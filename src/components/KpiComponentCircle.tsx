'use client'
import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { PieChart } from '@mui/x-charts'
import { CircleComponentProps } from '@/domain/Intefaces';

export function KpiComponentCircle({ title, colors, dataset, isLoading }: CircleComponentProps): JSX.Element {
    let data: { id: string, value: number, label: string }[];

    const chartDataStory = Object.entries(dataset).map(([world, count]) => ({
        label: world,
        value: count,
    }));

    if (isLoading) {
        return (
            <CircularProgress />
        )
    } else {
        data = Object.entries(dataset).map(([world, count], index) => ({
            id: world,
            value: count,
            label: world,
            color: colors[index % colors.length]
        }));
    }
    return (
        <Box sx={{
            filter: "drop-shadow(0px 0px 10px #09090b)",
        }}>
            <Typography variant="h6" sx={{ textAlign: 'left', marginLeft: '2%', fontFamily: 'lexend', color: '#e5e5e5' }}>{title}</Typography>
            <PieChart

                xAxis={[{ scaleType: 'band', data: chartDataStory.map((data) => data.label), tickFontSize: 10 }]}
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 10, additionalRadius: -10, color: 'transparent' },
                        innerRadius: 30,
                        outerRadius: 130,
                        paddingAngle: 4,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
                        cx: 100,
                        cy: 150,
                    },
                ]}
                sx={{
                    'tspan': {
                        fill: 'white',
                        userSelect: 'none',
                        pointerEvents: 'none',
                        margin: '10px'
                    },
                    backgroundColor: '#262626', borderRadius: '10px',
                }}
                colors={colors}
                width={470}
                height={320}
                viewBox={{ x: -50, y: -30, width: 500, height: 380 }} />
        </Box>
    )
}