import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{main:'#038096',contrastText:'#fff'},
        //#05B6D4
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