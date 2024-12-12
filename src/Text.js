import React, { useState } from "react";
import "./text.css";
 

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="🔍"
      />
      {text && (
        <button onClick={clearText} className="clear-button">
          ×
        </button>
      )}
    </div>
  );
}

export default App;
