import styled from "styled-components";
import styleVars from "../../style/global";

export const Wrapper = styled.div`
  display: inline-flex;
  width: ${props => (props.wide ? "50%" : "25%")};
  flex: 1 0 auto;
`;

export const Button = styled.button`
  background-color: ${props => (props.orange ? "#F5923E" : "#E0E0E0")};
  color: ${props => (props.orange ? "#fff" : "#000")};
  border: 0;
  width: 20%;
  font-size: 20px;
  flex: 1 0 auto;
  padding: 0;
  font-size: 25px;
  font-weight: 900;
  border-radius: 7px;
  margin-left: 13px;
  margin-top: 10px;
  margin-right: ${props => (props.last ? "13px" : "0px")};
  :active {
    background-color: #ccc9c9;
    transform: translateY(4px);
  }
`;
