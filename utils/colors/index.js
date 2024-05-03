const mainColor = {
  green1: '#0bcad4',
  green2: '#edfcfd',
  dark1: '#000',
  dark2: '#495a75',
  dark3: '#8092af',
  grey1: '#7d8797',
  grey2: '#e9e9e9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  blue2: '#EDFCFD',
  black1: '#000',
  black2: '#00000050',
  red1: '#E06379'
}

export const colors = {
  primary: mainColor.green1,
  secondary: mainColor.dark1,
  tertiary: mainColor.blue1,
  white: 'white',
  black: 'black',
  disabled: mainColor.grey3,
  text: {
    primary: mainColor.dark1,
    secondary: mainColor.grey1,
    inactive: mainColor.dark2,
    active: mainColor.green1,
    subtitle: mainColor.dark3,
    disabled: mainColor.grey4
  },
  button: {
    primary: {
      background: mainColor.green1,
      text: 'white'
    },
    secondary: {
      background: 'white',
      text: mainColor.dark1
    },
    disabled: mainColor.grey3
  },
  border: mainColor.grey2,
  cardLight: mainColor.green2,
  loadingBg: mainColor.black2,
  error: mainColor.red1
}