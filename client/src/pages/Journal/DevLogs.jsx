import "../../styles/DevLogs.css";
import DevLogCard from "../../components/DevLogCard";
import { useDevLogs } from "../../contexts/DevLogContext";

export default function DevLogs() {
  const { devLogs, loading, error } = useDevLogs();

  if (loading) {
    return <p className="gh-devlog-message">Loading dev logs...</p>;
  }

  if (error) {
    return <p className="gh-devlog-message">{error}</p>;
  }

  return (
    <main className="gh-devlog-page">
      <section className="gh-devlog-hero">
        <p className="gh-devlog-kicker">Engineering Journal / Build Logs</p>

        <h1>Dev Log</h1>

        <p>
          A collection of build notes, debugging sessions, lessons learned, and
          engineering decisions from the systems being developed under
          GitHappens.
        </p>
      </section>

      <div className="gh-devlog-grid">
        {devLogs.map((log) => (
          <DevLogCard key={log._id || log.slug} log={log} />
        ))}
      </div>
    </main>
  );
}