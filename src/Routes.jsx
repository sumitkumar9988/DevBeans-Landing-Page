import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Main = React.lazy(() => import("pages/Main"));
const Home = React.lazy(() => import("pages/Home"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
