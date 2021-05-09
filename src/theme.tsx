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
      ":root": {
        "--swiper-theme-color": "#FFBA08"
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
      },
      ".swiper-pagination-bullet": {
        backgroundColor: "gray.500",
        width: "12px",
        height: "12px"
      },
      ".swiper-pagination-bullet-active": {
        backgroundColor: "var(--swiper-theme-color)"
      }
    }
  }
})

export default theme
