import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Container from "./Container";
import AgentRegister from "./AgentRegister";
import AgentEdit from "./AgentEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route index element={<Dashboard />} />
            <Route path="agent-register" element={<AgentRegister />} />
            <Route path="agent-edit" element={<AgentEdit/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

