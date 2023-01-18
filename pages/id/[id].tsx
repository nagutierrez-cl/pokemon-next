import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from 'next/router';

import { Pokemon } from "../../interfaces";
import { getPokemonInfo } from "../../utils/getPokemonInfo";
import { PokemonDetailPage } from "../../components/pokemon/PokemonDetailPage";

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

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

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  
    return {
        paths: pokemons151.map( id => ({
            params: { id }
        })),
        fallback: true
    }
}
  
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo(id)

    if( !pokemon ) {
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
  
export default PokemonPage;