import "./App.css";
import ButtonTheme from "./component/Button-Theme";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { height } from "@mui/system";

function App() {
  const [theme, setTheme] = useState("light");

  if (theme === "light") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <ButtonTheme></ButtonTheme>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
