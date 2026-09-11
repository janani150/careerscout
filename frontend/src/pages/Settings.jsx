import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("AI Scout");
  const [autoApply, setAutoApply] = useState(false);
  const [confidentialMode, setConfidentialMode] = useState(true);
  const [matchThreshold, setMatchThreshold] = useState(85);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const tabs = [
    "AI Scout",
    "Account & Profile",
    "Notifications",
    "Privacy & Security",
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-12">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-primary">
            Preferences & Settings
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Manage your AI agent scouting parameters, privacy controls, and
            account settings.
          </p>
        </div>
        <button
          onClick={() => alert("Settings saved successfully!")}
          className="px-4 py-2 rounded-lg bg-secondary text-on-primary text-xs font-bold shadow-sm hover:bg-on-secondary-fixed-variant transition-all flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">save</span>
          Save Preferences
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-outline-variant/30 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
              activeTab === tab
                ? "border-secondary text-secondary"
                : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Settings Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* AI Scout Configuration Card */}
          <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                auto_awesome
              </span>
              <h2 className="text-base font-bold text-primary">
                AI Scout Parameters
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-primary">
                  Target Job Titles & Roles
                </label>
                <input
                  type="text"
                  defaultValue="Senior AI Product Designer, Lead UX Strategist, Staff Interaction Designer"
                  className="w-full h-10 px-3 bg-surface rounded-lg border border-outline-variant/60 font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/40"
                />
              </div>

              <div className="flex flex-col gap-2 bg-surface-container-low border border-primary-fixed/40 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">
                    Minimum Auto-Scout Match Threshold
                  </span>
                  <span className="font-extrabold text-secondary text-sm">
                    {matchThreshold}%+
                  </span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="95"
                  value={matchThreshold}
                  onChange={(e) => setMatchThreshold(Number(e.target.value))}
                  className="w-full accent-secondary cursor-pointer"
                />
                <span className="text-[11px] text-on-surface-variant">
                  Only notify and surface opportunities that meet or exceed this
                  match score.
                </span>
              </div>

              {/* Toggles */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-outline-variant/30 bg-surface">
                <div className="flex flex-col">
                  <span className="font-bold text-primary">
                    Confidential Candidate Mode
                  </span>
                  <span className="text-on-surface-variant text-[11px]">
                    Hide your current employer name and contact info until you
                    accept an interview invite.
                  </span>
                </div>
                <button
                  onClick={() => setConfidentialMode(!confidentialMode)}
                  className={`w-10 h-6 rounded-full p-0.5 transition-colors flex items-center ${
                    confidentialMode
                      ? "bg-secondary justify-end"
                      : "bg-outline-variant justify-start"
                  }`}
                >
                  <div className="w-5 h-5 bg-on-secondary rounded-full shadow-sm"></div>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-outline-variant/30 bg-surface">
                <div className="flex flex-col">
                  <span className="font-bold text-primary">
                    1-Click Auto-Apply Assistance
                  </span>
                  <span className="text-on-surface-variant text-[11px]">
                    Allow AI scout to pre-fill resume dossiers for top 95%+
                    matches automatically.
                  </span>
                </div>
                <button
                  onClick={() => setAutoApply(!autoApply)}
                  className={`w-10 h-6 rounded-full p-0.5 transition-colors flex items-center ${
                    autoApply
                      ? "bg-secondary justify-end"
                      : "bg-outline-variant justify-start"
                  }`}
                >
                  <div className="w-5 h-5 bg-on-secondary rounded-full shadow-sm"></div>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-outline-variant/30 bg-surface">
                <div className="flex flex-col">
                  <span className="font-bold text-primary">
                    Instant Email & In-App Alerts
                  </span>
                  <span className="text-on-surface-variant text-[11px]">
                    Receive instant notifications when new 90%+ match roles are
                    scouted.
                  </span>
                </div>
                <button
                  onClick={() => setEmailAlerts(!emailAlerts)}
                  className={`w-10 h-6 rounded-full p-0.5 transition-colors flex items-center ${
                    emailAlerts
                      ? "bg-secondary justify-end"
                      : "bg-outline-variant justify-start"
                  }`}
                >
                  <div className="w-5 h-5 bg-on-secondary rounded-full shadow-sm"></div>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Info Box (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-primary-fixed/20 border border-primary-fixed/60 rounded-xl p-5 shadow-sm flex flex-col gap-3 text-xs">
            <span className="font-bold text-primary flex items-center gap-1.5 text-sm">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                security
              </span>
              Data Protection & Privacy
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              CareerScout AI encrypts all candidate dossier parameters using
              enterprise-grade zero-trust privacy standards. Your profile data
              is never sold to third-party brokers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
