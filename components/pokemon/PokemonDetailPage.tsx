import { FC } from 'react';
import { Container, Grid, Card, CardActionArea, CardMedia, Box, Typography } from '@mui/material';

import { Layout } from "../layouts/Layout"
import { PokemonTypeButton } from "./PokemonTypeButton";
import { PokemonOfficialArtwork } from "./PokemonOfficialArtwork";
import { PokemonStats } from "./PokemonStats";
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon;
}

export const PokemonDetailPage: FC<Props> = ({ pokemon }) => {

    const pokemonName = `${pokemon.name[0].toUpperCase()}${(pokemon.name).slice(1, undefined)}`

    return (
        <Layout title={ pokemonName }>
            <Container maxWidth='lg'>
                <Grid container spacing={6}>

                    <Grid item xs={12} sm={5}>
                        <Card sx={{ mx: { xs: 0, sm: 5 } }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 180, backgroundSize: 'contain', m: 1.5 }}
                                    image={ pokemon.sprites.other?.dream_world.front_default ? pokemon.sprites.other?.dream_world.front_default : pokemon.sprites.front_default }
                                    title={pokemon.name}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display='flex' justifyContent='space-around' flexDirection='column' height='100%' sx={{ alignItems: { xs: 'center', sm: 'start' } }}>
                            <Typography variant="h1" sx={{ textAlign: { xs: 'center', sm: 'start' }}}>{pokemonName} #{pokemon.id}</Typography>

                            <Box>
                                <Typography variant='h5' sx={{ my: 2, textAlign: { xs: 'center', sm: 'start' } }}>Types</Typography>
                                <Box display='flex' gap={2} >
                                    {
                                        pokemon.types.map(type => (
                                            <PokemonTypeButton type={type.type.name} key={type.type.name} />
                                        ))
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        {
                            pokemon.sprites.other?.["official-artwork"] && 
                                <PokemonOfficialArtwork pokemon={pokemon} />
                        }
                    </Grid>
                        
                    <Grid item xs={12} sm={6}>
                        <PokemonStats stats={pokemon.stats} />
                    </Grid>

                </Grid>
            </Container>
        </Layout>
    )
}
