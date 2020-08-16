import { createGlobalStyle } from 'styled-components';
import colors from '../utils/colors';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html, body, #root {
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
  background: ${colors.background};
}
button, input, body{
  font: 14px 'Roboto', sans-serif;
}
a{
  text-decoration: none;
}
ul {
  list-style: none;
}

button{
  cursor: pointer;
}

`;
