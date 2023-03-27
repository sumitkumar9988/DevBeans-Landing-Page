// import Home from "pages/Home";
import NotFound from "pages/NotFound";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Main = React.lazy(() => import("pages/Main"));
const Home = React.lazy(() => import("pages/Home"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
