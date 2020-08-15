import {createMuiTheme} from "@material-ui/core";

// More information available here: https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffe50e"
    },
    secondary: {
      main: "#000"
    }
  },
  typography: {
    h1: {
      fontFamily: '"Reckt", "Open Sans"',
      fontWeight: 500
    }
  }
})

export default theme;