import { createTheme } from "@mui/material";
import { amber, deepOrange, grey, red } from "@mui/material/colors";

// export const mainTheme = createTheme({
//     palette:{
//         primary:{
//             main:'#262254'
//         },
//         secondary:{
//             main:'#543884'
//         },
//     }
// });

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ?
            {
                // palette values for light mode
                primary: {
                    light: '#757ce8',
                    main: '#3f50b5',
                    dark: '#002884',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                },
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});