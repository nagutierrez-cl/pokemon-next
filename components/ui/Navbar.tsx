import { FC } from "react";
import { AppBar, Box, Container, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Search } from "./Search";

interface Props {
  children: JSX.Element
}

export const Navbar = () => {

    const HideOnScroll: FC<Props> = ({ children }) => {
        const trigger = useScrollTrigger();
        
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <HideOnScroll>
            <AppBar>
                <Toolbar disableGutters>
                    <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
                        
                        <Box height={70} width={70} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image 
                                src="/pokeball.png"
                                alt="Icono de la app"
                                width={45}
                                height={45}
                            />
                        </Box>
                        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'end' }}>
                            <Typography variant='h1' sx={{ fontSize: '50px', fontWeight: 500, transform: 'translateY(2px)' }}>P</Typography>
                            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: 500, transform: 'translateX(-7px)' }}>okémon</Typography>
                        </Link>

                        <Box sx={{ flex: 1 }} />
                        
                        <Search />

                    </Container>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}
