import { Box, Container, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', py: 4 }}>
            <Typography sx={{ fontSize: '14px' }}>Copyright © 2023 - Nicolás Gutiérrez</Typography>
        </Box>
    )
}
