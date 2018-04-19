import styled from 'styled-components'
import styleVars from "../../style/global";

export const Wrapper = styled.div`
  background-color: ${styleVars.color.lightGrey};
  color: ${styleVars.color.black};;
  text-align: right;
  font-weight: 500;
  flex: 0 0 auto;
  width: 100%;
  border-radius: 7px;
  margin-bottom:5px;
  height:20%;
`

export const Display = styled.div`
  font-size: 25px;
  padding: 8px 4px 8px 4px;
`

export const StyleDisplaySub = styled.div`
    font-size: 17px;
    text-align:right;
    padding: 20px 8px 0px 0px;
    border-width: 0px;
    height:50px;
    background-color: ${styleVars.color.lightGrey};
    border-radius: 7px;
`