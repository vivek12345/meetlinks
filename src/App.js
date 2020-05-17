import React from "react";
import { Events } from "./components/Events";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="flex w-full" style={{ height: "inherit" }}>
        <div className="w-full" style={{ height: "inherit" }}>
          <Events />
        </div>
      </div>
    </div>
  );
}

export default App;
