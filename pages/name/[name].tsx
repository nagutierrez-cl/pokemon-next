import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo } from "../../utils/getPokemonInfo";
import { PokemonDetailPage } from "../../components/pokemon/PokemonDetailPage";

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const router = useRouter();
    
    return (
        <>
            {
                router.isFallback
                    ? <p>Loading</p>
                    : <PokemonDetailPage pokemon={pokemon} />
            }
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonsName: string[] = data.results.map( pokemon => pokemon.name )

    return {
        paths: pokemonsName.map( name => ({
            params: { name }
        })),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };
  
    const pokemon = await getPokemonInfo(name);

    if( !pokemon ){
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 604800, // 60 seconds * 60 minutes * 24 hours * 7 days
    }
}

export default PokemonByNamePage;