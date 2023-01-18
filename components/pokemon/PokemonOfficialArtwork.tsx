import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import { FC } from "react"
import { Pokemon } from "../../interfaces"

interface Props {
    pokemon: Pokemon
}

export const PokemonOfficialArtwork: FC<Props> = ({ pokemon }) => {
    return (
        <>
            <Typography variant='h4' textAlign='center' sx={{ mt: 4 }}>Oficcial Artwork</Typography>
            <Box display='flex' gap={2} justifyContent='center' sx={{ mt: 2 }}>
                <Box>
                    <Typography variant='h5' textAlign='center'>Normal</Typography>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                sx={{ height: 100, width: 100, backgroundSize: 'contain', m: 1.5 }}
                                image={pokemon.sprites.other?.["official-artwork"].front_default}
                                title={pokemon.name}
                            />
                        </CardActionArea>
                    </Card>
                </Box>

                <Box>
                    <Typography variant='h5' textAlign='center'>Shiny</Typography>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                sx={{ height: 100, width: 100, backgroundSize: 'contain', m: 1.5 }}
                                image={pokemon.sprites.other?.["official-artwork"].front_shiny}
                                title={pokemon.name}
                            />
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
        </>
    )
}
