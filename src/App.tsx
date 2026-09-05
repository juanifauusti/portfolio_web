import ScrollToTop from "./components/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/navbar";
import Hero from "./sections/hero";
import ProjectDetail from "./pages/projectDetail";
import AllProjects from "./pages/allProjects";

function Home() {
  return (
    <div className="app-container">
      <Hero />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
