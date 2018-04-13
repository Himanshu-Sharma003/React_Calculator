import {css} from 'styled-components'

const styleVars = {
  screen: {
    desktop: (...args) => css`
      @media screen and (min-width: 980px) {
        ${css(...args)};
      }
    `,
    laptop: (...args) => css`
      @media screen and (min-width: 768px) {
        ${css(...args)};
      }
    `,
    tablet: (...args) => css`
      @media screen and (min-width: 480px) {
        ${css(...args)};
      }
    `
  },

  color: {
    grey: "#ceced2", //#E0E0E0
    lightGrey: "#CCCCCC",
    white: "#fff",
    black: "#000",
    green: "#008a02",
    orange: "#F5923E",
    border:"#131010"
  }
};

export default styleVars;
