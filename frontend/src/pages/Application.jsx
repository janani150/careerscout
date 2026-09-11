import { Link } from "react-router-dom";

export default function Application() {
  const applications = [
    {
      id: 1,
      company: "Stripe",
      role: "Senior Product Designer",
      status: "In Review",
      date: "Applied 2 days ago",
      match: "96%",
      salary: "$165k-$195k",
    },
    {
      id: 2,
      company: "Linear",
      role: "Principal UI Designer",
      status: "Interview Scheduled",
      date: "Oct 24, 10:00 AM",
      match: "91%",
      salary: "$170k-$210k",
    },
    {
      id: 3,
      company: "Notion",
      role: "AI UX Lead",
      status: "Screening Done",
      date: "Applied 1 week ago",
      match: "87%",
      salary: "$190k-$240k",
    },
    {
      id: 4,
      company: "Figma",
      role: "Staff Interaction Designer",
      status: "Application Sent",
      date: "Applied 3 weeks ago",
      match: "88%",
      salary: "$170k-$205k",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-12">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-primary">
            My Applications (4)
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Track your submitted dossiers, interview schedules, and recruiter
            communications.
          </p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 border border-outline-variant/30 rounded-xl bg-surface hover:bg-surface-container-low transition-colors flex-wrap gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold text-base flex items-center justify-center">
                {app.company.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary text-sm">
                  {app.company}
                </span>
                <span className="text-xs text-on-surface-variant">
                  {app.role} • {app.salary}
                </span>
                <span className="text-[10px] text-on-surface-variant/80 mt-0.5">
                  {app.date}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full font-bold">
                ✨ {app.match} Match
              </span>
              <span className="text-xs bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full font-bold">
                {app.status}
              </span>
              <Link
                to="/jobs/stripe-sr-designer"
                className="text-xs text-secondary hover:underline font-bold"
              >
                View Dossier
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
