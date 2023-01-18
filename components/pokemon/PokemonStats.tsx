import { Box, Typography, Grid } from '@mui/material';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { FC } from "react";
import { Radar } from 'react-chartjs-2';
import { Stat } from "../../interfaces";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface Props {
    stats: Stat[]
}

const statsFormat = (word: string) => {
    return ((word[0].toUpperCase() + word.slice(1, undefined)).replace('-', ' ')).replace('Special', 'Sp.')
}

export const PokemonStats: FC<Props> = ({ stats }) => {

    const data = {
        labels: stats.map(stat => statsFormat(stat.stat.name)),
        datasets: [
            {
                label: 'Stats',
                data: stats.map(stat => stat.base_stat),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <>
            <Typography variant='h4' sx={{ textAlign: { xs: 'center', sm: 'start' }, mb: 2 }}>Stats</Typography>

            <Grid container sx={{ mb: 3 }}>
                {
                    stats.map(stat => (
                        <Grid item xs={6} sm={4} key={stat.stat.name}>
                            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mx: 3 }}>
                                <Typography>{statsFormat(stat.stat.name)}:</Typography>
                                <Typography>{stat.base_stat}</Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>

            <Box sx={{ maxHeight: '360px', maxWidth: '360px', ml: { xs: 0, sm: 2 } }}>
                <Radar 
                    data={data}
                    options={{
                        color: 'white',
                        scales: {
                            r: {
                                beginAtZero: true,
                                grid: {
                                    color: 'lightgray'
                                },
                                angleLines: {
                                    color: 'lightgray',
                                },
                                ticks: {
                                    color: 'white',
                                    backdropColor: 'black',
                                    stepSize: 20,
                                },
                                pointLabels: {
                                    color: 'white'
                                }
                            }
                        },
                        plugins: { 
                            legend: {
                                labels: {
                                    color: "white",
                                }
                            }
                        },
                    }}
                />
            </Box>
        </>
    )
}
