import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import "./assets/css/tailwind.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes />
  </Router>
);
