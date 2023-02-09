import { TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React from 'react'
import { useEffect } from 'react';

export const CustomTextField = ({ label, dependFields, ...props }) => {

    const {
        values: { esIngresoFijo },
        touched,
        setFieldValue,
    } = useFormikContext();

    const [field, meta] = useField(props);


    let disabled = false;
    useEffect(() => {
        disabled = !esIngresoFijo;
    }, [esIngresoFijo, touched.esIngresoFijo, setFieldValue, props.name]);
    
    return (
        <TextField

            disabled = {disabled}
            label={label}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : meta.error}
            variant={props.variant ?? 'outlined'}
            {...field}
            {...props}
        />

    );
}




