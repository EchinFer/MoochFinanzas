import moment from "moment";

export const MAX_LIMIT_DAYS_MONTH = 31;

export const rangesDatepicker = [
    {
        name: "Hoy",
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        name: "Ayer",
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        name: "Últimos 7 días",
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        name: "Este mes",
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        name: "Mes pasado",
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        name: "Personalizado",
        range: {
            start: moment(),
            end: moment()
        }
    },
];