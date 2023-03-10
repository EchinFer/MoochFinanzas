import moment from "moment";
import { dateFormat } from "./config";
import * as Yup from 'yup';
import { MAX_LIMIT_DAYS_MONTH } from "./constants";

//COMUN
export const tiposPeriodo = [
    "Semanal",
    "Quincenal",
    "Mensual",
    "Anual"
];
export const nombreDias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

export const etiquetas = [
    "Prestamo",
    "Tupi",
    "Personal",
];

//INGRESO
export const ingresosValoresIniciales =
{
    nombre: '', monto: "", descripcion: "", esIngresoFijo: false, tipoPeriodo: "Semanal",
    fechaAnual: moment(new Date(), dateFormat.simple), diaSemana: "Domingo", diaMes: 1, facturaLegal: undefined
};

export const schemaIngresos = Yup.object({
    nombre: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Required'),
    monto: Yup.number()
        .max(9999999999, 'El valor super el limite de 9999999999')
        .required('Required'),
    descripcion: Yup.string(),
    esIngresoFijo: Yup.boolean(),
    tipoPeriodo: Yup.string(),
    fechaAnual: Yup.string(),
    diaSemana: Yup.string(),
    diaMes: Yup.number()
        .max(MAX_LIMIT_DAYS_MONTH, `El valor super el limite de ${MAX_LIMIT_DAYS_MONTH}`),
    facturaLegal: Yup.string(),
})

//GASTOS
export const gastosValoresIniciales =
{
    nombre: '', monto: "", descripcion: "", etiqueta: 0, gastoBumeran: false, esGastoFijo: false, tipoPeriodo: "Semanal",
    fechaAnual: moment(new Date(), dateFormat.simple), diaSemana: "Domingo", diaMes: 1,
    cuotas: '', reciboLegal: undefined
};

export const schemaGastos = Yup.object({
    nombre: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Required'),
    monto: Yup.number()
        .max(9999999999, 'El valor super el limite de 9999999999')
        .required('Required'),
    etiqueta: Yup.string(),
    descripcion: Yup.string(),
    gastoBumeran: Yup.boolean(),
    esGastoFijo: Yup.boolean(),
    tipoPeriodo: Yup.string(),
    fechaAnual: Yup.string(),
    diaSemana: Yup.string(),
    diaMes: Yup.number()
        .max(MAX_LIMIT_DAYS_MONTH, `El valor super el limite de ${MAX_LIMIT_DAYS_MONTH}`),
    cuotas: Yup.number(),
    reciboLegal: Yup.string(),
})