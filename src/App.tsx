import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./sections/hero";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import ProjectDetail from "./pages/projectDetail";
import AllProjects from "./pages/allprojects";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;