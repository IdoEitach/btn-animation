import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

type btnProps = {} & Partial<typeof defaultProps>;
const defaultProps = {
  firstSymbol: "☼",
  secondSymbol: "☽",
  containerStyle: {
    height: "30px",
    width: "60px",
    backgroundColor: "black",
  } as React.CSSProperties,
};
function ButtonTheme(propsIn: btnProps) {
  const props = { ...defaultProps, ...propsIn };
  const [isFirstBtnDis, setFirstBtnDis] = useState(true);

  const handleClick = () => {
    setFirstBtnDis(!isFirstBtnDis);
  };
  return (
    <ButtonGroup>
      <Button
        disabled={isFirstBtnDis}
        onClick={handleClick}
        variant="contained"
      >
        {props.firstSymbol}
      </Button>
      <Button
        disabled={!isFirstBtnDis}
        onClick={handleClick}
        variant="contained"
      >
        {props.secondSymbol}
      </Button>
    </ButtonGroup>
  );
}
export default ButtonTheme;
