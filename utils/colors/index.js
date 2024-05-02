const mainColor = {
  green1: '#0bcad4',
  green2: '#edfcfd',
  dark1: '#000',
  dark2: '#495a75',
  grey1: '#7d8797',
  grey2: '#e9e9e9'
}

export const colors = {
  primary: mainColor.green1,
  secondary: mainColor.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColor.dark1,
    secondary: mainColor.grey1,
    inactive: mainColor.dark2,
    active: mainColor.green1,
  },
  button: {
    primary: {
      background: mainColor.green1,
      text: 'white'
    },
    secondary: {
      background: 'white',
      text: mainColor.dark1
    }
  },
  border: mainColor.grey2,
  cardLight: mainColor.green2
}