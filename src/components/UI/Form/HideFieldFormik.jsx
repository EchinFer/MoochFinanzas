import { useFormikContext } from "formik"


export const HideFieldFormik = ({ children, validation }) => {
    const { values } = useFormikContext();

    return <>
        {
            validation(values)
                ? children
                : null
        }

    </>
}