// routes.js
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import Error404 from "../pages/errorpage/error404";
import Profile from "../pages/profile";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import BookMarks from "../pages/bookmarks";

const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/:slug" element={<Profile />} />
    <Route path="/messages" element={<Messages />} />
    <Route path="/lists" element={<Lists />} />
    <Route path="/bookmarks" element={<BookMarks />} />

    <Route path="*" element={<Error404 />} />
  </ReactRoutes>
);

export { Routes };
