import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  styles: {
    global: {
      html: {
        height: '100%'
      },
      body: {
        backgroundColor: '#FAFAFE',
        height: '100%'
      }
    }
  },
  fonts: {
    heading: 'Quicksand',
    body: 'Quicksand'
  },
  colors: {
    orange: '#F9A109',
    lightOrange: '#FFF0DE',
    bordeau: '#80485B',
    lightBlue: '#56CCF2',
    red: '#EB5757',
    lightGray: '#C1C1C4',
    darkGrey: '#828282',
  },
  components: {
    Button: {
      variants: {
        iconButton: {
          bg: 'orange',
          color: 'white'
        }
      }
    }
  }
})