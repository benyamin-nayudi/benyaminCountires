import React, { useState } from "react";

// css
import "./header.css";

// main react component
function Header(props) {
  const [mode, setMode] = useState(true);

  const handleMode = () => {
    setMode(() => !mode);
  };

  return (
    <div className="header-container">
      <div className="logo">Where in the World?</div>
      <div className="dark-mode" onClick={() => handleMode()}>
        <i className={`fas fa-${mode ? "moon" : "sun"}`}></i>
        <span className="mode">{mode ? "dark mode" : "light mode"}</span>
      </div>
    </div>
  );
}

export default Header;
