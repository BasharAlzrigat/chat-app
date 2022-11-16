import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  components: {
    Button: {
      // styles for the `body`
      variants: {
        joinRoom: {
          boxShadow: "dark-lg",
          w: "225px",
          h: "50px",
          margin: "5",
          border: "1px solid rgba(0, 0, 0, 0.443)",
          borderRadius: "5px",
          padding: "5px",
          fontSize: "16px",
          bg: "#6653bb",
          color: "#fff",
          cursor: "pointer",
          _hover: {
            bg: "#585FEE",
            color: "white",
          },
        },
        sendMessage: {
          border: "0",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          flex: "15%",
          h: "100%",
          bg: "transparent",
          outline: "none",
          fontSize: "25px",
          color: "lightgray",
          _hover:{
            color: "#5F4BB6",
          }
        },
      },
    },
  },
  colors: {
    lightPurple: "#9a72ca",
    heavyPurple: "#585FEE",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
