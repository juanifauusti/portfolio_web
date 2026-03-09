import "./styles/App.css";
import ScrollToTop from "./components/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./sections/hero";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import ProjectDetail from "./pages/projectDetail";
import AllProjects from "./pages/allProjects";

function Home() {
  return (
    <div className="app-container"> 
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;