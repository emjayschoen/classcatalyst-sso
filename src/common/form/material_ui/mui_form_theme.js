import { createMuiTheme } from '@material-ui/core/styles';
import theme from '../../theme';

// Theme Settings for Material UI Form Helpers

const MuiFormTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.color.primary,
      main: theme.color.primary,
      dark: theme.color.primary,
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiCheckbox: {
      root: {
        padding: '5px',
      },
    },
    MuiFormControlLabel: {
      label: {
        display: 'inline',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '14px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '3px',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '14px',
      },
    },
    MuiSelect: {
      root: {
        borderRadius: '4px',
        border: 'solid 1px #979797',
        fontSize: '14px',
      },
      select: {
        padding: '10px 5px',
      },
      selectMenu: {
        fontSize: '14px',
      },
    },
  },
});

export default MuiFormTheme;
