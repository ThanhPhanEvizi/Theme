import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { COLOR_MODE } from "../constants/color";
import { selectMode } from "../redux/ui/UiSlice";

//import { useSelector } from "react-redux";

const ToggleColorMode = (p: any) => {
  const mode = useSelector(selectMode);

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "5.625rem",
      },
      h2: {
        fontSize: "5rem",
      },
      h3: {
        fontSize: "3.9rem",
      },
      h4: {
        fontSize: "3rem",
      },
      h5: {
        fontSize: "2.5rem",
      },
      h6: {
        fontSize: "2.25rem",
      },
      subtitle1: {
        fontSize: "1.875rem",
      },
      subtitle2: {
        fontSize: "1.45rem",
      },
      body1: {
        fontSize: "1.25rem",
      },
      body2: {
        fontSize: "1rem",
      },
      button: {
        fontSize: "1rem",
      },
      caption: {
        fontSize: "0.875rem",
      },
      overline: {
        fontSize: "0.75rem",
        letterSpacing: "0.03333em",
        lineHeight: "1.66",
        textTransform: "none",
      },
    },
    palette: {
      ...(mode === COLOR_MODE.LIGHT.value
        ? {
            text: {
              primary: "#292828",
            },
            background: {
              default: "#ffffff",
            },
            header: {
              default: "#ff0000",
            },
            footer: {
              default: "#000000",
            },
            quoteBgc: "#ffffff",
            quoteTitle: "#626060",
            quoteBody: "#626060",
            quoteBorder: "#dedede",
            border: "#dedede",
            text_footer: "white",
          }
        : mode === COLOR_MODE.DARK.value
        ? {
            text: {
              primary: "#ffffff",
            },
            background: {
              default: "#292828",
            },
            header: {
              default: "#333333",
            },
            footer: {
              default: "#ededed",
            },
            quoteBgc: "#595959",
            quoteTitle: "#ffffff",
            quoteBody: "#ffffff",
            quoteBorder: "#969696",
            border: "#c7c7c7",
          }
        : mode === COLOR_MODE.BLUE.value
        ? {
            text: {
              primary: "#292828",
            },
            background: {
              default: "#f0fbff",
            },
            header: {
              default: "#add8e6",
            },
            footer: {
              default: "#225a6d",
            },
            quoteBgc: "#ffffff",
            quoteTitle: "#225a6d",
            quoteBody: "#616161",
            quoteBorder: "#dedede",
            border: "#dedede",
          }
        : mode === COLOR_MODE.GREEN.value
        ? {
            text: {
              primary: "#a3f5cc",
            },
            background: {
              default: "#0a5c33",
            },
            header: {
              default: "#084526",
            },
            footer: {
              default: "#a3f5cc",
            },
            quoteBgc: "#5cd699",
            quoteTitle: "#03300a",
            quoteBody: "#082b0e",
            quoteBorder: "#0a5c18",
            border: "#33ffdd",
          }
        : mode === COLOR_MODE.BROWN.value
        ? {
            text: {
              primary: "#333333",
            },
            background: {
              default: "#eba028",
            },
            header: {
              default: "#d99a26",
            },
            footer: {
              default: "#4d3b19",
            },
            quoteBgc: "#ffe666",
            quoteTitle: "#4b402f",
            quoteBody: "#4b3d2f",
            quoteBorder: "#bfaa40",
            border: "#dfbc20",
          }
        : mode === COLOR_MODE.PINK.value
        ? {
            text: {
              primary: "#8f008f",
            },
            background: {
              default: "#f9c8f9",
            },
            header: {
              default: "#ffc2cc",
            },
            footer: {
              default: "#4f404f",
            },
            quoteBgc: "#e3abb4",
            quoteTitle: "#6b246b",
            quoteBody: "#56394c",
            quoteBorder: "#6b246b",
            border: "#c95ec9",
          }
        : {}),
    },
  });

  return <ThemeProvider theme={theme} {...p} />;
};

export default ToggleColorMode;
