import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ searchQuery = "", setSearchQuery }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      text: "Stripe reviewed your application dossier",
      time: "10m ago",
      unread: true,
    },
    {
      id: 2,
      text: "New 96% AI Match found: Senior AI Product Designer",
      time: "1h ago",
      unread: true,
    },
    {
      id: 3,
      text: "Skill Analysis update: +4% match boost available",
      time: "3h ago",
      unread: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface-container-lowest border-b border-primary-fixed/40 shadow-[0_1px_8px_rgba(74,59,105,0.04)] z-50 flex items-center justify-between px-6">
      {/* Brand Logo & Tag */}
      <div className="flex items-center gap-3 w-60">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-bold flex items-center justify-center text-lg shadow-sm">
            <span className="material-symbols-outlined text-[20px]">
              auto_awesome
            </span>
          </div>
          <span className="font-bold text-xl text-primary tracking-tight font-sans">
            CareerScout
          </span>
          <span className="bg-secondary-container text-on-secondary-container font-semibold text-xs px-2 py-0.5 rounded-full">
            AI
          </span>
        </Link>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-md mx-auto hidden md:flex items-center">
        <div className="relative w-full max-w-[360px] mx-auto">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              if (setSearchQuery) setSearchQuery(e.target.value);
              if (window.location.pathname !== "/jobs") {
                navigate("/jobs");
              }
            }}
            placeholder="Search jobs, companies, skills..."
            className="w-full h-10 pl-10 pr-4 bg-surface rounded-lg border border-outline-variant/60 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all"
          />
        </div>
      </div>

      {/* User & Notifications Section */}
      <div className="flex items-center gap-4 relative">
        {/* Notifications Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
            title="Notifications"
          >
            <span className="material-symbols-outlined text-[22px]">
              notifications
            </span>
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-error text-on-error text-[10px] leading-tight rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-surface-container-lowest border border-primary-fixed/40 rounded-xl shadow-lg p-4 z-50">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-3">
                <h4 className="font-semibold text-primary text-sm">
                  Notifications
                </h4>
                <span className="text-xs text-secondary font-medium cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                    <div className="flex flex-col flex-1">
                      <p className="text-xs text-on-surface leading-snug">
                        {n.text}
                      </p>
                      <span className="text-[10px] text-on-surface-variant mt-1">
                        {n.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-[1px] bg-outline-variant/60"></div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 focus:outline-none"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
              alt="Elena Vance Profile"
              className="w-9 h-9 rounded-full object-cover ring-1 ring-primary-fixed"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-semibold text-on-surface leading-none">
                Elena Vance
              </span>
              <span className="text-xs text-on-surface-variant mt-0.5">
                Product Designer
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
              expand_more
            </span>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-surface-container-lowest border border-primary-fixed/40 rounded-xl shadow-lg p-2 z-50">
              <Link
                to="/profile"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  person
                </span>
                View Profile
              </Link>
              <Link
                to="/settings"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  settings
                </span>
                Preferences & Settings
              </Link>
              <div className="h-[1px] bg-outline-variant/30 my-1"></div>
              <Link
                to="/login"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-error hover:bg-error-container/30 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  logout
                </span>
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
