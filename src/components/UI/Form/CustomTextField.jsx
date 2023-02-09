import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react'
import { useEffect } from 'react';

export const CustomTextField = ({ label, dependFields = {}, onChangeDependField = undefined, ...props }) => {

    const {
        values: { ...dependFields },
        touched,
        setFieldValue,
    } = useFormikContext();

    const [field, meta] = useField(props);

    useEffect(() => {
        // set the value of textC, based on textA and textB
        if (
            textA.trim() !== '' &&
            textB.trim() !== '' &&
            touched.textA &&
            touched.textB
        ) {
            setFieldValue(props.name, `textA: ${textA}, textB: ${textB}`);
        }
    }, [textB, textA, touched.textA, touched.textB, setFieldValue, props.name]);

    return (

        <TextField

            label={label}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : meta.error}
            variant={props.variant ?? 'outlined'}
            {...field}
            {...props}
        />

    );
}




