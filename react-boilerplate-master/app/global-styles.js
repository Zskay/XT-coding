import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Dosis', sans-serif;
  line-height: 1.6;
  color: #666;
  background: #F6F6F6;
}

#root {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  padding: 1.5rem 2.5rem;
  background-image: linear-gradient(120deg, #A8B7FC 0%, #032FFA 100%);
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  color: white;
}

img {
  display: block;
  margin: 1rem auto;
  max-width: 100%;
}

p {
  padding: 0 2.5rem 2.5rem;
  margin: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 1rem;
  background: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
  border-radius: 12px;
  overflow: hidden;
  transition: all .2s linear;
}

.card:hover {
  box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
  transform: translate3D(0, -2px, 0);
}

@media screen and (min-width: 600px) {
  .card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media screen and (min-width: 900px) {
  .card {
    flex: 1 1 calc(33% - 2rem);
  }
}

.card:nth-child(2n) h1 {
  background-image: linear-gradient(120deg, #71EEF2 0%, #0FC9CF 100%);
}

.card:nth-child(4n) h1 {
  background-image: linear-gradient(120deg, #D29FF1 0%, #9812E9 100%);
}

.card:nth-child(5n) h1 {
  background-image: linear-gradient(120deg, #B8C17F 0%, #96AB00 100%);
}
`;

export default GlobalStyle;
