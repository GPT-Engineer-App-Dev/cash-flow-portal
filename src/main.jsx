import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: "#fff1e5", // Financial Times background color
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.background};
          }
        `}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);