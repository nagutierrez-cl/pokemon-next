import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff'
        }
    },

    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                },
            }
        },

        MuiTypography: {
            defaultProps: {
                color: 'primary'
            },
            styleOverrides: {
                h1: {
                    fontSize: '3rem',
                    fontWeight: 500
                },
                h2: {
                    fontSize: '2rem',
                    fontWeight: 400
                },
                body1: {
                    fontSize: '1rem'
                }
            }
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }
    }
});