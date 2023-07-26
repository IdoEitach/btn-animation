import { Button, ButtonGroup } from "@mui/material";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

type btnProps = {} & Partial<typeof defaultProps>;
const defaultProps = {
  firstSymbol: "☼",
  secondSymbol: "☽",
  startingTheme: "light",
  buttonActiveColorDark: "rgb(53, 5, 50)",
  buttonActiveColorLight: "rgb(233, 230, 147)",
  textActiveColorDark: "white",
  textActiveColorLight: "black",
  containerStyle: {
    height: "5%",
    width: "15%",
    justifyContent: "center",
  } as React.CSSProperties,
};

function ButtonTheme(propsIn: btnProps) {
  const props = { ...defaultProps, ...propsIn };
  const [isFirstBtnDis, setFirstBtnDis] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setFirstBtnDis(!isFirstBtnDis);
    setTheme(!isFirstBtnDis ? "light" : "dark");
  };

  return (
    <div style={{ height: "100%" }}>
      <ButtonGroup style={props.containerStyle}>
        <Button
          style={{
            height: "100%",
            width: "50%",
            color:
              theme === "light"
                ? props.textActiveColorDark
                : props.textActiveColorLight,
            backgroundColor: props.buttonActiveColorLight,
            borderColor:
              theme === "light"
                ? props.buttonActiveColorLight
                : props.buttonActiveColorDark,
          }}
          disabled={isFirstBtnDis}
          onClick={handleClick}
          variant="contained"
        >
          <LightModeIcon></LightModeIcon>
        </Button>
        <Button
          style={{
            height: "100%",
            width: "50%",
            backgroundColor: props.buttonActiveColorDark,
            color:
              theme === "dark"
                ? props.textActiveColorDark
                : props.textActiveColorLight,
            borderColor:
              theme === "light"
                ? props.buttonActiveColorDark
                : props.buttonActiveColorLight,
          }}
          disabled={!isFirstBtnDis}
          onClick={handleClick}
          variant="contained"
        >
          <NightsStayIcon></NightsStayIcon>
        </Button>
      </ButtonGroup>
    </div>
  );
}
export default ButtonTheme;
