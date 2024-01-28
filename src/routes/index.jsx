// routes.js
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import Error404 from "../pages/errorpage/error404";

const Routes = () => (
  
  <ReactRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/notifications" element={<Notifications />} />

    <Route path="*" element={<Error404 />} />
  </ReactRoutes>
);

export { Routes };
