import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ReactSwitch from "react-switch";
import "./styles/App.css";
import "./styles/App-light.css";
import "./styles/App-dark.css";

import Home from "./components/Home";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    console.log("isDarkTheme:", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <ReactSwitch
        onChange={handleToggleTheme}
        checked={isDarkTheme}
        onColor="#222"
        offColor="#aaa"
        checkedIcon={false}
        uncheckedIcon={false}
      />
      ;<h4>Hello world.</h4>
      <Home />
    </div>
  );
}

export default App;
