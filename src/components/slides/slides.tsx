import { Fragment, ReactNode } from "react";
import {
  Check,
  X,
  AlertTriangle,
  Shield,
  Server,
  Brain,
  Lock,
  Globe,
  Cpu,
  Database,
  Cloud,
  Fingerprint,
  Wifi,
  FileText,
  Eye,
  BarChart3,
  Zap,
  Link2,
  Video,
  Award,
  Rocket,
  Users,
  Building2,
  Calendar,
  Mail,
  Clock,
} from "lucide-react";
import { DEFAULT_VALUES } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";
import { ReportsGallery } from "./ReportsGallery";

const d = DEFAULT_VALUES;
const factorialMensal = d.totalColaboradores * d.custoColaboradorMes_EUR;
const mensalRecorrente = factorialMensal;
const implantacao = d.implantacaoFactorial_EUR;
const mes1Total = implantacao + factorialMensal;

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  gradient: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] tracking-[0.25em] uppercase opacity-80 mb-8 font-bold text-primary-foreground">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[80px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[36px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);

export const slides: SlideData[] = [
  // ─── 1. COVER ───────────────────────────────────────────
  {
    id: "cover",
    title: "Welcome",
    summary: "Partnership proposal — A new era in people management for High Point Group",
    icon: <FileText size={24} />,
    gradient: "from-[hsl(347,100%,20%)] to-[hsl(347,80%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">
          High Point Group
        </h1>
        <p className="opacity-80 font-light mb-6 text-6xl">
          A new era in people management
        </p>
        <p className="opacity-60 font-light text-3xl">
          Freeing finance leaders from manual HR — and giving the owner real-time visibility across four businesses
        </p>
        <div className="mt-16 flex items-center gap-16">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
              <span className="text-[24px] font-light">F</span>
            </div>
            <div>
              <p className="opacity-70 text-4xl">Victor Gutierrez</p>
              <p className="text-[18px] opacity-75">Account Executive, Africa · Factorial</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
              <span className="text-[24px] font-light">P</span>
            </div>
            <div>
              <p className="opacity-70 text-4xl">Paolo Urzi</p>
              <p className="text-[18px] opacity-75">Regional Manager, Southern Africa · Factorial</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 2. TIMELINE ──────────────────────────────────────
  {
    id: "timeline",
    title: "High Point Group",
    summary: "From two businesses to four — engineering, steel, manufacturing and mining across South Africa",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(200,40%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The Journey</SectionLabel>
        <SlideTitle>From two workshops to a multi-site industrial group</SlideTitle>
        <div className="relative mt-4">
          <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-white/20" />
          <div className="grid grid-cols-5 gap-4">
            {[
              { year: "Start", label: "Two businesses", desc: "Engineering & steel — Gauteng roots", highlight: false },
              { year: "Growth", label: "Four entities", desc: "Separate legal companies, one group mindset", highlight: false },
              { year: "Cape Town", label: "Market expansion", desc: "Head office focus — workshops & production", highlight: false },
              { year: "Today", label: "Multi-site ops", desc: "Mining, service centre, production & finance", highlight: false },
              { year: "2026", label: "Next chapter", desc: "Night shifts, ISO, B-BBEE & digital HR", highlight: true },
            ].map((item) => (
              <div key={item.year} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10 ${item.highlight ? "bg-white text-primary" : "border-white/40 bg-primary border-2 font-bold text-3xl"}`}>
                  <span className={`text-[16px] font-bold ${item.highlight ? "" : "opacity-90"}`}>{item.year}</span>
                </div>
                <h4 className={`font-bold mb-2 opacity-90 ${item.highlight ? "text-white text-[18px]" : "text-3xl"}`}>{item.label}</h4>
                <p className={`leading-snug ${item.highlight ? "text-[14px] opacity-90" : "opacity-80 font-bold text-primary-foreground bg-primary text-xl"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-14 border-t border-white/15 pt-8">
          {[
            { stat: "4", label: "Affiliated companies" },
            { stat: "~100", label: "Employees group-wide" },
            { stat: "2 provinces", label: "Cape Town · Gauteng" },
            { stat: "Cash-built", label: "Workshops & production capacity" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[42px] font-light">{s.stat}</p>
              <p className="text-[16px] opacity-75 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 3. 2026 — NEXT SCALE ─────────────────────────────
  {
    id: "next-scale",
    title: "2026: The Right Moment",
    summary: "ISO audit, B-BBEE cycle, night shifts and owner visibility — HR must scale now",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(160,60%,15%)] to-[hsl(200,50%,10%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The Moment Is Now</SectionLabel>
        <SlideTitle>You scaled the business. Now scale how you manage people.</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-6">
          <div>
            <p className="text-[24px] opacity-75 leading-[1.8] mb-8">
              High Point grew from two to four businesses — building workshops, entering Cape Town, and expanding into mining and service operations. All of this <strong className="opacity-100">without an integrated HR platform</strong>.
            </p>
            <p className="text-[24px] opacity-75 leading-[1.8] mb-8">
              2026 brings real pressure: <strong className="opacity-100">ISO audit with Howden</strong>, the <strong className="opacity-100">B-BBEE certificate cycle</strong>, and <strong className="opacity-100">day + night production shifts</strong> coming online.
            </p>
            <p className="text-[24px] opacity-75 leading-[1.8]">
              The owner is highly involved but often remote. He needs <strong className="opacity-100">mobile dashboards, instant communication, and audit-ready documents</strong> — not printed timesheets and paper forms.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border border-white/15 p-8">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-4">Until now</p>
              <div className="space-y-4">
                {[
                  "UniClocks printed and re-keyed manually",
                  "Elani & Werner doing HR on top of finance",
                  "No leave system — paper forms only",
                  "Documents on servers and filing cabinets",
                ].map((item) => (
                  <p key={item} className="text-[20px] opacity-65 flex items-center gap-3">
                    <X size={18} className="opacity-75 shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="border border-white/25 bg-white/5 p-8">
              <p className="text-[16px] opacity-75 uppercase tracking-widest mb-4">From 2026 onward</p>
              <div className="space-y-4">
                {[
                  "One cloud HR platform across four entities",
                  "Payroll prep in hours — not days",
                  "Owner visibility from any mobile device",
                  "Native Sage 50 sync · UniClocks compatible",
                ].map((item) => (
                  <p key={item} className="text-[20px] opacity-90 flex items-center gap-3">
                    <Check size={18} className="opacity-70 shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 4. CONTEXT — OVERVIEW ────────────────────────────
  {
    id: "context-overview",
    title: "Case: High Point Group",
    summary: "Four legal entities, ~100 employees — finance leaders think strategically but tools keep them in manual mode",
    icon: <Eye size={24} />,
    gradient: "from-[hsl(347,60%,25%)] to-[hsl(347,50%,12%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Context</SectionLabel>
        <SlideTitle>Current landscape</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              High Point operates as <strong className="opacity-100">four separate registered companies</strong> managed as one group — not a formal group structure, but one management team running everything together.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              Approximately <strong className="opacity-100">~100 employees</strong>: ~50 in Cape Town (head office & production), ~30 in mining, ~15 in the service centre, and ~40 in Werner&apos;s Gauteng operations.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              Elani and Werner lead finance and payroll — but with limited back-office headcount, they absorb <strong className="opacity-100">manual HR work that should be automated</strong>.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "🏭", title: "Engineering & steel", desc: "Production workshops with complex costing via Sage 200." },
              { icon: "⛏️", title: "Mining operations", desc: "Variable shifts and driver routes — hard to track in generic systems." },
              { icon: "🔧", title: "Service centre", desc: "Field teams with non-fixed hours and separate clocking rules." },
              { icon: "📋", title: "ISO compliance", desc: "Werner's entity audited by Howden — document traceability is critical." },
              { icon: "📱", title: "Owner involvement", desc: "Silent partner, highly engaged — needs mobile reporting, not monthly PDFs." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[30px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[19px] opacity-60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ─── 5. CURRENT TOOLS ─────────────────────────────────
  {
    id: "context-tools",
    title: "Current Tools",
    summary: "Pastel Payroll, Sage 200, UniClocks and paper — where each one falls short",
    icon: <AlertTriangle size={24} />,
    gradient: "from-[hsl(37,80%,25%)] to-[hsl(37,60%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Diagnosis</SectionLabel>
        <SlideTitle>What you use today — and where it hurts</SlideTitle>
        <div className="grid grid-cols-4 gap-8 mt-6">
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">PP</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">Pastel Payroll</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">Payroll</p>
              </div>
            </div>
            <p className="text-[19px] opacity-70 leading-relaxed mb-6">
              Solid payroll engine — but receives data manually from everywhere else.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              {["No HR layer upstream", "Timesheets typed in by hand", "No leave or document sync", "Four entities, four manual flows"].map((l) => (
                <p key={l} className="text-[17px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">S2</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">Sage 200 Evolution</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">Finance & costing</p>
              </div>
            </div>
            <p className="text-[19px] opacity-70 leading-relaxed mb-6">
              Strong for stock and job costing — stays as your ERP. No HR integration needed.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              {["Salary journals entered manually", "No workforce analytics", "Separate from clocking data", "HR costing still a future goal"].map((l) => (
                <p key={l} className="text-[17px] opacity-65 flex items-center gap-3">
                  <AlertTriangle size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <Fingerprint size={24} className="opacity-70" />
              </div>
              <div>
                <h3 className="text-[26px] font-medium">UniClocks</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">Time & attendance</p>
              </div>
            </div>
            <p className="text-[19px] opacity-70 leading-relaxed mb-6">
              Facial recognition on site — but output is printed and re-entered for payroll.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              {["Not connected to HR or payroll", "Shift rules per site (mines, drivers)", "Reports printed, not exported", "Night shifts add complexity"].map((l) => (
                <p key={l} className="text-[17px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">📄</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">Paper & files</h3>
                <p className="text-[16px] opacity-75 uppercase tracking-widest">No HRIS</p>
              </div>
            </div>
            <p className="text-[19px] opacity-70 leading-relaxed mb-6">
              Contracts, leave forms, training records — physical and on local servers.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              {["No central employee repository", "ISO audit = document hunt", "B-BBEE data compiled manually", "Bargaining council reports by hand"].map((l) => (
                <p key={l} className="text-[17px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-75 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 6. OPERATIONAL IMPACT ────────────────────────────
  {
    id: "context-impact",
    title: "Operational Impact",
    summary: "Elani & Werner carrying manual HR — copy-paste between systems every month",
    icon: <Users size={24} />,
    gradient: "from-[hsl(184,80%,18%)] to-[hsl(184,60%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The real impact</SectionLabel>
        <SlideTitle>What the group loses — every single month</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">👥</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Managers doing HR</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              The owner builds cash — no extra back-office hires. Elani and Werner absorb contracts, leave, timesheets and payroll prep on top of their finance roles.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">📋</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Copy-paste between systems</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              UniClocks → spreadsheet → Pastel. Sage 200 journals entered separately. Every platform is a silo — and senior staff are the glue holding it together.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">📈</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Reporting for the owner</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              Werner wants proper department-level reporting — who is costing money, where hours go. Today, most of the month is spent pulling manual data together instead of analysing it.
            </p>
          </div>
        </div>
        <div className="mt-12 border border-white/15 p-8 text-center">
          <p className="text-[26px] opacity-75 font-light leading-relaxed max-w-[1200px] mx-auto">
            The good news? <strong className="opacity-100">None of this is inevitable.</strong> A single HR platform with Sage integration changes the equation — starting now.
          </p>
        </div>
      </div>
    ),
  },

  // ─── 7. PAIN POINTS ───────────────────────────────────
  {
    id: "problems",
    title: "Pain Points",
    summary: "Five problems that should not exist in 2026 — timesheets, silos, documents, leave, visibility",
    icon: <X size={24} />,
    gradient: "from-[hsl(0,70%,25%)] to-[hsl(0,50%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>What we identified</SectionLabel>
        <SlideTitle>5 pain points that should not exist in 2026</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            {
              title: "Manual timesheets",
              impact: "Printed from UniClocks, re-keyed every month",
              desc: "Clocking data exists digitally — but payroll still depends on someone printing and typing it into Pastel.",
            },
            {
              title: "Disconnected systems",
              impact: "Pastel · Sage 200 · UniClocks · paper",
              desc: "Nothing talks to anything. Senior finance staff copy-paste between platforms that were never designed to connect.",
            },
            {
              title: "Paper documents & ISO",
              impact: "Howden audit · HR resignation fallout",
              desc: "Contracts and HR files on servers and in cabinets. Recent ISO review exposed how hard it is to prove document compliance.",
            },
            {
              title: "No leave system",
              impact: "Paper forms · manual approvals",
              desc: "Time-off requests have no workflow. No accrual rules, no manager self-service, no audit trail.",
            },
            {
              title: "Owner blind spots",
              impact: "Remote but highly involved",
              desc: "The owner sees the team once a month but wants instant answers. No mobile dashboards, no real-time workforce data.",
            },
          ].map((p) => (
            <div key={p.title} className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="opacity-65" />
                <h3 className="text-[26px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[20px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[18px] opacity-80 border-t border-white/15 pt-4">{p.impact}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 8. COST ANALYSIS ───────────────────────────────────
  {
    id: "cost-analysis",
    title: "Current Cost",
    summary: "~$29K/year in manual HR effort — plus compliance risk from staying manual",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,90%,22%)] to-[hsl(0,70%,15%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The cost of standing still</SectionLabel>
        <SlideTitle>What does it cost not to change?</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">The maths is straightforward</h3>
            <div className="border border-white/20 p-8 space-y-4">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Senior finance staff on manual HR</span>
                <span className="font-medium">~2 people</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Manual HR hours / month</span>
                <span className="font-medium">60–80 hours</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Loaded cost per hour (est.)</span>
                <span className="font-medium">~$30/hr</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Monthly manual HR cost</span>
                <span className="font-medium text-[24px]">~$2,400</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-75 font-medium">Annual manual HR cost</span>
                <span className="font-medium text-[24px]">~$29,000</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">And that&apos;s before compliance risk</h3>
            <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
              <p className="text-[20px] opacity-80 mb-2">Estimated annual cost — manual HR alone</p>
              <p className="text-[80px] font-light leading-none">~$29K</p>
              <p className="text-[18px] opacity-75 mt-3">Senior finance time on tasks a modern HRIS handles in hours</p>
            </div>
            <div className="border border-white/15 p-6">
              <p className="text-[18px] opacity-80 uppercase tracking-widest mb-4">This still doesn&apos;t count...</p>
              <div className="space-y-3">
                {[
                  "ISO audit findings from missing HR documents",
                  "B-BBEE reporting errors and consultant rework",
                  "Payroll mistakes from manual timesheet entry",
                  "Owner decisions delayed by lack of real-time data",
                ].map((c) => (
                  <p key={c} className="text-[19px] opacity-65 flex items-start gap-3">
                    <AlertTriangle size={18} className="opacity-80 shrink-0 mt-1" /> {c}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border border-white/15 p-5 text-center">
          <p className="text-[22px] opacity-70 font-light">
            Every month without change is another month paying this price. <strong className="opacity-100">The question isn&apos;t &quot;if&quot; — it&apos;s &quot;when&quot;.</strong>
          </p>
        </div>
      </div>
    ),
  },

  // ─── 9. SOLUTION ──────────────────────────────────────
  {
    id: "solution",
    title: "Solution",
    summary: "Every pain point has a concrete answer — demo environment, shifts, leave, documents, AI",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(184,90%,20%)] to-[hsl(184,70%,10%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The answer</SectionLabel>
        <SlideTitle>Every pain point has a concrete solution</SlideTitle>
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[22px] font-medium opacity-90 mb-1">🔑 We prepared a demo environment for you</p>
            <p className="text-[18px] opacity-80">
              Login: <span className="font-mono opacity-80">hellen@demo0a900094.com</span> · Password: <span className="font-mono opacity-80">Papapapa333!</span>
            </p>
          </div>
          <a
            href="https://app.demo.factorialhr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
          >
            Open Demo →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">See it with your own eyes</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Shift scheduling",
                  desc: "Templates for mines, drivers and production — publish and notify in one click.",
                  url: "https://help.factorialhr.com/en_US/shift-management",
                  isDemo: false,
                },
                {
                  label: "Leave & absences",
                  desc: "Policies, accruals and multi-level approvals — no more paper forms.",
                  url: "https://help.factorialhr.com/en_US/time-off",
                  isDemo: false,
                },
                {
                  label: "Document management",
                  desc: "Digital employee folders, e-signatures and expiry alerts for ISO readiness.",
                  url: "https://help.factorialhr.com/en_US/documents",
                  isDemo: false,
                },
                {
                  label: "AI-powered reports",
                  desc: "\"Which departments have the highest absence rate?\" — ask and get a chart instantly.",
                  url: "https://help.factorialhr.com/en_US/factorial-one",
                  isDemo: false,
                },
              ].map((f) => (
                <a
                  key={f.label}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border border-foreground/15 p-6 hover:border-foreground/35 hover:bg-foreground/[0.04] transition-all group cursor-pointer"
                >
                  <Check size={24} className="opacity-60 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[24px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">{f.label}</p>
                    <p className="text-[19px] opacity-80 mt-1">{f.desc}</p>
                  </div>
                  <span className="text-[18px] opacity-70 group-hover:opacity-70 shrink-0 mt-1 transition-opacity">
                    {f.isDemo ? "🔗 Demo" : "📖 Learn more"}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">What changes in practice</h3>
            <div className="space-y-6">
              {[
                { title: "Payroll prep in hours — not days", desc: "Werner's goal: salaries done in a few hours, with proper department reporting." },
                { title: "Zero copy-paste", desc: "Time data flows from clocking to compensation to Sage 50 — one click." },
                { title: "Owner on his phone", desc: "Real-time dashboards, instant notifications, workforce visibility from anywhere." },
              ].map((g) => (
                <div key={g.title} className="border border-foreground/15 p-8">
                  <h4 className="text-[26px] font-normal mb-2">{g.title}</h4>
                  <p className="text-[22px] opacity-60">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Four entities in one tenant — unified policies, entity-level reporting",
                "B-BBEE & ISO-ready document repository from day one",
              ].map((f) => (
                <div key={f} className="flex items-center gap-4 text-[24px] opacity-70 border border-foreground/15 p-5">
                  <Check size={22} className="opacity-60 shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 10. REPORTS ──────────────────────────────────────
  {
    id: "reports",
    title: "Management Reports",
    summary: "Real-time insights — click each report to explore the view",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,40%,95%)] to-[hsl(347,30%,92%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px] py-[60px]">
        <SectionLabel>Real-time insights</SectionLabel>
        <SlideTitle>Management Reports</SlideTitle>
        <SlideSubtitle>
          Data-driven decisions for Elani, Werner and the owner — click to explore each view.
        </SlideSubtitle>
        <ReportsGallery />
      </div>
    ),
  },

  // ─── 11. INTEGRATION — SAGE 50 ──────────────────────────
  {
    id: "integration",
    title: "Sage 50 Integration",
    summary: "Native Sage 50 Cloud sync — Factorial → Pastel one-click. Exponent as implementation partner",
    icon: <Link2 size={24} />,
    gradient: "from-[hsl(37,70%,22%)] to-[hsl(37,50%,10%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>HOW IT WORKS</SectionLabel>
        <SlideTitle>Pastel stays. Factorial becomes the HR layer.</SlideTitle>
        <div className="flex items-center justify-center gap-0 mt-6">
          <div className="w-[380px] border border-white/25 bg-white/10 p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 border border-white/25 flex items-center justify-center">
              <span className="text-[24px] font-light">F</span>
            </div>
            <p className="text-[26px] font-medium mb-1">Factorial HR</p>
            <p className="text-[15px] opacity-80 uppercase tracking-[0.2em] mb-4">Management Layer</p>
            <div className="space-y-2 text-left">
              {["Employee records & documents", "Time, shifts & leave", "Compensation composition", "AI reports & dashboards"].map((item) => (
                <p key={item} className="text-[17px] opacity-70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center px-6">
            <div className="w-16 h-px bg-white/25" />
            <p className="text-[18px] opacity-80 my-2 font-medium">One-click sync</p>
            <p className="text-[14px] opacity-70">Native connector</p>
            <div className="w-16 h-px bg-white/25" />
          </div>
          <div className="w-[380px] border border-white/25 bg-white/10 p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 border border-white/25 flex items-center justify-center">
              <span className="text-[24px] font-light">S50</span>
            </div>
            <p className="text-[26px] font-medium mb-1">Sage 50 Cloud Payroll</p>
            <p className="text-[15px] opacity-80 uppercase tracking-[0.2em] mb-4">Pastel · Payroll Engine</p>
            <div className="space-y-2 text-left">
              {["Salary & deductions", "Overtime & incentives", "Payroll processing", "Payslips & statutory filings"].map((item) => (
                <p key={item} className="text-[17px] opacity-70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div className="border border-white/20 p-6">
            <h3 className="text-[22px] font-medium mb-3 flex items-center gap-2">
              <Building2 size={20} className="opacity-70" /> Exponent
            </h3>
            <p className="text-[18px] opacity-70 leading-relaxed">
              Sage Platinum Partner on this call — validates payroll mapping, employee codes and Sage 50 configuration alongside Factorial.
            </p>
          </div>
          <div className="border border-white/20 p-6">
            <h3 className="text-[22px] font-medium mb-3 flex items-center gap-2">
              <Server size={20} className="opacity-70" /> Sage 200 Evolution
            </h3>
            <p className="text-[18px] opacity-70 leading-relaxed">
              Stays as your finance ERP and costing system. Salary journals may continue manually — no direct Factorial integration required.
            </p>
          </div>
          <div className="border border-white/20 p-6">
            <h3 className="text-[22px] font-medium mb-3 flex items-center gap-2">
              <Zap size={20} className="opacity-70" /> What syncs
            </h3>
            <p className="text-[18px] opacity-70 leading-relaxed">
              Base salary, deductions, overtime, commissions and incentives — composed in Factorial, synced to Pastel with one button.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 12. UNICLOCKS ──────────────────────────────────────
  {
    id: "uniclocks",
    title: "UniClocks Compatibility",
    summary: "Facial recognition on site — mobile, tablet or existing hardware. Shift rules for mines, drivers and production",
    icon: <Fingerprint size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(184,60%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Time & Attendance</SectionLabel>
        <SlideTitle>From clock-in to payroll — without printing timesheets</SlideTitle>
        <div className="flex items-center justify-center gap-0 mt-6 mb-8">
          <div className="w-[300px] border border-white/25 bg-white/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 border border-white/25 flex items-center justify-center">
              <Fingerprint size={24} className="opacity-80" />
            </div>
            <p className="text-[22px] font-medium mb-1">UniClocks</p>
            <p className="text-[14px] opacity-80 uppercase tracking-[0.2em] mb-3">Facial Recognition</p>
            <div className="space-y-1.5 text-left">
              {["Existing site hardware", "Mobile & tablet clocking", "Per-site shift categories", "Mines · drivers · production"].map((item) => (
                <p key={item} className="text-[15px] opacity-65 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center px-4">
            <div className="w-12 h-px bg-white/25" />
            <p className="text-[12px] opacity-70 my-1">API / compatible</p>
            <p className="text-[12px] opacity-70">device assessment</p>
            <div className="w-12 h-px bg-white/25" />
          </div>
          <div className="w-[300px] border border-white/25 bg-white/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 border border-white/25 flex items-center justify-center">
              <span className="text-[20px] font-light">F</span>
            </div>
            <p className="text-[22px] font-medium mb-1">Factorial HR</p>
            <p className="text-[14px] opacity-80 uppercase tracking-[0.2em] mb-3">Time Tracking</p>
            <div className="space-y-1.5 text-left">
              {["Receives clock-ins/outs", "Applies shift policies", "Consolidates timesheets", "Calculates overtime & night pay"].map((item) => (
                <p key={item} className="text-[15px] opacity-65 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center px-4">
            <div className="w-12 h-px bg-white/25" />
            <p className="text-[12px] opacity-70 my-1">One-click</p>
            <p className="text-[12px] opacity-70">Sage 50 sync</p>
            <div className="w-12 h-px bg-white/25" />
          </div>
          <div className="w-[300px] border border-white/25 bg-white/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 border border-white/25 flex items-center justify-center">
              <span className="text-[20px] font-light">S50</span>
            </div>
            <p className="text-[22px] font-medium mb-1">Sage 50 Cloud</p>
            <p className="text-[14px] opacity-80 uppercase tracking-[0.2em] mb-3">Payroll</p>
            <div className="space-y-1.5 text-left">
              {["Hours worked", "Overtime & allowances", "Payroll processing", "No manual re-entry"].map((item) => (
                <p key={item} className="text-[15px] opacity-65 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="border border-white/20 p-6">
            <h3 className="text-[20px] font-medium mb-4 flex items-center gap-2">
              <Wifi size={20} className="opacity-70" /> Shift categories
            </h3>
            <div className="space-y-3">
              {[
                { step: "1", text: "Mines — variable days and hours per crew" },
                { step: "2", text: "Drivers — non-fixed routes, flexible clocking windows" },
                { step: "3", text: "Production — day shift today, night shift coming 2026" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 border border-white/30 flex items-center justify-center text-[14px] font-medium opacity-60 shrink-0 mt-0.5">{s.step}</span>
                  <p className="text-[16px] opacity-70 leading-snug">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-6">
            <h3 className="text-[20px] font-medium mb-4 flex items-center gap-2">
              <Lock size={20} className="opacity-70" /> Privacy & POPIA
            </h3>
            <div className="space-y-2.5">
              {[
                "Facial recognition via any camera-enabled device",
                "Biometric templates — not raw images in the cloud",
                "Encrypted communication (TLS 1.2+)",
                "POPIA-aligned data handling for South Africa",
              ].map((item) => (
                <p key={item} className="text-[16px] opacity-70 flex items-start gap-2">
                  <Check size={14} className="opacity-60 shrink-0 mt-1" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-6">
            <h3 className="text-[20px] font-medium mb-4 flex items-center gap-2">
              <Database size={20} className="opacity-70" /> No new hardware required
            </h3>
            <p className="text-[16px] opacity-70 leading-relaxed mb-4">
              We assess your UniClocks model during onboarding. Any phone or tablet with a camera can also serve as a clocking station.
            </p>
            <p className="text-[15px] opacity-75 border-t border-white/15 pt-3">
              Goal: eliminate printed timesheets entirely — data flows digitally to payroll.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 13. MICROSOFT PARTNERSHIP ──────────────────────────
  {
    id: "microsoft-partnership",
    title: "Factorial × Microsoft",
    summary: "Co-built AI with Microsoft — relevant for a Microsoft partner client. POPIA note for SA",
    icon: <Award size={24} />,
    gradient: "from-[hsl(210,70%,20%)] to-[hsl(260,50%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Strategic Partnership</SectionLabel>
        <SlideTitle>Factorial × Microsoft</SlideTitle>
        <p className="text-[22px] opacity-75 mb-8 max-w-[1200px]">
          You&apos;re a Microsoft partner — Factorial is too. Our AI infrastructure is co-built on Azure, and Factorial One integrates with the Microsoft ecosystem you already trust.
        </p>
        <div className="flex items-stretch gap-0 mt-4 mb-10">
          {[
            { year: "2024", icon: <Cloud size={20} />, title: "Azure migration", desc: "100% infrastructure on Azure — enterprise-grade cloud consumption" },
            { year: "2025", icon: <Brain size={20} />, title: "Factorial One", desc: "AI suite built on Azure + OpenAI — reports, training, recruitment screening" },
            { year: "2026", icon: <Rocket size={20} />, title: "AI Tour spotlight", desc: "Satya Nadella highlights Factorial as a leading SMB AI partner in Europe" },
            { year: "SA", icon: <Shield size={20} />, title: "POPIA ready", desc: "Cloud HR with GDPR alignment — suitable for South African data protection requirements" },
          ].map((item, i) => (
            <div key={i} className="flex-1 border border-white/20 bg-white/[0.06] p-5 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="opacity-60">{item.icon}</span>
                <span className="text-[14px] opacity-70 uppercase tracking-[0.15em]">{item.year}</span>
              </div>
              <p className="text-[20px] font-medium mb-2 opacity-90">{item.title}</p>
              <p className="text-[15px] opacity-80 leading-snug">{item.desc}</p>
              {i < 3 && <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-5 h-5 border border-white/20 bg-[hsl(210,70%,20%)] flex items-center justify-center text-[12px] opacity-75">→</div>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { num: "90+", label: "Dynamics partners", sub: "active integrations" },
            { num: "50%", label: "Partnership revenue", sub: "via Microsoft ecosystem" },
            { num: "AI", label: "Co-built with Microsoft", sub: "Azure OpenAI foundation" },
            { num: "POPIA", label: "SA data protection", sub: "cloud HR compliance path" },
          ].map((kpi) => (
            <div key={kpi.label} className="border border-white/15 p-5 text-center">
              <p className="text-[40px] font-light mb-1">{kpi.num}</p>
              <p className="text-[16px] opacity-70 font-medium">{kpi.label}</p>
              <p className="text-[14px] opacity-70 mt-1">{kpi.sub}</p>
            </div>
          ))}
        </div>
        <div className="border border-white/15 p-6 bg-white/[0.04]">
          <p className="text-[18px] opacity-70 italic leading-relaxed">
            &quot;Microsoft CEO Satya Nadella highlighted Factorial as one of the most important companies building cutting-edge AI solutions for SMBs around the world.&quot;
          </p>
          <p className="text-[15px] opacity-70 mt-3">— AI Tour Madrid, February 2026</p>
        </div>
      </div>
    ),
  },

  // ─── 14. COMPARISON ─────────────────────────────────────
  {
    id: "comparison",
    title: "Comparison",
    summary: "Before and after — manual stack vs Factorial across seven criteria",
    icon: <Check size={24} />,
    gradient: "from-[hsl(160,50%,20%)] to-[hsl(160,40%,8%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Before and after</SectionLabel>
        <SlideTitle>What changes — point by point</SlideTitle>
        <div className="border border-foreground/20 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[22px]">
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60">Criteria</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">Today (manual stack)</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">With Factorial</div>
            {[
              { c: "Timesheet processing", s: "Print UniClocks → re-key", f: "Digital flow to payroll" },
              { c: "Leave management", s: "Paper forms", f: "Self-service + approvals" },
              { c: "Document compliance", s: "Files & servers", f: "Digital folders + e-sign" },
              { c: "Payroll preparation", s: "Multi-day manual effort", f: "Hours, not days" },
              { c: "Sage integration", s: "Copy-paste to Pastel", f: "One-click Sage 50 sync" },
              { c: "Owner reporting", s: "Monthly manual pull", f: "Mobile dashboards + AI" },
              { c: "Multi-entity management", s: "Four separate processes", f: "One tenant, four entities" },
            ].map((row, i) => (
              <Fragment key={row.c}>
                <div className={`px-10 py-5 flex items-center text-[20px] ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  {row.c}
                </div>
                <div className={`px-10 py-5 flex items-center justify-center gap-3 opacity-70 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <X size={20} className="opacity-60 shrink-0" />
                  <span className="text-[20px]">{row.s}</span>
                </div>
                <div className={`px-10 py-5 flex items-center justify-center gap-3 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <Check size={20} className="opacity-80 shrink-0" />
                  <span className="text-[20px]">{row.f}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ─── 15. INVESTMENT ─────────────────────────────────────
  {
    id: "investment",
    title: "Investment",
    summary: "~USD 10 PEPM for ~100 employees — one-time onboarding plus monthly subscription",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,80%,22%)] to-[hsl(347,60%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investment</SectionLabel>
        <SlideTitle>Transparent pricing for ~100 employees</SlideTitle>
        <SlideSubtitle>
          ~{formatUSD(d.custoColaboradorMes_EUR)} per employee per month · {d.totalColaboradores} employees · one-time onboarding included
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div className="border border-white/25 bg-white/10 p-10 text-center">
            <p className="text-[18px] opacity-75 uppercase tracking-widest mb-3">Month 1</p>
            <p className="text-[56px] font-light leading-none">{formatUSD(mes1Total)}</p>
            <p className="text-[17px] opacity-70 mt-4">Onboarding + first month subscription</p>
          </div>
          <div className="border border-white/25 bg-white/10 p-10 text-center">
            <p className="text-[18px] opacity-75 uppercase tracking-widest mb-3">Month 2 onwards</p>
            <p className="text-[56px] font-light leading-none">{formatUSD(mensalRecorrente)}</p>
            <p className="text-[17px] opacity-70 mt-4">Monthly recurring · {d.totalColaboradores} × {formatUSD(d.custoColaboradorMes_EUR)}/employee</p>
          </div>
          <div className="border border-white/25 bg-white/10 p-10 text-center">
            <p className="text-[18px] opacity-75 uppercase tracking-widest mb-3">Annual subscription</p>
            <p className="text-[56px] font-light leading-none">{formatUSD(mensalRecorrente * 12)}</p>
            <p className="text-[17px] opacity-70 mt-4">Excludes one-time onboarding fee</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="border border-white/20 p-8">
            <p className="text-[18px] opacity-75 uppercase tracking-widest mb-4">One-time onboarding</p>
            <div className="flex justify-between text-[24px] mb-4">
              <span className="opacity-70">Implementation package</span>
              <span className="font-medium">{formatUSD(implantacao)}</span>
            </div>
            <p className="text-[18px] opacity-65 leading-relaxed">
              Includes discovery, configuration for four entities, Sage 50 integration setup, data migration, training and 30-day hypercare.
            </p>
          </div>
          <div className="border border-white/20 p-8">
            <p className="text-[18px] opacity-75 uppercase tracking-widest mb-4">What&apos;s included</p>
            <div className="space-y-3">
              {[
                "Core HR, time, leave, documents & training",
                "Native Sage 50 Cloud Payroll sync",
                "UniClocks compatibility assessment",
                "Factorial One AI reports",
                "Mobile app for all employees",
              ].map((item) => (
                <p key={item} className="text-[19px] opacity-70 flex items-center gap-3">
                  <Check size={18} className="opacity-60 shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 16. IMPLEMENTATION ─────────────────────────────────
  {
    id: "implementation",
    title: "Implementation",
    summary: "45–60 days to go-live — aligned to month boundary per client requirement",
    icon: <Calendar size={24} />,
    gradient: "from-[hsl(160,60%,18%)] to-[hsl(200,50%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Implementation Plan</SectionLabel>
        <SlideTitle>45–60 days to go-live</SlideTitle>
        <SlideSubtitle>
          Go-live at the first day of a new financial month — no mid-month payroll cutover.
        </SlideSubtitle>
        <div className="grid grid-cols-4 gap-6 mt-10">
          {[
            { phase: "Phase 1", weeks: "Weeks 1–2", title: "Discovery & design", items: ["Kick-off with Elani, Werner & Exponent", "Map 4 entities & org structure", "UniClocks & Sage 50 integration design", "ISO / B-BBEE requirements register"] },
            { phase: "Phase 2", weeks: "Weeks 2–5", title: "Configuration", items: ["Employee import & custom codes", "Shift rules: mines, drivers, production", "Leave policies & approval workflows", "Sage 50 native sync setup"] },
            { phase: "Phase 3", weeks: "Weeks 5–7", title: "Testing & UAT", items: ["Time → compensation → Sage SIT", "UAT with Elani, Werner & managers", "Optional parallel payroll run", "Signed UAT acceptance"] },
            { phase: "Phase 4", weeks: "Weeks 7–8", title: "Training & go-live", items: ["Admin training (2 sessions)", "Manager training & employee comms", "Go-live at month boundary", "30-day hypercare support"] },
          ].map((p) => (
            <div key={p.phase} className="border border-white/20 p-6">
              <p className="text-[14px] opacity-70 uppercase tracking-widest mb-1">{p.phase} · {p.weeks}</p>
              <h3 className="text-[24px] font-medium mb-4">{p.title}</h3>
              <div className="space-y-3">
                {p.items.map((item) => (
                  <p key={item} className="text-[16px] opacity-70 flex items-start gap-2">
                    <Check size={14} className="opacity-60 shrink-0 mt-1" /> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border border-white/15 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Clock size={28} className="opacity-70" />
            <p className="text-[22px] opacity-75">Client indicated readiness to begin within one month of approval.</p>
          </div>
          <p className="text-[20px] opacity-80 font-medium">Partner: Exponent (Sage Platinum)</p>
        </div>
      </div>
    ),
  },

  // ─── 17. TECH ARCHITECTURE ──────────────────────────────
  {
    id: "tech-architecture",
    title: "Technical Architecture",
    summary: "React, Rails, AWS — SOC 2, ISO 27001, GDPR aligned",
    icon: <Cloud size={24} />,
    gradient: "from-[hsl(210,50%,18%)] to-[hsl(210,40%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Technical Layer · For IT</SectionLabel>
        <SlideTitle>Architecture & Infrastructure</SlideTitle>
        <div className="grid grid-cols-2 gap-10 mt-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Server size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">System Topology</h3>
            </div>
            <div className="border border-white/20 p-7 space-y-3 mb-6">
              {[
                { label: "Frontend", value: "React + GraphQL APIs" },
                { label: "Backend", value: "Ruby on Rails — modular gems" },
                { label: "Mobile", value: "React Native (Android & iOS)" },
                { label: "APIs", value: "GraphQL (primary) + REST" },
                { label: "Background Jobs", value: "Sidekiq on Redis" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[20px]">
                  <span className="opacity-60">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Database size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Multi-Tenancy</h3>
            </div>
            <div className="border border-white/20 p-7 space-y-2">
              {[
                "Logical isolation per tenant",
                "RBAC — role-based access control",
                "Data never shared between clients",
                "Four entities under one tenant for High Point",
              ].map((item) => (
                <p key={item} className="text-[19px] opacity-70 flex items-center gap-3">
                  <Check size={16} className="opacity-60 shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Cloud size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Cloud Infrastructure</h3>
            </div>
            <div className="border border-white/20 p-7 space-y-3 mb-6">
              {[
                { label: "Provider", value: "AWS (Frankfurt, EU)" },
                { label: "Availability", value: "SLA ≥ 99.5% · 3 AZs" },
                { label: "DR", value: "RPO < 1h · RTO < 4h" },
                { label: "Database", value: "MySQL — replication + backups" },
                { label: "Storage", value: "S3 with redundancy" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[20px]">
                  <span className="opacity-60">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="opacity-70" />
              <h3 className="text-[26px] font-medium">Certifications & Compliance</h3>
            </div>
            <div className="border border-white/20 p-7 grid grid-cols-2 gap-3">
              {[
                "SOC 2 Type II — zero exceptions",
                "ISO/IEC 27001:2023",
                "ENS — High Level",
                "GDPR — 100% data in EU",
              ].map((cert) => (
                <p key={cert} className="text-[18px] opacity-70 flex items-center gap-2">
                  <Check size={16} className="opacity-60 shrink-0" /> {cert}
                </p>
              ))}
            </div>
            <div className="border border-white/15 p-5 mt-6">
              <p className="text-[18px] opacity-80 uppercase tracking-widest mb-3">Encryption</p>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-[18px] opacity-70">In transit: <strong>TLS 1.2+</strong> (A+ SSL Labs)</p>
                <p className="text-[18px] opacity-70">At rest: <strong>AES-256-GCM</strong> (AWS KMS)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 18. TECH AI ────────────────────────────────────────
  {
    id: "tech-ai",
    title: "AI & Security",
    summary: "Azure OpenAI, contextual RAG, zero cross-tenant data sharing",
    icon: <Brain size={24} />,
    gradient: "from-[hsl(280,50%,20%)] to-[hsl(280,40%,8%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Technical Layer · For IT</SectionLabel>
        <SlideTitle>AI Infrastructure</SlideTitle>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Brain size={24} className="opacity-70" />
              <h3 className="text-[24px] font-medium">AI Architecture</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Primary provider", value: "Azure OpenAI" },
                { label: "Fallback", value: "Rauda AI (automatic)" },
                { label: "Approach", value: "Contextual RAG" },
                { label: "Pipeline", value: "Cloudflare AutoRAG" },
                { label: "Cache", value: "Semantic Caching (Redis)" },
                { label: "Observability", value: "Langfuse (traces)" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[19px]">
                  <span className="opacity-80">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Lock size={24} className="opacity-70" />
              <h3 className="text-[24px] font-medium">Data Privacy</h3>
            </div>
            <div className="space-y-3 mb-6">
              {[
                "Zero sharing between tenants",
                "No training on client data",
                "Base models via API — no fine-tuning",
                "AI disableable per tenant",
                "Full transparency on logic and data",
              ].map((item) => (
                <p key={item} className="text-[18px] opacity-70 flex items-start gap-3">
                  <Check size={16} className="opacity-60 shrink-0 mt-1" /> {item}
                </p>
              ))}
            </div>
            <div className="border-t border-white/15 pt-4 space-y-2">
              <p className="text-[17px] opacity-80 uppercase tracking-widest mb-2">Processing</p>
              <p className="text-[18px] opacity-70">Private AWS VPC (Frankfurt)</p>
              <p className="text-[18px] opacity-70">Azure OpenAI with DPA + GDPR</p>
            </div>
          </div>
          <div className="border border-white/20 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Cpu size={24} className="opacity-70" />
              <h3 className="text-[24px] font-medium">Resilience & Roadmap</h3>
            </div>
            <div className="space-y-3 mb-6">
              {[
                "Serverless Lambda for peaks",
                "Multi-AZ load balancing",
                "Demand-based auto-scaling",
                "Automatic Azure → Rauda failover",
                "Continuous health monitoring",
              ].map((item) => (
                <p key={item} className="text-[18px] opacity-70 flex items-start gap-3">
                  <Check size={16} className="opacity-60 shrink-0 mt-1" /> {item}
                </p>
              ))}
            </div>
            <div className="border-t border-white/15 pt-4">
              <p className="text-[17px] opacity-80 uppercase tracking-widest mb-3">Roadmap Q2–Q3 2026</p>
              <div className="space-y-2">
                {[
                  "Unified Knowledge Base",
                  "Enhanced AI observability",
                  "Expanded RAG capabilities",
                  "Dedicated German Cloud",
                ].map((item) => (
                  <p key={item} className="text-[17px] opacity-65 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8 text-center">
          <div className="border border-white/15 p-4">
            <p className="text-[18px] opacity-80">Security & Compliance</p>
            <p className="text-[20px] font-medium opacity-80">security@factorial.co</p>
          </div>
          <div className="border border-white/15 p-4">
            <p className="text-[18px] opacity-80">SOC 2 Report</p>
            <p className="text-[20px] font-medium opacity-80">Available under NDA</p>
          </div>
          <div className="border border-white/15 p-4">
            <p className="text-[18px] opacity-80">Infrastructure</p>
            <p className="text-[20px] font-medium opacity-80">Arnau Vazquez · Eng. Manager</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 19. NEXT STEPS ─────────────────────────────────────
  {
    id: "next-steps",
    title: "Next Steps",
    summary: "Owner meeting Monday, follow-up Friday — Victor and Paolo as contacts",
    icon: <Mail size={24} />,
    gradient: "from-[hsl(347,60%,25%)] to-[hsl(347,50%,12%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Next Steps</SectionLabel>
        <SlideTitle>Let&apos;s move forward together</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-6">
          <div className="space-y-6">
            {[
              { step: "1", title: "Owner review meeting", desc: "Monday — personalised proposal and ROI summary presented to the business owner for investment decision.", icon: <Calendar size={24} /> },
              { step: "2", title: "Follow-up session", desc: "Friday — address questions, confirm scope, and align on go-live timeline at month boundary.", icon: <Clock size={24} /> },
              { step: "3", title: "Contract & kick-off", desc: "Upon approval — onboarding begins within one month. Exponent joins for Sage 50 integration.", icon: <Rocket size={24} /> },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 border border-foreground/15 p-8">
                <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center shrink-0 opacity-70">
                  {s.icon}
                </div>
                <div>
                  <p className="text-[16px] opacity-50 uppercase tracking-widest mb-1">Step {s.step}</p>
                  <h3 className="text-[28px] font-medium mb-2">{s.title}</h3>
                  <p className="text-[20px] opacity-65 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-[28px] font-medium mb-8 opacity-80">Your Factorial team</h3>
            <div className="space-y-6">
              <div className="border border-foreground/15 p-8">
                <p className="text-[32px] font-light mb-1">Victor Gutierrez</p>
                <p className="text-[18px] opacity-60 mb-4">Account Executive, Africa · Barcelona</p>
                <p className="text-[20px] opacity-70">Personalised proposal, ROI analysis and product demonstrations.</p>
              </div>
              <div className="border border-foreground/15 p-8">
                <p className="text-[32px] font-light mb-1">Paolo Urzi</p>
                <p className="text-[18px] opacity-60 mb-4">Regional Manager, Southern Africa · Johannesburg</p>
                <p className="text-[20px] opacity-70">Local point of contact — available for in-person meetings in Gauteng or Cape Town.</p>
              </div>
            </div>
            <div className="mt-8 border-2 border-foreground/20 p-6 text-center">
              <p className="text-[22px] opacity-80">Questions before Monday? We&apos;re one message away.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 20. VIDEO DEMO ─────────────────────────────────────
  {
    id: "video",
    title: "Demo Video",
    summary: "See the future — imagine your HR working differently",
    icon: <Video size={24} />,
    gradient: "from-[hsl(347,100%,25%)] to-[hsl(347,80%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>Visualise the future</SectionLabel>
        <SlideTitle>Imagine your HR like this</SlideTitle>
        <div className="w-[960px] h-[540px] mt-8">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/6sUn2w1hRv0?start=26"
            title="Factorial Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },
];
