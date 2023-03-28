import Main2 from "pages/Main";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ProjectRoutes = () => {
  return (
    // <React.Suspense >
    <Router>
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // </React.Suspense>
  );
};
export default ProjectRoutes;
