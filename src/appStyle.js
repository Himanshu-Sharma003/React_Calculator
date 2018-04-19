import styled from "styled-components";
import styleVars from "./style/global"
export const Container = styled.div`
  height: 630px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: sans-serif;
  ${styleVars.screen.desktop`
      width: 30%;
      margin: 0 auto;
   `}
`;