import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';
import { useField } from 'formik';
import React from 'react'

export const CustomCheckBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (

        <FormGroup>
            <FormControlLabel
                control={<Checkbox
                    checked={field.value}
                    {...field}
                    {...props}
                />}
                label={label}
            />
            {
                meta.touched && meta.error
                    ? <FormHelperText>{meta.error}</FormHelperText>
                    : null
            }

        </FormGroup>


    );
}