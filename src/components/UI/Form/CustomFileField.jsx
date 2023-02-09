import { Button, TextField } from '@mui/material';
import { useField } from 'formik';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'

export const CustomFileField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (

        <Button variant={props.variant ?? "contained"} component="label" color={props.color ?? "primary"} startIcon={props.startIcon ?? <AddCircleIcon />}>
            {label}
            <input type="file" hidden {...field} {...props} />
        </Button>

    );
}




