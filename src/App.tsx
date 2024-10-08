import React, { Suspense } from "react";
import TodoList from "./components/TodoList";
import ChangeNameContainer from "./components/ChangeNameContainer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PreLoadComponent from "./components/PreLoadComponent";

/**
 * @see https://react.dev/blog/2024/04/25/react-19
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
              <Link to="/use">use</Link>
              <Link to="/useOptimistic">useOptimistic</Link>
            </div>
          }
        />
        <Route
          path="/use"
          element={
            <Suspense>
              <TodoList />
            </Suspense>
          }
        />
        <Route path="/useOptimistic" element={<ChangeNameContainer />} />
        <Route
          path="/support"
          element={
            <div>
              <link rel="stylesheet" href="foo" />
              <script async={true} src="..." />
            </div>
          }
        />
        <Route path="/preload" element={<PreLoadComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
