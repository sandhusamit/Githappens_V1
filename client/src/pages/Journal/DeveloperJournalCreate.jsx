import { useState } from "react";
import "../../styles/DeveloperJournal.css";

// Hooks
import { useAuth } from "../../contexts/AuthContext";

const defaultForm = {
  title: "",
  slug: "",
  category: "build-log",
  project: "StudyZone",
  date: "",
  durationMinutes: 0,
  focusArea: "",
  tags: "",
  objective: "",
  problemTrigger: "",
  conceptsLearned: "",
  whatHappened: "",
  outcome: "",
  reusablePatterns: [{ title: "", description: "", codeSnippet: "", language: "" }],
  mistakes: "",
  watchOutForNextTime: "",
  canBeAppliedAgainIn: "",
  studyZoneQuiz: {
    created: false,
    quizId: "",
    quizTitle: "",
    questionTypes: [],
    notes: "",
  },
  reflection: "",
  nextSteps: "",
  links: [{ label: "", url: "" }],
  energyLevel: 5,
  difficultyRating: 5,
  confidenceBefore: 5,
  confidenceAfter: 5,
  visibility: "private",
  isPublished: false,
  publicSummary: "",
  needsReview: false,
  reviewDate: "",
  status: "draft",
};

export default function DeveloperJournalCreate() {
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState("");

  const { handleCreateJournalEntry } = useAuth();

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateNested = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const toArray = (value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const updatePattern = (index, field, value) => {
    setForm((prev) => {
      const updated = [...prev.reusablePatterns];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, reusablePatterns: updated };
    });
  };

  const addPattern = () => {
    setForm((prev) => ({
      ...prev,
      reusablePatterns: [
        ...prev.reusablePatterns,
        { title: "", description: "", codeSnippet: "", language: "" },
      ],
    }));
  };

  const removePattern = (index) => {
    setForm((prev) => ({
      ...prev,
      reusablePatterns: prev.reusablePatterns.filter((_, i) => i !== index),
    }));
  };

  const updateLink = (index, field, value) => {
    setForm((prev) => {
      const updated = [...prev.links];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, links: updated };
    });
  };

  const addLink = () => {
    setForm((prev) => ({
      ...prev,
      links: [...prev.links, { label: "", url: "" }],
    }));
  };

  const removeLink = (index) => {
    setForm((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index),
    }));
  };

  const toggleQuestionType = (type) => {
    const current = form.studyZoneQuiz.questionTypes;

    const updated = current.includes(type)
      ? current.filter((item) => item !== type)
      : [...current, type];

    updateNested("studyZoneQuiz", "questionTypes", updated);
  };

  const handleTitleChange = (value) => {
    updateField("title", value);

    if (!form.slug) {
      updateField("slug", generateSlug(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      slug: form.slug || generateSlug(form.title),
      tags: toArray(form.tags),
      conceptsLearned: toArray(form.conceptsLearned),
      mistakes: toArray(form.mistakes),
      watchOutForNextTime: toArray(form.watchOutForNextTime),
      canBeAppliedAgainIn: toArray(form.canBeAppliedAgainIn),
      nextSteps: toArray(form.nextSteps),
      reusablePatterns: form.reusablePatterns.filter((p) => p.title.trim()),
      links: form.links.filter((l) => l.label.trim() && l.url.trim()),
      studyZoneQuiz: {
        ...form.studyZoneQuiz,
        quizId: form.studyZoneQuiz.quizId || null,
      },
      reviewDate: form.reviewDate || null,
      date: form.date || new Date(),
    };

    console.log("Journal payload:", payload);

    await handleCreateJournalEntry(payload);

    setMessage("Journal entry payload ready. Check console.");
  };

  return (
    <main className="journal-page">
      <section className="journal-hero">
        <p className="journal-kicker">Developer Memory Core</p>
        <h1>Developer Journal</h1>
        <p>
          Capture build logs, debugging stories, lessons learned, reusable
          patterns, mistakes, and project progress.
        </p>
      </section>

      <form className="journal-form" onSubmit={handleSubmit}>
        <section className="journal-card">
          <h2>Entry Setup</h2>

          <div className="journal-grid">
            <label>
              Title
              <input
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Fixing StudyZone matrix validation"
                required
              />
            </label>

            <label>
              Slug
              <input
                value={form.slug}
                onChange={(e) => updateField("slug", e.target.value)}
                placeholder="fixing-studyzone-matrix-validation"
              />
            </label>

            <label>
              Category
              <select
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
              >
                <option value="build-log">Build Log</option>
                <option value="debugging">Debugging</option>
                <option value="learning">Learning</option>
                <option value="architecture">Architecture</option>
                <option value="deployment">Deployment</option>
                <option value="reflection">Reflection</option>
              </select>
            </label>

            <label>
              Project
              <select
                value={form.project}
                onChange={(e) => updateField("project", e.target.value)}
              >
                <option>StudyZone</option>
                <option>Mortana</option>
                <option>GitHappens</option>
                <option>Broken Raj</option>
                <option>Research Highlighter</option>
                <option>Portfolio</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Date
              <input
                type="date"
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </label>

            <label>
              Duration Minutes
              <input
                type="number"
                min="0"
                value={form.durationMinutes}
                onChange={(e) =>
                  updateField("durationMinutes", Number(e.target.value))
                }
              />
            </label>
          </div>
        </section>

        <section className="journal-card">
          <h2>Core Log</h2>

          <label>
            Focus Area
            <input
              value={form.focusArea}
              onChange={(e) => updateField("focusArea", e.target.value)}
              placeholder="React state, validation, deployment, auth..."
            />
          </label>

          <label>
            Tags
            <input
              value={form.tags}
              onChange={(e) => updateField("tags", e.target.value)}
              placeholder="React, MongoDB, Debugging, Matrix"
            />
          </label>

          <label>
            Objective
            <textarea
              value={form.objective}
              onChange={(e) => updateField("objective", e.target.value)}
              placeholder="What were you trying to accomplish?"
            />
          </label>

          <label>
            Problem Trigger
            <textarea
              value={form.problemTrigger}
              onChange={(e) => updateField("problemTrigger", e.target.value)}
              placeholder="What caused this session?"
            />
          </label>

          <label>
            Concepts Learned
            <textarea
              value={form.conceptsLearned}
              onChange={(e) => updateField("conceptsLearned", e.target.value)}
              placeholder="Comma-separated: validation, state updates, schema design"
            />
          </label>

          <label>
            What Happened
            <textarea
              value={form.whatHappened}
              onChange={(e) => updateField("whatHappened", e.target.value)}
              placeholder="Explain the work clearly."
            />
          </label>

          <label>
            Outcome
            <textarea
              value={form.outcome}
              onChange={(e) => updateField("outcome", e.target.value)}
              placeholder="What changed by the end?"
            />
          </label>
        </section>

        <section className="journal-card">
          <div className="journal-row-title">
            <h2>Reusable Patterns</h2>
            <button type="button" onClick={addPattern}>
              + Pattern
            </button>
          </div>

          {form.reusablePatterns.map((pattern, index) => (
            <div className="journal-nested-card" key={index}>
              <div className="journal-grid">
                <label>
                  Pattern Title
                  <input
                    value={pattern.title}
                    onChange={(e) =>
                      updatePattern(index, "title", e.target.value)
                    }
                    placeholder="Axios API instance"
                  />
                </label>

                <label>
                  Language
                  <input
                    value={pattern.language}
                    onChange={(e) =>
                      updatePattern(index, "language", e.target.value)
                    }
                    placeholder="JavaScript"
                  />
                </label>
              </div>

              <label>
                Description
                <textarea
                  value={pattern.description}
                  onChange={(e) =>
                    updatePattern(index, "description", e.target.value)
                  }
                  placeholder="Why is this reusable?"
                />
              </label>

              <label>
                Code Snippet
                <textarea
                  className="code-textarea"
                  value={pattern.codeSnippet}
                  onChange={(e) =>
                    updatePattern(index, "codeSnippet", e.target.value)
                  }
                  placeholder="Paste reusable code here..."
                />
              </label>

              {form.reusablePatterns.length > 1 && (
                <button
                  type="button"
                  className="journal-danger"
                  onClick={() => removePattern(index)}
                >
                  Remove Pattern
                </button>
              )}
            </div>
          ))}
        </section>

        <section className="journal-card">
          <h2>Mistakes & Reuse</h2>

          <label>
            Mistakes
            <textarea
              value={form.mistakes}
              onChange={(e) => updateField("mistakes", e.target.value)}
              placeholder="Comma-separated mistakes"
            />
          </label>

          <label>
            Watch Out For Next Time
            <textarea
              value={form.watchOutForNextTime}
              onChange={(e) =>
                updateField("watchOutForNextTime", e.target.value)
              }
              placeholder="Comma-separated watch-outs"
            />
          </label>

          <label>
            Can Be Applied Again In
            <textarea
              value={form.canBeAppliedAgainIn}
              onChange={(e) =>
                updateField("canBeAppliedAgainIn", e.target.value)
              }
              placeholder="StudyZone, Mortana, GitHappens"
            />
          </label>
        </section>


        <section className="journal-card">
          <div className="journal-row-title">
            <h2>Links</h2>
            <button type="button" onClick={addLink}>
              + Link
            </button>
          </div>

          {form.links.map((link, index) => (
            <div className="journal-grid" key={index}>
              <label>
                Label
                <input
                  value={link.label}
                  onChange={(e) => updateLink(index, "label", e.target.value)}
                  placeholder="GitHub commit"
                />
              </label>

              <label>
                URL
                <input
                  value={link.url}
                  onChange={(e) => updateLink(index, "url", e.target.value)}
                  placeholder="https://..."
                />
              </label>

              {form.links.length > 1 && (
                <button
                  type="button"
                  className="journal-danger inline-danger"
                  onClick={() => removeLink(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </section>

        <section className="journal-card">
          <h2>Reflection & Publishing</h2>

          <label>
            Reflection
            <textarea
              value={form.reflection}
              onChange={(e) => updateField("reflection", e.target.value)}
              placeholder="What was the bigger lesson?"
            />
          </label>

          <label>
            Next Steps
            <textarea
              value={form.nextSteps}
              onChange={(e) => updateField("nextSteps", e.target.value)}
              placeholder="Comma-separated next steps"
            />
          </label>

          <label>
            Public Summary
            <textarea
              value={form.publicSummary}
              onChange={(e) => updateField("publicSummary", e.target.value)}
              placeholder="Safe public-facing version of the entry."
            />
          </label>

          <div className="journal-grid">
            <label>
              Energy
              <input
                type="number"
                min="1"
                max="10"
                value={form.energyLevel}
                onChange={(e) =>
                  updateField("energyLevel", Number(e.target.value))
                }
              />
            </label>

            <label>
              Difficulty
              <input
                type="number"
                min="1"
                max="10"
                value={form.difficultyRating}
                onChange={(e) =>
                  updateField("difficultyRating", Number(e.target.value))
                }
              />
            </label>

            <label>
              Confidence Before
              <input
                type="number"
                min="1"
                max="10"
                value={form.confidenceBefore}
                onChange={(e) =>
                  updateField("confidenceBefore", Number(e.target.value))
                }
              />
            </label>

            <label>
              Confidence After
              <input
                type="number"
                min="1"
                max="10"
                value={form.confidenceAfter}
                onChange={(e) =>
                  updateField("confidenceAfter", Number(e.target.value))
                }
              />
            </label>

            <label>
              Visibility
              <select
                value={form.visibility}
                onChange={(e) => updateField("visibility", e.target.value)}
              >
                <option value="private">Private</option>
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
              </select>
            </label>

            <label>
              Status
              <select
                value={form.status}
                onChange={(e) => updateField("status", e.target.value)}
              >
                <option value="draft">Draft</option>
                <option value="completed">Completed</option>
                <option value="review-needed">Review Needed</option>
                <option value="archived">Archived</option>
              </select>
            </label>

            <label>
              Review Date
              <input
                type="date"
                value={form.reviewDate}
                onChange={(e) => updateField("reviewDate", e.target.value)}
              />
            </label>
          </div>

          <label className="journal-check">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => updateField("isPublished", e.target.checked)}
            />
            Publish this entry?
          </label>

          <label className="journal-check">
            <input
              type="checkbox"
              checked={form.needsReview}
              onChange={(e) => updateField("needsReview", e.target.checked)}
            />
            Needs review later?
          </label>
        </section>

        <button className="journal-submit" type="submit">
          Save Developer Journal Entry
        </button>

        {message && <p className="journal-message">{message}</p>}
      </form>
    </main>
  );
}