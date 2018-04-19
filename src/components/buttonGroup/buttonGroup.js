import React from "react";
import PropTypes from "prop-types";
import Button from "../button/button";
import { ButtonGroupRoot, ButtonGroupRow } from "./buttonGroupStyle";

const ButtonGroup = props => {
  var onClick = value => {
    props.onClick(value);
  };

  return (
    <ButtonGroupRoot>
        <ButtonGroupRow>
            <Button name="CE" onClick={onClick} orange />
            <Button name="C" onClick={onClick} wide orange/>
            <Button name="/" onClick={onClick} orange last/>
        </ButtonGroupRow>
        <ButtonGroupRow>
            <Button name="7" onClick={onClick} />
            <Button name="8" onClick={onClick} />
            <Button name="9" onClick={onClick} />
            <Button name="x" onClick={onClick} orange last/>
        </ButtonGroupRow>
        <ButtonGroupRow>
            <Button name="4" onClick={onClick} />
            <Button name="5" onClick={onClick} />
            <Button name="6" onClick={onClick} />
            <Button name="-" onClick={onClick} orange last/>
        </ButtonGroupRow>
        <ButtonGroupRow>
            <Button name="1" onClick={onClick} />
            <Button name="2" onClick={onClick} />
            <Button name="3" onClick={onClick} />
            <Button name="+" onClick={onClick} orange last/>
        </ButtonGroupRow>
        <ButtonGroupRow>
            <Button name="+/-" onClick={onClick} orange />
            <Button name="0" onClick={onClick} />
            <Button name="." onClick={onClick} orange/>
            <Button name="=" onClick={onClick} orange last autofocus/>
        </ButtonGroupRow>
    </ButtonGroupRoot>
  );
};

ButtonGroup.propType = {
  onClick: PropTypes.func
};

export default ButtonGroup;
