import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const About = React.lazy(() => import("pages/About"));
const Customers = React.lazy(() => import("pages/Customers"));
const Merchantshifi = React.lazy(() => import("pages/Merchantshifi"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const Landing = React.lazy(() => import("pages/Landing"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/merchantshifi" element={<Merchantshifi />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
