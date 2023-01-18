import { NextPage } from "next";
import { Container, Typography, Button } from '@mui/material';

import { Layout } from "../components/layouts/Layout";
import { useRouter } from 'next/router';

const NotFoundPage: NextPage = () => {

    const router = useRouter();

    return (
        <Layout>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 187px)', flexDirection: 'column', gap: 4 }}>
                <Typography variant="h1" textAlign='center'>404 | Pokémon not found</Typography>
                <Button onClick={() => router.push('/')} color='error' variant="contained">Go back to main page</Button>
            </Container>
        </Layout>
    )
}

export default NotFoundPage;