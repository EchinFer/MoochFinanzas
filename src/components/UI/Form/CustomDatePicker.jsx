import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useField, useFormikContext } from 'formik';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { dateFormat } from '../../../config';

export const CustomDatePicker = ({ label, dependField = { dpnFieldName: '', cFieldName: '', validation: (cv, dv, act) => { } }, ...props }) => {
    const { values, touched } = useFormikContext();


    const { [dependField.dpnFieldName]: dependValue, [dependField.cFieldName]: currentValue } = values;
    const { [dependField.dpnFieldName]: dependTouched } = touched;

    const [disableField, setDisableField] = useState(false);
    useEffect(() => {

        if (dependField.dpnFieldName != '' && dependField.cFieldName != '') {
            dependField.validation(currentValue, dependValue, setDisableField);
        }

    }, [dependValue, dependTouched, props.name]);

    const [field, meta] = useField(props);
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <DatePicker
                disabled={disableField}
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
