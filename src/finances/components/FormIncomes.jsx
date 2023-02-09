import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputAdornment, InputLabel, MenuItem, Paper, Select, styled, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import moment, { now } from 'moment/moment'
import React, { useState } from 'react'
import { MainTitle } from '../../components/UI/MainTitle'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { currency, dateFormat } from '../../config'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Form, Formik, useFormikContext } from 'formik'
import { CustomTextField } from '../../components/UI/Form/CustomTextField'
import { CustomCheckBox } from '../../components/UI/Form/CustomCheckBox'
import { tiposPeriodo } from '../../constantesDb'
import { CustomDatePicker } from '../../components/UI/Form/CustomDatePicker'
import { CustomFileField } from '../../components/UI/Form/CustomFileField'
import { NumberCurrencyFormat } from '../../components/NumberCurrencyFormat'



const CustomPaper = styled(Paper)(({ theme }) =>
    theme.unstable_sx({
        padding: 5,
        borderRadius: 1,
    }),
);

export const FormIncomes = () => {
    const tiposPeriodoTiempoOption = tiposPeriodo.slice(0, 4).map(item => ({
        label: item,
        value: item
    }));

    return (
        <Grid
            xs={8}
        >
            <Formik
                initialValues={{ nombre: '', monto: "", descripcion: "", esIngresoFijo: false, tipoPeriodo: "Mensual", fechaTipoPeriodo: moment(new Date(), dateFormat.simple), facturaLegal: undefined }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <Stack spacing={4}>
                        <CustomPaper elevation={3} >
                            <Stack
                                spacing={3}
                            >
                                <MainTitle component='h1' variant='h6'>Datos Importantes</MainTitle>

                                <CustomTextField
                                    label="Nombre"
                                    name="nombre"
                                    placeholder="Ej: Salario Empresa"
                                    required
                                />

                                <CustomTextField
                                    name='monto'
                                    label="Monto"
                                    placeholder='Ej: 1.000.000'
                                    required
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">{currency.symbol}</InputAdornment>,
                                        inputComponent: NumberCurrencyFormat
                                    }}
                                />

                                <CustomTextField
                                    name='descripcion'
                                    label="Descripción"
                                    placeholder='Ej: Paga del mes de noviembre'
                                    multiline
                                    minRows={3}
                                    maxRows={3}
                                />

                            </Stack>



                        </CustomPaper>

                        <CustomPaper elevation={3}>
                            <Stack
                                spacing={3}
                            >
                                <MainTitle component='h1' variant='h6'>Configuración extra</MainTitle>

                                <CustomCheckBox
                                    name="esIngresoFijo"
                                    label="¿Es un ingreso fijo?"
                                />

                                <CustomTextField
                                    select
                                    name="tipoPeriodo"
                                    label="Tipo periodo"
                                    dependFields ={['esIngresoFijo']}
                                >

                                    {tiposPeriodoTiempoOption.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}

                                </CustomTextField>

                                <CustomDatePicker
                                    name="fechaTipoPeriodo"
                                    label="Fecha del periodo"
                                />

                            </Stack>

                        </CustomPaper>

                        <CustomPaper elevation={3}>
                            <Stack
                                spacing={3}
                            >
                                <MainTitle component='h1' variant='h6'>Datos legales</MainTitle>

                                <CustomFileField
                                    name="facturaLegal"
                                    label="Cargar Factura"
                                />

                            </Stack>

                        </CustomPaper>

                        <Stack>
                            <Button type='submit'>Guardar</Button>
                        </Stack>
                    </Stack>
                </Form>


            </Formik>


        </Grid>
    )
}
