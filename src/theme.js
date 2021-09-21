import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff00',
      second: '#6ffa6f'
    },
    secondary: {
      main: '#556270',
    },
    error: {
      main: red.A400,
    },
    background: {
        default: '#FFF'
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Raleway'
    ].join(','),
  },
});

export default theme;