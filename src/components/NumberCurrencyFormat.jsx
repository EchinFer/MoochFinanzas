import React from 'react'
import { NumericFormat } from "react-number-format";
import { currency } from '../config';

export const NumberCurrencyFormat = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator ={currency.thousandSeparator}
            decimalScale={currency.decimalScale}
            decimalSeparator={currency.decimalSeparator}
            valueIsNumericString
        />
    );
});