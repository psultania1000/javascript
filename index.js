import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorld from "./learning/HelloWorld";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <HelloWorld />;
    </>
  );
};

root.render(<App />);
