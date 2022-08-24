// 색상 관련
const palette = {
  primary: '#3F72AF',
  primaryLight: '#DBE2EF',
  primaryDark: '#112D4E',

  backGround: '#F9F7F7',

  black: '#000000',
  white: '#FFF',
}

// 레이아웃 관련
const common = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexColumnStart: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
}

// font 관련
const fontSizes = {
  title: '2.5rem',
  subtitle: '2rem',

  inputText: '1.8rem',
  buttonText: '1.8rem',

  bigParagraph: '1.8rem',
  paragraph: '1.6rem',
  smallParagraph: '1.4rem',

  inputErrorMessage: '1.4rem',
}
const fontWeight = {
  bold: 800,
  medium: 700,
  normal: 400,
}

// 지정해둔 값 내보내기
const theme = {
  palette,
  common,
  fontSizes,
  fontWeight,
}

export default theme
