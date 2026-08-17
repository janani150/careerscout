# careerscout

AI-Career-Opportunity-Discovery/
│
├── frontend/                         # React Frontend
│   ├── public/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── JobList.jsx
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── MatchScore.jsx
│   │   │   ├── SkillGap.jsx
│   │   │   └── Loading.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Jobs.jsx
│   │   │   ├── JobDetails.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   └── Applications.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/                          # Flask Backend
│   │
│   ├── app/
│   │   ├── __init__.py
│   │   │
│   │   ├── config/
│   │   │   └── config.py
│   │   │
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   ├── job.py
│   │   │   ├── company.py
│   │   │   ├── resume.py
│   │   │   └── application.py
│   │   │
│   │   ├── routes/
│   │   │   ├── auth_routes.py
│   │   │   ├── user_routes.py
│   │   │   ├── job_routes.py
│   │   │   ├── resume_routes.py
│   │   │   ├── recommendation_routes.py
│   │   │   └── application_routes.py
│   │   │
│   │   ├── services/
│   │   │   ├── resume_service.py
│   │   │   ├── recommendation_service.py
│   │   │   └── application_service.py
│   │   │
│   │   ├── scraper/
│   │   │   ├── base_scraper.py
│   │   │   ├── company_scraper.py
│   │   │   ├── scraper_manager.py
│   │   │   └── cleaners.py
│   │   │
│   │   ├── ai/
│   │   │   ├── resume_parser.py
│   │   │   ├── skill_extractor.py
│   │   │   ├── job_matcher.py
│   │   │   └── skill_gap.py
│   │   │
│   │   ├── utils/
│   │   │   ├── auth.py
│   │   │   ├── validators.py
│   │   │   └── helpers.py
│   │   │
│   │   └── extensions.py
│   │
│   ├── migrations/
│   │
│   ├── tests/
│   │   ├── test_auth.py
│   │   ├── test_jobs.py
│   │   ├── test_scraper.py
│   │   └── test_recommendation.py
│   │
│   ├── requirements.txt
│   ├── run.py
│   └── .env
│
│
├── database/
│   ├── schema.sql
│   └── seed_data.sql
│
├── scraper_data/
│   ├── raw/
│   └── processed/
│
├── docs/                             # Project Report
│   ├── project_report.docx
│   ├── literature_survey/
│   ├── diagrams/
│   │   ├── system_architecture.png
│   │   ├── use_case.png
│   │   ├── er_diagram.png
│   │   ├── data_flow_diagram.png
│   │   └── sequence_diagram.png
│   └── screenshots/
│
├── .gitignore
├── README.md
└── LICENSE
