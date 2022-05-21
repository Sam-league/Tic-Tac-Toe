import react from "react";
import { Route, Routes } from "react-router-dom";
import Computer from "./component/Computer";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/game" element={<Dashboard />} />
        <Route path="/vscomputer" element={<Computer />} />
      </Routes>
    </div>
  );
}

export default App;
