import { extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: "Poppins",
  body: "Poppins",
}

const theme = extendTheme({
  colors: {
    gray: {
      "800": "#47585B",
      "500": "#999999",
      "300": "#DADADA",
      "50": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08"
    }
  },
  fonts,
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
      },
      "body": {
        backgroundColor: "gray.50",
        color: "gray.800"
      },
      "a": {
        color: "inherit",
        textDecoration: "none"
      },
      "button": {
        cursor: "pointer"
      }
    }
  }
})

export default theme
