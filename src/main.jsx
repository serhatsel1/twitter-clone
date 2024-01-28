import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import "./assets/css/tailwind.css";
import MainLayout from "./layouts/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MainLayout>
      <Routes />
    </MainLayout>
  </Router>
);
