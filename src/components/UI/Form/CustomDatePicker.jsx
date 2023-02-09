import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useField } from 'formik';
import moment from 'moment';
import React from 'react'
import { dateFormat } from '../../../config';

export const CustomDatePicker = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <DatePicker
                label={label}
                openTo={props.openTo ?? "year"}
                inputFormat={props.inputFormat ?? dateFormat.simple}
                views={props.views ?? ['year', 'month', 'day']}
                renderInput={(params) => <TextField {...params} helperText={params?.inputProps?.placeholder} />}
                {...field}
                {...props}
                value={moment(field.value, dateFormat.simple)}
                onChange={(value) => {
                    field.onChange(props.name)(value.format(dateFormat.simple));
                }}
            />

        </LocalizationProvider>
    )
}
