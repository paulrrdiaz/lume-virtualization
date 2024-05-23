import { extendTheme } from "@chakra-ui/react";

import fonts from "./fonts";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: fonts.raleway.style.fontFamily,
    body: fonts.roboto.style.fontFamily,
  },
});

export default theme;
