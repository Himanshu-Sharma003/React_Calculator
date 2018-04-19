import React,{Component} from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Display as StyledDisplay,
  StyleDisplaySub
} from "./displayPanelStyle";

//const DisplayPanel = props => {
const DisplayPanel = props => { 
  return (
    <Wrapper>
        <StyleDisplaySub>{(props.stack).join().replace(/,/g," ")}</StyleDisplaySub>
        <StyledDisplay>{props.result}</StyledDisplay>
    </Wrapper>
  );
};

DisplayPanel.propTypes = {
  display: PropTypes.string,
  stack: PropTypes.array
};

export default DisplayPanel;
