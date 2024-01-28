import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes />
  </Router>
);
