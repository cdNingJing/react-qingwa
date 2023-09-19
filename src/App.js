import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./coms/Home"

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App