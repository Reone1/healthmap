import {createGlobalStyle} from 'styled-components';

const globalStyle =  createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    
  }
  html, body {
    height:100%;
    width:100%;
  }

  #root {
    row-gap: 0;
    display: grid;
    height:100%;
    grid-template-rows: 50px auto;
    grid-template-columns: 180px auto;
    gap:0;
    grid-template-areas:
      "nav nav nav nav nav nav"
      "sidebar main main main main main"
  }
`

export default globalStyle