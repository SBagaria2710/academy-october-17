import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";
import CounterRedux from "./components/CounterRedux";
import TodoRedux from "./components/TodoRedux";
import UserInfoRedux from "./components/UserInfoRedux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter-redux" element={<CounterRedux />} />
        <Route path="/todo-redux" element={<TodoRedux />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/user-info-redux" element={<UserInfoRedux />} />
        <Route path="*" element={<div>Try different route.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
