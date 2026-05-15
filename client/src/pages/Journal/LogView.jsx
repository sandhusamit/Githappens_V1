import { Link, useParams } from "react-router-dom";
import "../../styles/LogView.css";
import { useDevLogs } from "../../contexts/DevLogContext";
import DevLogDetailCard from "../../components/DevLogDetailCard";

export default function LogView() {
  const { slug } = useParams();
  const { findLog, loading, error } = useDevLogs();

  if (loading) {
    return <p className="gh-devlog-message">Loading dev log...</p>;
  }

  if (error) {
    return <p className="gh-devlog-message">{error}</p>;
  }

  const log = findLog(slug);

  if (!log) {
    return (
      <main className="gh-devlog-page">
        <section className="gh-devlog-hero">
          <h1>Dev Log Not Found</h1>
          <p>The journal entry you are looking for does not exist.</p>

          <Link to="/devlog" className="gh-devlog-back">
            Back to Dev Log
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="gh-devlog-page">
      <Link to="/devlog" className="gh-devlog-back">
        ← Back to Dev Log
      </Link>

      <DevLogDetailCard log={log} />
    </main>
  );
}