import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react"
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: {id, img, name} }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${ name }`)
    }

    return (
        <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
            <Card>
                <CardActionArea onClick={onClick}>
                    <CardMedia
                        sx={{ height: 150, backgroundSize: 'contain', m: 1.5 }}
                        image={img}
                        title={name}
                    />
                    <CardContent>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant="body1" >
                                {name[0].toUpperCase()}{name.slice(1, undefined)}
                            </Typography>
                            <Typography variant="body1">
                                #{id}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
