import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import Dashboard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import Recommendation from "../pages/Recommendation";
import Application from "../pages/Application";
import Resume from "../pages/Resume";
import SkillAnalysis from "../pages/SkillAnalysis";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface antialiased">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar />
      <div className="pl-0 md:pl-60">
        <main className="w-full pt-20 px-4 md:px-8 bg-surface min-h-[calc(100vh-4rem)]">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/recommendations" element={<Recommendation />} />
            <Route path="/applications" element={<Application />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skill-analysis" element={<SkillAnalysis />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
