import { Routes, Route } from "react-router-dom";
//context
import { DevLogProvider } from "../contexts/DevLogContext";

//layouts
import DevLogLayout from "../layout/DevLogLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Projects from "../pages/projectPages/Projects";
import About from "../pages/About";
import DeveloperJournalCreate from "../pages/Journal/DeveloperJournalCreate";
import DevLogs from "../pages/Journal/DevLogs";
import LogView from "../pages/Journal/LogView";
import Project from "../pages/projectPages/Project";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

// Components
import NavBar from "../components/NavBar";
import ProtectRoute from "./ProtectRoute";


const MainRouter = () => {
  return (
    <>
      <NavBar />

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devlogentry" element={<DeveloperJournalCreate />} />

          <Route path="/devlog" element={<DevLogLayout />}>
            <Route index element={<DevLogs />} />
            <Route path=":slug" element={<LogView />} />
          </Route>

          <Route path="/projects/:slug" element={<Project />} />
        </Routes>
      </main>
    </>
  );
};

export default MainRouter;
