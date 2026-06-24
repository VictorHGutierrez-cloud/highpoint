import { useState, useEffect } from "react";
import { X, BarChart3, Users, CalendarOff, Wallet, TrendingUp } from "lucide-react";

const REPORTS = [
  { icon: TrendingUp, title: "Workforce Analytics", category: "People Analytics", gradient: "from-[hsl(347,80%,25%)] to-[hsl(347,60%,12%)]" },
  { icon: BarChart3, title: "Department Costing", category: "Finance & HR", gradient: "from-[hsl(184,70%,22%)] to-[hsl(184,50%,10%)]" },
  { icon: CalendarOff, title: "Leave & Absences", category: "Payroll Prep", gradient: "from-[hsl(37,80%,28%)] to-[hsl(37,60%,14%)]" },
  { icon: Users, title: "Employee Directory", category: "Core HR", gradient: "from-[hsl(210,50%,25%)] to-[hsl(210,40%,12%)]" },
  { icon: Wallet, title: "Compensation & Payroll", category: "Sage 50 Sync", gradient: "from-[hsl(160,50%,22%)] to-[hsl(160,40%,10%)]" },
];

export function ReportsGallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {REPORTS.slice(0, 3).map((r, i) => (
          <ReportCard key={i} report={r} onClick={() => setOpenIdx(i)} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6 max-w-[1100px] mx-auto w-full">
        {REPORTS.slice(3, 5).map((r, i) => (
          <ReportCard key={i + 3} report={r} onClick={() => setOpenIdx(i + 3)} />
        ))}
      </div>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-12 animate-in fade-in duration-200"
          onClick={() => setOpenIdx(null)}
        >
          <button
            className="absolute top-8 right-8 w-16 h-16 border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx(null);
            }}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className="max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-[960px] max-w-full aspect-[16/10] bg-gradient-to-br ${REPORTS[openIdx].gradient} border border-white/20 flex flex-col items-center justify-center gap-6 p-12`}
            >
              {(() => {
                const Icon = REPORTS[openIdx].icon;
                return <Icon size={80} className="text-white/80" />;
              })()}
              <p className="text-white/70 text-[24px] font-light text-center max-w-lg">
                Live dashboards and AI-built reports — exportable for ownership, B-BBEE, and ISO audits.
              </p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-[20px] tracking-[0.25em] uppercase mb-2">
                {REPORTS[openIdx].category}
              </p>
              <p className="text-white text-[36px] font-light">{REPORTS[openIdx].title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ReportCard({
  report,
  onClick,
}: {
  report: (typeof REPORTS)[number];
  onClick: () => void;
}) {
  const Icon = report.icon;
  return (
    <button
      onClick={onClick}
      className="group border border-foreground/15 bg-background/40 overflow-hidden text-left hover:border-foreground/40 hover:shadow-xl transition-all duration-300"
    >
      <div className={`aspect-[16/10] overflow-hidden bg-gradient-to-br ${report.gradient} flex items-center justify-center`}>
        <Icon size={64} className="text-white/70 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-[18px] tracking-[0.2em] uppercase opacity-50 mb-2">{report.category}</p>
        <p className="text-[26px] font-light leading-tight">{report.title}</p>
      </div>
    </button>
  );
}
