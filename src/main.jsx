import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import "./assets/css/tailwind.css";
import MainLayout from "./layouts/main";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Router>
  </Provider>
);
