import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{main:'#05B6D4',contrastText:'#fff'},
    },
    components:{
        MuiButton:{
            defaultProps:{
                variant:'contained',
                color:'primary'
            },
            styleOverrides:{
                
            }
        }
    }
})
export default theme