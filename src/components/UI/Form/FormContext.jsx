import { Form, useFormikContext } from 'formik'
import { createContext } from 'react';

export const FormFormikContext = createContext({});
export const FormContext = ({ children, ...props }) => {

    const { isSubmitting } = useFormikContext();

    const formStates = {
        isDisabledFields: isSubmitting
    }


    return (
        <FormFormikContext.Provider value={formStates}>
            <Form {...props}>
                {children}
            </Form>
        </FormFormikContext.Provider>
    )
}
