//style and data
import "../../styles/Projects.css";
import { projects } from "../../data/projects.js";
//components
import ProjectCard from "../../components/ProjectCard.jsx";




export default function Projects() {
  return (
    <main className="gh-projects-page">
      <section className="gh-projects-hero">
        <p className="gh-projects-kicker">Systems / Products / Experiments</p>
        <h1>Projects</h1>
        <p>
          A growing collection of software systems, tools, and game projects
          built under the GitHappens banner.
        </p>
      </section>

      <div className="gh-projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}