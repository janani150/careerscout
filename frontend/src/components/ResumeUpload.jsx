import { useState } from "react";

export default function ResumeUpload() {
  const [resumeName, setResumeName] = useState(
    "Elena_Vance_Staff_AI_Product_Designer.pdf",
  );
  const [version, setVersion] = useState("v4.2");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      setTimeout(() => {
        setResumeName(file.name);
        setVersion("v4.3 (Latest)");
        setUploading(false);
      }, 1000);
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">
            description
          </span>
          <h3 className="font-bold text-primary text-base">Master Resume</h3>
        </div>
        <span className="text-xs bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-0.5 rounded-full font-bold">
          Active
        </span>
      </div>

      <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-error-container/40 text-error flex items-center justify-center font-bold text-xs flex-shrink-0">
            PDF
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-on-surface truncate max-w-[180px]">
              {resumeName}
            </span>
            <span className="text-[11px] text-on-surface-variant">
              {version} • Updated 2 days ago • 2.4 MB
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert(`Opening preview for ${resumeName}`);
          }}
          className="px-3 py-2 rounded-lg border border-outline-variant/60 text-xs font-semibold text-on-surface hover:bg-surface-container-low transition-colors text-center flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">
            visibility
          </span>
          View PDF
        </a>

        <label className="px-3 py-2 rounded-lg bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary text-xs font-semibold cursor-pointer transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm">
          <span className="material-symbols-outlined text-[16px]">
            {uploading ? "sync" : "upload_file"}
          </span>
          {uploading ? "Parsing..." : "Upload New"}
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
