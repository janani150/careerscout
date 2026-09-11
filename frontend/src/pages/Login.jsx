import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("elena.vance@example.com");
  const [password, setPassword] = useState("••••••••••••");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-8 shadow-lg flex flex-col gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary font-bold flex items-center justify-center text-2xl shadow-md">
            <span className="material-symbols-outlined text-[28px]">
              auto_awesome
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-primary tracking-tight">
            CareerScout AI
          </h1>
          <p className="text-xs text-on-surface-variant">
            Sign in to discover AI-matched career opportunities
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-primary">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 px-3 bg-surface rounded-lg border border-outline-variant/60 font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="font-bold text-primary">Password</label>
              <a
                href="#"
                className="text-secondary font-semibold hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-11 px-3 bg-surface rounded-lg border border-outline-variant/60 font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 mt-2 bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary font-bold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Sign In to Scout Dashboard</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </form>

        <p className="text-center text-xs text-on-surface-variant">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-secondary font-bold hover:underline"
          >
            Create Free Candidate Dossier
          </Link>
        </p>
      </div>
    </div>
  );
}
