import { Button, InputAdornment, MenuItem, Paper, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import { MainTitle } from '../../components/UI/MainTitle'
import { currency } from '../../config'
import { Form, Formik } from 'formik'
import { CustomTextField } from '../../components/UI/Form/CustomTextField'
import { CustomCheckBox } from '../../components/UI/Form/CustomCheckBox'
import { ingresosValoresIniciales, nombreDias, schemaIngresos, tiposPeriodo } from '../../constantesDb'
import { CustomDatePicker } from '../../components/UI/Form/CustomDatePicker'
import { CustomFileField } from '../../components/UI/Form/CustomFileField'
import { NumberCurrencyFormat } from '../../components/NumberCurrencyFormat'
import { HideFieldFormik } from '../../components/UI/Form/HideFieldFormik'
import { NumberFormat } from '../../components/NumberFormat'
import { MAX_LIMIT_DAYS_MONTH } from '../../constants'



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

    const validationPeriodoSemanal = ({ tipoPeriodo }) => (tipoPeriodo == "Semanal");
    const validationPeriodoDia = ({ tipoPeriodo }) => (tipoPeriodo == "Quincenal" || tipoPeriodo == "Mensual");
    const validationPeriodoAnual = ({ tipoPeriodo }) => (tipoPeriodo == "Anual");

    const validationDiaDelMes = ({ floatValue }) => (floatValue <= MAX_LIMIT_DAYS_MONTH);

    return (
        <Grid
            xs={8}
        >
            <Formik
                initialValues={ingresosValoresIniciales}
                validationSchema={schemaIngresos}
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
                                    placeholder='Ej: Gasto del mes de noviembre'
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
                                    dependField={{
                                        dpnFieldName: 'esIngresoFijo',
                                        cFieldName: 'tipoPeriodo',
                                        validation: (cv, dv, act) => act(!dv)
                                    }}

                                >

                                    {tiposPeriodoTiempoOption.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}

                                </CustomTextField>

                                <HideFieldFormik validation={validationPeriodoAnual}>
                                    <CustomDatePicker
                                        name="fechaAnual"
                                        label="Fecha anual"
                                        views={['month', 'day']}
                                        dependField={{
                                            dpnFieldName: 'esIngresoFijo',
                                            cFieldName: 'fechaAnual',
                                            validation: (cv, dv, act) => act(!dv)
                                        }}
                                    />
                                </HideFieldFormik>

                                <HideFieldFormik validation={validationPeriodoSemanal}>
                                    <CustomTextField
                                        select
                                        name="diaSemana"
                                        label="Dia de la semana"
                                        dependField={{
                                            dpnFieldName: 'esIngresoFijo',
                                            cFieldName: 'diaSemana',
                                            validation: (cv, dv, act) => act(!dv)
                                        }}

                                    >

                                        {nombreDias.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}

                                    </CustomTextField>
                                </HideFieldFormik>

                                <HideFieldFormik validation={validationPeriodoDia}>
                                    <CustomTextField
                                        name='diaMes'
                                        label="Dia del mes"
                                        InputProps={{
                                            inputComponent: NumberFormat,
                                            inputProps: {
                                                isAllowed: validationDiaDelMes
                                            }
                                        }}
                                        dependField={{
                                            dpnFieldName: 'esIngresoFijo',
                                            cFieldName: 'diaMes',
                                            validation: (cv, dv, act) => act(!dv)
                                        }}

                                    />
                                </HideFieldFormik>

                            </Stack>

                        </CustomPaper>

                        <CustomPaper elevation={3}>
                            <Stack
                                spacing={3}
                            >
                                <MainTitle component='h1' variant='h6'>Datos legales</MainTitle>

                                <CustomFileField
                                    name="reciboLegal"
                                    label="Cargar Recibo"
                                />

                            </Stack>

                        </CustomPaper>

                        <Stack
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button type='submit' variant='contained'>Guardar</Button>
                        </Stack>
                    </Stack>
                </Form>


            </Formik >


        </Grid >
    )
}
