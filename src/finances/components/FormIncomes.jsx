import { TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { MainTitle } from '../../components/UI/MainTitle'

export const FormIncomes = () => {

    const [inputValue, setInputValue] = useState("")

    const onChangeInputValue = (e) => {
        setInputValue(e.target.value.replace(/\D/g, ""))
    }

    return (
        <Grid
            xs={8}
        >

            
            <Stack
                spacing={3}
            >
                <MainTitle component='h1' variant='h6'>Datos Importantes</MainTitle>
                <TextField
                    fullWidth
                    id='name'
                    label='Nombre'
                    placeholder='Ej: Salario Empresa'
                    variant='outlined'
                    required
                />
                
                <TextField
                    fullWidth
                    id='amount'
                    label="Monto"
                    placeholder='Ej: 1.000.000'
                    variant="outlined"
                    value={inputValue}
                    onChange={onChangeInputValue}
                    required

                />

                <TextField
                    fullWidth
                    id='description'
                    label="Descripción"
                    placeholder='Ej: Paga del mes de noviembre'
                    variant="outlined"
                    multiline
                    minRows={3}
                    maxRows={3}
                />
            </Stack>

        </Grid>
    )
}
