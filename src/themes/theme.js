const theme = {
  typography: {
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    },
    h4: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "500",
    },
    h6: {
      fontWeight: "400",
    },
  },
  overrides: {
    MuiInputBase: {
      inputMultiline: {
        resize: "vertical"
      }
    },
  },
};

export const lightTheme = {
  ...theme,
  palette: {
    type: "light"
  }
};

export const darkTheme = {
  ...theme,
  palette: {
    type: "dark"
  }
};
