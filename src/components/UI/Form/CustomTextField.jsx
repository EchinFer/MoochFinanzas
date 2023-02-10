import { TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { useState, useEffect } from 'react';

//configurar por prop types
export const CustomTextField = ({ label, dependField = { dpnFieldName: '', cFieldName: '', validation : (cv, dv, act) => { } }, ...props }) => {

    const { values, touched } = useFormikContext();


    const { [dependField.dpnFieldName]: dependValue, [dependField.cFieldName]: currentValue } = values;
    const { [dependField.dpnFieldName]: dependTouched } = touched;

    const [disableField, setDisableField] = useState(false);
    useEffect(() => {

        if(dependField.dpnFieldName != '' && dependField.cFieldName != ''){
            dependField.validation(currentValue, dependValue, setDisableField);
        }

    }, [dependValue, dependTouched, props.name]);

    const [field, meta] = useField(props);


    return (
        <TextField
            disabled={disableField}
            label={label}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : meta.error}
            variant={props.variant ?? 'outlined'}
            {...field}
            {...props}
        />

    );
}




