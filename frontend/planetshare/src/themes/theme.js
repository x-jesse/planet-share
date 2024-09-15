import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const green = "#31A37F";
const lightGreen = "#BEDD9A";
const darkBlue = "#2B4F70";
const darkerBlue = "#085492";
const errorLight = "#eb5757";
const errorDark = "#b51919";
const lightGrey = "#4F4F4F";

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: lightGreen,
    },
    success: {
      main: "#2e7d32",
    },
    error: {
      main: errorLight,
    },
    info: {
      main: "#0288d1",
    },
    warning: {
      main: "#ed6c02",
    },
    background: {
      default: "#F3F9FF",
    },
    yellow: {
      main: "#FDCE63",
    },
    red: {
      main: "#FD6F62",
    },
    text: {
      main: "#1E1E1E",
    },
    lightGrey: {
      main: lightGrey,
    },
    errorDark: {
      main: errorDark,
    },
  },
  typography: {
    fontFamily: "Raleway, Arial, sans-serif",
    fontSize: 16,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: "2.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "100%",
    },
    h2: {
      fontSize: "1.875rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.3",
    },
    h3: {
      fontFamily: "Raleway, sans-serif",
      fontSize: "1.5625rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    body: {
      fontFamily: "Raleway, sans-serif",
    },

    overline: {
      color: darkBlue,
      textTransform: "none",
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1.8rem",
          borderWidth: "0.15rem",
          padding: "0.25rem 2rem",
          boxShadow: "none",
          textTransform: "none",
          "&:hover, &:focus": {
            borderWidth: "0.15rem",
            boxShadow: "none",
            color: green,
            border: `0.15rem solid ${lightGreen}`,
            background: lightGreen,
          },
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background: "#ffffff",
            border: `0.15rem solid #ffffff`,
            color: green,
            "&:hover": {
              color: green,
              border: `0.15rem solid ${lightGreen}`,
              background: lightGreen,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: `0.15rem solid #ffffff`,
            color: common.white,
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0E6BA8",
          textDecoration: "underline",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "10px 12px 24px 0px rgba(206, 222, 238, 0.47)",
        },
      },
      variants: [
        {
          props: { variant: "elevation", elevation: 24 },
          style: {
            borderRadius: "1.25rem",
            boxShadow: "10px 12px 24px 0px rgba(161, 175, 189, 0.5)",
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&[data-darker='true'] [aria-invalid='true']": {
            borderColor: errorDark,
          },
          "&[data-darker='true'] [aria-invalid='true']:focus": {
            outline: `0.15rem solid ${errorDark}`,
          },
          input: {
            background: "white",
            borderRadius: "1em",
            "&[aria-invalid='true']": {},
            "&:focus": {
              outline: `0.15rem solid ${darkerBlue}`,
            },
            "& + .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "100%",
          background: common.white,
          borderRadius: "0.625em",
          "&:hover": {
            background: "#F3F9FF",
          },
          "& .MuiSelect-icon": {
            stroke: darkBlue,
            strokeWidth: 2,
          },
          ".MuiChip-root": {
            borderRadius: "0.3em",
          },
          "&.signup-select.MuiOutlinedInput-root": {
            "& fieldset": {},
            "&:hover fieldset": {},
            "&.Mui-focused fieldset": {},
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "0.15em 0",
          ".error, .description": {
            display: "block",
            margin: "0.1em 0",
          },
          ".error": {
            color: errorLight,
          },
          '&[data-darker="true"]': {
            ".MuiSvgIcon-root, .error": {
              color: errorDark,
            },
            ".description": {
              color: "black",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          boxShadow: "0.625rem 0.75rem 1.5rem 0 rgba(206, 222, 238, 0.5)",
          textAlign: "left",
          ".MuiCardHeader-root, .MuiCardContent-root, .MuiCardActions-root": {
            padding: "0 1rem 0",
            margin: "1.25rem 0",
          },
          "&:focus-within, &:hover": {
            boxShadow: "0.625rem 1rem 2rem 0 rgba(206, 222, 238, 0.75)",
          },
        },
      },
      variants: [
        {
          props: { className: "default-card" },
          style: {
            maxWidth: "32rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            ".card-image": {
              flex: "0 0 auto",
            },
            ".card-content-wrap": {
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            ".MuiCardActions-root": {
              marginTop: 0,
            },
          },
        },
        {
          props: { className: "full-width-card" },
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            maxWidth: "66rem",
            "& > .MuiCardMedia-root.padded, & > .card-image": {
              flexBasis: "50%",
              margin: "1rem 0.5rem 1rem 1rem",
            },
            "& > .card-content-wrap": {
              flexBasis: "50%",
            },
          },
        },
        {
          props: { className: "logo-card" },
          style: {
            display: "flex",
            flexDirection: "column",
            paddingBottom: "1.75rem",
            flex: "1 1 auto",
            ".card-content-wrap": {
              flex: "0 1 75%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            ".MuiSvgIcon-fontSizeMedium": {
              fontSize: "unset",
              marginRight: "0.75rem",
            },
            ".MuiCardMedia-root, .MuiCardMedia-root.padded": {
              width: "100%",
              height: "auto",
              flex: "0 0 auto",
            },
          },
        },
      ],
    },
  },
});

export default theme;
