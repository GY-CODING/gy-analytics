'use client'
import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { useCharactersStory } from '../hooks/useCharactersStory'
import { useCharactersGame } from '../hooks/useCharactersGame'
import { KpiComponentBars } from '@/components/KpiComponentBars'
import { KpiComponentLines } from '@/components/KpiComponentLines'
import { KpiComponentCircle } from '@/components/KpiComponentCircle'

export default function Page(): JSX.Element {
    const { data: charactersStory, isLoading: isLoadingStory, isError: isErrorStory, countCharactersByWorld: countCharactersStoryByWorld } = useCharactersStory()
    const { data: charactersGame, isLoading: isLoadingGame, isError: isErrorGame, countCharactersByWorld: countCharactersGameByWorld } = useCharactersGame()

    const colors1 = ['#FFC107', '#FF5722']
    const colors2 = ['#9929ea', '#5808fb']
    const colors3 = ['#fcd34d', '#e879f9', '#16a34a', '#9333ea', '#d97706', '#22d3ee', '#dc2626', '#34d399', '#5b21b6']
    const colors4 = ['#22d3ee', '#0891b2']
    const colors5 = ['#fb7185', '#db2777']
    const colors6 = ['#f472b6', '#db2777']


    if (isLoadingStory || isLoadingGame || isErrorStory || isErrorGame) {
        return (
            <Box sx={{ width: '78%', height: '95vh', backgroundColor: '#171717', filter: "drop-shadow(0px 0px 10px #000000)", borderRadius: '10px' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Box sx={{
            width: '78%',
            height: '95vh',
            backgroundColor: '#171717',
            filter: "drop-shadow(0px 0px 10px #000000)",
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            overflow: 'auto',
            gap: '10px',
            padding: '20px',
        }}>
            <KpiComponentBars title={'Dinero en putas'} colors={colors1} datasetA={countCharactersGameByWorld()} datasetB={countCharactersStoryByWorld()} dataKey={["world"]} />
            <KpiComponentLines title={'Dinero en farlopa'} colors={colors2} datasetA={countCharactersGameByWorld()} datasetB={countCharactersStoryByWorld()} dataKey={["world"]} />
            <KpiComponentCircle title={'Dinero en coca'} colors={colors3} dataset={countCharactersGameByWorld()} isLoading={isLoadingGame} />
            {/* <KpiComponentBars title={'Dinero en heroina'} colors={colors3} datasetA={countCharactersGameByWorld()} datasetB={countCharactersStoryByWorld()} dataKey={["world"]} /> */}
            <KpiComponentBars title={'Dinero en armas'} colors={colors4} datasetA={countCharactersGameByWorld()} datasetB={countCharactersStoryByWorld()} dataKey={["world"]} />
            <KpiComponentBars title={'Detenciones'} colors={colors5} datasetA={countCharactersGameByWorld()} datasetB={countCharactersStoryByWorld()} dataKey={["world"]} />
            <KpiComponentBars title={'Arresto domiciliario'} colors={colors6} datasetA={countCharactersGameByWorld()} datasetB={countCharactersStoryByWorld()} dataKey={["world"]} />
        </Box >
    )
}