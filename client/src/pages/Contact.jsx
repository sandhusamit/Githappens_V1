import { useState } from "react";
import "../styles/Contact.css";
import { newMessage } from "../services/messageService";

const defaultForm = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
  source: "GitHappens Portfolio",
};

export default function Contact() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const payload = {
      sender: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      },
      service: form.service,
      message: form.message,
      source: form.source,
    };

    const response = await newMessage(payload);

    if (response.hasError) {
      setStatus(response.message || "Message failed. Try again.");
      setIsSubmitting(false);
      return;
    }

    setStatus("Message sent successfully.");
    setForm(defaultForm);
    setIsSubmitting(false);
  };

  return (
    <main className="gh-contact-page">
      <section className="gh-contact-hero">
        <p className="gh-contact-kicker">Contact / Collaboration / Opportunities</p>

        <h1>Contact</h1>

        <p>
          Reach out for internships, junior developer roles, collaborations,
          freelance work, technical support, or software project opportunities.
        </p>
      </section>

      <section className="gh-contact-panel">
        <form className="gh-contact-form" onSubmit={handleSubmit}>
          <div className="gh-contact-grid">
            <label>
              First Name
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last Name
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Service / Reason
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select one</option>
                <option value="software-internship">Software Internship</option>
                <option value="junior-developer-role">Junior Developer Role</option>
                <option value="technical-support">Technical Support</option>
                <option value="web-app-development">Web App Development</option>
                <option value="automation">Automation</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="gh-contact-status">{status}</p>}
        </form>
      </section>
    </main>
  );
}