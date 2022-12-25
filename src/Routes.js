import React from "react";
import FrameOne from "pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrameOne />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
