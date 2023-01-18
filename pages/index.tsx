import type { NextPage, GetStaticProps } from 'next'
import { Container, Grid } from '@mui/material';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts/Layout'
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon/PokemonCard';

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout>
            <Container maxWidth="xl">
                <Grid container spacing={1.5}>
                    {
                        pokemons.map( pokemon => (
                            <PokemonCard pokemon={pokemon} key={pokemon.id} />
                        ))
                    }
                </Grid>
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')

    const pokemons: SmallPokemon[] = data.results.map( (pokemon, i) => ({
        ...pokemon,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }))
    
    return {
        props: {
            pokemons
        }
    }
}

export default HomePage