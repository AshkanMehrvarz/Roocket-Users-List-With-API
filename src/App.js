import { NextUIProvider, createTheme } from "@nextui-org/react";
import * as React from "react";
import MainComponent from "./components/MainComponent";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      background: "#03132d",
      text: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

export default function App() {
  return (
    <NextUIProvider theme={myDarkTheme}>
      <MainComponent />
    </NextUIProvider>
  );
}
