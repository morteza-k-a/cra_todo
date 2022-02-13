import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{main:'#05B6D4',contrastText:'#fff'},
    },
    breakpoints:{

    },
    components:{
        MuiButton:{
            defaultProps:{
                variant:'contained',
                color:'primary'
            },
        }
    }
})
export default theme