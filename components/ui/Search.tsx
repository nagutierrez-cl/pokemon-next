import { useState } from 'react';
import { useRouter } from "next/router";
import { Box, TextField, RadioGroup, FormControlLabel, Radio, SwipeableDrawer, IconButton, Button, FormLabel, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {

    const router = useRouter();

    const [search, setSearch] = useState('');
    const [searchBy, setSearchBy] = useState('id');

    const [error, setError] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        onClick()
    }

    const onClick = () => {
        if(!formValidation()) return
        router.push(`/${searchBy}/${search.toLowerCase()}`)
    }

    const formValidation = () => {

        if(search === '') {
            setError('Field required!')
            return false
        }

        if(searchBy === 'id' && !(/^[0-9]+$/).test(search)) {
            setError('Invalid id')
            return false
        }

        if (searchBy === 'name' && !(/^[^0-9]\w/).test(search)){
            setError('Invalid name')
            return false
        } 

        setError('')
        return true
    }

    return (
        <>
            {/* Web search */}
            <Box component="form" onSubmit={onSubmit} sx={{ display: { xs: 'none', sm: 'flex'}, justifyContent: 'flex-end', gap: 3, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon onClick={onClick} sx={{ color: 'action.active', mr: 1, my: 0.5, cursor: 'pointer' }} />
                                </InputAdornment>
                            ),
                        }}
                        autoComplete='off' 
                        placeholder="Search..." 
                        variant="standard" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value) } 
                        error={Boolean(error)}
                        helperText={error}
                        onBlur={() => setError('')}
                    />
                </Box>

                <FormLabel>Search By</FormLabel>
                <RadioGroup
                    row
                    name="searchByRadioGroup"
                    value={searchBy}
                    onChange={(e) => setSearchBy(e.target.value)}
                >
                    <FormControlLabel value="id" control={<Radio />} label="Id" />
                    <FormControlLabel value="name" control={<Radio />} label="Name" />
                </RadioGroup>
            </Box>

            {/* Responsive search */}
            <IconButton size='large' onClick={() => setIsOpen(true)}>
                <SearchIcon fontSize='inherit' sx={{ color: 'action.active', cursor: 'pointer', display: { xs: 'block', sm: 'none' } }} />
            </IconButton>
            <SwipeableDrawer
                anchor='right'
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
            >
                <Box component="form" onSubmit={onSubmit} sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
                        <TextField 
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon onClick={onClick} sx={{ color: 'action.active', mr: 1, my: 0.5, cursor: 'pointer' }} />
                                    </InputAdornment>
                                ),
                            }}
                            autoComplete='off' 
                            placeholder="Search..." 
                            variant="standard" 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value) } 
                            error={Boolean(error)}
                            helperText={error}
                        />
                    </Box>
                    
                    <FormLabel>Search By</FormLabel>
                    <RadioGroup
                        row
                        name="searchByRadioGroup"
                        value={searchBy}
                        onChange={(e) => setSearchBy(e.target.value)}
                        sx={{ justifyContent: 'center', mb: 2 }}
                    >
                        <FormControlLabel value="id" control={<Radio />} label="Id" />
                        <FormControlLabel value="name" control={<Radio />} label="Name" />
                    </RadioGroup>

                    <Button onClick={onClick} variant='contained' fullWidth>
                        Search
                    </Button>
                </Box>
            </SwipeableDrawer>
        </>
    )
}
