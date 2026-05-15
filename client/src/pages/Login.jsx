// Libraries
import { Link } from "react-router-dom";
//Style
import "../styles/Login.css";
//Assets
import GH_Logo from "../assets/GH_Logo.png";
//Hooks
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


export default function Login() {
    //Hooks and States
    const { handleLogin } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password,
        };
        handleLogin(formData);
    };
    


  return (
    <main className="gh-login-page">
      <section className="gh-login-card">
        <div className="gh-login-brand">
          <img src={GH_Logo} alt="GitHappens" />
          <div>
            <p>GitHappens Admin</p>
            <h1>Welcome Back</h1>
          </div>
        </div>

        <p className="gh-login-subtitle">
          Access the studio dashboard, blog tools, and project management systems.
        </p>

        <form onSubmit={handleSubmit} className="gh-login-form">
          <label>
            Email
            <input type="email" placeholder="you@githappens.ca" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          <button type="submit" className="gh-login-btn">
            Sign In
          </button>
        </form>

        <div className="gh-login-footer">
          <Link to="/">Back to Home</Link>
          <Link to="/contact">Need access?</Link>
        </div>
      </section>
    </main>
  );
}