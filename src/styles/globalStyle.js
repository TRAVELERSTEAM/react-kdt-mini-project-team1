import { createGlobalStyle } from 'styled-components'
import NotoSansBlack from '~/assets/fonts/NotoSansKR-Black.otf'
import NotoSansBold from '~/assets/fonts/NotoSansKR-Bold.otf'
import NotoSansLight from '~/assets/fonts/NotoSansKR-Light.otf'
import NotoSansMedium from '~/assets/fonts/NotoSansKR-Medium.otf'
import NotoSansRegular from '~/assets/fonts/NotoSansKR-Regular.otf'
import NotoSansThin from '~/assets/fonts/NotoSansKR-Thin.otf'

export default createGlobalStyle`
  @font-face {
    font-family: "NotoSansBlack";
    src: url(${NotoSansBlack}) format('opentype');
  }
  @font-face {
    font-family: "NotoSansBold";
    src: url(${NotoSansBold}) format('opentype');
  }
  @font-face {
    font-family: "NotoSansLight";
    src: url(${NotoSansLight}) format('opentype');
  }
  @font-face {
    font-family: "NotoSansMedium";
    src: url(${NotoSansMedium}) format('opentype');
  }
  @font-face {
    font-family: "NotoSansRegular";
    src: url(${NotoSansRegular}) format('opentype');
  }
  @font-face {
    font-family: "NotoSansThin";
    src: url(${NotoSansThin}) format('opentype');
  }

  * {
  box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    /* rem 값의 기준을 잡기 위함 16px -> 10px */
  }
  
  body {
    margin: 0;
  }

`
