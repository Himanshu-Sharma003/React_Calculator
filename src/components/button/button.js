import React from "react";
import PropTypes from "prop-types";
import {Wrapper,Button as StyleButton} from './buttonStyle'

const Button = props => {
  var onClick = value => {
    props.onClick(props.name);
  };

  return (
    <Wrapper wide={props.wide}>
      <StyleButton orange={props.orange} type="button" onClick={onClick} last={props.last}>
        {props.name}
      </StyleButton>
    </Wrapper>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  orange : PropTypes.bool
};

export default Button;
