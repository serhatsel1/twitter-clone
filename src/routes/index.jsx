// routes.js
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Anasayfa = () => <div>Anasayfa</div>;
const ExploreComponent = () => <div>Explore Componenti</div>;
const NotificationsComponent = () => <div>Bildirimler Componenti</div>;

const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Anasayfa />} />
    <Route path="/explore" element={<ExploreComponent />} />
    <Route path="/notifications" element={<NotificationsComponent />} />
  </ReactRoutes>
);

export { Routes };
