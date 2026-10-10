"use client";

import { useState } from "react";
import {
  Sparkles,
  Zap,
  Bot,
  Users,
  GitBranch,
  FileCode2,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Flame,
  Terminal,
  RefreshCw,
  Cpu,
} from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import MatchCircle from "@/components/ui/MatchCircle";
import { teammates, mentors, currentUser } from "@/lib/data";

interface AutoTask {
  id: string;
  title: string;
  category: "Frontend" | "Backend" | "AI/ML" | "Pitch/Demo";
  assignee: string;
  priority: "High" | "Medium" | "Urgent";
  estimatedHours: number;
}

interface GeneratedSquadResult {
  projectTitle: string;
  tagline: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiEngine: string;
  };
  prdSummary: string;
  matchedTeammates: Array<{
    user: (typeof teammates)[0];
    synergyScore: number;
    assignedRole: string;
    rationale: string;
  }>;
  sprintTasks: AutoTask[];
}

export default function AIStudioPage() {
  const [activeTab, setActiveTab] = useState<"auto-squad" | "github-profiler" | "ai-briefing" | "pitch-polisher">("auto-squad");

  // ─────────────────────────────────────────────────────────────
  // State: Auto-Squad Generator
  // ─────────────────────────────────────────────────────────────
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState<string>("");
  const [generatedSquad, setGeneratedSquad] = useState<GeneratedSquadResult | null>(null);
  const [copiedTask, setCopiedTask] = useState<string | null>(null);

  const presetPrompts = [
    "AI-powered telemedicine triage platform for rural Bharat with offline speech-to-text",
    "Autonomous decentralized carbon credit trading bot with smart contract verification",
    "Real-time multimodal AI code reviewer and security vulnerability patcher",
  ];

  const handleGenerateSquad = (inputPrompt: string) => {
    const text = inputPrompt || prompt;
    if (!text) return;

    setIsGenerating(true);
    setGeneratedSquad(null);

    setGenerationStep("Deconstructing problem statement & architectural constraints...");
    setTimeout(() => {
      setGenerationStep("Querying vector embeddings over candidate pool for skill synergy...");
      setTimeout(() => {
        setGenerationStep("Synthesizing 24-hour sprint tasks and balanced role delegation...");
        setTimeout(() => {
          setIsGenerating(false);
          setGenerationStep("");
          setGeneratedSquad({
            projectTitle: text.length > 40 ? text.slice(0, 38) + "..." : text,
            tagline: "Autonomous end-to-end intelligent platform engineered for maximum hackathon impact.",
            architecture: {
              frontend: "Next.js 15 (App Router) + Tailwind CSS + Framer Motion",
              backend: "FastAPI + WebSockets + Redis Queue",
              database: "PostgreSQL with pgvector + Supabase Auth",
              aiEngine: "Gemini 1.5 Pro / Claude 3.5 Sonnet + LlamaIndex RAG Pipeline",
            },
            prdSummary:
              "A low-latency, resilient platform addressing core domain inefficiencies. Implements hybrid retrieval pipelines with automated failover and telemetry metrics.",
            matchedTeammates: [
              {
                user: teammates[1], // Priya Patel
                synergyScore: 98,
                assignedRole: "Lead AI & RAG Engineer",
                rationale: "Matches your deep learning & PyTorch gap with 4 verified production repos.",
              },
              {
                user: teammates[0], // Aryan Sharma
                synergyScore: 94,
                assignedRole: "Frontend & Micro-Animations",
                rationale: "Expert in Next.js + React. Complements backend heavy workload.",
              },
              {
                user: teammates[2], // Ananya Iyer
                synergyScore: 91,
                assignedRole: "System Architecture & API",
                rationale: "Proven track record in high-throughput FastAPI and DB indexing.",
              },
            ],
            sprintTasks: [
              {
                id: "t1",
                title: "Setup pgvector embeddings table & cosine index",
                category: "Backend",
                assignee: "Ananya Iyer",
                priority: "Urgent",
                estimatedHours: 2,
              },
              {
                id: "t2",
                title: "Build RAG chunking & query reranking pipeline",
                category: "AI/ML",
                assignee: "Priya Patel",
                priority: "High",
                estimatedHours: 3,
              },
              {
                id: "t3",
                title: "Implement real-time dashboard UI & telemetry charts",
                category: "Frontend",
                assignee: "Aryan Sharma",
                priority: "High",
                estimatedHours: 4,
              },
              {
                id: "t4",
                title: "Draft 2-minute elevator pitch script & problem metrics",
                category: "Pitch/Demo",
                assignee: "Utkarsh (You)",
                priority: "Medium",
                estimatedHours: 1.5,
              },
            ],
          });
        }, 900);
      }, 900);
    }, 800);
  };

  // ─────────────────────────────────────────────────────────────
  // State: GitHub Profiler
  // ─────────────────────────────────────────────────────────────
  const [ghUsername, setGhUsername] = useState("utkarshsingh100m");
  const [isProfiling, setIsProfiling] = useState(false);
  const [profileResult, setProfileResult] = useState<any | null>(null);

  const handleProfileGithub = () => {
    if (!ghUsername) return;
    setIsProfiling(true);
    setTimeout(() => {
      setIsProfiling(false);
      setProfileResult({
        username: ghUsername,
        headline: "Full-Stack AI Engineer | Distributed Systems & Next.js",
        bio: `Autonomous code analysis of ${ghUsername}: Demonstrates top-tier proficiency in Next.js, TypeScript, and Python. Active maintainer across 12+ public repositories with strong focus on high-performance web tooling and LLM workflows.`,
        verifiedSkills: [
          { name: "Next.js / React 19", confidence: 99, repos: 8, level: "Expert" },
          { name: "TypeScript", confidence: 96, repos: 11, level: "Expert" },
          { name: "FastAPI / Python", confidence: 91, repos: 5, level: "Advanced" },
          { name: "Tailwind CSS", confidence: 95, repos: 9, level: "Expert" },
          { name: "PostgreSQL & Vector DBs", confidence: 88, repos: 4, level: "Intermediate" },
        ],
        codeMetrics: {
          totalCommits: 342,
          prMerged: 28,
          avgComplexity: "Low (Clean Architecture)",
        },
      });
    }, 1500);
  };

  // ─────────────────────────────────────────────────────────────
  // State: AI Briefing (Intelligent Mentor Match & Briefing)
  // ─────────────────────────────────────────────────────────────
  const [briefingQuery, setBriefingQuery] = useState("");
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [briefingResult, setBriefingResult] = useState<any | null>(null);

  const handleGenerateAIBriefing = (customInput?: string) => {
    const text = (customInput || briefingQuery).toLowerCase();
    if (!text) return;

    setIsDiagnosing(true);
    setBriefingResult(null);

    setTimeout(() => {
      setIsDiagnosing(false);

      // Intelligent Semantic Matcher to pick the best mentor based on topic
      let matchedMentor = mentors[0]; // Default: Rahul Sharma (AI/GenAI)
      let matchScore = 98;
      let matchReason = "Top AI & RAG expert with ex-Google background. Matches your LLM pipeline query perfectly.";
      let rootCause = "Vector embedding dimension mismatch or unindexed HNSW query in hybrid retrieval.";
      let recommendedFix = "Apply an HNSW index with m=16, ef_construction=64 on pgvector and normalize all embeddings to 1536 dims.";
      let targetedQuestions = [
        "How do we balance retrieval latency vs recall accuracy when handling over 1,000 concurrent vector lookups?",
        "Should we implement reranking with Cohere/BGE-reranker or rely solely on cosine similarity in production?",
        "What is the best cache invalidation strategy for dynamic user context in RAG chains?",
      ];

      if (text.includes("aws") || text.includes("cloud") || text.includes("scale") || text.includes("docker") || text.includes("system") || text.includes("postgres")) {
        matchedMentor = mentors[3] || mentors[0]; // Neha Singh (AWS / System Design)
        matchScore = 97;
        matchReason = "Ex-Amazon Full Stack & Cloud Architect with extensive AWS serverless and PostgreSQL scaling expertise.";
        rootCause = "Database connection pool exhaustion and unoptimized indexing on high-frequency tables.";
        recommendedFix = "Implement PgBouncer connection pooling and partition high-throughput write tables by timestamp.";
        targetedQuestions = [
          "How can we configure zero-downtime auto-scaling for our container cluster during hackathon demo traffic?",
          "What is the most cost-efficient caching layer (Redis vs Cloudflare KV) for our read-heavy endpoints?",
          "How to properly structure connection pooling in serverless Next.js edge functions?",
        ];
      } else if (text.includes("pitch") || text.includes("deck") || text.includes("product") || text.includes("gtm") || text.includes("business") || text.includes("story")) {
        matchedMentor = mentors[2] || mentors[0]; // Aman Verma (Product & Pitch)
        matchScore = 99;
        matchReason = "Ex-Microsoft Product Lead with expertise in structuring compelling 2-minute hackathon pitch narratives and business defensibility.";
        rootCause = "Value proposition is too technical without highlighting quantifiable customer ROI and market differentiation.";
        recommendedFix = "Reframe the first 30 seconds around the acute pain point before presenting your architecture, and lead with live demo numbers.";
        targetedQuestions = [
          "How can we effectively communicate our competitive moat against established incumbents in 45 seconds?",
          "What specific metrics will judges look for in our market sizing and business model slide?",
          "How should we handle live demo failure risk during final stage judging?",
        ];
      } else if (text.includes("ui") || text.includes("ux") || text.includes("figma") || text.includes("design") || text.includes("frontend") || text.includes("prototype")) {
        matchedMentor = mentors[4] || mentors[0]; // Priya Kapoor (UI/UX)
        matchScore = 96;
        matchReason = "Lead Product Designer specializing in Figma design systems, visual hierarchy, and rapid hackathon micro-interactions.";
        rootCause = "High cognitive load on the dashboard interface with lack of clear visual hierarchy and primary action indicators.";
        recommendedFix = "Adopt an 8pt grid system, consolidate competing action buttons, and introduce high-contrast accent color tokens for primary CTA buttons.";
        targetedQuestions = [
          "How do we streamline our multi-step user onboarding flow to require fewer than 2 clicks?",
          "What micro-animations and feedback cues will make the judge demo feel noticeably high-polish and responsive?",
          "How can we ensure accessible contrast ratios while maintaining a modern dark-mode aesthetic?",
        ];
      } else if (text.includes("medical") || text.includes("health") || text.includes("research") || text.includes("science") || text.includes("paper")) {
        matchedMentor = mentors[1] || mentors[0]; // Dr. Elena Rostova
        matchScore = 99;
        matchReason = "Published Medical AI Research Scientist with 15+ papers in clinical ML validation and healthcare telemetry.";
        rootCause = "Lack of clinically verified benchmark evaluation metrics and confidence thresholds on model diagnostics.";
        recommendedFix = "Implement cross-validation against standard MIMIC-IV / clinical datasets and display uncertainty calibration intervals.";
        targetedQuestions = [
          "What are the standard regulatory guidelines (like HIPAA/FDA considerations) we should acknowledge in our pitch?",
          "How do we handle high false-positive rates in automated clinical triage pipelines?",
          "Which evaluation metrics (AUPRC vs F1) carry the most credibility for medical hackathon judges?",
        ];
      }

      const queryText = customInput || briefingQuery;
      setBriefingResult({
        topic: queryText,
        rootCause,
        recommendedFix,
        matchedMentor,
        matchScore,
        matchReason,
        targetedQuestions,
        briefForMentor: `📋 HACKATHON TEAM BRIEFING FOR ${matchedMentor.name.toUpperCase()}
• Challenge/Topic: ${queryText}
• Technical Domain: ${matchedMentor.mentorType ? matchedMentor.mentorType.join(", ") : "Technical Mentorship"}
• Team Background: Utkarsh (Full-Stack Dev) + Priya (AI/ML) + Aryan (Frontend)
• Target Objective: Resolve technical blocker & validate architecture within 15-minute sprint consultation.`,
      });
    }, 1200);
  };

  // ─────────────────────────────────────────────────────────────
  // State: Pitch Polisher
  // ─────────────────────────────────────────────────────────────
  const [pitchIdea, setPitchIdea] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);
  const [pitchResult, setPitchResult] = useState<any | null>(null);

  const handlePolishPitch = () => {
    if (!pitchIdea) return;
    setIsPolishing(true);
    setTimeout(() => {
      setIsPolishing(false);
      setPitchResult({
        elevatorPitch:
          "SkillBridge is an autonomous teaming and real-time mentorship engine that slashes hackathon friction by 80%. By pairing vector-based skill synergy with live mentor SOS dispatches, we turn scattered student ideas into winning MVPs in under 24 hours.",
        problemStatement:
          "Over 65% of hackathon teams fail not due to bad ideas, but due to skill mismatches, slow mentor discovery, and wasted hours on manual task management.",
        judgingHighlights: [
          "Technical Depth: Algorithmic bipartite graph matching + pgvector embeddings",
          "Real-World Impact: Instant connection to verified industry mentors with zero scheduling latency",
          "Scalability: Serverless architecture optimized for high-throughput concurrency during peak competition hours",
        ],
      });
    }, 1300);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sb-dark via-[#1e293b] to-[#0f172a] text-white p-6 sm:p-8 shadow-md border border-slate-700/40">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-sb-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sb-green/20 text-sb-green text-xs font-semibold border border-sb-green/30">
              <Sparkles size={14} className="animate-spin-slow" />
              Autonomous AI Copilot & Automation Engine
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              SkillBridge AI Autonomous Studio
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Eliminate 90% of manual effort. Let autonomous agents formulate your full PRD, assemble the ideal complementary squad, analyze code repos, and prepare mentor briefings in seconds.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center min-w-[90px]">
              <div className="text-xl font-bold text-sb-green">0.4s</div>
              <div className="text-[11px] text-slate-300 font-medium">Matching Latency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center min-w-[90px]">
              <div className="text-xl font-bold text-white">100%</div>
              <div className="text-[11px] text-slate-300 font-medium">Auto-Assembled</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {[
            { id: "auto-squad", label: "⚡ 1-Click Auto-Squad & PRD", icon: Zap },
            { id: "github-profiler", label: "🪄 Zero-Typing GitHub Profiler", icon: GitBranch },
            { id: "ai-briefing", label: "🎯 AI Briefing", icon: Bot },
            { id: "pitch-polisher", label: "🏆 AI Submission & Pitch Polisher", icon: Flame },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sb-green text-sb-dark shadow-sm scale-[1.02]"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: 1-Click Auto-Squad & PRD Generator
         ───────────────────────────────────────────────────────────── */}
      {activeTab === "auto-squad" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-sb-dark flex items-center gap-2">
                <Zap className="text-sb-green" size={20} />
                Autonomous Squad & Architecture Generator
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Enter your hackathon theme or product idea. The AI will decompose the problem, draft system architecture, match the best teammates from the talent pool, and create a 24-hour Kanban task list.
              </p>
            </div>

            {/* Prompt Input */}
            <div className="space-y-3">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. AI-driven disaster management platform connecting local volunteers with live drone footage..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sb-dark text-sm focus:outline-hidden focus:ring-2 focus:ring-sb-green/50 focus:border-sb-green resize-none transition-all"
                />
              </div>

              {/* Preset prompt pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                  <Sparkles size={12} /> Try instant presets:
                </span>
                {presetPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPrompt(p);
                      handleGenerateSquad(p);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-surface border border-border text-text-secondary hover:text-sb-dark hover:border-sb-green transition-all truncate max-w-[280px]"
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleGenerateSquad(prompt)}
                  disabled={!prompt.trim() || isGenerating}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sb-green hover:bg-sb-mid text-sb-dark font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xs cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      Synthesizing Squad...
                    </>
                  ) : (
                    <>
                      <Zap size={16} />
                      Generate Autonomous Squad & PRD
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Loading Indicator */}
            {isGenerating && (
              <div className="p-4 rounded-xl bg-surface border border-sb-green/30 space-y-2 animate-pulse">
                <div className="flex items-center gap-2 text-xs font-semibold text-sb-dark">
                  <Cpu size={16} className="text-sb-green animate-spin" />
                  {generationStep}
                </div>
                <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sb-green h-full rounded-full w-2/3 animate-pulse" />
                </div>
              </div>
            )}
          </div>

          {/* Generated Result Output */}
          {generatedSquad && (
            <div className="space-y-6">
              {/* Overview & Architecture Box */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                  <div>
                    <Badge variant="green" size="sm">
                      Autonomous PRD #BWB-2026
                    </Badge>
                    <h3 className="text-xl font-bold text-sb-dark mt-1">
                      {generatedSquad.projectTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                      {generatedSquad.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => alert("Squad blueprint exported to your Active Projects!")}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sb-dark text-white text-xs font-semibold hover:bg-sb-dark/90 transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <CheckCircle2 size={14} className="text-sb-green" />
                    Accept Squad & Push to Projects
                  </button>
                </div>

                {/* Architecture Spec Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-1.5">
                    <Layers size={14} /> Recommended System Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { label: "Frontend", val: generatedSquad.architecture.frontend, icon: FileCode2 },
                      { label: "Backend API", val: generatedSquad.architecture.backend, icon: Terminal },
                      { label: "Database / Vector", val: generatedSquad.architecture.database, icon: Layers },
                      { label: "AI & RAG Engine", val: generatedSquad.architecture.aiEngine, icon: Cpu },
                    ].map((arch, i) => {
                      const Icon = arch.icon;
                      return (
                        <div key={i} className="p-3.5 rounded-xl bg-surface border border-border space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-text-muted">
                            <Icon size={13} className="text-sb-green" />
                            {arch.label}
                          </div>
                          <div className="text-xs font-medium text-sb-dark leading-snug">
                            {arch.val}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Matched Teammate Squad */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-4">
                <h4 className="text-base font-bold text-sb-dark flex items-center gap-2">
                  <Users size={18} className="text-sb-green" />
                  Optimal Synergistic Teammates Found ({generatedSquad.matchedTeammates.length})
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {generatedSquad.matchedTeammates.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border bg-surface hover:border-sb-green/50 transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={item.user.avatar}
                            name={item.user.name}
                            size="md"
                          />
                          <div>
                            <div className="font-bold text-sm text-sb-dark flex items-center gap-1">
                              {item.user.name}
                            </div>
                            <div className="text-[11px] font-semibold text-sb-mid">
                              {item.assignedRole}
                            </div>
                          </div>
                        </div>
                        <MatchCircle score={item.synergyScore} size={36} strokeWidth={3} />
                      </div>

                      <p className="text-xs text-text-secondary leading-relaxed bg-white p-2.5 rounded-lg border border-border/60">
                        "{item.rationale}"
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {item.user.skills.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-border text-text-secondary font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Populated 24-Hour Kanban Tasks */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-sb-dark flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-sb-green" />
                    Auto-Generated 24-Hour Sprint Tasks
                  </h4>
                  <span className="text-xs text-text-muted">
                    {generatedSquad.sprintTasks.length} tasks ready
                  </span>
                </div>

                <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
                  {generatedSquad.sprintTasks.map((t) => (
                    <div
                      key={t.id}
                      className="p-3.5 bg-white hover:bg-surface flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${
                            t.priority === "Urgent"
                              ? "bg-red-50 text-red-600 border border-red-200"
                              : t.priority === "High"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-blue-50 text-blue-600 border border-blue-200"
                          }`}
                        >
                          {t.priority}
                        </span>
                        <div className="truncate">
                          <div className="text-xs sm:text-sm font-semibold text-sb-dark truncate">
                            {t.title}
                          </div>
                          <div className="text-[11px] text-text-muted flex items-center gap-2 mt-0.5">
                            <span>Assignee: <strong className="text-text-secondary">{t.assignee}</strong></span>
                            <span>•</span>
                            <span>Est: {t.estimatedHours} hrs</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setCopiedTask(t.id);
                          setTimeout(() => setCopiedTask(null), 1500);
                        }}
                        className="p-1.5 rounded-lg text-text-muted hover:text-sb-dark hover:bg-surface border border-transparent hover:border-border transition-all shrink-0 cursor-pointer"
                        title="Copy Task"
                      >
                        {copiedTask === t.id ? (
                          <Check size={14} className="text-sb-green" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: Zero-Typing GitHub Profiler
         ───────────────────────────────────────────────────────────── */}
      {activeTab === "github-profiler" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-sb-dark flex items-center gap-2">
                <GitBranch className="text-sb-green" size={20} />
                Zero-Typing GitHub Skill & Bio Extractor
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Never fill out forms manually. Point the AI to your GitHub handle, and it will parse your repositories, commit frequencies, and code complexity to create your verified builder profile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                  github.com/
                </div>
                <input
                  type="text"
                  value={ghUsername}
                  onChange={(e) => setGhUsername(e.target.value)}
                  placeholder="your-github-handle"
                  className="w-full pl-28 pr-4 py-2.5 rounded-xl border border-border bg-surface text-sb-dark text-sm focus:outline-hidden focus:ring-2 focus:ring-sb-green/50 focus:border-sb-green font-mono"
                />
              </div>

              <button
                onClick={handleProfileGithub}
                disabled={!ghUsername.trim() || isProfiling}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sb-green hover:bg-sb-mid text-sb-dark font-semibold text-sm transition-all disabled:opacity-50 cursor-pointer"
              >
                {isProfiling ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    Parsing Repositories...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Extract & Verify Profile
                  </>
                )}
              </button>
            </div>
          </div>

          {profileResult && (
            <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sb-dark text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    {profileResult.username[0].toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-sb-dark">
                      @{profileResult.username}
                    </h3>
                    <p className="text-xs font-medium text-sb-mid">
                      {profileResult.headline}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => alert("Profile updated successfully with AI verified badges!")}
                  className="px-4 py-2 rounded-xl bg-sb-green text-sb-dark text-xs font-semibold hover:bg-sb-mid transition-all cursor-pointer"
                >
                  Apply to My Profile
                </button>
              </div>

              {/* AI Bio */}
              <div className="p-4 rounded-xl bg-surface border border-border space-y-1.5">
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-1">
                  <Bot size={13} className="text-sb-green" /> Auto-Generated Bio
                </span>
                <p className="text-xs sm:text-sm text-sb-dark leading-relaxed">
                  {profileResult.bio}
                </p>
              </div>

              {/* Verified Skills Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-sb-dark flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sb-green" />
                  Verified Skill Matrix (From Commit Byte Counts)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profileResult.verifiedSkills.map((skill: any, i: number) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-border bg-surface flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-semibold text-xs text-sb-dark flex items-center gap-1.5">
                          {skill.name}
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-sb-green/20 text-sb-dark font-bold">
                            {skill.level}
                          </span>
                        </div>
                        <div className="text-[11px] text-text-muted mt-0.5">
                          Found across {skill.repos} repos
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-bold text-sb-mid">
                          {skill.confidence}%
                        </div>
                        <div className="text-[10px] text-text-muted">confidence</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: AI Briefing (Intelligent Mentor Match & Briefing)
         ───────────────────────────────────────────────────────────── */}
      {activeTab === "ai-briefing" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-sb-dark flex items-center gap-2">
                <Bot className="text-sb-green" size={20} />
                AI Briefing & Smart Mentor Recommendation
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Enter any problem, error trace, or topic (e.g. AI latency, AWS scaling, pitch review, UI/UX polish). The AI analyzes your domain, suggests the best-fit mentor, and generates a pre-call executive briefing.
              </p>
            </div>

            <div className="space-y-3">
              <textarea
                value={briefingQuery}
                onChange={(e) => setBriefingQuery(e.target.value)}
                placeholder="Describe your blocker or topic: e.g. 'We need help optimizing vector RAG retrieval latency and HNSW indexing in pgvector...'"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sb-dark text-sm focus:outline-hidden focus:ring-2 focus:ring-sb-green/50 focus:border-sb-green resize-none text-xs sm:text-sm"
              />

              {/* Quick Topic Presets */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                  <Sparkles size={12} /> Try instant topics:
                </span>
                {[
                  { label: "⚡ GenAI & RAG Latency", query: "pgvector HNSW query latency optimization and hybrid RAG retrieval pipeline in FastAPI" },
                  { label: "☁️ AWS & Postgres Scale", query: "AWS ECS container auto-scaling and high-concurrency PostgreSQL connection pooling" },
                  { label: "📊 Pitch Deck Critique", query: "Critique 2-minute pitch deck narrative, business model slide, and judge Q&A defense" },
                  { label: "🎨 UI/UX Design System", query: "Streamline user onboarding flow in Figma and improve dark-mode visual hierarchy" },
                  { label: "🏥 Clinical Medical AI", query: "Validation benchmarks for clinical ML model predictions and HIPAA compliance" },
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setBriefingQuery(preset.query);
                      handleGenerateAIBriefing(preset.query);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-surface border border-border text-text-secondary hover:text-sb-dark hover:border-sb-green transition-all"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleGenerateAIBriefing(briefingQuery)}
                  disabled={!briefingQuery.trim() || isDiagnosing}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sb-green hover:bg-sb-mid text-sb-dark font-semibold text-sm transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  {isDiagnosing ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      Analyzing Domain & Finding Best Mentor...
                    </>
                  ) : (
                    <>
                      <Bot size={16} />
                      Generate AI Briefing & Match Mentor
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {briefingResult && (
            <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-6 animate-fade-in">
              {/* Diagnosis & Suggested Fix */}
              <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-sb-dark uppercase tracking-wider">
                    <ShieldCheck size={16} className="text-sb-green" /> AI Domain Diagnosis
                  </div>
                  <span className="text-[11px] font-semibold text-sb-mid bg-white px-2 py-0.5 rounded-md border border-border">
                    Domain Verified
                  </span>
                </div>
                <div className="text-sm font-semibold text-sb-dark">
                  {briefingResult.rootCause}
                </div>
                <div className="text-xs text-text-secondary bg-white p-3 rounded-lg border border-border/80 font-mono">
                  💡 Recommendation: {briefingResult.recommendedFix}
                </div>
              </div>

              {/* Recommended Mentor Card */}
              <div className="p-5 rounded-xl border-2 border-sb-green/30 bg-sb-green/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sb-dark flex items-center gap-1.5">
                    <Sparkles size={14} className="text-sb-green" /> Suggested Mentor Match
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-sb-dark">{briefingResult.matchScore}%</span>
                    <span className="text-[10px] text-text-muted">Domain Match</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={briefingResult.matchedMentor.avatar}
                      name={briefingResult.matchedMentor.name}
                      size="lg"
                    />
                    <div>
                      <div className="font-bold text-base text-sb-dark flex items-center gap-1.5">
                        {briefingResult.matchedMentor.name}
                        <Badge variant="green" size="sm">
                          {briefingResult.matchedMentor.availabilityLabel || "Available"}
                        </Badge>
                      </div>
                      <div className="text-xs font-medium text-sb-mid">
                        {briefingResult.matchedMentor.headline}
                      </div>
                      <div className="text-[11px] text-text-muted mt-0.5">
                        {briefingResult.matchedMentor.location} • ⭐ {briefingResult.matchedMentor.rating} ({briefingResult.matchedMentor.mentorshipsCount} sessions)
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => alert(`Starting instant 1-on-1 sprint review with ${briefingResult.matchedMentor.name} in Virtual Room!`)}
                      className="px-4 py-2 rounded-xl bg-sb-green text-sb-dark font-bold text-xs hover:bg-sb-mid transition-all cursor-pointer shadow-xs"
                    >
                      Connect Live
                    </button>
                    <button
                      onClick={() => alert(`Slot booked with ${briefingResult.matchedMentor.name} for upcoming sprint!`)}
                      className="px-4 py-2 rounded-xl bg-surface border border-border text-sb-dark font-semibold text-xs hover:bg-surface-hover transition-all cursor-pointer"
                    >
                      Book 30-min Slot
                    </button>
                  </div>
                </div>

                {/* Match Reason */}
                <p className="text-xs text-text-secondary bg-white p-3 rounded-lg border border-border leading-relaxed">
                  <strong className="text-sb-dark">Why this mentor was matched:</strong> {briefingResult.matchReason}
                </p>
              </div>

              {/* Pre-Generated Executive Brief */}
              <div className="p-4 rounded-xl bg-white border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-sb-dark flex items-center gap-1.5">
                    <Bot size={14} className="text-sb-green" /> 1-Minute Executive Brief for {briefingResult.matchedMentor.name}
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(briefingResult.briefForMentor);
                      alert("Brief copied to clipboard!");
                    }}
                    className="text-[11px] text-sb-mid hover:underline font-semibold"
                  >
                    Copy Brief
                  </button>
                </div>
                <div className="bg-surface p-3.5 rounded-lg border border-border font-mono text-xs text-sb-dark whitespace-pre-line leading-relaxed">
                  {briefingResult.briefForMentor}
                </div>
              </div>

              {/* 3 Targeted Questions to Ask */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-sb-green" /> Recommended Questions to Ask {briefingResult.matchedMentor.name.split(" ")[0]}
                </h4>
                <div className="space-y-2">
                  {briefingResult.targetedQuestions.map((q: string, i: number) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-surface border border-border flex items-start gap-2.5 text-xs text-sb-dark"
                    >
                      <span className="w-5 h-5 rounded-full bg-sb-dark text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: Pitch Polisher
         ───────────────────────────────────────────────────────────── */}
      {activeTab === "pitch-polisher" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-sb-dark flex items-center gap-2">
                <Flame className="text-sb-green" size={20} />
                Autonomous Hackathon Pitch & Submission Engine
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Turn your raw project notes into a winning pitch deck script, concise elevator pitch, and judge-ready submission writeup.
              </p>
            </div>

            <div className="space-y-3">
              <textarea
                value={pitchIdea}
                onChange={(e) => setPitchIdea(e.target.value)}
                placeholder="Paste what your project does (even messy notes), and AI will structure it into an award-winning pitch..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sb-dark text-sm focus:outline-hidden focus:ring-2 focus:ring-sb-green/50 focus:border-sb-green resize-none"
              />

              <div className="flex justify-between items-center pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setPitchIdea(
                      "SkillBridge: AI matchmaking platform for hackathons with vector teammate matching, sprint kanban generator, and real-time mentor SOS"
                    )
                  }
                  className="text-[11px] text-sb-mid hover:underline font-medium"
                >
                  Use Current Project Idea
                </button>

                <button
                  onClick={handlePolishPitch}
                  disabled={!pitchIdea.trim() || isPolishing}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sb-green hover:bg-sb-mid text-sb-dark font-semibold text-sm transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  {isPolishing ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      Polishing Script...
                    </>
                  ) : (
                    <>
                      <Flame size={16} />
                      Generate Pitch & Submission
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {pitchResult && (
            <div className="bg-white rounded-2xl p-6 border border-border shadow-xs space-y-6 animate-fade-in">
              {/* Elevator Pitch */}
              <div className="p-4 rounded-xl bg-surface border border-border space-y-1.5">
                <span className="text-[11px] font-bold text-sb-dark uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={13} className="text-sb-green" /> 30-Second Elevator Pitch
                </span>
                <p className="text-xs sm:text-sm text-sb-dark font-medium leading-relaxed italic bg-white p-3 rounded-lg border border-border">
                  "{pitchResult.elevatorPitch}"
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="p-4 rounded-xl bg-surface border border-border space-y-1.5">
                <span className="text-[11px] font-bold text-sb-dark uppercase tracking-wider">
                  Submission Blurb: Problem & Impact
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {pitchResult.problemStatement}
                </p>
              </div>

              {/* Judging Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Key Points for Hackathon Judges
                </h4>
                <div className="space-y-2">
                  {pitchResult.judgingHighlights.map((hl: string, i: number) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-border flex items-start gap-2.5 text-xs text-sb-dark"
                    >
                      <CheckCircle2 size={15} className="text-sb-green shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
