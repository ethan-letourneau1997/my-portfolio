import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
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

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">Ethan Letourneau</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Nav.Link href="#features">
                <span> Home</span>
              </Nav.Link>
              <Nav.Link href="#features">
                <span>Projects</span>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span>About</span>
              </Nav.Link>
            </Nav>
            <div className="lg-px-3 d-flex align-items-center gap-2">
              <span>{isDarkTheme ? "dark" : "light"}</span>
              <ReactSwitch
                onChange={handleToggleTheme}
                checked={isDarkTheme}
                onColor="#222"
                offColor="#aaa"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
