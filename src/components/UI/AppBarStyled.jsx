import { AppBar, styled } from "@mui/material";



const AppBarStyled = styled(AppBar)(({ theme }) => ({
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
}))

export default AppBarStyled;