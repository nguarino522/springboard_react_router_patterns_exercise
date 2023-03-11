import React from "react";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
