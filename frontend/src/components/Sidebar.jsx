import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "home" },
    { path: "/jobs", label: "Browse Jobs", icon: "work", count: "1.2k" },
    {
      path: "/applications",
      label: "My Applications",
      icon: "check_circle",
      countBadge: "4",
    },
    {
      path: "/recommendations",
      label: "Recommendations",
      icon: "lightbulb",
      aiBadge: "95%",
    },
    { path: "/resume", label: "My Resume", icon: "description" },
    { path: "/skill-analysis", label: "Skill Analysis", icon: "track_changes" },
    { path: "/profile", label: "Profile", icon: "person" },
    { path: "/settings", label: "Settings", icon: "settings" },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-60 bg-surface-container-lowest border-r border-primary-fixed/40 z-40 flex flex-col justify-between p-4 hidden md:flex">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                isActive
                  ? "bg-primary-fixed/30 text-secondary border-l-4 border-secondary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>

            {item.count && (
              <span className="text-xs font-semibold bg-surface-container text-on-surface px-2 py-0.5 rounded-full">
                {item.count}
              </span>
            )}
            {item.countBadge && (
              <span className="text-xs font-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">
                {item.countBadge}
              </span>
            )}
            {item.aiBadge && (
              <span className="text-xs bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded-full flex items-center gap-0.5 font-semibold">
                <span className="material-symbols-outlined text-[12px]">
                  auto_awesome
                </span>
                {item.aiBadge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Career Readiness Widget */}
      <div className="bg-surface-container-low border border-primary-fixed/60 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-primary font-bold">
            Career Readiness
          </span>
          <span className="text-xs text-secondary font-bold">92%</span>
        </div>
        <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-secondary rounded-full"
            style={{ width: "92%" }}
          ></div>
        </div>
        <NavLink
          to="/settings"
          className="inline-block text-xs text-secondary hover:text-on-secondary-container underline underline-offset-2 transition-colors font-medium"
        >
          Update Preferences
        </NavLink>
      </div>
    </aside>
  );
}
