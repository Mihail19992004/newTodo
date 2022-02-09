import { createTheme } from '@material-ui/core/styles';
import '@fontsource/roboto';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#341EFF',
    },
    secondary: {
      main: '#FF6032',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});