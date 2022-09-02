// reset 또는 공통적으로 사용하는 css
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`

// import reset from 'styled-reset'
// import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//   ${reset}
//   * {
// 	box-sizing: border-box;
//   }
//   body{
// 	font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
//   }
//   a {
// 	color: inherit;
// 	text-decoration: none;
//   }
//   input, button {
// 	background-color: transparent;
// 	border: none;
// 	outline: none;
//   }
//   h1, h2, h3, h4, h5, h6{
// 	font-family:'Maven Pro', sans-serif;
//   }

//   @media only screen and (max-width: 768px) {
// 	body {
// 	  font-size: 12px;
// 	}
//   }

//   @media only screen and (max-width: 576px) {
// 	body {
// 	  font-size: 10px;
// 	}
//   }
// `

// export default GlobalStyle